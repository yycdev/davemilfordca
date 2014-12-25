define(['./module'], function(services) {
    'use strict';

    services.factory('whoAmIMenuContents', [function() {
    	var whoamicontents = [
	    {text: '<i class="fa fa-download"></i>&nbsp;Another action', href: '#anotherAction'},
	    {text: '<i class="fa fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")'},
	    {text: '<i class="fa fa-external-link"></i>&nbsp;External link', href: '/auth/facebook', target: '_self'},
	    {divider: true},
	    {text: 'Separated link', href: '#separatedLink'}
	  	];

	  	return whoamicontents;
    }]);

   	services.factory('whatIDoMenuContents', [function() {
    	var whatidocontents = [
	    {text: '<i class="fa fa-download"></i>&nbsp;Another action', href: '#anotherAction'},
	    {text: '<i class="fa fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")'},
	    {text: '<i class="fa fa-external-link"></i>&nbsp;External link', href: '/auth/facebook', target: '_self'},
	    {divider: true},
	    {text: 'Separated link', href: '#separatedLink'}
	  	];

	  	return whatidocontents;
    }]);
});
