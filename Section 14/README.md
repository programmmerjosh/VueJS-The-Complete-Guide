### Index

### Animations and transitions

- how to setup animations (keyframes, transitions, transform).
- <transition> componenet (only one active component can be visible/active inside the DOM at one particular time). So, we can use a v-if/v-else condition (mode="in-out" or mode="out-in")
- .v-enter-from
- .v-enter-active
- .v-enter-to
- .v-leave-from
- .v-leave-active
- .v-leave-to
- building JS transitions
- enter-cancelled & leave-cancelled: to avoid forward and reverse animations being executed at the same time
- :css="false" -> this tells the compiler that we are not going to use css transitions (if we are creating our transitions with JS only). This can improve performance
- <transition-group> & the -move animation class
- animate transitions between routes

