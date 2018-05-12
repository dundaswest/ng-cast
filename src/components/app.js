angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {

      this.videos = null;
      // this.videos = exampleVideoData;

      this.currentVideo = this.videos ? this.videos[0] : null;
      
      this.autoplay = 0;

      this.$onInit = function() {
        youTube.getVideos('Childish Gambino', this.searchResults);
      };      

      this.selectVideo = function() {
      };

      this.searchResults = function(response) {
        this.videos = response.data.items;
        this.currentVideo = this.videos[0];
      }.bind(this);

      this.youTubeData = function(query, autoplay) {
        youTube.getVideos(query, this.searchResults);
      }.bind(this);

      this.onClick = function(video) {
        this.currentVideo = video;        
      }.bind(this);

    },
  });