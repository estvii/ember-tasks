import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTask() {
            // console.log(this);
            let title = this.get('title');
            let description = this.get('description');
            let date = this.get('date');
            // alert(title, description, date);
            // create new tasks
            // let newTask = this.store.createRecord();
        }
    }
});
