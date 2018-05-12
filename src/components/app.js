angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      
      this.videos = null;
      // this.videos = exampleVideoData;

      this.currentVideo = this.videos ? this.videos[0] : null;
      
      this.searchResults = function(response) {
        console.log('Search Response', response.data.items);
        this.videos = response.data.items;
      };

      this.selectVideo = function() {
      };

      this.youTubeData = function(query, callback) {
        query = 'David Bowie';
        youTube.getVideos(query, this.searchResults);
      }.bind(this);

      this.onClick = function(video) {
        this.currentVideo = video;        
      }.bind(this);

    },
  });
  
// ng-if="$ctrl.videos"