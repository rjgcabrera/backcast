var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleSearch',
    'keyup input' : 'keyPressEventHandler',
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleSearch: function() {
    this.collection.search($('.search-bar .form-control').val());
  },

  keyPressEventHandler: function(event) {
    if(event.keyCode == 13){
      this.handleSearch();
    }
  },

  template: templateURL('src/templates/search.html')

});
