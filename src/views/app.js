var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // not triggering event handler
    this.videos.on('sync', () => {
      console.log('asdf');
      this.render();
    });
    this.videos.search('grumpy cat');

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
    }).render().$el;

    var searchBar = new SearchView({
      el: $('.search'),
      collection: this.videos,
    }).render().$el;

    return this;
  },

  template: templateURL('src/templates/app.html')

});
