'use strict';

var rga = angular.module('rga', ['onsen']);

rga.controller('MainController', ['$scope', 'datasvc', function ($scope, datasvc) {

    var main = this;

    main.datasvc = datasvc;

}
]);

rga.service("datasvc", function DataSVC() {
    var datasvc = this;

    datasvc.tet = "";

    return datasvc;
});