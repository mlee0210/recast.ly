var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    key: window.YOUTUBE_API_KEY,
    data: {
      'q': options.query,
      'maxResults': options.max,
      'key': options.key,
      'part': 'snippet',
      'type': 'video',
      'videoEmbeddable': true
    },
    success: function(data) {
      callback(data.items);
    }  

  });

};


window.searchYouTube = searchYouTube;
