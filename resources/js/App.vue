<template>
    <div id="app">
        <nav v-if="auth.currentPath !== '/'" class="navbar navbar-expand-sm navbar-dark" style="background-color: black"> 
            <img style="height: 50px; margin-left: 2%; border: 1px solid white" :src="image" v-on:click="redirect('/')">
            <a class="navbar-brand dripteaWord" style="color:white" v-on:click="redirect('/')">Driptea</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-2">
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item" v-on:click="redirect('/register')"><a class="nav-link">Register</a></li>
                    <li class="nav-item" v-on:click="redirect('/login')"><a class="nav-link">Login</a></li>
                </ul>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
        <!-- <footer> -->
        <!-- <footer style="position: absolute; bottom: 0; width: 100%; height: 0rem;">
            <div style="background-color: #DEDEDE;">
                <nav class="navbar navbar-expand-sm navbar-light"> 
                    <img class="footer" style="height: 50px; margin-left: 2%;" :src="image" v-on:click="redirect('/')">
                    <a class="navbar-brand footer" href="#">Driptea</a>
                    <ul class="navbar-nav ml-auto footer"> 
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Facebook</a></li>
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Twitter</a></li>
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Blog</a></li>
                    </ul> 
                </nav>
                <center>
                    <span class="copyright">
                        <label>Copyright @Driptea. All rights reserved.</label>
                    </span>
                </center>
            </div>
        </footer> -->
    </div>
</template>
<style>
#app{
    font-family: Roboto Slab;
}
.footer{
    margin-top: 2%;
}
.copyright {
    font-size: 13px;
}
ul {
    margin-right: 2%;
}
a {
    font-weight: bold;
}
li, .dripteaWord, img {
    cursor: pointer;
}
</style>
<script>
import image from "../assets/logo.png"
import AUTH from "./services/auth"
import ROUTER from './router'
export default {
    name: "app",
    data(){
        return {
            image: image,
            auth: AUTH,
            token: null
        }
    },
    components: {
        // header,
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        }
    }
}
</script>