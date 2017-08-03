'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  //Project = mongoose.model('Project'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a project
 */
/*exports.createFiles = function (req, res) {
  var folderStr = req.body;
  project.user = req.user;

  project.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(project);
    }
  });
};
*/
