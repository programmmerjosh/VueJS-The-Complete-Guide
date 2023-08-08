### Vue JS - The Complete Guide

Udemy course by Maximilian Schwarzmüller

https://www.udemy.com/course/vuejs-2-the-complete-guide/?kw=Vue+-+The+Complete+Guide+%28incl.+Router+%26+Composition+API%29&src=sac

---

## Section 1: Basics - Getting Started

> gs-02-first-app-with-just-js
>
> > basic add goal frontend using just vanilla JavaScript

> gs-03-rebuilding-the-app-with-vue
>
> > same as above but converted the vanilla JavaScript to VueJS

---

## Section 2: Basics & Core Concepts - DOM Interaction with Vue

> basics-01-starting-code
>
> > introducing methods, v-bind and v-html.
> > properties declared in data() can be globally referenced with 'this' keyword

> basics-assignment-1-problem
>
> > practice using v-bind

> basics-assignment-2-problem
>
> > practice with methods using (event) parameter
> > event.target.value
> > alert('This is an alert');
> > v-on:
> > :click, :input, :keydown.enter (or specific keyboard buttons)

> basics-assignment-3-problem
>
> > watch, computed
> > setTimeout
> > const that = this; declared inside a watch property

> basics-10-styling-starting-setup
>
> > v-bind:style inline styles
> > :class

> basics-assignment-4-problem
>
> > practice using computed toggle :class objects
> > v-model => read and update Vue attribute

---

## Section 3: Render Conditional Content & Lists

> lists-cond-02-v-if-v-else-v-else-if
>
> > v-model, v-if, v-else, get length of the js declared list, in the html
> > add items to a list

> lists-cond-03-rendering-lists-of-data
>
> > v-model, v-if, v-else, v-for

> lists-cond-04-diving-deeper-into-v-for
>
> > v-for with index, v-if, v-else, v-model, .length
> > key value pairs (commented out), or key, value & index

> lists-cond-05-removing-list-items
>
> > v-model, v-if, v-else,
> > key value pairs (commented out), or key, value & index
> > remove list item using splice

> lists-cond-06-lists-keys
>
> > v-model, v-if, v-else,
> > key value pairs (commented out), or key, value & index
> > remove list item using splice and key attribute for unique identifier (unique id)
> > @click.stop

> lists-cond-assignment-problem
>
> > v-for and v-if practice
> > toggle show/hide list

---

## Section 4: Course Project: The Monster Slayer Game

> prj-monster-game
>
> > inline styles, v-if, v-else
> > :disabled, v-for, :class,
> > using a jsObject -> adding the object to a list and reading the object properties

---

## Section 5: Vue: Behind The Scenes

Mostly theory and examples in this section

> behind-scenes-02-vue-reactivity-deep-dive
>
> > how Vue works under the hood with JS Proxy

> behind-scenes-03-one-app-vs-multiple-apps
>
> > mounting multiple vue app templates

> behind-scenes-05-working-with-refs
>
> > ref attribute -> $refs

> behind-scenes-06-vue-app-lifecycle-practice
>
> > Vue app lifecycle
> > beforeCreate(), created(), beforeMount(), mounted(), beforeUpdate(), updated(), beforeUnmount(), unmounted()

---

## Section 6: Introducing Components

Vue Components - just introducing the concept of components

> cmp-intro-03-introducing-components
>
> > basics to understand how components work
> > using the template property and html code with haptics ``

---

## Section 7: Conventional Vue Project Setup & Vue CLI Workflow

> to create new project using the Vue CLI, open a cmd terminal from the vue app directory, and enter:
>
> > vue create APPNAME

> to start the app (or start the development server), open a cmd terminal from the vue app directory, and enter:
>
> > npm run serve

> in our new vue app, we don't need to declare Vue.createApp({}); anymore as the new app comes with this import and mount code predfined:
>
> > import { createApp } from 'vue'
> > import App from './App.vue'
> >
> > createApp(App).mount('#app');

> vue-cli-01-a-new-vue-project
>
> > standard vue project setup and file structure, template tag, style tag, script tag,
> > App.vue, /components, main.js

---

## Section 8: Component Communication
