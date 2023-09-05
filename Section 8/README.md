### Index

## Component Communication

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
