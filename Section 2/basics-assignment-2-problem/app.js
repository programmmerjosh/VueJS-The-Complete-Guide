// app.js
const app = Vue.createApp({
    data() {
        return {
            username: '',
            confirmUser: ''
        };
    },
    methods: {
        showAlert() {
            alert('This is an alert');
        },
        registerUser(event) {
            this.username = event.target.value;
        },
        confirmRegisterUser(event) {
            this.confirmUser = event.target.value;
        }
    }
});

app.mount('#assignment');