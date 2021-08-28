var utils = require('../utils/builder.js');
var Metricas = require('../service/metricas');

module.exports.dre = function dre (req, res, next, body) {
  Metricas.dre(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.integridade = function integridade (req, res, next, body) {
  Metricas.integridade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.re = function re (req, res, next, body) {
   Metricas.re(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.smi = function smi (req, res, next, body) {
  Metricas.smi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
