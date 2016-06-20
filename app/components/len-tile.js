import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    updateLen(len, params){
    this.sendAction('updateLen', len, params);
    }
  }
});
