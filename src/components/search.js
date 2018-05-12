angular.module('video-player')
  .component('search', {
    templateUrl: 'src/templates/search.html',
    controller: function() {
      this.query = '';
    },
    bindings: {
      search: '<'
    }
  });
