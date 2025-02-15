### Index

### Multi-Page SPAs (Single Page Applications)

- vue-router package {createRouter, createWebHistory }, 
- <router-view>
- <router-link>
- <router-link>
- navigate programmatically ~ this.$router.push('/routename'), this.$router.forward(), this.$router.back()
- dynamic routes/paths ~ this.route.path, this.$route.params
- watch the $route object for changes
- passing params as props
- redirect paths eg. { path: '/', redirect: '/teams' }
- handle page/route not found eg. { path: '/:notFound(.*)', components: NotFound }
- nested routes ~ using the *children* property. BUT you must also define a <router-view> component in the parent component.
- query params
- controlling scroll behaviour, including savedPosition if you want the user to be able to go back to the scrolled position they were before they navigated elsewhere, when they click on the back button.
- navigation guards (for example stop a navigation if the user is not authenticated).
- router beforeEach, beforeEnter(to, from, next), next(), beforeRouteEnter(to, from, next), beforeRouteUpdate(to, from, next)
- router afterEach(function(to, from))
- BeyondEntering (route leave gaurds) ~ for example if the user might havve unsaved changes on the page, you can ask the user if they are sure they want to navigate away as they have unsaved changes. Same goes for the back button.
- meta property (which you can add a needsAuth value)

