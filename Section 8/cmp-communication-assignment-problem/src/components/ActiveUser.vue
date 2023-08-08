<!-- components/ActiveUser.vue -->
<template>
  <section id="activeUser" class="headings">
    <div class="d-block">
      <h2 class="label">Username: {{ username }}</h2>
      <h3 class="label">Age: {{ age }}</h3>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      username: String,
      age: {
        type: Number,
        required: false,
      },
    },
    data() {
      return {};
    },
  };
</script>
