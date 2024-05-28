<template>
    <div>
    <button> {{ (type_btn == 'save' ) ? 'Guardar':'sin acción' }}</button>
    </div>
</template>

<script>
export default {
  name: 'ButtonAction',
  props: {
    type_btn: String
  }
}
</script>