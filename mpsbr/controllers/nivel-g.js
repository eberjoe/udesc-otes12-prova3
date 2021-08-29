var utils = require('../utils/builder.js');
var NivelG = require('../services/nivel-g');

module.exports.nivelg = function(req, res, next, body) {
  NivelG.nivelg(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('Erro');
      utils.writeJson(res, response);
    });
};
