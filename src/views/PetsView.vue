<template>
    <div> 
        <h1>  Mascotas </h1>
    </div>
</template>

<script>
export default {
  name: 'PetsView',
  data() {
    return {
      products: []
    }
  },
  created() {
    let variable_name = localStorage.getItem('name');
    console.log('variable_name:: ', variable_name)
  }
}
</script>