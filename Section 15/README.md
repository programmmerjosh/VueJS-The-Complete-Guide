### Index

### Vuex ~ Global State management

- createStore
- mutations ~ to update global state ~ which is the best practices way of updating/manipulating global state.
    -> mutations must be synchronous, but with *actions*, we can use asynchronous code
- getters ~ every getter is a method
- actions ~ every action is a method (that we use to commit/execute mutations that are asynchronous)
- How to list all the computed properties that I want in a component that I will be getting from the vuex store getters

```
export default {
    computed: {
        ...mapGetters(['getter_name_here', 'another_getter_name_here'])
    }
};
```

- one can also map actions that we have defined in our vuex store
```
export default {
    methods: {
        ...mapActions(['action_name_here', 'another_action_name_here'])
    }
};
```

- setup modules ~ as our vuex store grows in size, we can use modules to manage the organisation of our store.
    -> important to keep in mind that the state object of a module is not global, but mutations, getters, and actions are global.
    -> you can use namespaced: true to make all your module's getters, mutations, and actions local to their module ~ this would 
    only be needed for larger applications where you might have name clashes across modules.

 