<template>
    
    <div class="">
      
      <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                Acceso Login
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="correo" v-model="email">
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <button type="submit" class="btn btn-primary" @click="login()">Entrar</button>
            </div>
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  
  
  export default {
        name: 'LoginView',
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods:{
            async login(){
                if(this.email == ''){
                    console.log('debes agregregar un correo');
                    return
                }

                if(this.password == ''){
                    console.log('debes agregregar la contraseña');
                    return
                }


            let url_api = 'http://127.0.0.1:8001/api/gen_token';

            let params  = { 'email': this.email, 'password': this.password };

            const response = await fetch(url_api,{ 
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(params)
            });


                
                const data = await response.json();
                
                localStorage.setItem('name', data.resp.name )
                localStorage.setItem('email', data.resp.email )
                localStorage.setItem('token', data.resp.token )
                window.location.href = 'mascotas';
            }
        }
    }
  </script>
  