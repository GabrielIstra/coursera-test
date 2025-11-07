(function () {

    'use strict';

    angular.module('module1-solution', [])
        .controller('SolutionController', SolutionController);

    SolutionController.$inject = ["$scope"];

    function SolutionController($scope) {

        $scope.Check = function () {
            debugger;

            if ($scope.menu === "" || !$scope.menu) {
                $scope.message = "Please enter data first";
                $scope.color = "red"
                return;
            }

            let lunchCount = ($scope.menu.split(",")).length;

            $scope.color = "green"

            if (lunchCount <= 3) {
                $scope.message = "Enjoy!"
            } else {
                $scope.message = "Too much!"
            }
        }
    }

})();