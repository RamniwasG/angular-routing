
angular.module('myApp')
    .controller('successCtrl', ['$scope', 
                                  function successCtrl($scope) {
    var vm = this;
    vm.templateUrl = 'successsTemplate'; 
   	 	console.log("DropwonCtrl working fine");
	}
]);
