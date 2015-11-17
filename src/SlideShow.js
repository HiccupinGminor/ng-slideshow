function SlideShow($interval) {
	return {
		restrict: 'E',
		scope: {
      slides: '=data',
      transition: '@'
    },
		templateUrl: 'src/templates/slideshow.html',
		link: function(scope, elem, attrs) {
			var max = scope.slides.length,
					timer;

			scope.current = 1;
			scope.transition = scope.transition || 1000;

			function nextSlide() {
				scope.current += 1;

				if(scope.current > max) {
					scope.current = 1;
				}
			}

			timer = $interval(function() {
				nextSlide();
			}, scope.transition);

			elem.on('$destroy', function() {
				$interval.cancel(timer);
			});
		}
	}
}