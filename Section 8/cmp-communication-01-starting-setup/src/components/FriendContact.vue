<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
    // alternative props formats:
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        // explicit/detailed prop declaration
        type: String,
        required: true,
      },
      phoneNumber: String, // implicit prop declaration
      emailAddress: String,
      isFavorite: {
        type: Boolean,
        required: false,
        // default: "0", // optional format 1
        // default: function () {}, // optional format 2
        // validator: function (value) {
        //   return value === "1" || value === "0";
        // },
        default: false, // in this case, use v-bind:isFavorite (in component attribute) to accept boolean input instead of string
      },
    },
    // emits: ['toggle-favorite'], // this is another way to handle $emits() -> will be mostly used in this course
    emits: {
      // you can make emits an object as well if you wanted to use validation
      "toggle-favorite": function (id) {
        // this level of validation is probably not always necessary, but worth noting
        if (id) {
          return true;
        }
        console.warn("id is missing");
        return false;
      },
    },
    data() {
      return {
        detailsAreVisible: false,
        // notice we're setting isFavorite to a new property so that we can change/manipulate friendIsFavorite. Because of unidirectional dataflow, we cannot change.manipulate the isFavorite prop
        // friendIsFavorite: this.isFavorite,
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit("toggle-favorite", this.id); // here we are emitting our own custom event.
        // it's also convention to use kebab-case for event names
        // we can actually add as many parameters as we want/need
        // this is one way to handle $emits() - the other way is arguably better
      },
    },
  };
</script>
