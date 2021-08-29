'use strict';


/**
 * Avaliação 3
 * O propósito do processo **Engenharia de Requisitos** é definir, gerenciar e manter atualizados os requisitos das partes interessadas e do produto, garantindo que inconsistências entre os requisitos, os planos e os produtos de trabalho sejam identificadas e tratadas.   • `REQ 1` (A partir do nível G): As necessidades, expectativas e restrições das partes interessadas, tanto em relação ao produto quanto a suas interfaces, são identificadas.   • `REQ 5` (A partir do nível G):  O compromisso da equipe técnica com a implementação dos requisitos é obtido.   • `REQ 6` (A partir do nível G): A rastreabilidade bidirecional entre requisitos, atividades e produtos de trabalho do projeto é estabelecida e mantida.   • `REQ 7` (A partir do nível G): Os planos, atividades e produtos de trabalho relacionados são revisados visando identificar e tratar inconsistência em relação aos requisitos.
 *
 * body REQ Avaliação do REQ1, REQ5, REQ6 e REQ7
 * returns Nota
 **/
exports.avaliarREQ = function(body) {
  return new Promise(function(resolve, reject) {
    const {req1, req5, req6, req7} = body;

    const rateIndex = ['Ausente', 'Insuficiente', 'Regular', 'Bom', 'Excelente'];

    const ratings = [
      rateIndex.indexOf(req1),
      rateIndex.indexOf(req5),
      rateIndex.indexOf(req6),
      rateIndex.indexOf(req7)
    ];

    resolve({
      req: rateIndex[Math.floor(ratings.reduce((a, b) => a + b, 0) / ratings.length) || 0]
    });
  });
}

