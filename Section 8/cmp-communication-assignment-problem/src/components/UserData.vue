<!-- components/UserData.vue -->
<template>
  <section id="userData" class="inputs">
    <div class="d-block">
      <div class="space-between">
        <span class="label">Username:</span>
        <input
          class="input"
          type="text"
          v-model="username"
          @input="updatedUsername"
        />
      </div>
      <div class="space-between">
        <span class="label">Age:</span
        ><input
          class="input"
          type="tel"
          v-model.number="age"
          @input="updatedAge"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    emits: ["update-username", "update-age"],
    data() {
      return {
        username: "",
        age: 0,
      };
    },
    methods: {
      updatedUsername() {
        this.$emit("update-username", this.username);
      },
      updatedAge() {
        this.$emit("update-age", this.age);
      },
    },
  };
</script>
