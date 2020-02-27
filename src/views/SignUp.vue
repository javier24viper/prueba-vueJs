<template>
  <div class="sign-up">
  <h3>Crear una nueva cuenta</h3>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="Password" v-model="password" placeholder="Password"><br>
  <button @click="signUp">Regístrate</button>
  <span>o volver a inicio de sesión <router-link to="/login">volver</router-link></span>
  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data(){
            return{
                email:'',
                password:''
            };
        },
        methods: {
            signUp: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    ()=>{
                        //alert('Tu cuenta ha sido creada '+user.message)
                        this.$router.replace('home')
                    },
                    (err)=>{
                        alert('error '+err.message)
                    }
                );
            }
        }
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