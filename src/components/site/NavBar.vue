<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #dfeff4;"> 
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo_pr.png" alt="Patitas al rescate" width="80">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/asociaciones" class="nav-link">Asociaciones</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/mascotas" class="nav-link">Mascota</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/reporte_pet" class="nav-link">Reporte pet</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reporte_pet" class="nav-link">Adoptante</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/acceso" class="nav-link">Login</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link  class="nav-link"> Bienvenido {{ (userSession)?userSession.name:'' }}</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'NavBar',
    props: {
        type_btn: String
    },
    mounted(){
            this.loadUserSession();
    },
    computed: {
        ...mapState(['userSession']),        
    },
    methods:{
        ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
    }

}
</script>
