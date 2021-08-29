'use strict';

var utils = require('../utils/builder.js');
var REQ = require('../services/req');

module.exports.avaliarREQ = function(req, res, next, body) {
  REQ.avaliarREQ(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
