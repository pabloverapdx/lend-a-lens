import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveLen(params){
      var newLen = this.store.createRecord('len', params);
      newLen.save();
      this.transitionTo('admin')
    },
  }
});
