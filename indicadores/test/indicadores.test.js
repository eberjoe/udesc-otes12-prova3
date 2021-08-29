const {avaliarGPR} = require('../services/gpr');
const {avaliarREQ} = require('../services/req');

describe('Testando serviço de indicadores', () => {
  test('GPR', () => {

    const result = avaliarGPR({
        gpr1: 'Regular',
        gpr5: 'Ausente',
        gpr8: 'Insuficiente',
        gpr9: 'Ausente',
        gpr11: 'Ausente'
    });

    expect(result).resolves.toStrictEqual({gpr: 'Ausente'});
  });

  test('REQ', () => {
    const mt = 10
    const fa = 2
    const fc = 2
    const fd = 2

    const result = avaliarREQ({
      req1: 'Ausente',
      req5: 'Insuficiente',
      req6: 'Bom',
      req7: 'Excelente'
    });

    expect(result).resolves.toStrictEqual({req: 'Regular'})
  });

})
