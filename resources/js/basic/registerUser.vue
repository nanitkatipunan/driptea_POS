<template>
    <div class="container">
        <center>
            <img style="height: 150px; margin-top: 1%;" :src="image" v-on:click="redirect('/')">
            <p>Register to <b class="bRegister" @click="redirect('/')">Driptea</b></p>
        </center>
        <center>
            <div class="containerWidth">
                <i><span v-if="errorMessage7 !== null" class="text-danger text-center">{{errorMessage7}}</span></i>
                <form>
                    <div class="form-group">
                        <label for="fullname">Fullname:</label><br>
                        <i><span v-if="errorMessage !== null" class="text-danger text-center">{{errorMessage}}</span></i>
                        <i><span v-if="errorMessage2 !== null" class="text-danger text-center">{{errorMessage2}}</span></i>
                        <!-- <i style="background-color: #DEDEDE; padding: 3%;" class="fas fa-user"></i> -->
                        <input v-model="fullname" v-on:keyup="validate('fullname')" type="text" class="form-control" id="fullname">
                    </div>
                    <div class="form-group">
                        <label for="address">Address:</label><br>
                        <i><span v-if="errorMessage10 !== null" class="text-danger text-center">{{errorMessage10}}</span></i>
                        <!-- <i style="background-color: #DEDEDE; padding: 3%;" class="fas fa-user"></i> -->
                        <input v-model="address" v-on:keyup="validate('address')" type="text" class="form-control" id="address">
                    </div>
                    <div class="form-group">
                        <label for="contactNum">Contact #:</label><br>
                        <i><span v-if="errorMessage8 !== null" class="text-danger text-center">{{errorMessage8}}</span></i>
                        <i><span v-if="errorMessage9 !== null" class="text-danger text-center">{{errorMessage9}}</span></i>
                        <!-- <i style="background-color: #DEDEDE; padding: 3%;" class="fas fa-user"></i> -->
                        <input v-model="contactNum" v-on:keyup="validate('contactNum')" type="text" class="form-control" id="contactNum">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label><br>
                        <i><span v-if="errorMessage3 !== null" class="text-danger text-center">{{errorMessage3}}</span></i>
                        <input v-model="email" v-on:keyup="validate('email')" type="email" class="form-control" id="email">
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
                <div>
                    <label class="termsCondition">By signing up, you agree to our <b class="bRegister" @click="redirect('/')">Terms</b> and <b class="bRegister" @click="redirect('/')">Conditions</b></label><hr>
                    <center>
                        <label class="termsCondition">Already have an account? <b class="bRegister" v-on:click="redirect('/login')">Login</b></label>
                    </center>
                </div>
            </div>
        </center>
    </div>
</template>
<style lang="scss" scoped>
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
@media screen and (max-width: 600px) {
    .containerWidth{
        text-align: left;
        width: 100%;
    }
    .form-group{
        width: 100%;
    }
    .containerWidth[data-v-2badb436] {
        text-align: left;
        width: 75%;
    }
}
@media screen and (max-width: 900px) {
    .containerWidth{
        text-align: left;
        width: 100%;
    }
    .form-group{
        width: 100%;
    }
    .containerWidth[data-v-2badb436] {
        text-align: left;
        width: 50%;
    }
}
.containerWidth{
    text-align: left;
    width: 30%;
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
            type: 'CUSTOMER',
            image: image,
            fullname: '',
            address: '',
            contactNum: '',
            email: '',
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
            errorMessage9: null,
            errorMessage10: null,
        }
    },
    mounted(){
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        },
        register(){
            this.validate('fullname')
            this.validate('address')
            this.validate('contactNum')
            this.validate('email')
            this.validate('password')
            this.validate('confirmPass')
            let parameter = {
                account_type: this.type,
                fullname: this.fullname,
                address: this.address,
                contactNumber: this.contactNum,
                name: this.email,
                password: this.password,
                password_confirmation: this.confirmPass,
            }
            if(this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null){
                this.$axios.post(AUTH.url+'register', parameter).then(response => {
                    this.authenticate(this.email, this.password)
                }).catch(error => {
                    if(error.response.status === 300){
                        this.errorMessage3 = 'Username already exist'
                    }
                })
            }else{
                this.errorMessage = 'Please fill up all fields'
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
            let reqWhiteSpace = /\d/
            let specialChar = /^[A-Za-z0-9 ]+$/
            if(input === 'fullname') {
                this.errorMessage = null
                if(reqWhiteSpace.test(this.fullname)){
                    this.errorMessage = 'Fullname should not contain a number.'
                } else if(this.fullname === ''){
                    this.errorMessage2 = 'Fullname is required.'
                } else if(!specialChar.test(this.fullname)){
                    this.errorMessage2 = 'Fullname should not contain a special character.'
                } else {
                    this.errorMessage = null
                    this.errorMessage2 = null
                }
            } else if(input === 'email') {
                this.errorMessage3 = null
                if(this.validateEmail(this.email) === false){
                    this.errorMessage3 = 'You have entered an invalid email address.'
                } else {
                    this.errorMessage3 = null
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
            } else if(input === 'address') {
                this.errorMessage10 = null
                if(this.address === ''){
                    this.errorMessage10 = 'Address is required.'
                } else {
                    this.errorMessage10 = null
                }
            } else if(input === 'contactNum') {
                this.errorMessage8 = null
                this.successMessage9 = null
                if(this.contactNum.length > 11){
                    this.errorMessage8 = 'Contact number must not exceed 11 numbers.'
                } else if(this.contactNum.slice(0, 2) != '09'){
                    this.errorMessage9 = 'Contact number must start with 09'
                } else {
                    this.errorMessage8 = null
                    this.errorMessage9 = null
                }
            } else if(this.contactNum != null && this.address != null && this.fullname.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && AUTH.validateEmail(this.email) === true){
                this.errorMessage = null
            }else{
                this.errorMessage7 = 'Please fill in all required fields.'
                this.errorMessage7 = null
            }
        },
        validateEmail(email){
            let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
            if(reg.test(email) === false){
                return false
            }else{
                return true
            }
        },
    }
}
</script>
