import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    date: DS.attr('date'),
    createdAt: DS.attr('string', {
        defaultValue() { return new Date(); }
    })
});
