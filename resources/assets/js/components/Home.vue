<template>
    <div class="container">
        <div class="card">
            <h2>{{welcome}}</h2>
            <p>We are home</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Home",
        computed:{
            welcome(){
                return this.$store.getters.welcome
            }
        }
    }
</script>

<style scoped>

</style>
