import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    destroyLen(len){
      if (confirm('Are you sure you want to delete this lens?')){
      this.sendAction('destroyLen', len);
      }
    },
    updateLen(len, params){
    this.sendAction('updateLen', len, params);
    }
  }
});
