'use strict';


/**
 * Avaliação 3
 * O propósito do processo **Gerência de Projetos** é estabelecer e manter atualizados planos que definam as atividades, recursos, riscos, prazos e responsabilidades do projeto. Também é propósito deste processo prover informações sobre o andamento do projeto que permitam a realização de correções quando houver desvios significativos no desempenho do projeto incluindo análise de causa-raiz.   • `GPR 1` (A partir do nível G): O escopo do trabalho para o projeto é estabelecido, mantido atualizado e utilizado.   • `GPR 5` (A partir do nível G):  O orçamento e o cronograma do projeto, incluindo a definição de marcos, são estabelecidos e mantidos atualizados.   • `GPR 6` (A partir do nível G): Os recursos humanos para o projeto são planejados considerando as habilidades e os conhecimentos necessários para executá-lo.   • `GPR 8` (A partir do nível G): A estratégia de transição para operação e suporte do produto, incluindo as tarefas e o cronograma, é planejada.   • `GPR 9` (A partir do nível G): O envolvimento das partes interessadas no projeto é planejado.
 *
 * body GPR Avaliação do GPR1, GPR5, GPR6, GPR8, GPR9 e GPR11
 * returns Nota
 **/
exports.avaliarGPR = function(body) {
  return new Promise(function(resolve, reject) {
    const {gpr1, gpr5, gpr6, gpr8, gpr9, gpr11} = body;

    const rateIndex = ['Ausente', 'Insuficiente', 'Regular', 'Bom', 'Excelente'];

    const ratings = [
      rateIndex.indexOf(gpr1),
      rateIndex.indexOf(gpr5),
      rateIndex.indexOf(gpr6),
      rateIndex.indexOf(gpr8),
      rateIndex.indexOf(gpr9),
      rateIndex.indexOf(gpr11)
    ];

    resolve({
      gpr: rateIndex[Math.floor(ratings.reduce((a, b) => a + b, 0) / ratings.length) || 0]
    });
  });
}

