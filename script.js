document.addEventListener('DOMContentLoaded', function(e) {
    'use strict';

    var circles = document.querySelectorAll('.circle');

    for (var i=0; i<circles.length; i++) {
      circles[i].addEventListener('click', function(e) {
        e.target.classList.toggle('clicked');
      });
    }
});
