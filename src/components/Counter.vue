<template>
  <div>
    <h1>Counter = {{ counter }}</h1>
    <button id="add" @click="increment">Increment</button>
    <button id="sub" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
    decrement() {
      this.counter -= 1;
    },
  },
};
</script>
