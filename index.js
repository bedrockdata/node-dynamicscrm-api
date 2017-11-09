/*
* Module's dependencies
*/
require('simple-errors');
var Util          = require('./lib/util.js');
var DynamicsError = require('./lib/error.js');

var Dynamics = function (settings) {
    "use strict";

    // creates an instance of class that handles all requests
    var util = new Util(settings);

    this.authenticate = function (options, cb) {
        util.Authenticate(options, cb);
    };

    // Compatibiliy backwards
    this.Authenticate = function (options, cb) {
        util.Authenticate(options, cb);
    };

    // 
    this.Create = function (options, cb) {
        util.Create(options, cb);
    };

    this.Update = function (options, cb) {
        util.Update(options, cb);
    };

    this.Retrieve = function (options, cb) {
        util.Retrieve(options, cb);
    };

    this.RetrieveMultiple = function (options, cb) {
        util.RetrieveMultiple(options, cb);
    };

    this.Associate = function (options, cb) {
        util.Associate(options, cb);
    };

    this.Disassociate = function (options, cb) {
        util.Disassociate(options, cb);
    };

    this.Execute = function (options, cb) {
        util.Execute(options, cb);
    };

    this.RetrieveEntity = function (options, cb) {
        util.RetrieveEntity(options, cb);
    };

    this.RetrieveAttribute = function (options, cb) {
        util.RetrieveAttribute(options, cb);
    };

    this.Delete = function (options, cb) {
        util.Delete(options, cb);
    };

    this.Assign = function (options, cb) {
        util.Assign(options, cb);
    };

    this.AddToList = function (options, cb) {
        util.AddToList(options, cb);
    };    
};

Dynamics.ApiError = DynamicsError;

module.exports = Dynamics;
