Littr.LittrhomeController = Ember.ArrayController.extend({
  itemController: 'meep',
  sortProperties: ['date'],
  sortAscending: false,
  actions: {
    addMeep: function() {
      var newUser = this.get('user');
      var newMeep = this.get('meep');
      var imageTags = [
        "css/img/cat1.jpeg",
        "css/img/cat2.jpeg",
        "css/img/cat3.jpeg",
        "css/img/cat4.jpg",
      ];
      var imageTag = imageTags[Math.floor(Math.random() * 4)];
      var newObject = {
        user: newUser,
        meep: newMeep,
        date: new Date,
        image: imageTag
      };
      this.set('user', "");
      this.set('meep', "");
      data.meeps.addObject(newObject);
    }
  }
});
