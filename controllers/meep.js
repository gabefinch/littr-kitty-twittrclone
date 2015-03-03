Littr.MeepController = Ember.ObjectController.extend({
  showDate: false,
  actions: {
    showDate: function() {
      this.set('showDate', !this.get('showDate'));
    }
  }
});
