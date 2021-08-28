var utils = require('../utils/writer.js');
var NivelG = require('../services/nivel-g');

module.exports.nivelg = function nivelg (req, res, next, body) {
  NivelG.nivelg(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('Erro');
      utils.writeJson(res, response);
    });
};
