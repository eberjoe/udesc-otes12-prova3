const {nivelg} = require('../services/nivel-g');

describe('Testando serviço principal', () => {
  test('Caracterização da capacidade', () => {
  
    const result = nivelg({
      gpr1: 'Excelente',
      gpr5: 'Regular',
      gpr6: 'Bom',
      gpr8: 'Excelente',
      gpr9: 'Excelente',
      gpr11: 'Bom',
      req1: 'Excelente',
      req5: 'Insuficiente',
      req6: 'Bom',
      req7: 'Bom'
    });

    expect(result).resolves.toStrictEqual({
      req: 'Regular',
      gpr: 'Bom',
      capacity: {
        i: 'O processo produz os resultados definidos.',
        ii: 'A execução do processo é planejada e monitorada.',
        iii: 'As pessoas estão preparadas para executar suas responsabilidades no processo.'
      }
    });
  });
});
