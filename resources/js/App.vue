<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="light-blue darken-4"
    >
        <center>
            <v-sheet color="light-blue darken-4" class="pa-5">
            <v-avatar class="mb-10" color="grey darken-1" size="64"></v-avatar>
            <div style="color:white">Aeromel Laure</div>
            </v-sheet>
        </center>
        <v-divider></v-divider>
        <v-list>
        <v-list-item-group active-class="sky blue blue--text">
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

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
        svgPath: mdiAccount,
        drawer: null,
        image: image,
        auth: AUTH,
        token: null,
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
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        }
    }
}
</script>