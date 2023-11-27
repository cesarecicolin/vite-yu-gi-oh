<script >
import axios from "axios"
import {store} from "./store.js"
export default{
  data(){
    return{
      store,
    }
  },
  created(){
   axios.get(this.store.apiUrl)
   .then((resp) =>{
    this.store.cardList = resp.data
   })   
  }
}
</script>

<template>
 <h1>ciao</h1>
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
