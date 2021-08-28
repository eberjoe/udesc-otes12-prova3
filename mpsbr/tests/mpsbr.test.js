const {nivelg} = require('../services/nivel-g');

describe('Testando serviço principal', () => {
    test('Caracterização da capacidade', () => {
      
        const result = nivelg({
          p: 0.8,
          c: 100000,
          e: 1,
          d: 0,
          ameaca: 0.3,
          seguranca: 0.95,
          mt: 10,
          fa: 2,
          fc: 2,
          fd: 2,
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
          re: 0,
          smi: 0,
          integridade: 1,
          dre: 1,
          req: 'Bom',
          gpr: 'Bom',
          capacity: 'A capacidade do seu processo atende o nível G.'
        });
    });
});
