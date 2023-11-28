<script >
import axios from "axios"
import {store} from "./store.js"
import Appheader from "./components/Appheader.vue"
import AppMain from "./components/AppMain.vue"
import Appselect from "./components/Appselect.vue"
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
    components: { Appheader, AppMain, Appselect },
    methods:{
        cerca(){
            console.log("cerca");
            axios
            .get(this.store.apiUrl,{
                params: {
                    archetype: this.store.scelta,
                },
            })
            .then((resp) => {
                this.store.cardList = resp.data.data
            })
        }

    }
}
</script>

<template>
 <Appheader />
 <Appselect @search="cerca" />
 <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
