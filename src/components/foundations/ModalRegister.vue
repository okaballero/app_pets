<template>
    <div>
        <div class="modal fade" id="register_foundation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Registro fundación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <AlertsForm :type_alert=" type_alert " :msg=" msg_alert"></AlertsForm>
                    <form method="post" action="url_link_donde_recibe datos">
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nombre:</label>
                        <input type="text" class="form-control" v-model="inputs.name">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Dirección:</label>
                        <input type="text" class="form-control" v-model="inputs.address">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Teléfono:</label>
                        <input type="text" class="form-control" v-model="inputs.phone">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Correo institucional:</label>
                        <input type="text" class="form-control" v-model="inputs.email_foundation">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nombre de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.name_contact">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Teléfono de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.phone_contact">
                    </div>

                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Correo de contacto:</label>
                        <input type="text" class="form-control" v-model="inputs.email_contact">
                    </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="save_register()">Registrar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AlertsForm from '../general/AlertsForm.vue'
export default{
    name: 'ModalRegister',
    components:{
        AlertsForm
    },
    data(){
        return {
            inputs:{
                name: '',
                address: '',
                phone: '',
                email_foundation: '',
                name_contact: '',
                phone_contact: '',
                email_contact: ''
            },
            type_alert: '',
            msg_alert: ''
        }
    },
    methods:{
        save_register(){
            console.log('llegaron los parametros', this.inputs)
            if(this.inputs.name == ''){
                this.type_alert = 'error'
                this.msg_alert= 'El campo nombre de fundación es requerido'
                console.log('El campo nombre de fundación es requerido');
                return;
            }

            if(this.inputs.address == ''){
                console.log('El campo dirección de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo dirección de fundación es requerido'
                return;
            }

            if(this.inputs.phone == ''){
                console.log('El campo telefono de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo teléfono de fundación es requerido'
                return;
            }

            if(this.inputs.email_foundation == ''){
                console.log('El campo correo de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo correo de fundación es requerido'
                return;
            }

            if(this.inputs.name_contact == ''){
                console.log('El campo nombre de contacto de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo nombre de contacto de fundación es requerido'
                return;
            }

            if(this.inputs.phone_contact == ''){
                console.log('El campo telefono de contacto de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo teléfono de contacto de fundación es requerido'
                return;
            }

            if(this.inputs.email_contact == ''){
                console.log('El campo email de contacto de fundación es requerido');
                this.type_alert = 'error'
                this.msg_alert= 'El campo email de contacto de fundación es requerido'
                return;
            }

            this.type_alert = 'success'
            this.msg_alert= 'El formulario esta completo y listo para enviar '
            console.log('El formulario esta completo y listo para enviar ');
            this.inputs={}
        }

    }   
}
</script>