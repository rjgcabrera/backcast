var VideoPlayerView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  // },
  initialize: function() {
    this.listenTo(this.collection, 'select', function(param) {
      // console.log('param: ', param);
      this.model = param;
      this.render();
    });
    if (this.collection.at(0)) {
      this.collection.at(0).select();
    }
    
  },

  render: function() {
    if (this.model === undefined) {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
