const app = Vue.createApp({
    data() {
        return {
            taskName: '',
            tasks: [],
            hideList: false
        };
    },
    computed: {
        listClasses() {
            return {
                hidden: this.hideList
            }
        }
    },
    methods: {
        add() {
            this.tasks.push(this.taskName);
            this.taskName = '';
        },
        toggleHide() {
            this.hideList = !this.hideList;
        }
    }
});

app.mount('#assignment');