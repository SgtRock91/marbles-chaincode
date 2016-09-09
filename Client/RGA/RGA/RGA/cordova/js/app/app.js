'use strict';

var rga = angular.module('rga', ['onsen', 'chart.js', 'ngResource']);

rga.controller('MainController', ['$scope', 'datasvc', function ($scope, datasvc) {

    var main = this;

    main.datasvc = datasvc;

    $scope.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.series = ['Heart Rate'];
    $scope.data = [[110, 115, 117, 120, 125, 140, 142, 138, 130, 125]];
    //$scope.onClick = function (points, evt) {
        //console.log(points, evt);
    //};
    //$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    $scope.options = {
        scales: {
            yAxes: [
              {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
              },
            ]
        }
    };

}]);


rga.service("datasvc", function DataSVC() {
    var datasvc = this;

    datasvc.CurrentCustomerName = "Billy Bob";

    return datasvc;
});