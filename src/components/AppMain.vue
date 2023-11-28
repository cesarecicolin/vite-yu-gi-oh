<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        
        return {
            store,
            
        };
    },
    components: { AppCard }
}
</script>

<template>
<div class="container">
    <div class="row row-cols-5 g-4">
        <div class="col cece" v-for="(card, index) in store.cardList" :key=index> 
            
            <AppCard  :card = "card" />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>