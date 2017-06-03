var searchYouTube = (searchText, callback) => {
  
  var url = 'https://www.googleapis.com/youtube/v3/search';

  console.log(callback);

  $.ajax({
    'url': 'https://www.googleapis.com/youtube/v3/search',
    'dataType': 'json',
    'type': 'GET',
    'data': {
      'key': window.YOUTUBE_API_KEY,
      'maxResults': '5',
      'q': searchText,
      //'q': options
      'part': 'snippet',
      'type': 'video',
      'videoEmbeddable': 'true'
    },
    success: function(data) {
      //console.log('success ' + JSON.stringify(data));
      callback(data);
    },
    error: function(data) {
      console.log(data);
    }

  }); 
};

window.searchYouTube = searchYouTube;