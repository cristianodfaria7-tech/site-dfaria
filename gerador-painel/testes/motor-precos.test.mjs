// Testes do motor de preços. Rodar: node --test gerador-painel/testes/
// Se algum falhar, a publicação é bloqueada (o workflow roda estes testes antes do FTP).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const M = require('../../assets/motor-precos.js');

const porPessoa = (tab) => Object.fromEntries(tab.faixas.map((f) => [f.convidados, f.porPessoa]));

test('caso de referência: R$ 130 para 100 pessoas (conferido com o dono em 22/11)', () => {
  const t = M.calcularTabela(130);
  assert.equal(t.ok, true, t.erros.join(' | '));
  assert.deepEqual(porPessoa(t), { 30: 223, 40: 186, 50: 164, 60: 161, 70: 149, 80: 144, 90: 136, 100: 130 });
  assert.equal(t.faixas.find((f) => f.convidados === 30).total, 223 * 30);
});

test('faixas do site: mínimo 30, de 10 em 10, até 100', () => {
  const t = M.calcularTabela(185);
  assert.deepEqual(t.faixas.map((f) => f.convidados), [30, 40, 50, 60, 70, 80, 90, 100]);
});

test('acima de 100 (só painel): R$ 130 -> 150 convidados = R$ 115', () => {
  const t = M.calcularTabela(130);
  assert.equal(t.acimaDe100.find((f) => f.convidados === 150).porPessoa, 115);
});

test('o valor de 100 pessoas é exatamente o informado', () => {
  for (const p of [130, 185, 195, 250, 99.9]) {
    assert.equal(M.calcularTabela(p).faixas.at(-1).porPessoa, p);
  }
});

test('aceita valor digitado como texto ("R$ 1.185,00")', () => {
  assert.equal(M.numero('R$ 1.185,00'), 1185);
  assert.equal(M.numero('185,5'), 185.5);
  assert.equal(M.calcularTabela('R$ 185,00').p100, 185);
});

test('valor abaixo do custo é recusado com mensagem clara', () => {
  const t = M.calcularTabela(40);
  assert.equal(t.ok, false);
  assert.match(t.erros[0], /não cobre o custo/);
  assert.equal(M.calcularTabela(0).ok, false);
  assert.equal(M.calcularTabela('abc').ok, false);
});

test('nenhum evento sai abaixo do valor mínimo (R$ 3.500)', () => {
  for (let p = 60; p <= 400; p += 1) {
    const t = M.calcularTabela(p);
    if (!t.ok) continue;
    for (let n = 30; n <= 100; n++) {
      const r = M.precoPara(n, t);
      assert.ok(r.total >= 3500, `P100=${p}, ${n} pessoas: total ${r.total}`);
    }
  }
});

for (const temChurrasco of [false, true]) {
  test(`travas em todos os valores de R$ 60 a R$ 400 (churrasco: ${temChurrasco})`, () => {
    let testados = 0;
    for (let p = 60; p <= 400; p += 0.5) {
      const t = M.calcularTabela(p, { temChurrasco });
      if (!t.ok) continue;
      testados++;
      const fs = t.faixas;
      for (let i = 1; i < fs.length; i++) {
        assert.ok(fs[i].porPessoa <= fs[i - 1].porPessoa, `P100=${p}: por pessoa sobe de ${fs[i - 1].convidados} para ${fs[i].convidados}`);
        assert.ok(fs[i].total >= fs[i - 1].total, `P100=${p}: total cai de ${fs[i - 1].convidados} para ${fs[i].convidados}`);
      }
      for (const f of fs) assert.ok(f.memoria.margem > 0, `P100=${p}, ${f.convidados}: prejuízo`);
      // Qualquer número de convidados no simulador (30..100)
      let ant = null;
      for (let n = 30; n <= 100; n++) {
        const r = M.precoPara(n, t);
        assert.equal(r.consulte, false);
        if (ant) {
          assert.ok(r.porPessoa <= ant.porPessoa, `P100=${p}: ${n} convidados, por pessoa sobe`);
          assert.ok(r.total >= ant.total, `P100=${p}: ${n} convidados, total cai (${ant.total} -> ${r.total})`);
        }
        ant = r;
      }
      for (const f of fs) assert.equal(M.precoPara(f.convidados, t).porPessoa, f.porPessoa, `P100=${p}: simulador difere da tabela em ${f.convidados}`);
      // Acima de 100: nunca mais caro que P100, nunca sobe
      let a = p;
      for (const f of t.acimaDe100) {
        assert.ok(f.porPessoa <= a, `P100=${p}: acima de 100 sobe em ${f.convidados}`);
        a = f.porPessoa;
      }
    }
    assert.ok(testados > 500);
  });
}

test('churrasco inclui churrasqueiro e fica mais caro nos eventos pequenos', () => {
  const sem = M.calcularTabela(185), com = M.calcularTabela(185, { temChurrasco: true });
  const eq = M.equipeDoEvento(100, M.mesclarConfig(), true);
  assert.ok(eq.linhas.some((l) => l.id === 'churrasqueiro'));
  assert.ok(porPessoa(com)[30] > porPessoa(sem)[30]);
});

test('equipe conferida com o dono: L(30)=1300, L(60)=1700, L(100)=1900', () => {
  const cfg = M.mesclarConfig();
  assert.equal(M.equipeDoEvento(30, cfg, false).total, 1300);
  assert.equal(M.equipeDoEvento(50, cfg, false).total, 1300);
  assert.equal(M.equipeDoEvento(60, cfg, false).total, 1700);
  assert.equal(M.equipeDoEvento(100, cfg, false).total, 1900);
});

test('simulador: abaixo de 30 avisa o mínimo; acima de 100 = Consulte-nos', () => {
  const t = M.calcularTabela(195);
  assert.deepEqual(M.precoPara(29, t), { consulte: false, abaixoDoMinimo: true, minimo: 30 });
  assert.deepEqual(M.precoPara(101, t), { consulte: true });
  assert.equal(M.precoPara(100, t).total, 19500);
});

test('reajuste na configuração muda tudo de forma coerente', () => {
  const base = M.calcularTabela(185);
  const caro = M.calcularTabela(185, { config: { custoFixoEvento: 2000 } });
  assert.ok(porPessoa(caro)[30] > porPessoa(base)[30]);
  assert.equal(porPessoa(caro)[100], 185);
});

test('formatação em reais', () => {
  assert.equal(M.formatarReal(13000), '13.000');
  assert.equal(M.formatarReal(1234.5), '1.234,50');
});
