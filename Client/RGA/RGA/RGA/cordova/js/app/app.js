'use strict';

var rga = angular.module('rga', ['onsen', 'chart.js', 'ngResource', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

rga.controller('MainController', ['$scope', 'datasvc', function ($scope, datasvc) {

    var main = this;

    main.datasvc = datasvc;

    $scope.heartlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.heartseries = ['Heart Rate (bpm)'];
    $scope.heartdata = [[110, 115, 117, 120, 125, 140, 142, 138, 130, 125]];
    $scope.heartcolors = ['#FF0000'];

    $scope.runninglabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.runningseries = ['Running Distance (feet)'];
    $scope.runningdata = [[0, 103, 129, 166, 202, 242, 281, 318, 352, 393]];
    $scope.runningcolors = ['#2D0CE8'];

    $scope.walkinglabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.walkingseries = ['Walking Distance (feet)'];
    $scope.walkingdata = [[0, 33, 68, 92, 115, 141, 172, 202, 233, 266]];
    $scope.walkingcolors = ['#3BD700'];

    $scope.devices = [
        {
            brand: "90 Degree",
        },
        {
            brand: "A-Swift",
        },
        {
            brand: "Acc U Rate",
        },
        {
            brand: "adidas",
        },
        {
            brand: "Aegend",
        },
        {
            brand: "Aqua Sphere",
        },
        {
            brand: "ASICS",
        },
        {
            brand: "BalanceForm",
        },
        {
            brand: "Balega",
        },
        {
            brand: "bayite",
        },
        {
            brand: "Black Mountain",
        },
        {
            brand: "BodyGlide",
        },
        {
            brand: "Bondi Band",
        },
        {
            brand: "Brooks",
        },
        {
            brand: "Cablor",
        },
        {
            brand: "CAP Barbell",
        },
        {
            brand: "Casio",
        },
        {
            brand: "Champion",
        },
        {
            brand: "Fitbit",
        },
        {
            brand: "Fitness Master",
        },
        {
            brand: "Fruit of the Loom",
        },
        {
            brand: "Gaiam",
        },
        {
            brand: "Gildan",
        },
        {
            brand: "Glamorise",
        },
        {
            brand: "Go2 Compression Socks",
        },
        {
            brand: "HEMOON",
        },
        {
            brand: "Honor Eternity Ring",
        },
        {
            brand: "Hotodeal",
        },
        {
            brand: "Level Terrain",
        },
        {
            brand: "LuxFit",
        },
        {
            brand: "Native",
        },
        {
            brand: "New Balance",
        },
        {
            brand: "Nike",
        },
        {
            brand: "Perfect Fitness",
        },
        {
            brand: "Polar",
        },
        {
            brand: "Polar",
        },
        {
            brand: "ProSource",
        },
        {
            brand: "Reehut",
        },
        {
            brand: "Salomon",
        },
        {
            brand: "Saucony",
        },
        {
            brand: "Sivan Health and Fitness",
        },
        {
            brand: "Skechers",
        },
        {
            brand: "Soffe",
        },
        {
            brand: "Sports Research",
        },
        {
            brand: "Starwood Sports",
        },
        {
            brand: "Survival and Cross",
        },
        {
            brand: "Tesla",
        },
        {
            brand: "Under Armour",
        },
        {
            brand: "Vans",
        },
        {
            brand: "Vastar",
        },
        {
            brand: "Vitalsox",
        },


    ];

}]);


rga.service("datasvc", function DataSVC() {
    var datasvc = this;

    datasvc.CurrentCustomerName = "Billy Bob";

    return datasvc;
});