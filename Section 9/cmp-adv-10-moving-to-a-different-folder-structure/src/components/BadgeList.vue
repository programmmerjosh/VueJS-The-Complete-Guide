<template>
  <section>
    <base-card>
      <!-- #default is shorthand for v-slot:default -->
      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<!-- notice the scoped attribute here which keeps the styles limited to the scope of this file -->
<style scoped>
  section h2 {
    margin: 0.5rem 0;
    color: #3a3a3a;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    margin-right: 1rem;
  }
</style>
