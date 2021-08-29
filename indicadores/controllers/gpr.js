'use strict';

var utils = require('../utils/builder.js');
var GPR = require('../services/gpr');

module.exports.avaliarGPR = function(req, res, next, body) {
  GPR.avaliarGPR(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
