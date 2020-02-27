<template>
  <div class="sign-up">
  <h3>Crear una nueva cuenta</h3>
  <input type="text" placeholder="Email"><br>
  <input type="Password" placeholder="Password"><br>
  <button>Regístrate</button>
  <span>o volver a iniciar sesión</span>
  </div>
</template>

<script>
    export default {
        name: 'signUp',
        data(){
            return{};
        },
        methods: {}
    }
</script>
<style scoped>
    .signUp{
        margin-top:40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>