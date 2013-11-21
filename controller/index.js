/*jshint latedef:false */
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman-generator'),
  scriptBase = require('../script-base');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
  this.sourceRoot(path.join(__dirname, dirPath));

}

util.inherits(Generator, scriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  var ext = this.options.coffee ? '.coffee' : '.js';
  var destFile = path.join('app/scripts/controllers', this.name + ext);
  this.isRequireJsApp = this.isUsingRequireJS();

  this.scaffolding_applicationStart = 'console.log("hier");'

  if (!this.isRequireJsApp) {
    this.template('controller' + ext, destFile);
    this.addScriptToIndex('controllers/' + this.name);
    return;
  }

//  TODO Implement requireJS support
//  var template = [
//    '/*global define*/',
//    '',
//    'define([',
//    '    \'jquery\',',
//    '    \'backbone\'',
//    '], function ($, Backbone) {',
//    '    \'use strict\';',
//    '',
//    '    var ' + this._.classify(this.name) + 'Router = Backbone.Router.extend({',
//    '        routes: {',
//    '        }',
//    '',
//    '    });',
//    '',
//    '    return ' + this._.classify(this.name) + 'Router;',
//    '});'
//  ].join('\n');
//
//  this.write(destFile, template);
};
