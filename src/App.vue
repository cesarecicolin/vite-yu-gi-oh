<script >
import axios from "axios"
import {store} from "./store.js"
import Appheader from "./components/Appheader.vue"
import AppMain from "./components/AppMain.vue"
export default{
    data() {
        return {
            store
        };
    },
    created() {
        axios.get(this.store.apiUrl)
            .then((resp) => {
            this.store.cardList = resp.data.data;
            console.log(store.cardList);
        });
    },
    components: { Appheader, AppMain }
}
</script>

<template>
 <Appheader />
 <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
