# Vue JS - The Complete Guide

Udemy course by Maximilian Schwarzmüller

https://www.udemy.com/course/vuejs-2-the-complete-guide/?kw=Vue+-+The+Complete+Guide+%28incl.+Router+%26+Composition+API%29&src=sac

---

> Note: In the readme, I summarise what was covered and what I learned in each section of the course.

## Section 1: Basics - Getting Started

### Project: gs-02-first-app-with-just-js

- basic add goal frontend using just vanilla JavaScript

### Project: gs-03-rebuilding-the-app-with-vue

- same as above but converted the vanilla JavaScript to VueJS

---

## Section 2: Basics & Core Concepts - DOM Interaction with Vue

### Project: basics-01-starting-code

- introducing methods, v-bind and v-html.
- properties declared in data() can be globally referenced with 'this' keyword

### Project: basics-assignment-1-problem

- practice using v-bind

### Project: basics-assignment-2-problem

- practice with methods using (event) parameter
- event.target.value
- alert('This is an alert');
- v-on:
- :click, :input, :keydown.enter (or specific keyboard buttons)

### Project: basics-assignment-3-problem

- watch, computed
- setTimeout
- const that = this; declared inside a watch property

### Project: basics-10-styling-starting-setup

- v-bind:style inline styles
- :class

### Project: basics-assignment-4-problem

- practice using computed toggle :class objects
- v-model
- read and update Vue attribute

---

## Section 3: Render Conditional Content & Lists

### Project: lists-cond-02-v-if-v-else-v-else-if

- v-model, v-if, v-else, get length of the js declared list, in the html
- add items to a list

### Project: lists-cond-03-rendering-lists-of-data

- v-model, v-if, v-else, v-for

### Project: lists-cond-04-diving-deeper-into-v-for

- v-for with index, v-if, v-else, v-model, .length
- key value pairs (commented out), or key, value & index

### Project: lists-cond-05-removing-list-items

- v-model, v-if, v-else,
- key value pairs (commented out), or key, value & index
- remove list item using splice

### Project: lists-cond-06-lists-keys

- v-model, v-if, v-else,
- key value pairs (commented out), or key, value & index
- remove list item using splice and key attribute for unique identifier (unique id)
- \@click.stop

### Project: lists-cond-assignment-problem

- v-for and v-if practice
- toggle show/hide list

---

## Section 4: Course Project: The Monster Slayer Game

### Project: prj-monster-game

- inline styles, v-if, v-else
- :disabled, v-for, :class,
- using a jsObject
- adding the object to a list and reading the object properties

---

## Section 5: Vue: Behind The Scenes

- Mostly theory and examples in this section

### Project: behind-scenes-02-vue-reactivity-deep-dive

- how Vue works under the hood with JS Proxy

### Project: behind-scenes-03-one-app-vs-multiple-apps

- mounting multiple vue app templates

### Project: behind-scenes-05-working-with-refs

- ref attribute
- $refs

### Project: behind-scenes-06-vue-app-lifecycle-practice

- Vue app lifecycle
- beforeCreate(), created(), beforeMount(), mounted(), beforeUpdate(), updated(), beforeUnmount(), unmounted()

---

## Section 6: Introducing Components

- Vue Components - just introducing the concept of components

### Project: cmp-intro-03-introducing-components

- basics to understand how components work
- using the template property and html code with haptics ``

---

## Section 7: Conventional Vue Project Setup & Vue CLI Workflow

- to create new project using the Vue CLI, open a cmd terminal from the vue app directory, and enter:

- `vue create APPNAME`
- to start the app (or start the development server), open a cmd terminal from the vue app directory, and enter:

- `npm run serve`

- in our new vue app, we don't need to declare `Vue.createApp({});` anymore as the new app comes with this import and mount code predfined:

```
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app');
```

### Project: vue-cli-01-a-new-vue-project

- standard vue project setup and file structure, template tag, style tag, script tag,
- App.vue, /components, main.js

---

## Section 8: Component Communication

### Project: cmp-communication-01-starting-setup

I coded along up to a point

- props => passing data from a parent component to a child component
- unidirectional dataflow => this is a vue concept that means once data is passed down from the component via props, that data cannot then be changed/mutated from inside the component. Trying to do this will result in an "unexpected mutation of **prop_name**" error

- validating props
- explicit vs implicit prop declarations -> prop type, prop required
- In general, you can learn all about prop validation in the official docs: https://v3.vuejs.org/guide/component-props.html. Specifically, the following value types (type property) are supported:
  String
  Number
  Boolean
  Array
  Object
  Date
  Function
  Symbol

But type can also be any constructor function (built-in ones like Date or custom ones).

- use the v-bind: or : for short-hand to accept non-string values for your component's custom attribute
  eg: v-bind:isFavorite="true" or :isFavorite="true"
- $emit() => custom events -> which is passing data from child to parent (other way around to props)

- 2 important concepts that are very well and briefly explained on the "adv-props.pdf" document:
- Prop Fallthrough and
- Binding All Props on a Components

- @submit.prevent on a form element => to prevent the default browser behaviour when submitting a form (reload page)

### Project: cmp-communication-07-demo-adding-more-component-communication

contains code up to the practice assignment

### Project: cmp-communication-assignment-problem

my solution to the assignment at the time

### Project: cmp-communication-assignment-solution

Max's solution

- notice in these two above projects Max and my solution handle the number validation of the user input differently

### Project: cmp-communication-08-a-potential-problem-starting-setup

### Project: cmp-communication-09-provide-inject-for-functions

- provide and inject => to avoid passing props through several components
- but we always have parent-child communication, never sibling-communication

---

## Section 9: Diving Deeper Into Components

- Component registration & styles - components can be registered globally or locally. Prefer local. Same with styles.
- Slots
- Dynamic components
- Teleport
- Style Guide

### Project: cmp-adv-06-scoped-slots

- slot props
- scoped slots

### Project: cmp-adv-10-moving-to-a-different-folder-structure

- scoped style tags
- slot tags
- custom slots
- slot props
- scoped slots
- dynamic components
- keep-alive component
- teleport component

- Folder structure => see https://v2.vuejs.org/v2/style-guide/

---

## Section 10: Course Project: The Learning Resources App

A Vue.JS application that allows the user to dynamically create cards on a page that have hyperlinks to their desired resources with a title and description.
