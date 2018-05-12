angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.searchResults = function() {
        return;
      };
      this.selectVideo = function() {
        return;
      };
      this.onClick = function() {
        console.log('click!');
      };
    },
  });