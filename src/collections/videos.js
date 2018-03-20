var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video'
      },
    });
  },

  parse: function(res) {
    this.collection = res.items;
    console.log(this.collection);
    return res.items;
  }  

});