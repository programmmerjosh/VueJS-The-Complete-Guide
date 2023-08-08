<!-- App.vue -->
<template>
  <section class="center">
    <div class="main">
      <user-data
        @update-username="getUsername"
        @update-age="getAge"
      ></user-data>
      <active-user
        class="labelBox"
        :username="username"
        :age="age"
      ></active-user>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        age: 0,
      };
    },
    methods: {
      getUsername(username) {
        this.username = username;
      },
      getAge(age) {
        this.age = age;
      },
    },
  };
</script>
