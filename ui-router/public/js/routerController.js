var app = angular.module("myApp", ["ui.router"]);
app.config(['$stateProvider', function config($stateProvider){
	console.log("routes working..");
	
	$stateProvider
		.state('success',{
			url: '#/success',
			template: '<strong>hi this is first msg</strong>'
		})
		/*.state('danger',{
			url: '/danger',
			templateUrl: '/public/templates/danger.htm'
		})
		.state('warning',{
			url: '/warning',
			templateUrl: '/public/templates/warning.htm'
		})
		.state('info',{
			url: '/info',
			templateUrl: '/public/templates/info.htm'
		})
		.state('default',{
			url: '/default',
			templateUrl: '/public/templates/default.htm'
		})*/
}]);

/*app.controller('myCtrl', function($scope) {
    var vm = this;
    console.log("controller is working");
});*/