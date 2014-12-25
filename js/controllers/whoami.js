define(['./module'], function(controllers) {
    'use strict';

    function whoAmIController($scope, whoAmIMenuContents, whatIDoMenuContents)
    {
    	// Scrolls to the selected menu item on the page
    	$(function() 
    	{
	        $('a[href*=#]:not([href=#])').click(function() 
	        {
	            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) 
	            {
	                var target = $(this.hash);
	                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                if (target.length) 
	                {
	                    $('html,body').animate({
	                        scrollTop: target.offset().top
	                    }, 1000);
	                    return false;
	                } // if
	            } // if
        	}); // function
  		}); // function

  		$scope.whoamidropdownlist = whoAmIMenuContents;
    } // whoAmIController

    whoAmIController.$inject=['$scope','whoAmIMenuContents', 'whatIDoMenuContents'];

    controllers.controller('WhoAmICtrl', ['$scope', 'whoAmIMenuContents', 'whatIDoMenuContents', whoAmIController]);
});
