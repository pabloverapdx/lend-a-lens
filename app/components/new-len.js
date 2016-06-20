import Ember from 'ember';

export default Ember.Component.extend({
  addNewLen: false,
  actions: {
    lenFormShow(){
      this.set('addNewLen', true);
    },
    saveLen(){
      var params = {
        brand: this.get('brand'),
        type: this.get('type'),
        description: this.get('description'),
        condition: this.get('condition'),
        pricing: this.get('pricing'),
        image: this.get('image'),
      };
      this.set('addNewLen', false);
      this.set('brand',"");
      this.set('type', "");
      this.set('description', "");
      this.set('condition', "");
      this.set('pricing', "");
      this.set('image', "");
      this.sendAction('saveLen', params);
    }
  }
});
