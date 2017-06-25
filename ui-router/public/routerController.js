var app = angular.module("myApp", ["ui.router"]);
	app.config(function($stateProvider, $urlRouterProvider){
		console.log("routes working..");
		$stateProvider
			.state('success',{
				url: '/success',
				templateUrl: '/public/templates/success.htm',
				controller: 'successCtrl as vm'
			})
			.state('danger',{
				url: '/danger',
				templateUrl: '/public/templates/danger.htm',
				controller: 'dangerCtrl as vm'
			})
			.state('warning',{
				url: '/warning',
				templateUrl: '/public/templates/warning.htm',
				controller: 'warningCtrl as vm'
			})
			.state('info',{
				url: '/info',
				templateUrl: '/public/templates/info.htm',
				controller: 'infoCtrl as vm'
			})
			.state('default',{
				url: '/default',
				templateUrl: '/public/templates/default.htm',
				controller: 'defaultCtrl as vm'
			})
});

app.controller('routCtrl', function($scope) {
    var vm = this;
    vm.listItems = [
    		{text: "BS Dropdown", route: 'success'},
    		{text: "BS Navbar",   route: 'danger'},
    		{text: "BS Tables",   route: 'warning'},
    		{text: "BS Alerts",   route: 'info'},
    		{text: "BS Buttons",  route: 'default'}];
});