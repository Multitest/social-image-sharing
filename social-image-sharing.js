angular.module('socialImageSharing', [])
  .directive('imageShare', ['$log', '$window', function($log, $window) {
    return {
      link: function(scope, element, attrs) {
        element.on('click', function() {
          switch (element.data('type')) {
            case 'facebook':
              $window.open('https://www.facebook.com/sharer/sharer.php?u=' + element.data('url'), element.data('text'), config = 'height=300, width=500');
              break;
            case 'google':
              $window.open('https://plus.google.com/share?url=' + element.data('url'), element.data('text'), config = 'height=300, width=500');
              break;
            case 'twitter':
              $window.open('http://twitter.com/home?status=' + element.data('url'), element.data('text'), config = 'height=300, width=500');
              break;
            case 'pinterest':
              window.open('http://www.pinterest.com/pin/create/button/?url=' + element.data('url') + '&media=' + element.data('url') + '&description=' + element.data('text'), element.data('url'), config = 'height=300, width=500');
              break;
          }
        });

      }
    }
  }]);