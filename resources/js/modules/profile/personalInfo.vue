<template>
  <div>
    <div class="thetitle">
      <center>
        <span class="title">Personal Information</span>
        <br>
        <span
          class="subtitle"
        >Basic Information that you provided upon registration name and contact information</span>
      </center>
    </div>
    <div class="container">
      <span class="title">Profile</span>
      <hr>
      <div class="text-left DP">
        <div class="row">
          <div class="col-sm-3 thelabel">PHOTO</div>
          <div class="col-sm-6">
            <span>This helps you personalize your account</span>
          </div>
          <div class="col-sm-3 text-right">
            <img class="profilePic" :src="profilepic">
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Fname">
        <div class="row">
          <div class="col-sm-3 thelabel">NAME</div>
          <div class="col-sm-6">
            <span>{{Fname}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Address">
        <div class="row">
          <div class="col-sm-3 thelabel">ADDRESS</div>
          <div class="col-sm-6">
            <span>{{address}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left ContactNum">
        <div class="row">
          <div class="col-sm-3 thelabel">CONTACT NUMBER</div>
          <div class="col-sm-6">
            <span>{{contactnum}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Email">
        <div class="row">
          <div class="col-sm-3 thelabel">USERNAME/EMAIL ADDRESS</div>
          <div class="col-sm-6">
            <span>{{emailAdd}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Password">
        <div class="row">
          <div class="col-sm-3 thelabel">PASSWORD</div>
          <div class="col-sm-6">
            <span type="password">{{password}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <v-button type="button" data-toggle="modal" data-target="#exampleModal">Update</v-button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Personal Information</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="usr">Name:</label>
                <input  :placeholder="Fname" v-model="newName" type="text" class="form-control" id="usr">
              </div>
              <div class="form-group">
                <label for="add">Address:</label>
                <input :placeholder="address" v-model="newaddress" type="text" class="form-control" id="add">
              </div>
              <div class="form-group">
                <label for="cn">Contact Number:</label>
                <input :placeholder="contactnum" v-model="newcontactnum" type="number" class="form-control" id="cn">
              </div>
              <div class="form-group">
                <label for="email">Username/Email Address:</label>
                <input :placeholder="emailAdd" v-model="newemailAdd" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input :placeholder="password" v-model="newpassword" type="password" class="form-control" id="pwd">
              </div>
              <div class="form-group">
                <label for="cpwd">Confirm Password:</label>
                <input v-model="Cpassword" type="password" class="form-control" id="cpwd">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Close</button>
            <button type="button" class="btn savebtn" @click="Save">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.savebtn {
  color: orange;
}
.thetitle {
  margin-top: 3%;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 400;
}
.title {
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 400;
}
.subtitle {
  font-size: 15px;
}
.container {
  margin-top: 3%;
  border: 1px solid gray;
  border-radius: 1%;
  width: 70%;
  margin-bottom: 5%;
}
.profilePic {
  height: 60px;
  width: 60px;
  border-radius: 100%;
}
.thelabel {
  font-size: 13px;
}
</style>

<script>
import ProfilePic from "../../../assets/profile.jpg";
import AUTH from "../../services/auth";
import Axios from "axios";
// import imongAccount from "./myAccounts";

export default {
  data() {
    return {
      profilepic: ProfilePic,
      fullname: "churva",
      show: false,
      emailAdd: "",
      contactnum: null,
      address: null,
      Fname: null,
      password: null,
      userID: null,
      newpassword: null,
      newemailAdd: null,
      newcontactnum: null,
      newaddress: null,
      newName: null,
      Cpassword: null
    };
  },
  components: {
    // imongAccount
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.retrieveUserDatas(this.userID);
        console.log("ang response ", this.userID);

        
  },

  methods: {
    retrieveUserDatas(id) {
      let params = {
        uname: id
      };
      Axios.post(AUTH.url + "getUserData", params).then(response => {
        // console.log("ang response ", response);
        response.data.userdata.forEach(element => {
          if (element.email == null) {
            this.emailAdd = "No email registered.";
          } else {
            this.emailAdd = element.email;
          }
          if (element.CN == null) {
            this.contactnum = "No registered contact number available.";
          } else {
            this.contactnum = element.CN;
          }
          if (element.address == null) {
            this.address = "No registered address available.";
          } else {
            this.address = element.address;
          }
          if (element.fullname == null) {
            this.Fname = "No registered name available.";
          } else {
            this.Fname = element.fullname;
          }
          if (element.pwd == null) {
            this.password = "No registered Password available.";
          } else {
            this.password = "********";
          }
        });
        console.log(
          "------- ",
          this.emailAdd,
          this.contactnum,
          this.address,
          this.Fname,
          this.password
        );
      });
    },
    Save() {
      console.log("hoyy")
      let params = {
        ID: this.userID,
        newEmail: this.newemailAdd,
        newContact: this.newcontactnum,
        newadd: this.newaddress,
        newfname: this.newName ,
        newPass: this.newpassword,
      } 
      Axios.post(AUTH.url + "SaveNEWdata", params).then(response => {

      }).catch(err => {
          console.log("error imong pag update ",err)
          })
    }
  }
};
</script>

