'use strict';

var rga = angular.module('rga', ['onsen', 'chart.js', 'ngResource', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

rga.controller('MainController', ['$scope', 'datasvc', 'API', function ($scope, datasvc, API) {

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


    main.getChaincode = function () {

        API.chaincode().then(function (result) {
            datasvc.chaincodeResult = JSON.parse(result.data.result.message);
            console.log(result.data);
        }, function (error) {
            console.log(error);
        });
    };

}]);

rga.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('yellow');
});

rga.factory('API', ['$http', function ($http) {

    var api = {};

    api.chaincode = function () {
        return $http.post('https://83a17ea4-db22-4050-afd6-e1c1b0abbdea_vp0.us.blockchain.ibm.com:443/chaincode',
            {
                //params:
                //{
                    "jsonrpc": "2.0",
                    "method": "query",
                    "params": {
                        "type": 1,
                        "chaincodeID": {
                            "name": "db4dc42dde64e37623bbda094d8a85f9565d3117541f1c678d1a35549488255ebd02a999f1474c3ea723ce8ced6541105104df6a92f14432f71a56f73676aa11"
                        },
                        "ctorMsg": {
                            "function": "read",
                            "args": [
                              "venus_marble"
                            ]
                        },
                        "secureContext": "user_type1_9f1af45611"
                    },
                    "id": 0
                //}
            }).then(function (result) {
                return result;
            });
    };

    return api;

}]);

rga.service("datasvc", function DataSVC() {
    var datasvc = this;

    datasvc.CurrentCustomerName = "bob";

    datasvc.devices = ["90 Degree", "A-Swift","Acc U Rate","adidas","Aegend","Aqua Sphere","ASICS","BalanceForm","Balega","bayite","Black Mountain","BodyGlide","Bondi Band","Brooks","Cablor","CAP Barbell","Casio","Champion","Fitbit","Fitness Master","Fruit of the Loom","Gaiam","Gildan","Glamorise","Go2 Compression Socks","HEMOON","Honor Eternity Ring","Hotodeal","Level Terrain","LuxFit","Native","New Balance","Nike","Perfect Fitness","Polar","Polar","ProSource","Reehut","Salomon","Saucony","Sivan Health and Fitness","Skechers","Soffe","Sports Research","Starwood Sports","Survival and Cross","Tesla","Under Armour","Vans","Vastar", "Vitalsox"]
        /*
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
        },*/
    //];

    return datasvc;
});