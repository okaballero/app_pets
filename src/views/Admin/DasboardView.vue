<template>
    <div>
        <div class="row mt-5" >
            <div class="col-12 col-md-12 col-sm-12 col-lg-12 table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Nombre de usuario </th>
                            <th> Correo </th>
                            <th> Perfil </th>
                            <th> Fecha de registro </th>
                            <th> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in list_users" :key="user.id">
                            <th> {{ user.id }} </th>
                            <th> {{ user.fullname }} </th>
                            <th> {{ user.email }} </th>
                            <th> {{ user.role_name }} </th>
                            <th> {{ formatDate(user.created_at) }} </th>
                            <th class="actions">
                                <ul>
                                    <li class="option_action">
                                        <router-link :to="`/admin/user/${user.id}`" class="btn btn-xs btn-primary" title="Editar usuario">                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z" />
                                                <path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2" />
                                            </svg>
                                        
                                        </router-link>
                                    </li>
                                    <li class="option_action">
                                        <a @click="DeleteUser(user.id)" class="btn btn-xs btn-primary" title="Eliminar usuario">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
                                                <path fill="currentColor" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </th>
                        </tr>
                    </tbody>
                </table>                
            </div>
        </div>

    </div>
</template>
    

<script>
import { mapState, mapActions } from 'vuex';
import { format } from 'date-fns';

export default  ({
    computed: {
        ...mapState(['userSession']),        
    },
    name: 'DashboardView',
    data(){
        return{
            list_users: [],
            tableOptions: {
                select: true,
                paging: true,
                searching: true,
            },
        }
    },
    mounted(){        
        this.loadUserSession();
        this.get_users();
    },
    
    methods: {
        ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
        async get_users(){
            if(!this.userSession){
                this.destroySession();
            }

            let token = this.userSession.token;
            let url_api= 'http://127.0.0.1:8000/api/admin/users';
            const response = await fetch(url_api,{ 
                method: 'GET',
                headers:{
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`  
                }
            });

            if(response.ok){
                const data = await response.json();
                this.list_users = data.resp
            }else{
                console.log(response.status)

                if(response.status == 401){
                    console.log('cerrar sesión y mandar a login');
                    this.destroySession();
                }

                if(response.status !== 401){
                    console.log('erro:::',response.statusText)
                }
            }

            
        },  
        destroySession(){
            this.clearUserSession()
            this.$router.push('/');
        },
        formatDate(date) {
           return format(new Date(date), 'dd/MM/yyyy');
        }

        
    },
    filters: {
        format_date(value, format) {
        // Implementación del filtro para formatear la fecha
        if (!value) return '';
        const date = new Date(value);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');

            switch (format) {
                case 'y-m-d':
                return `${year}-${month}-${day}`;
                // Otros formatos pueden ser implementados aquí según sea necesario
                default:
                return value;
            }
        }
    }
})
</script>



<style>
    /* Reset de estilos para quitar márgenes y paddings */
    .actions ul {
        list-style-type: none; /* Quita los puntos predeterminados de la lista */
        padding: 0; /* Quita cualquier relleno interno */
        margin: 0; /* Quita cualquier margen externo */
    }

    /* Estilos para los elementos de la lista */
    li {
        /* display: inline-block; Coloca los elementos en línea horizontal */
        margin-right: 10px; /* Espacio entre elementos (opcional) */
    }

    .option_action{
        display: inline-block; 
    }
</style>