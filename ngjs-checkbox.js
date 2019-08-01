(function() {
  'use strict';

  angular.module('paymentEstimator')
    .directive('peCheckbox', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/components/peCheckbox/peCheckboxTpl.html',
        transclude: true,
        controller: ['$timeout', function($timeout) {
          var $ctrl = this;

          $ctrl.onChange = function(event) {
            event.preventDefault();
            $ctrl.onChecked();

          }

          $ctrl.onLabelClicked = function(event) {
            if (!$ctrl.allowLabelClicks) {
              event.preventDefault();
            }
          }

          $ctrl.onKeyUpFunc = function(event) {
            if(!$ctrl.disabled && (event.keyCode === 13 || event.keyCode === 32)) {
              $ctrl.onChecked();
            }
          }
        }],
        controllerAs: '$ctrl',
        bindToController: {
          disabled: '=',
          checkedValue: '=',
          tagLabel: '@',
          allowLabelClicks: '@',
          onChecked: '&',
          onKeyUp: '&',
        },
        link: function(scope, element, attr) {
          var size = attr.size;

          if (size) { element.addClass('pe-checkbox-'+size); }
        }
      }
    });
})();
