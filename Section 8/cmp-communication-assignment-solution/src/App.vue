<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: "Max Schwarzmüller",
          age: 31,
        },
      };
    },
    methods: {
      setUserData(name, age) {
        this.user = {
          name: name,
          age: +age, // putting a + here, is a way of declaring that this is should be a number value and not a string
        };
      },
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
  }
</style>
