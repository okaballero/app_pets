<template>
    <div>
        <div class="alert alert-success" role="alert" v-if="type_alert == 'success' ">
            {{ msg }}
        </div>
        <div class="alert alert-danger" role="alert" v-if="type_alert == 'error' ">
            {{ msg }}
        </div>
    </div>
</template>

<script>
export default{
    name: 'AlertsForm',
    props:{
        msg: String,
        type_alert: String
    },
    
}
</script>