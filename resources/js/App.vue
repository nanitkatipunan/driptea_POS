<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="admin !== null" v-model="drawer" app color="orange darken-4">
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
            <v-list-item-icon>
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
      <v-img max-height="64" max-width="42" :src="image"></v-img>
      <v-app-bar-title>DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon x-large color="black" right>mdi-bell-ring</v-icon>
              </v-btn>
            </template>
            <v-list style="max-height: 200px" class="overflow-y-auto notifDropdown">
              <!-- ang Click kay wala pay nay method -->
              <v-list-item v-for="(item, index) in items" :key="index" @click="ShowModal">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
    </v-app-bar>
    <v-app-bar class="cashierNav" color="orange darken-1" v-if="cashier !== null">
      <a href="#"><v-img max-height="64" max-width="42" :src="image"></v-img></a>
      <v-app-bar-title>DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon large color="black" right>mdi-bell-ring</v-icon>
              </v-btn>
            </template>
            <v-list style="max-height: 300px; max-width: 300px" class="overflow-y-auto notifDropdown">
              <!-- ang Click kay wala pay nay method -->
              <v-list-item v-for="(item, index) in items" :key="index" @click="ShowModal">
                <v-list-item-title>{{ item.title }} has order</v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
.logo {
  width: 60px;
  height: 60px;
}
.cashierNav {
    max-height: 65px;
}
</style>
<script>
import image from "../assets/logo.png";
import AUTH from "./services/auth";
import ROUTER from "./router";
import config from './config.js'
export default {
  data: () => ({
    admin: localStorage.getItem("adminId"),
    cashier: localStorage.getItem("cashierId"),
    drawer: null,
    image: image,
    auth: AUTH,
    token: null,
    dialog: false,
    config: config,
    nav: [
      {
        icon: "home",
        text: "Home",
        title: "Back to Home page",
        active: true
      },
      {
        icon: "info",
        text: "About",
        title: "About this demo",
        active: false
      },
      {
        icon: "assignment_turned_in",
        text: "Todos",
        title: "Some stuff that needs doing",
        active: false
      },
      {
        icon: "email",
        text: "Contact",
        title: "Our Contact info",
        active: false
      }
    ],
    employee: [
      { icon: "mdi-account", text: "My Account", route: "/MyAccount" },
      { icon: "mdi-apps", text: "Dashboard", route: "/adminDashboard" },
      {
        icon: "mdi-calendar-account",
        text: "Sales Inventory",
        route: "/salesInventory"
      },
      {
        icon: "mdi-calendar-account",
        text: "Adding",
        route: "/addProductCategoryAddOns"
      }
    ],
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2...................." }
    ],
    count: 0
  }),
  mounted() {
    this.admin = localStorage.getItem("adminId");
    this.cashier = localStorage.getItem("cashierId");
    let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
        cluster: this.config.PUSHER_APP_CLUSTER,
        encrypted: true
    });

    let channel = pusher.subscribe('driptea-channel')
    channel.bind('driptea-data', (data) => {
        if(data.order === 'pendingCustomer'){
            this.count++
            // this.retrieveProduct()
        }
        console.log(this.count)
    })
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },
    ShowModal() {

    }
  }
};
</script>