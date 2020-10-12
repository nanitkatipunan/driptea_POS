<template>
    <div class="container">
        <center>
            <img style="height: 150px; margin-top: 8%;" :src="image">
        </center>
        <center>
            <div class="containerWidth">
                <i><span v-if="errorMessage !== null" class="text-danger text-center">{{errorMessage}}</span></i>
                <form>
                    <div class="form-group">
                        <label for="userName">Username:</label><br>
                        <i><span v-if="errorMessage2 !== null" class="text-danger text-center">{{errorMessage2}}</span></i>
                        <input v-model="userName" v-on:keyup="validate('userName')" type="text" class="form-control" id="userName">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label><br>
                        <span v-if="errorMessage3 !== null" class="text-danger text-center">{{errorMessage3}}</span>
                        <input v-model="password" v-on:keyup="validate('password')" type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btnRegister" @click="login">Login</button>
                </form>
            </div>
        </center>
    </div>
</template>
<style scoped>
img{
    cursor: default;
}
span{
    font-size: 12px;
}
hr{
    border: 1px solid #17D817;
}
.termsCondition{
    margin-top: 6%;
    font-size: 15px;
    text-align: center;
}
.form-control{
    border: 1px solid #17D817;
    border-radius: 5px;
    width: 100%;
}
.bRegister{
    color: #0A8C0F;
    cursor: pointer;
}
p{
    font-size: 20px;
}
.btnRegister{
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: #17D817;
    font-weight: bold;
    width: 100%;
}
.containerWidth{
    width: 30%;
    text-align: left;
    margin-left: 0px !important;
    margin-right: 0px !important;
}
@media screen and (max-width: 600px) {
    .containerWidth{
        text-align: left;
        width: 100%;
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
}
@media screen and (max-width: 900px) {
    .containerWidth{
        text-align: left;
        width: 70%;
    }
}
@media screen and (max-width: 1000px) {
    .containerWidth{
        text-align: left;
        width: 60%;
    }
}
</style>
<script>
import ROUTER from '../router'
import AUTH from '../services/auth'
import image from '../../assets/logo.png'
import { validate } from 'json-schema';
export default {
    name: "app",
    data(){
        return {
            image: image,
            userName: '',
            password: '',
            errorMessage: null,
            errorMessage2: null,
            errorMessage3: null
        }
    },
    mounted(){
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        },
        login(){
            validate('userName')
            validate('password')
            let parameter = {
                name: this.userName,
                password: this.password,
            }
            if(this.userName === '' && this.password === ''){
                this.errorMessage = 'Please fill in all required fields'
            }else{
                this.authenticate(this.userName, this.password)
            }
        },
        authenticate(name, password) {
            let credentials = {
                name: name,
                password: password
            }
            this.$axios.post(AUTH.url + 'login', credentials).then(response => {
                AUTH.setToken(response.data.token)
                AUTH.authenticateForAll()
            }).catch(err => {
                if(err.response.status === 400){
                    this.errorMessage = 'Invalid credentials!'
                }
            })
        },
        validate(input){
            this.successMessage = null
            if(input === 'userName') {
                this.errorMessage2 = null
                if(this.userName === ''){
                    this.errorMessage2 = 'Username is required.'
                } else {
                    this.errorMessage2 = null
                }
            } else if(input === 'password') {
                this.errorMessage3 = null
                if(this.password === ''){
                    this.errorMessage3 = 'Password is required.'
                } else {
                    this.errorMessage3 = null
                }
            } else{
                this.errorMessage = null
                this.errorMessage = 'Please fill in all required fields.'
            }
        },
    }
}
</script>



