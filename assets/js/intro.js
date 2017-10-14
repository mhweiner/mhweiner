function Intro($scope) {

  'use strict';

  function init() {

    $scope.on('mouseover click', '[data-tipsy]', function(){

      var $this = $(this);
      var $tip = $('#' + $this.data('tipsy'));

      $tip.css({
        left: $this.offsetLeft + 'px',
        top: $this.offsetTop + 'px',
        display: 'block'
      });

    });

    $scope.on('mouseout', '[data-tipsy]', function(){

      var $this = $(this);
      var $tip = $('#' + $this.data('tipsy'));

      $tip.css('display', 'none');

    });

  }

  init();

}