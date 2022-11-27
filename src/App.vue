<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script>
  import MainComponent from "@/components/MainComponent";

export default {
  name: 'App',
  components:{MainComponent}
}
</script>

<style>
  @font-face {
    font-family: "poppins";
    src: url('./assets/Poppins-Regular.otf');
  }

  body,html{
    font-family: "poppins";
  }
</style>
