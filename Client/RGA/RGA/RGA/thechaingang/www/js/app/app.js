'use strict';

//setup our angular module and include onsen for hybrid usage, ...
//...ngResource for making api calls, ngMaterial/ngMessages/material for ux/ui,...
//...and chart.js for displaying data in charts 
var rga = angular.module('rga', ['onsen', 'chart.js', 'ngResource', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

//create our main controller (normally we would have more controllers as we needed for more views)
rga.controller('MainController', ['$scope', 'datasvc', 'API', function ($scope, datasvc, API) {

    var main = this; //save the reference for later use

    main.datasvc = datasvc; //attach the data service to our controller so it can be accessed here and in our page

    //mock data for heart rate
    $scope.heartlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.heartseries = ['Heart Rate (bpm)'];
    $scope.heartdata = [[110, 115, 117, 120, 125, 140, 142, 138, 130, 125]];
    $scope.heartcolors = ['#FF0000'];

    //mock data for running distance
    $scope.runninglabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.runningseries = ['Running Distance (feet)'];
    $scope.runningdata = [[0, 103, 129, 166, 202, 242, 281, 318, 352, 393]];
    $scope.runningcolors = ['#2D0CE8'];

    //mock data for walking distance
    $scope.walkinglabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.walkingseries = ['Walking Distance (feet)'];
    $scope.walkingdata = [[0, 33, 68, 92, 115, 141, 172, 202, 233, 266]];
    $scope.walkingcolors = ['#3BD700'];

    //perform the call to access the chaincode and retrieve the data
    main.getChaincode = function () {
        API.chaincode().then(function (result) {

            //update the chaincodeResult because it is bound in our view and will...
            //...display the information that was retrieved
            datasvc.chaincodeResult = JSON.parse(result.data.result.message);

        }, function (error) {
            //write to the console the error we receive if the request fails
            //normally we would handle this and inform the user with some sort of dialog, toast, etc
            console.log(error); 
        });
    };

}]);

rga.config(function ($mdThemingProvider) {
    //setup angular material ui's color theme
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('yellow');
});

rga.factory('API', ['$http', function ($http) {

    var api = {}; //create an object we can insert our api calls into

    //add the function that will make the request to get a particular...
    //...entry in the blockchain by using the parameters we send it
    api.chaincode = function () {
        return $http.post('https://83a17ea4-db22-4050-afd6-e1c1b0abbdea_vp0.us.blockchain.ibm.com:443/chaincode',
            {
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
            }).then(function (result) {
                //wait until the request completes then return the results
                return result;
            }, function (error) {

                //silently fail and log to the console...
                //...normally this would be handled and we would inform the user
                console.log(result); 
            });
    };

    return api; //return our api object with all functions inserted

}]);

rga.service("datasvc", function DataSVC() {

    var datasvc = this;//save a reference for later use

    datasvc.CurrentCustomerName = "bob"; //mock out a customer name

    //mock out a list of devices that the user can add
    datasvc.devices = ["90 Degree", "A-Swift","Acc U Rate","adidas","Aegend","Aqua Sphere","ASICS","BalanceForm","Balega","bayite","Black Mountain","BodyGlide","Bondi Band","Brooks","Cablor","CAP Barbell","Casio","Champion","Fitbit","Fitness Master","Fruit of the Loom","Gaiam","Gildan","Glamorise","Go2 Compression Socks","HEMOON","Honor Eternity Ring","Hotodeal","Level Terrain","LuxFit","Native","New Balance","Nike","Perfect Fitness","Polar","Polar","ProSource","Reehut","Salomon","Saucony","Sivan Health and Fitness","Skechers","Soffe","Sports Research","Starwood Sports","Survival and Cross","Tesla","Under Armour","Vans","Vastar", "Vitalsox"]
        
    return datasvc; //return our data service
});