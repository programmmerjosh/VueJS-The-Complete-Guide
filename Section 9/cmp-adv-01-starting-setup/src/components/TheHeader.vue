<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- notice the scoped attribute on the style tag -->
<!-- this attribute restricts the styling defined here to this file only -->
<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>
