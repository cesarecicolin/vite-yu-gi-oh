<script>
import { store } from '../store';
export default {
    data(){
      return{
        store
      }
    }
}
</script>

<template>
<div class="d-flex mb-3 ">
    <select class="form-select" v-model="this.store.scelta" >
  <option selected>Open this select menu</option>
  <option value="Alien"> Alien</option>
  <option value="Ally of Justice">Ally of Justice</option>
  <option value="Ancient Gear">Ancient Gear</option>
</select>
<button class="btn btn-primary" @click="$emit('search')">Cerca</button>
</div>

</template>

<style lang="scss" scoped>
select{
  width: 300px;
}
</style>