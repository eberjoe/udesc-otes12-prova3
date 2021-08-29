const {re, smi, dre, integridade} = require('../services/metricas');

describe('Testando serviço de métricas', () => {
  test('RE', () => {
    const p = 1.0
    const c = 100000

    const result = re({p, c})

    expect(result).resolves.toStrictEqual({re: 100000});
  });

  test('SMI', () => {
    const mt = 10
    const fa = 2
    const fc = 2
    const fd = 2

    const result = smi({mt, fa, fc, fd})

    expect(result).resolves.toStrictEqual({smi: 0.4})
  });

  test('DRE', () => {
    const e = 1
    const d = 0

    const result = dre({e, d})

    expect(result).resolves.toStrictEqual({dre: 1})
  });

  test('Integridade', () => {
    const ameaca = 0.25
    const seguranca = 0.95

    const result = integridade({ameaca, seguranca})

    expect(result).resolves.toStrictEqual({integridade: 0.9875})
  });

})
