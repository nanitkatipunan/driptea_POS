<template>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.retrieve()

    },
    methods:{
        retrieve(){
             this.$axios.post(AUTH.url + "retrieveSales").then(response => {
                    
             });

        }

    }
}
</script>