(function() {
  'use strict';

  angular.module('ngjs-checkbox')
    .directive('ngjs-checkbox', function() {
      return {
        restrict: 'EA',
        templateUrl: 'ngjs-checkboxTpl.html',
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
              this.checked = !this.checked;
              $ctrl.onChecked();
            }
          }
        }],
        controllerAs: '$ctrl',
        bindToController: {
          disabled: '=',
          checked: '=',
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
