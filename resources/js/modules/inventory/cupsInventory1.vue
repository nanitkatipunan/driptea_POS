<template>
    <div>
        <div>
            <input type="text" placeholder="Category">
            <input type="text" placeholder="product">
        </div>
        <div>
            <table>
                <thead v-for="(item, index) in data" :key="index">
                   <th>{{item}}</th>
                </thead>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:['date','Classic','Milktea']
        }
    }
}
</script>
