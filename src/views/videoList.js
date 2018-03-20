var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.render();
    this.$('.video-list').html('');
    _.each(this.collection.models, function(data) {
      var vidListEntry = new VideoListEntryView({
        model: data,
      });
      this.$('.video-list').append(vidListEntry.render().el);
    }, this);


  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
