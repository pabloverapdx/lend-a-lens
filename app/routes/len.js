import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('len', params.len_id);
  },
  actions: {
    destroyLen(len){
      len.destroyRecord();
      this.transitionTo('index');
    },
    updateLen(len, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          len.set(key,params[key]);
        }
      });
      len.save();
      this.transitionTo('index');
    },
   }
 });
