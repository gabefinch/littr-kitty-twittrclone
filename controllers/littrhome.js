Littr.LittrhomeController = Ember.ArrayController.extend({
  itemController: 'meep',
  sortProperties: ['date'],
  sortAscending: false,
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
      this.set('user', "");
      this.set('meep', "");
      data.meeps.addObject(newObject);
    }
  }
});
