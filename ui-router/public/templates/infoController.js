
angular.module('myApp')
    .controller('infoCtrl', ['$scope', 
                                  function infoCtrl($scope) {
    var vm = this;
    vm.templateUrl = 'infoTemplate'; 
   	 	console.log("infoCtrl working fine");
	}
]);
