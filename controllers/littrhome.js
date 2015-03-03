Littr.LittrhomeController = Ember.ObjectController.extend({
  actions: {
    addMeep: function() {
      var newUser = this.get('user');
      var newMeep = this.get('meep');
      var newObject = {
        user: newUser,
        meep: newMeep,
        date: new Date,
        image: ''
      };
      data.meeps.addObject(newObject);
    }
  }
});
