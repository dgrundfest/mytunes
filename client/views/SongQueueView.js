// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
  },

  render: function() {
    return this.$el.append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song});
    }));
  }

});
