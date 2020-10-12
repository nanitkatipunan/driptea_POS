<template>
    <div class="container">
        <center>
            <img style="height: 150px; margin-top: 5%;" :src="image">
            <p>Register to <b class="bRegister" @click="redirect('/')">Driptea</b></p>
        </center>
        <center>
            <div class="containerWidth">
                <i><span v-if="errorMessage7 !== null" class="text-danger text-center">{{errorMessage7}}</span></i>
                <form>
                    <div class="form-group">
                        <label for="userType">Account Type:</label><br>
                        <i><span v-if="errorMessage8 !== null" class="text-danger text-center">{{errorMessage8}}</span></i>
                        <input v-model="userType" v-on:keyup="validate('userType')" type="text" class="form-control" id="userType">
                    </div>
                    <div class="form-group">
                        <label for="userName">Username:</label><br>
                        <i><span v-if="errorMessage !== null" class="text-danger text-center">{{errorMessage}}</span></i>
                        <i><span v-if="errorMessage2 !== null" class="text-danger text-center">{{errorMessage2}}</span></i>
                        <i><span v-if="errorMessage3 !== null" class="text-danger text-center">{{errorMessage3}}</span></i>
                        <input v-model="userName" v-on:keyup="validate('userName')" type="text" class="form-control" id="userName">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label><br>
                        <span v-if="successMessage !== null" class="text-success text-center">{{successMessage}}</span>
                        <i><span v-if="errorMessage4 !== null" class="text-danger text-center">{{errorMessage4}}</span></i>
                        <i><span v-if="errorMessage5 !== null" class="text-danger text-center">{{errorMessage5}}</span></i>
                        <input v-model="password" v-on:keyup="validate('password')" type="password" class="form-control" id="password">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm password:</label><br>
                        <i><span v-if="errorMessage6 !== null" class="text-danger text-center">{{errorMessage6}}</span></i>
                        <input v-model="confirmPass" v-on:keyup="validate('confirmPass')" type="password" class="form-control" id="confirmPassword">
                    </div>
                    <button type="submit" class="btn btnRegister" @click="register">Register</button>
                </form>
            </div>
        </center>
        <div v-if="showSuccess" id="modal" class="blurred-background">
            <div class="alert-box">
                <h5 class="text-success">Registered Successfully</h5><hr>
                <p class="modalFont">Username: {{userName}}</p>  
                <p class="modalFont">Password: {{password}}</p>
                <button class="btn btn-primary btnModal" @click="hide">OK</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.btnModal{
    width: 100px;
}
.modalFont{
    font-size: 15px;
}
.alert-box {
    background: white;
    display: inline-block;
    margin-top: 20%;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 10px;
    transition: .2s;
}
.blurred-background {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    background: rgba(54, 54, 54, .7);
}
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
export default {
    name: "app",
    data(){
        return {
            userType: null,
            image: image,
            userName: '',
            password: '',
            confirmPass: '',
            successMessage: null,
            errorMessage: null,
            errorMessage2: null,
            errorMessage3: null,
            errorMessage4: null,
            errorMessage5: null,
            errorMessage6: null,
            errorMessage7: null,
            errorMessage8: null,
            showSuccess: false,
            newPass: null,
            newName: null
        }
    },
    methods: {
        hide(){
            this.showSuccess = false
        },
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        },
        register(){
            this.validate('userType')
            this.validate('userName')
            this.validate('password')
            this.validate('confirmPass')
            let parameter = {
                account_type: this.userType.toUpperCase(),
                name: this.userName,
                password: this.password,
                password_confirmation: this.confirmPass,
            }
            if(this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null){
                this.$axios.post(AUTH.url+'register', parameter).then(response => {
                    this.showSuccess = true
                    console.log(response.data)
                }).catch(error => {
                    if(error.response.status === 300){
                        this.errorMessage3 = 'Username already exist'
                    }
                })
            }else{
                this.errorMessage = 'Please fill up all fields'
            }
        },
        validate(input){
            this.successMessage = null
            let reqWhiteSpace = /\s/
            if(input === 'userName') {
                this.errorMessage = null
                if(reqWhiteSpace.test(this.userName)){
                    this.errorMessage = 'Username should not contain a space.'
                } else if(this.userName === ''){
                    this.errorMessage2 = 'Username is required.'
                } else if(this.userName.length < 6){
                    this.errorMessage3 = 'Username must be atleast 6 characters'
                } else {
                    this.errorMessage = null
                    this.errorMessage2 = null
                    this.errorMessage3 = null
                }
            } else if(input === 'userType') {
                this.errorMessage8 = null
                if(this.userType === ''){
                    this.errorMessage8 = 'Usertype is required.'
                } else if(this.userType.toLowerCase() !== 'admin' && this.userType.toLowerCase() !== 'cashier'){
                    this.errorMessage8 = 'Usertype should only be Admin or Cashier.'
                } else {
                    this.errorMessage8 = null
                }
            } else if(input === 'password') {
                this.errorMessage4 = null
                if(this.password.length < 8){
                    this.errorMessage4 = 'Password must be atleast 8 characters.'
                }else if(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)){
                    this.successMessage = 'Strong password.'
                    this.errorMessage4 = null
                    this.errorMessage5 = null
                } else {
                    this.errorMessage5 = 'Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.'
                }
            } else if(input === 'confirmPass') {
                this.errorMessage6 = null
                this.successMessage = null
                if(this.password.localeCompare(this.confirmPass) !== 0){
                    this.errorMessage6 = 'Password did not match.'
                } else {
                    this.errorMessage6 = null
                }
            } else if(this.userType !== null && this.userName.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null){
                this.errorMessage = null
            }else{
                this.errorMessage7 = 'Please fill in all required fields.'
                this.errorMessage7 = null
            }
        }
    }
}
</script>
