var app = angular.module('SlideShowExampleApp', []);

app.directive('slideShow', ['$interval', SlideShow]);