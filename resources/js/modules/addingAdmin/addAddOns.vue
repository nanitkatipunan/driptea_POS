<template>
    <div class="div">
        <div>
            <center><br><br>
                <h1>Add Ons</h1>
                <button type="button" class="btn btn-primary" id="buttonAdd" @click="showAddOns">+ Add ons</button>
            </center>
        </div><br>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-bordered table-striped" id="myTable">
                <thead class="thead-light">
                    <tr class="header">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr v-for="(data, index) in datas" :key="index">
                            <td scope="row">{{data.id}}</td>
                            <td>{{data.addons_name}}</td>
                            <td>{{data.addons_price}}</td>
                            <td>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <!-- Modal -->
        <div v-if="show" id="modal" class="blurred-background">
            <div class="alert-box">
                <center>
                    <h1>Adding Add-ons</h1>
                </center><hr>
                <form action>
                    <div class="form-group">
                        <label for="addOns">Add-ons :</label>
                        <br>
                        <input v-model="addOns" type="text" class="form-control" id="addOns">
                    </div>
                    <div class="form-group">
                        <label for="price">Price :</label>
                        <br>
                        <input v-model="price" type="number" min="1" class="form-control" id="price">
                    </div>
                </form>
                <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                <button type="button" class="btn btn-primary" @click="addAddOns">Add</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
hr{
    border: 1px solid gray;
}
label{
    font-size: 20px !important;
}
.blurred-background {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    text-align: center;
    background: rgb(54, 54, 54, .7);
}
.alert-box {
    width: 400px;
    background: white;
    display: inline-block;
    margin-top: 180px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data() {
        return {
            addOns: "",
            price: "",
            datas: [],
            show: false
        };
    },
    mounted() {
        // this.retrieveAddOns();
    },
    methods: {
        showAddOns(){
            this.show = true
        },
        hide(){
            this.show = false
        },
        redirect(route) {
            ROUTER.push(route).catch(() => {});
        },
        addAddOns() {
            let param = { addOns: this.addOns, price: this.price };
            console.log(param);
            this.$axios.post(AUTH.url + "addingAddOns", param).then(response => {
                console.log("myData", response.data);
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns").then(response => {
                this.datas = response.data.addons;
                console.log(this.datas);
            });
        }
    }
}
</script>
<style scoped>
.table {
    width: 70%;
    margin-left: 15%;
    margin-top: 5%;
    margin-bottom: 5%;
}
.my-custom-scrollbar {
    position: relative;
    height: 500px;
    width:70%;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: contents;
}
.div {
    border-style: solid;
    margin-top: 5%;
    margin-bottom: 5%;
}
#buttonAdd {
    float: right;
    margin-right: 15%;
}
</style>
