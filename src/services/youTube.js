angular.module('video-player')
  .service('youTube', function($http) {
    this.getVideos = function(query, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: query,
          maxResults: '5',
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then(
          function successCallback(response) {
            callback(response);
            console.log('Success!', response);
            console.log(response.data.items);
          },
          function errorCallback(response) {
            console.log('Error', response);
          }
        );
    };
  });
