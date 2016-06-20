import Ember from 'ember';

export default Ember.Route.extend({
 model(){
   return this.store.findAll('len');
 },

 actions: {
   saveLen(params){
     var newLen = this.store.createRecord('len', params);
     newLen.save();
     this.transitionTo('index')
   },

   destroyLen(len){
     len.destroyRecord();
     this.transitionTo('index');
   }
 }
});
