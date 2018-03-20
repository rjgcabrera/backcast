var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'clickHandler',
  },

  initialize: function() {
  //   this.render();
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  clickHandler: function() {
    this.model.select();
    //console.log('clicked!');
  },

  template: templateURL('src/templates/videoListEntry.html')

});
