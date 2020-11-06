<template>
  <div>
    <center>
      <img class="pp" :src="DP">
      <div class="welcome">
        <b>
          <i>
            WELCOME,
            <span class="Cname">{{userName}}</span>
          </i>
        </b>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="col-sm-6">
          <div class="card bg-light">
            <div class="row">
              <div class="col-sm-8">
                <div>
                  <b>
                    <span class="card_title">Personal Information</span>
                  </b>
                  <hr>
                  <p
                    class="description"
                  >See the data in your Driptea Account and feel free to update them.</p>
                  <br>
                  <button type="button" class="btn savebtn" @click="redirect(userName)">Save changes</button>
                </div>
              </div>
              <div class="col-sm-4">
                <div>
                  <img class="PI" :src="PErsonalInfo">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <a href class="custom-card">
            <div class="card bg-light">
              <div class="row">
                <div class="col-sm-8">
                  <div>
                    <b>
                      <span class="card_title">Orders History</span>
                    </b>
                    <hr>
                    <p
                      class="description"
                    >See the details of your every order and discover your favorite Driptea product.</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div>
                    <img class="PI" :src="cart">
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </center>
  </div>
</template>

<style>
.welcome {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-size: 25px;
  margin-bottom: 10px;
  margin-left: 4%;
  font-weight: bold;
  margin-top: 1%;
}
.Cname {
  color: #ff5b04;
}

.pp {
  margin-top: 5%;
  height: 150px;
  width: 150px;
  border-radius: 100%;
}
.PI {
  margin-top: 10%;
  height: 70%;
  width: 70%;
  border-radius: 100%;
}
.description {
  font-size: 12px;
}
.bg-light {
  width: 80%;
  height: 150px;
}
.card_title {
  font-size: 150%;
}
a.custom-card,
a.custom-card:hover {
  color: inherit;
}
</style>

<script>
import ProfilePic from "../../../assets/profile.jpg";
import PIpic from "../../../assets/personalInfo.png";
import cart from "../../../assets/cart.png";
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import Axios from "axios";

export default {
  data() {
    return {
      DP: ProfilePic,
      PErsonalInfo: PIpic,
      cart: cart,
      ID: null,
      userName: null,
      emailAdd: null,
      contactnum: null,
      address: null,
      Fname: null,
      password: null
    };
  },
  mounted() {
    this.ID = this.$route.params.id;
    console.log("??????????????? ",this.ID)
    // this.userName = this.$route.params.id;
    console.log("charr lang ", AUTH.user.userType);
    this.getusername(this.ID);
  },
  methods: {
    redirect(id) {
      console.log("id ni dae ", id)
      ROUTER.push("/personalInfo/" + id);
    },
    getusername(id){
      console.log("na piste na baya ko nimo ahh ",id)
      let params = {
        uname: id
      };
      Axios.post(AUTH.url + "getUserName", params).then(response => {
        response.data.userdata.forEach(element => {
          console.log("********************************* ",element)
          this.userName = element.fullname;
        })
      })
    }
  }
};
</script>
