<template>
    <div class="table-responsive-md">
        <table class="table table-bordered " id="tableForCups">
            <thead>
                <tr>
                    <th colspan="2">Cups</th>
                    <th colspan="4">Incoming Cups</th>
                    <th colspan="4">Cups Onrack</th>
                    <th colspan="4">Used Cups</th>
                    <th colspan="4">Remaining Cups</th>
                </tr>
                <tr>
                <th colspan="2">Date </th>
                <th>Low Dose</th>
                <th>High Dose</th>
                <th>Over Dose</th>
                <th>Total Cups</th>
                <th>Low Dose</th>
                <th>High Dose</th>
                <th>Over Dose</th>
                <th>Total Cups</th>
                <th>Low Dose</th>
                <th>High Dose</th>
                <th>Over Dose</th>
                <th>Total Cups</th>
                <th>Low Dose</th>
                <th>High Dose</th>
                <th>Over Dose</th>
                <th>Total Cups</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item, index) in dataInDB" :key="index">
                    <td colspan="2">{{item.created_at}}</td>
                    <td>{{item.incomingLowDose}}</td>
                    <td>{{item.incomingHighDose}}</td>
                    <td>{{item.incomingOverDose}}</td>
                    <td>{{item.incomingOverDose + item.incomingHighDose + item.incomingLowDose}}</td>

                    <td>{{item.onRockLowDose + item.incomingLowDose}}</td>
                    <td>{{item.onRockHighDose + item.incomingHighDose}}</td>
                    <td>{{item.onRockOverDose + item.incomingOverDose}}</td>
                    <td>{{item.onRockLowDose + item.onRockHighDose + item.onRockOverDose + item.incomingOverDose + item.incomingHighDose + item.incomingLowDose}}</td>

                    <td>{{item.usedCupsLowDose}}</td>
                    <td>{{item.usedCupsHighDose}}</td>
                    <td>{{item.usedCupsOverDose}}</td>
                    <td>{{item.usedCupsLowDose + item.usedCupsHighDose + item.usedCupsOverDose}}</td>

                    <td>{{item.onRockLowDose - item.usedCupsLowDose}}</td>
                    <td>{{item.onRockHighDose - item.usedCupsHighDose}}</td>
                    <td>{{item.onRockOverDose - item.usedCupsOverDose}}</td>
                    <td>{{item.onRockLowDose + item.onRockHighDose + item.onRockOverDose - item.usedCupsLowDose - item.usedCupsHighDose - item.usedCupsOverDose}}

                    </td>






                   
                    
                   



                </tr>
            </tbody>

        </table>
    </div>
</template>
<style>
#tableForCups{
    margin-top:5%;
    margin-left:3%;
    width: 94%;
}
td,th{
    text-align:center
}

</style>

<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
            incomingLowDose:[],
            incomingHighDose:[],
            dataInDB:[],
            usedCups:null,
        }
    },




    mounted(){
        this.retrieveAllCups()
    },
    methods:{
        retrieveAllCups(){
            this.$axios.post(AUTH.url + "retrieveCupToDisplay").then(response => {
                this.dataInDB = response.data.retrieveCups

                response.data.retrieveups.forEach(element=>{
                    if(this.dataInDB.onRockLowDose == ''){
                        this.dataInDB.push(response.data.onRockLowDose = 0)
                    }else if(this.dataInDB.onRackHighDose == ''){
                        this.dataInDB.push(response.data.onRockHighDose = 0)
                    }
                    else if(this.dataInDB.onRackOverDose == ''){
                        this.dataInDB.push(response.data.onRockOverDose = 0)
                    }
                })
                        
               
            });
        },
    }



}
</script>

