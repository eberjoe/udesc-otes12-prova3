/**
 * Eficiência na Remoção de Defeitos
 * `E` = é o numero de `erros` encontrados antes que o software seja fornecido ao usuário  • `D` = é o numero de `defeitos` depois que o software foi entregue 
 *
 * body DRE Variáveis
 * returns Long
 **/
exports.dre = function(body) {
  return new Promise(function(resolve, reject) {
    const {e, d} = body
    const dre = (e / (e + d))
    resolve({dre});
  });
}


/**
 * Integridade
 * `Ameaça` = probabilidade de que um ataque especifico ocorrer em um dado intervalo de tempo  • `Segurança` = probabilidade de que um ataque especifico será repelido 
 *
 * body Integridade Variáveis
 * returns Long
 **/
exports.integridade = function(body) {
  return new Promise(function(resolve, reject) {
    const {ameaca, seguranca} = body
    const integridade = 1 - (ameaca * (1 - seguranca))
    resolve({integridade});
  });
}


/**
 * Exposição Geral ao Risco
 * `P` = probabilidade de ocorrência de um risco • `C` = custo para o projeto, caso o risco se consuma
 *
 * body RE Variáveis
 * returns Long
 **/
exports.re = function(body) {
  return new Promise(function(resolve, reject) {
    const {p, c} = body
    const re = p * c
    resolve({re});
  });
}


/**
 * Índice de Maturidade de Software
 * `Mt` = número de módulos da versão atual  • `Fa` = número de módulos da versão atual que foram acrescentados  • `Fc` = número de módulos da versão atual foram alterados  • `Fd` = número de módulos da versão anterior que foram excluídos na versão atual
 *
 * body SMI Variáveis
 * returns Long
 **/
exports.smi = function(body) {
  return new Promise(function(resolve, reject) {
    const {mt, fa, fc, fd} = body
    const smi = ( (mt - (fa + fc + fd)) / mt)
    resolve({smi});
  });
}

