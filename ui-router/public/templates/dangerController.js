
angular.module('myApp')
    .controller('dangerCtrl', ['$scope', 
                                  function dangerCtrl($scope) {
    var vm = this;
    vm.templateUrl = 'dangerTemplate'; 
   	 	console.log("MenubarCtrl working fine");
	}
]);
