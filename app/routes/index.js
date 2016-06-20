import Ember from 'ember';

export default Ember.Route.extend({
 model(){
   return this.store.findAll('len');
 },

 actions: {
   updateLen(len, params){
     Object.keys(params).forEach(function(key){
       if(params[key]!==undefined){
         len.set(key,params[key]);
       }
     });
     len.save();
     this.transitionTo('index');
   },

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
