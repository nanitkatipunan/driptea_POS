<template>
  <div class="container">
    <template>
      <center>
        <img style="height: 150px; margin-top: 8%;" :src="image">
      </center>
      <center>
        <div class="containerWidth">
          <v-form ref="form"  lazy-validation>
            <i>
              <span v-if="errorMessage2 !== null" class="text-danger text-center">{{errorMessage2}}</span>
            </i>
            <v-row>
              <v-text-field
                label="Username"
                outlined
                v-model="userName"
                v-on:keyup="validate('userName')"
                type="text"
                id="userName"
                placeholder="email/username"
                required
              ></v-text-field>
            </v-row>
            <span v-if="errorMessage3 !== null" class="text-danger text-center">{{errorMessage3}}</span>
            <v-row>
              <v-text-field
                label="Password"
                outlined
                v-model="password"
                v-on:keyup="validate('password')"
                type="password"
                id="password"
                placeholder="password"
                required
              ></v-text-field>
            </v-row>
            <v-btn  type="submit" class="btn btnRegister" @click="login">Login</v-btn>
          </v-form>
        </div>
      </center>
      <loading v-if="loadingShow"></loading>
    </template>
  </div>
</template>
<style scoped>
img {
  cursor: default;
}
span {
  font-size: 12px;
}
hr {
  border: 1px solid #17d817;
}
.termsCondition {
  margin-top: 6%;
  font-size: 15px;
  text-align: center;
}
.form-control {
  border: 1px solid #17d817;
  border-radius: 5px;
  width: 100%;
}
.bRegister {
  color: #0a8c0f;
  cursor: pointer;
}
p {
  font-size: 20px;
}
.btnRegister {
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #17d817;
  font-weight: bold;
  width: 100%;
}
.containerWidth {
  width: 60%;
  text-align: left;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
@media screen and (max-width: 600px) {
  .containerWidth {
    text-align: left;
    width: 100%;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
@media screen and (max-width: 900px) {
  .containerWidth {
    text-align: left;
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .containerWidth {
    text-align: left;
    width: 60%;
  }
}
.container {
  width: 30%;
  margin-top: 10% ;
  border: 4px solid black;
}
</style>
<script>
import ROUTER from "../router";
import AUTH from "../services/auth";
import image from "../../assets/logo.png";
import loading from './loading.vue';
export default {
  name: "app",
  data() {
    return {
      image: image,
      userName: "",
      password: "",
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      loadingShow: false
    };
  },
  mounted() {},
  components: {
    loading
  },
  methods: {
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },
    login() {
      this.loadingShow = true
      this.validate("userName");
      this.validate("password");
      let parameter = {
        name: this.userName,
        password: this.password
      };
      if (this.userName === "" && this.password === "") {
        this.errorMessage = "Please fill in all required fields";
        this.loadingShow = true
      } else {
        this.authenticate(this.userName, this.password);
      }
    },
    authenticate(name, password) {
      this.loadingShow = true
      let credentials = {
        name: name,
        password: password
      };
      this.$axios
        .post(AUTH.url + "login", credentials)
        .then(response => {
          AUTH.setToken(response.data.token);
          AUTH.authenticateForAll();
          this.loadingShow = false
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errorMessage = "Invalid credentials!";
          }
          this.loadingShow = false
        });
    },
    validate(input) {
      this.successMessage = null;
      if (input === "userName") {
        this.errorMessage2 = null;
        if (this.userName === "") {
          this.errorMessage2 = "Username is required.";
        } else {
          this.errorMessage2 = null;
        }
      } else if (input === "password") {
        this.errorMessage3 = null;
        if (this.password === "") {
          this.errorMessage3 = "Password is required.";
        } else {
          this.errorMessage3 = null;
        }
      } else {
        this.errorMessage = null;
        this.errorMessage = "Please fill in all required fields.";
      }
    }
  }
};
</script>



