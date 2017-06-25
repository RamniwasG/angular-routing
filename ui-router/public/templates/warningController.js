
angular.module('myApp')
    .controller('warningCtrl', ['$scope', 
                                  function warningCtrl($scope) {
    var vm = this;
    vm.templateUrl = 'warningsTemplate'; 
   	 	console.log("tableCtrl working fine");
	}
]);
