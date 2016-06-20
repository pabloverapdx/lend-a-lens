import Ember from 'ember';

export default Ember.Route.extend({
 model(){
   return this.store.findAll('len');
 },

 actions: {
   destroyLen(len){
     len.destroyRecord();
     this.transitionTo('index');
   }
 }
});
