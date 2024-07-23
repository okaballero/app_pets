<template>
    <div class="sidebar">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><router-link to="/admin/users">Usuarios</router-link></li>
    <li><a href="#" @click="CambiaNombre()">Configuración</a></li>
    <li><a href="">Ayuda</a></li>
    <li><a @click="destroySession()">Cerrar sesión</a></li>
  </ul>
</div>

</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['userSession']),        
    },
    name: 'SideBar',
    props: {
        type_btn: String
    },
    methods:{
        ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
        destroySession(){            
            this.clearUserSession()
            
            this.$router.push('/');
        },
        CambiaNombre(){
            this.userSession.name = 'Gerardo'
        }
    }
    
}
</script>

<style>
    /* Estilos para el sidebar */
    .sidebar {
        position: fixed;
        top: 5em;
        left: 0px;
        height: 100%;
        width: 250px;
        background-color: #dfeff4;
        padding-top: 20px;
    }
    
    .sidebar ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .sidebar ul li {
      padding: 10px 15px;
      border-bottom: 1px solid #4e545c; /* Línea divisoria entre elementos */
    }
    
    .sidebar ul li a {
      color: #000; /* Color del texto */
      text-decoration: none;
    }
    
    .sidebar ul li a:hover {
      color: #7c39a9; /* Color del texto al pasar el mouse */
    }
    
    /* Estilos para el contenido principal */
    .content {
      margin-left: 250px; /* Ajuste del margen para dejar espacio para el sidebar */
      padding: 20px; /* Espacio alrededor del contenido */
    }
  </style>

