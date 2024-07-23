<template>
    <div class="row mt-5" >
        <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div>
                <img src="@/assets/jugador.png" id="avatar_profile" width="180">
            </div>
            <input type="file" @change="onFileChange"  id="inputImg" style="display:none"/>
            <button @click="uploadImage" class="btn btn-primary mt-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                    <defs>
                        <mask id="ipTAddPic0">
                            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4">
                                <path d="M38 21v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h18.364" />
                                <path fill="#555" d="M12 31.03L18 23l3 3l3.5-5.5L32 31.03z" />
                                <path d="M34 10h8m-4.005-4.205v8" />
                            </g>
                        </mask>
                    </defs>
                    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAddPic0)" />
                </svg>
                Subir foto</button>
        </div>

        <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nombre:</label>
                        <input type="text" class="form-control" v-model="inputs.name">
                    </div>


                    <div class="mb-3" v-show="inputs.role_id== 2">
                        <label for="recipient-name" class="col-form-label">Dirección:</label>
                        <input type="text" class="form-control" v-model="inputs.address">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Teléfono:</label>
                        <input type="text" class="form-control" v-model="inputs.phone">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                            <span v-show="inputs.role_id== 1"> Correo: </span> 
                            <span v-show="inputs.role_id== 2">  Institucional: </span> 
                            
                        </label>
                        <input type="text" class="form-control" v-model="inputs.email">
                    </div>

                    <div class="mb-3" >
                        <label for="recipient-name" class="col-form-label">Nombre de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.contact_name">
                    </div>

                    <div class="mb-3" v-show="inputs.role_id== 2">
                        <label for="recipient-name" class="col-form-label">Apellido del contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.contact_last_name">
                    </div>

                    <div class="mb-3" v-show="inputs.role_id== 2">
                        <label for="recipient-name" class="col-form-label">Teléfono de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.contact_pone">
                    </div>

                    <div class="mb-3" v-show="inputs.role_id== 2">
                        <label for="recipient-name" class="col-form-label">Correo de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.contact_email">
                    </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'UserDetailView',
    computed: {
        ...mapState(['userSession'])
    },
    data(){
        return{
            inputs:{},
            img_base_64: '',
            user_id: null
        }
    },
    mounted(){
        this.loadUserSession();
        this.user_id = this.$route.params.id;
        this.getUser();
    },
    methods:{
        ...mapActions(['saveUserSession', 'loadUserSession', 'clearUserSession']),
        async getUser(){
            let url_api =  `http://127.0.0.1:8000/api/admin/user/${this.user_id}`;
            const response = await fetch(url_api,{
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.userSession.token}`  
                }
            });

            if(response.ok){
                const data = await response.json();
                console.log(data)
                this.inputs = data.data
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
        async onFileChange(event){
            console.log('se agrego una imagen para el perfil', event)

            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.img_base_64 = e.target.result;
                console.log(this.img_base_64)
                let avatar = document.getElementById('avatar_profile');
                avatar.src = this.img_base_64;
                this.UploadImage();
            }
            reader.readAsDataURL(file);
        },
        async UploadImage(){
            let params = {'img_profile':this.img_base_64 }
            let url_api = `http://127.0.0.1:8000/api/admin/user-avatar/${this.user_id}`;

            const response = await fetch(url_api,{ 
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.userSession.token}`  
                },
                body: JSON.stringify(params)
            });

            const data = await response.json();
            if(response.ok){
                console.log(data)
            }else{
                console.log('ocurrio un error', data)
                this.type_alert = 'error'
                this.msg_alert= data.message
            }

        },
        uploadImage(){
            document.getElementById('inputImg').click();
        },
        destroySession(){
            this.clearUserSession()
            this.$router.push('/');
        }
    }
}
</script>