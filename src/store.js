import { reactive } from "vue";
export const store = reactive({
    cardList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    
    curIndex: 0,
    scelta:""
    
})