### Index

## Conventional Vue Project Setup & Vue CLI Workflow

- to create new project using the Vue CLI, open a cmd terminal from the vue app directory, and enter:
- vue create APPNAME

- to start the app (or start the development server), open a cmd terminal from the vue app directory, and enter:
- npm run serve

- in our new vue app, we don't need to declare Vue.createApp({}); anymore as the new app comes with this import and mount code predfined:

```
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app');
```

### Project: vue-cli-01-a-new-vue-project

- standard vue project setup and file structure, template tag, style tag, script tag,
- App.vue, /components, main.js
