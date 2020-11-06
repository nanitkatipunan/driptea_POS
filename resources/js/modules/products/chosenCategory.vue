<template>
<div class="sudlanan">
    <center>
        <h1 style="margin-top: 2%;">{{chosenCat}} Milktea</h1>
        <v-row v-if="data !== null && data.length > 0">
            <v-col cols="3" v-for="(item, index) in data" :key="index">
                <v-card class="pa-2">
                    <v-img :src="item.image" @click="redirect(item.id)"></v-img>
                    <p class="pa-2 overline">{{item.productName}}</p>
                </v-card>
            </v-col>
        </v-row>

        <div v-else class="secRow">
            <empty :title="'No Product Yet!'"></empty>
        </div>
        <loading v-if="loadingShow"></loading>
    </center>
</div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 1px;
}

.noImage {
    margin-top: 10%;
    height: 200px;
    width: 30%;
}

.imgItem {
    height: 200px;
    width: 80%;
}

.row {
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}

.secRow {
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}

.sudlanan {
    background-color: white;
    height: 92.8vh;
    overflow: hidden;
    color: white;
    font-family: Roboto Slab;
}

.imageSize {
    height: 250px;
    margin-top: 2%;
}
</style>

<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import empty from '../../basic/empty.vue'
import loading from '../../basic/loading.vue';
export default {
    data() {
        return {
            chosenCat: this.$route.params.itemChosen,
            data: null,
            loadingShow: false
        }
    },
    mounted() {
        this.retrieveProduct()
    },
    components: {
        empty,
        loading
    },
    methods: {
        retrieveProduct() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveProduct', {
                type: this.chosenCat
            }, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.data = res.data.product
                this.loadingShow = false
            })
        },
        redirect(param) {
            ROUTER.push('/order/product/' + param).catch(() => {})
        }
    }
}
</script>
