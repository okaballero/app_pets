<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ButtonAction type_btn="save_p" />
    
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ButtonAction from '@/components/ButtonAction.vue';

export default {
  name: 'HomeView',
  components: {
    
    ButtonAction
  }
}
</script>
