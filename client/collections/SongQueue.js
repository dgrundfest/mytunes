// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(song){
      if(this.length === 1){
        this.playFirst();
      }
    },this);


    this.on('ended', function(song) {
      this.remove(song);
      this.playFirst();
    }, this);

    this.on('dequeue', function(song) {
      var removedFirst = this.at(0) === song;
      this.remove(song);
      if (removedFirst){
        this.playFirst();
      }
    }, this);
  },

  playFirst : function(){
    if (this.at(0)) {
      this.at(0).play();
    }
  }



});

