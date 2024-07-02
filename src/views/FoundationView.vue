<template>
  <div>
    <h1> Fundaciones</h1>
    <div class="row">
      <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
        <p> ¿Quieres ser parte de nuestra red de angeles?
          <span @click="openModalRegister()" class="" style="font-weight: bold; cursor: pointer;">registrate </span>
        </p>
      </div>
      <ModalRegisterVue />
    </div>
    <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <!-- <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> -->
    </div>
  
  </div>
</template>

<script>
import ModalRegisterVue from '@/components/foundations/ModalRegister.vue'
import { Modal } from 'bootstrap'

export default {

  name: 'FoundationView',
  components: {
    ModalRegisterVue
  },
  data() {
    return {
      products: []
    }
  },
  created() {
  },
  methods: {
    openModalRegister() {

      //register_foundation
      const modalElement = document.getElementById('register_foundation')
      const modal = new Modal(modalElement)
      modal.show()
      console.log('debe abrir una modal')
    }
  }
}
</script>