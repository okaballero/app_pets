<template>
  <div>
    <NavBar></NavBar>

    <div class="container-fluid" v-show="userSession">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2">
          <SideBar></SideBar>
        </div>

        <!-- Contenido principal -->
        <div class="col-md-10">
          <div class="container mt-4">
            <!-- Router view para el contenido dinámico -->
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <div class="container text-center" v-show="!userSession">
    
      <div class="container">
        <router-view/>
      </div>

    </div>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import NavBar from '@/components/site/NavBar.vue'
import SideBar from '@/components/site/SideBar.vue'
export default {
  components:{
    NavBar,
    SideBar
  },
  mounted(){        
        this.loadUserSession();        
  },
  computed: {
        ...mapState(['userSession']),        
  },
  methods: {
    ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
