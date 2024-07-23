<template>
    
    <div class="">
      
      <div class="container">
        <div class="row mt-5 " >
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 p-3" >
                <h1>Acceso Login</h1>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                <AlertsForm :type_alert=" type_alert " :msg=" msg_alert"></AlertsForm>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="correo" v-model="email">
                </div>
            </div>

            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>

            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>

            <div class="col-12 col-sm-4 col-md-4 col-lg-4">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4" > 
                &nbsp;
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <button type="submit" class="btn btn-primary" @click="login()">Entrar</button>
            </div>
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  import AlertsForm from '@/components/general/AlertsForm.vue'
  import { mapState, mapActions } from 'vuex';
  
  export default {
        computed: {
            ...mapState(['userSession'])
        },
        name: 'LoginView',
        components:{
                AlertsForm
        },
        data() {
            return {
                email: '',
                password: '',
                type_alert: '',
                msg_alert:''
            }
        },
        mounted(){
            this.loadUserSession();
        },
        created(){
            
            if(this.userSession !== null){
                this.role_validation(this.userSession.role)
            }else{
                console.log('no hay sesion ')
            }
        },
        methods:{
            ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
            async login(){
                if(this.email == ''){
                    console.log('debes agregregar un correo');
                    return
                }

                if(this.password == ''){
                    console.log('debes agregregar la contraseña');
                    return
                }


            let url_api = 'http://127.0.0.1:8000/api/gen_token';

            let params  = { 'email': this.email, 'password': this.password };

            const response = await fetch(url_api,{ 
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            const data = await response.json();
            if(response.ok){
                this.saveUserSession(data.resp);
                this.role_validation(data.resp.role)
            }else{
                console.log('ocurrio un error', data)
                this.type_alert = 'error'
                this.msg_alert= data.message
            }
            
              
                
                // window.location.href = 'mascotas';
            }, 
            async role_validation(role){
                console.log('llego el role::--', localStorage.role_id)
                if(role === 1 ){
                    // enviarlo al dashboard de admin
                    this.$router.push('/admin/dashboard');
                }else if(role === 2){
                    // enviarlo al dashboard de asociacion 
                    this.$router.push('/asociacion/dashboard');
                }else if(role === 3){
                    // enviarlo al dashboard de adoptante
                    this.$router.push('/adoptante/dashboard');
                }
            },
            logout() {
                this.clearUserSession();
            }
        }
    }
  </script>
  