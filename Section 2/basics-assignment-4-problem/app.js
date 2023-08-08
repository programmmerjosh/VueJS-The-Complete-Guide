const app = Vue.createApp({
    data() {
        return {
            chosenClass: '',
            selected: true,
            hidden: false,
            background: ''
        };
    },
    computed: {
        classes() {
            return {
                user1: this.chosenClass === 'user1',
                user2: this.chosenClass === 'user2',
                hidden: this.hidden,
                visible: !this.hidden
            }
        },
    },
    methods: {
        toggleHide() {
            this.hidden = !this.hidden;
        }
    }
});

app.mount('#assignment');