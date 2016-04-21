var app = angular.module('layoutPlaygroundApp', ['ngMaterial']);
// Declare the AppCtrl controller
app
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .accentPalette('blue');
    }])
    .controller('AppCtrl', ['$scope', function($scope) {
        $scope.parent = {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'stretch'
        };

        $scope.children_width = 12; // %

        $scope.children = [];

        var addChild = function(order, flexGrow, flexShrink, flexBasis, alignSelf) {
            $scope.children.push({
                order: order || 0,
                flexGrow: flexGrow || 0,
                flexShrink: flexShrink || 1,
                flexBasis: flexBasis || 'auto',
                alignSelf: alignSelf || 'auto'
            });
        };
        var removeChild = function(index) {
            $scope.children.splice(index, 1);
        };

        $scope.addChild = addChild;
        $scope.removeChild = removeChild;

        for (var i = 0; i < 5; i++) {
            addChild();
        }

    }]);
