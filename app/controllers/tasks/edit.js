import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editTask(id) {
            let self = this;
            let title = this.get('model.title');
            let description = this.get('model.description');
            let date = this.get('model.date');
            // alert(title, description, date);

            //  update tasks
            this.store.findRecord('task', id) //model is called task and id is that
                .then((task) => {
                    task.set('title', title),
                        task.set('description', description),
                        task.set('date', new Date(date))
                    // save to database
                    task.save();

                })
                .catch(err => alert(err));

            self.transitionToRoute('tasks'); //redirect
        }
    }
});
