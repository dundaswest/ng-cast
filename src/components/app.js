angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      

      this.youTubeData = youTube.getVideos('David Bowie');

      this.videos = exampleVideoData;

      // this.videos = this.youTubeData.data.items;

      this.currentVideo = this.videos[0];
      
      this.searchResults = function() {
        return;
      };
      this.selectVideo = function() {
        return;
      };
      this.onClick = function(video) {
        this.currentVideo = video;        
      }.bind(this);

    },
  });