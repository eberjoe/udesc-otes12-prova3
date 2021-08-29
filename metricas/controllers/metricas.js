var utils = require('../utils/builder.js');
var Metricas = require('../services/metricas');

module.exports.dre = function(req, res, next, body) {
  Metricas.dre(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.integridade = function(req, res, next, body) {
  Metricas.integridade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.re = function(req, res, next, body) {
   Metricas.re(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.smi = function(req, res, next, body) {
  Metricas.smi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
