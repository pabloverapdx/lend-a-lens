import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  delete(len){
    if (confirm('Are you sure you want to delete this lens?')){
      this.sendAction('destroyLen', len);
    }
  }
}
