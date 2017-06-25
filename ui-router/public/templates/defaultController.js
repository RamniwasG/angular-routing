
angular.module('myApp')
    .controller('defaultCtrl', ['$scope', 
                                  function defaultCtrl($scope) {
    var vm = this;
    vm.templateUrl = 'defaultTemplate'; 
   	 	console.log("buttonsCtrl working fine");
	}
]);
