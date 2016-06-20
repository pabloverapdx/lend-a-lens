import Ember from 'ember';

export default Ember.Component.extend({
  updateLenForm: false,
  actions: {
    updateLenForm(){
      this.set('updateLenForm', true);
    },
    updateLen(len){
      var params = {
        brand: this.get('brand'),
        type: this.get('type'),
        description: this.get('description'),
        condition: this.get('condition'),
        pricing: this.get('pricing'),
        image: this.get('image'),
      };
      this.set('updateLenForm', false);
      this.set('brand',"");
      this.set('type',"");
      this.set('description',"");
      this.set('condition',"");
      this.set('pricing', "");
      this.set('image', "");
      this.sendAction('updateLen', len, params);
    }
  }
});
