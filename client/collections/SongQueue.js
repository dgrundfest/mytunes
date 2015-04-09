// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(song){
      if(this.length === 1){
        this.playFirst();
      }
      // console.log(this);
    },this);

    // this.on('all', function(eventname) {
    //   console.log(eventname);
    //   // this.remove(song);
    // }, this);

    this.on('ended', function(song) {
      this.remove(song);
      this.playFirst();
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
      this.playFirst();
    }, this);
  },

  playFirst : function(){
    if (this.at(0)) {
      this.at(0).play();
    }
  }



});

