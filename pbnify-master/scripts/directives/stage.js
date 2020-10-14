/**
 * @license
 * Copyright Dan Munro
 * Released under Expat license <https://directory.fsf.org/wiki/License:Expat>
 */

'use strict';

/**
 * @ngdoc directive
 * @name pbnApp.directive:stage
 * @description
 * # stage
 */
angular.module('pbnApp')
    .directive('stage', function () {
	return {
	    restrict: 'A',
	    link: function(scope, elem, attr) {
		var canvas = elem[0];
		canvas.addEventListener('click', function(event) {
		    if (scope.step == 'select') {
				scope.$apply();
			};
		});
		}
	};
    });
