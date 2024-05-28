<template>
    <div> 
        <h1> Fundaciones</h1>
        <div class="row"> 
            <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <p> ¿Quieres ser parte de nuestra red? 
                    <span @click="openModalRegister()" class="" style="font-weight: bold; cursor: pointer;">registrate </span> </p>
            </div>

            <ModalRegisterVue/>
        </div>
    </div>
</template>

<script>
import ModalRegisterVue from '@/components/foundations/ModalRegister.vue'
import { Modal } from 'bootstrap'

export default {

  name: 'FoundationView',
  components:{
    ModalRegisterVue
  },
  data() {
    return {
      products: []
    }
  },
  created() {
  },
  methods:{
    openModalRegister(){

        //register_foundation
        const modalElement = document.getElementById('register_foundation')
        const modal = new Modal(modalElement)
        modal.show()
        console.log('debe abrir una modal')
    }
  }
}
</script>