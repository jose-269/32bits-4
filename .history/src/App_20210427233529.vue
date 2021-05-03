<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    Nav,
  },
}
</script>