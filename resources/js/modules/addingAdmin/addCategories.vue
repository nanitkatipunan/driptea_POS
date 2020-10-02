<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Add Prouduct Category</div>
                    <div class="card-body">
                        <div v-if="success != null && success != ''" class="alert alert-success" role="alert">
                          {{success}}
                        </div>
                        <form @submit="formSubmit" enctype="multipart/form-data">
                            <center>
                                <div class="form-group">
                                    <label for="pname" style="font-size: 15px; font-weight: bold">Product Category:</label>
                                    <input type="text" class="form-control" v-model="productType" required>
                                </div>
                                <!-- <label>Product image:</label> -->
                                <img :src="imageURL"><br>
                                <input type="file" class="fileStyle" v-on:change="onImageChange" required><br>
                                <button class="btn btn-success">Add Category</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
img{
    width: 250px; 
    height: 250px;
    margin-top: 2%;
}
.fileStyle{
    width: 97px;
    margin-top: 3%;
    margin-bottom: 3%;
}
.card-header{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
}
.card{
    margin-top: 5%;
    margin-bottom: 5%;
}
.form-control{
    display: inline;
    margin-top: 2%;
    width: 300px;
}
form{
    margin-top: 3%;
}
</style>

 
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data() {
        return {
            image: '',
            imageURL: null,
            output: null,
            productType: null,
            success: null
        }
    },
    methods: {
        // edit(param){
        //     this.imageURL = param.image
        // },
        onImageChange(e){
            this.image = e.target.files[0]
            // this.image = URL.createObjectURL(e.target.files[0])
            this.imageURL = URL.createObjectURL(e.target.files[0])
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            formData.append('image', this.image)
            formData.append('productCategory', this.productType)
            axios.post('/addCategory', formData, config)
            .then(function (response) {
                currentObj.success = response.data.success
                setTimeout(() => ROUTER.push('/`userDashboard`').catch(()=>{}), 1000);
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        }
    }
}
</script>
