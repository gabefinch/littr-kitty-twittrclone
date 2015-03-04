Littr.MeepController = Ember.ObjectController.extend({
  showDate: false,
  showReply: false,
  actions: {
    showDate: function() {
      this.set('showDate', !this.get('showDate'));
    },
    showReply: function() {
      console.log(this.get('model'))
      this.set('showReply', !this.get('showReply'));
    },
    addReply: function() {
      var newReply = this.get('reply');
      this.get('model').replies.addObject(newReply);

      this.set('reply', "");
    }

  }
});
