import Vue from 'vue'
import firebase from 'firebase';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let app = '';

//var firebaseConfig = {
  firebase.initializeApp({
  apiKey: "AIzaSyADbZovA4NX7cOJZ66wmINHLwWpi9a0_Cc",
  authDomain: "prueba-vue-51143.firebaseapp.com",
  databaseURL: "https://prueba-vue-51143.firebaseio.com",
  projectId: "prueba-vue-51143",
  storageBucket: "prueba-vue-51143.appspot.com",
  messagingSenderId: "277071000878",
  appId: "1:277071000878:web:f30217f9e3fe8c1f0336bf",
  measurementId: "G-EFHEZBFY64"
});
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render: h=> h(App)
    }).$mount('#app');
  }
});

/*
export const db = firebase.database();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/