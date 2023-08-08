const app = Vue.createApp({

    // data is a specific VueJS name
    data() {
        return {
            // these below properties can be named anything you want
            courseGoal: 'Complete this course',
            winText: 'You WIN!!',
            loseText: 'You lose.',
            vueLink: 'https://vuejs.org/',
            someHtmlContent: '<a href="https://www.google.com">Google</a>'

            // all the properties we define here, will be stored globally and can be referenced by the "this" keyword elsewhere
        };
    },
    // methods is a specific VueJS name
    methods: {
        // these method names can be named anything you want
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.winText;
            }
            return this.loseText;
        }
    }
});

// here, we connect the Vue code to the html element by it's ID
app.mount('#user-goal');