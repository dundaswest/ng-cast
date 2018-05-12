angular.module('video-player')
  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function() {
      this.$onInit = function() {
        this.current = this.currentVideo;
      };
    },
    bindings: {
      videos: '<',
      currentVideo: '<'
    },
    
  });
