// app.js
const app = Vue.createApp({
    data() {
        return {
            answer: 0,
            limit: 37,
            initialMessage: 'Not there yet',
            limitMessage: 'Too much!'
        };
    },
    watch: {
        result(value) {
            const that = this;
            if (value === that.limitMessage) {
                setTimeout(that.resetVal, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.answer > this.limit) {
                console.log('result update');
                return this.limitMessage;
            }
            return this.initialMessage;
        },
    },
    methods: {
        add(num) {
            this.answer += num;
        },
        resetVal() {
            this.answer = 0;
        }
    }
});

app.mount('#assignment')