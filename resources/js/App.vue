<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="admin !== null"
      v-model="drawer"
      app
      color="orange darken-4"
    >
        <center>
            <v-sheet color="orange darken-4" class="pa-5">
            <v-avatar class="mb-10" color="grey darken-1" size="64"></v-avatar>
            <div style="color:white">Aeromel Laure</div>
            </v-sheet>
        </center>
        <v-divider></v-divider>
        <v-list>
        <v-list-item-group active-class="orange darken-2 blue--text">
            <v-list-item
                v-for="(item, index) in employee"
                :key="index"
                link
                @click="redirect(item.route)"
            >
                <v-list-item-icon >
                    <v-icon color="white darken-2">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="white--text lighten-1--text">{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar color="orange darken-1" v-if="admin !== null" app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        
    </v-app-bar>
    <nav v-if="cashier !== null" class="navbar navbar-expand-lg navbar-light" style="background-color: orange">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </nav>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import image from "../assets/logo.png"
import AUTH from "./services/auth"
import ROUTER from './router'
import { mdiAccount } from '@mdi/js'
export default {
    data: () => ({
        admin: localStorage.getItem('adminId'),
        cashier: localStorage.getItem('cashierId'),
        svgPath: mdiAccount,
        drawer: null,
        image: image,
        auth: AUTH,
        token: null,
        dialog: false,
        nav: [
            {
                icon: 'home',
                text: 'Home',
                title: 'Back to Home page',
                active: true
            },
            {
                icon: 'info',
                text: 'About',
                title: 'About this demo',
                active: false
            },
            {
                icon: 'assignment_turned_in',
                text: 'Todos',
                title: 'Some stuff that needs doing',
                active: false
            },
            {
                icon: 'email',
                text: 'Contact',
                title: 'Our Contact info',
                active: false
            }
        ],
        employee: [
            { icon: "mdi-account", text: "My Account", route: "/MyAccount" },
            { icon: "mdi-apps", text: "Dashboard", route: "/Dashboard" },
            { icon: "mdi-calendar-edit", text: "Leave Request", route: "/Leave" },
            { icon: "mdi-calendar-account", text: "Shift Change Request", route: "/ShiftChange" },
            { icon: "mdi-calendar-clock", text: "Overtime Request", route: "/Overtime" },
            { icon: "mdi-account-cash", text: "Petty Cash Request", route: "/PettyCash" },
            { icon: "mdi-account-cash-outline", text: "Budget Request", route: "/Budget" },
            { icon: "mdi-airplane", text: "Travel Authorization", route: "/TravelAuthorization" },
            { icon: "mdi-logout", text: "LogOut", route: "/TravelAuthorization" }
        ],
    }),
    mounted(){
        this.admin = localStorage.getItem('adminId')
    },
    methods: {
        menuItems () {
            return this.menu
        },
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        }
    }
}
</script>