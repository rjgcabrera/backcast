var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // not triggering event handler
    this.videos.on('sync', () => {
      console.log('asdf');
      this.render();
    });
    this.videos.search('chris webby');

    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    var videoListView = new VideoListView({
      el: $('.list'),
      collection: this.videos,
    });

    var videoPlayer = new VideoPlayerView({ // ask fred. collection is undefined w/ this.render() inside initialize
      el: $('.player'),
      collection: this.videos,
      // model: this.videos.at(0)
    }).render().$el;

    var searchBar = new SearchView({
      el: $('.search')
    }).render().$el;

    //console.log('this.videos: ', this.videos);
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
