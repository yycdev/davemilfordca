define(['./module', 'jquery', 'gsap'], function(controllers) {
    'use strict';

    function whoAmIController($scope, $window, $location)
    {
    	$scope.$on('$viewContentLoaded', function(event) {
		$window.ga('send', 'pageview', { page: $location.path() });
  		}); 

    	    $scope.slides = [
    	    {image: 'img/flickr/bird_sm.jpg', description: 'Image 00'},
            {image: 'img/flickr/bee_sm.jpg', description: 'Image 01'},
            {image: 'img/flickr/cannery_sm.jpg', description: 'Image 02'},
            {image: 'img/flickr/columbia_sm.jpg', description: 'Image 03'},
            {image: 'img/flickr/creek_sm.jpg', description: 'Image 04'},
            {image: 'img/flickr/hockey_sm.jpg', description: 'Image 05'},
            {image: 'img/flickr/mountain_sm.jpg', description: 'Image 06'},
            {image: 'img/flickr/vancouver_sm.jpg', description: 'Image 07'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    } // whoAmIController

    controllers.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

    whoAmIController.$inject=['$scope', '$window', '$location'];

    controllers.controller('WhoAmICtrl', ['$scope', '$window', '$location', whoAmIController]);
});
