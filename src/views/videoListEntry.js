var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'clickHandler',
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  clickHandler: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
