import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
brand: attr(),//canon, nikon, etc
type: attr(), //telephoto, macro, fisheye
description: attr(),
condition: attr(),
pricing: attr(),
image: attr(),
});
