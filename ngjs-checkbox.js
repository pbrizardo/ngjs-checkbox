(function() {
  'use strict';

  angular.module('ngjsCheckbox', [])
    .directive('ngjsCheckbox', function() {
      return {
        restrict: 'A',
        templateUrl: './ngjsCheckboxTpl.html',
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
            if(!$ctrl.isDisabled && (event.keyCode === 13 || event.keyCode === 32)) {
              $ctrl.onChecked();
            }
          }
        }],
        controllerAs: '$ctrl',
        bindToController: {
          isDisabled: '=',
          checkedValue: '=',
          tagLabel: '@',
          allowLabelClicks: '@',
          onChecked: '&',
          onKeyUp: '&',
        },
        link: function(scope, element, attr) {
          var size = attr.size;

          if (size) { element.addClass('ngjs-checkbox-'+size); }
        }
      }
    });
})();
