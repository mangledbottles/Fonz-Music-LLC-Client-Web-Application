<template>
  <section id="modal-background">
    <div id="modal-content">
      <div class="container">


        <!-- Registration Title -->
        <div class="row">
          <div class="registration-title">
            <div class="registration-title-text">
              <span style="font-size: 24px; font-weight: bold; color: grey;"> Welcome to Fonz Affiliate </span>
            </div>
            <div id="registration-title-text">
              <span style="font-size: 16px;"> 
                Thank you for registering, we look forward to working with you!
                Just a few things left before we're ready to go...
              </span>
            </div>
          </div>
        </div>


        <!-- Display Name -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Name </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What's your name? We'll use this purely for your user experience and if we need to contact you.
                This will not be distrubted to any third parties.
              </span>
            </div>
            <div class="registration-section-body">
              <input 
              id="firstName"
              class="registration-section-input"
              type="text"
              placeholder="First Name"
              v-model="firstName"
              required
              />
            </div>
            <div class="registration-section-body">
              <input 
              id="surname"
              class="registration-section-input"
              type="text"
              placeholder="Surname"
              v-model="lastName"
              required
              />
            </div>
          </div>
        </div>


        <!-- Coupon Code -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Coupon Code </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What would you like your coupon code to be?
                Note that this can't be changed, so choose wisely!
                Make it short, and somewhat related to your name.
              </span>
            </div>
            <div class="registration-section-body">
              <input 
              id="couponCode"
              class="registration-section-input"
              type="text"
              placeholder="Coupon Code"
              v-model="couponCode"
              required
              />
            </div>
          </div>
        </div>


        <!-- Referral Source -->
        <div class="row">
          <div class="registration-section">
            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Referral Source </span>
            </div>
            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                How did you find out about the Fonz Affiliate Program?
              </span>
            </div>
            <div class="registration-section-body">
              <select v-model="source" class="registration-section-source" id="source">
                <option value="none"> Select </option>
                <option value="wordofmouth"> Word of Mouth </option>
                <option value="instagram"> Instagram </option>
                <option value="facebook"> Facebook </option>
                <option value="tiktok"> TikTok </option>
              </select>
            </div>
          </div>
        </div>


        <!-- Social Media -->
        <div class="row">
          <div class="registration-section">

            <div class="registration-section-header">
              <span style="font-size: 16px; font-weight: bold; color: grey;"> Social Media </span>
            </div>


            <div class="registration-section-body">
              <span style="font-size: 14px;"> 
                What type of social media do you plan on using, and what's your following?
              </span>
            </div>


            <div class="registration-section-body">
              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="instagram-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> Instagram </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="instagram-handle"
                    type="text"
                    v-model="instagram.accountName"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="instagram-following"
                    type="text"
                    v-model="instagram.followers"
                    />
                  </div>
                </div>

              </div>


              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="tiktok-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> TikTok </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="tiktok-handle"
                    v-model="tiktok.accountName"
                    type="text"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="tiktok-following"
                    type="text"
                    v-model="tiktok.followers"
                    />
                  </div>
                </div>

              </div>


              <div class="social-media-inputs">

                <div class="social-media-inputs-one">
                  <input
                    class="social-media-input-checkbox"
                    id="twitter-checkbox"
                    type="checkbox"
                  />
                  <span style="font-size: 14px;"> Twitter </span>
                </div>

                <div class="social-media-inputs-two">
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="usefonz"
                    id="twitter-handle"
                    type="text"
                    v-model="twitter.accountName"
                    />
                  </div>
                  <div class="social-media-inputs-inner">
                    <input
                    class="social-media-input-text"
                    placeholder="201"
                    id="twitter-following"
                    type="text"
                    v-model="twitter.followers"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div v-if='errorSigningUp' class="container mt-16"> 
                <div class="row justify-content-center">
                    <p>{{errorMessage}}</p>
                </div>
            </div>
            <div class="registration-section-body">
              <div class="align-button">
                <!-- <c-button @click="registerUser()" class="button-sm registration-button"> Sign Up </c-button> -->
                <c-button @click="registerNewUser()" class="button-sm registration-button"> Sign Up </c-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import CButton from "@/components/elements/Button.vue";

export default {
    name: 'LoginModal',
    components: {
      CButton
    },

    data() {
      return {
        couponError: true,
        errorSigningUp: false,
        errorMessage: "",
        payload: {},
        firstName: "",
        lastName: "",
        couponCode: "",
        source: "",
        instagram: {
          accountName: "",
          followers: 0
        },
        tiktok: {
          accountName: "",
          followers: 0
        },
        twitter: {
          accountName: "",
          followers: 0
        },
      }
    },

    methods: {
      
      registerNewUser(){
        let self = this;
        self.errorMessage = ""
        self.errorSigningUp = false
        // var coupon = document.getElementById("couponCode").value;
        var coupon = this.couponCode.toLowerCase();
        console.log("coupon code is " + coupon);
        
        var payload = {
          displayName: self.firstName + " " + self.lastName,
          following: 0,
          platforms: {
            instagram: {
              handle: self.instagram.accountName,
              following: self.instagram.followers
            },

            tiktok: {
              handle: self.tiktok.accountName,
              following: self.tiktok.followers
            },

            twitter: {
              handle: self.twitter.accountName,
              following: self.twitter.followers
            }
          },
          source: self.source,
        }
        console.log("payload " + payload);
        console.log("payload is " + JSON.stringify(payload));
        console.log("diaplyname is " + payload.displayName);
        
        if (self.firstName == "") {
          self.errorMessage += "your name cannot be blank, "
          self.errorSigningUp = true
          
        }
        if (payload.source == "") {
          self.errorMessage += "your Referral Source cannot be blank, "
          self.errorSigningUp = true
        }
        if (coupon == "") {
          self.errorMessage += "coupon code is empty"
          self.errorSigningUp = true
          // return null;
        }
        
        if (self.errorSigningUp) {
          
          return null;
        }
        
        else {
          
          return firebase.auth().currentUser.getIdToken().then(function(idToken) {
            var path = "/i/affiliate/coupon"
            axios.post(path, { couponCode: coupon },
              {
                headers: {
                  Authorization: `Bearer ${ idToken }`
                }
              }
            ).then(resp => {
              console.log(resp);
              console.log("coupon created successfuly")
console.log("payload after running coupon " + JSON.stringify(payload));
              firebase.auth().currentUser.getIdToken().then(function(idToken) {
                axios.post("/i/affiliate/profile", payload, {
                  headers: {
                    Authorization: `Bearer ${ idToken }`
                  }
                })
                .then((resp) => {
                  console.log("Account created successfully");
                  console.log("event emitted");
                  self.$emit("accountRegisteredEvent", true);
                  console.log(resp);})
                  
                .catch((error) => {
                  self.errorMessage = error.response.data.error
                  self.errorSigningUp = true
                  console.log(error);
                  return null;
                })
              })  
            }).catch((error) => {
              // this.couponError = true
              self.errorMessage = error.response.data.error
              self.errorSigningUp = true
              console.log("error uh oh");
              console.log(error);
              return null;
            })
          })
        }
      },
      
      async registerUser() {
        
        this.createCoupon().then((resp) => {
          console.log("im gonna run all of this anyways ");
          console.log("and this ");
          console.log("coupon bool " + resp);
          if (resp) {
            let successReg = this.registerAffiliate();
            console.log("coupon Reg " + successReg);
            if (successReg) {
              this.$emit("accountRegisteredEvent", true);
            }
          }
        // })
        
        // .then(function() {
        
          // if (this.errorSigningUp == false) {
          //   this.registerAffiliate();
          //   if (this.errorSigningUp == false) {
          //     this.$emit("accountRegisteredEvent", true);
          //   }
          // }
        }).catch((error) => {
            
            console.log("sumthin wrong");
            console.log(error);
            this.errorMessage = error.message
            this.errorSigningUp = true
          })
          
      },

      async registerAffiliate() {
        var payload = {
          displayName: document.getElementById("firstName").value + " " + document.getElementById("surname").value,
          following: 0,
          platforms: {
            instagram: {
              handle: document.getElementById("instagram-handle").value,
              following: document.getElementById("instagram-following").value
            },

            tiktok: {
              handle: document.getElementById("tiktok-handle").value,
              following: document.getElementById("tiktok-following").value
            },

            twitter: {
              handle: document.getElementById("twitter-handle").value,
              following: document.getElementById("twitter-following").value
            }
          },
          source: document.getElementById("source").value,
        }
        console.log("diaplyname is " + payload.displayName);
        // make sure name is completed
        if (payload.displayName == "") {
          this.errorMessage += "\nyour name cannot be blank"
          this.errorSigningUp = true
          return false 
        }
        
        else {

          firebase.auth().currentUser.getIdToken().then(function(idToken) {
            axios.post("/i/affiliate/profile", payload, {
              headers: {
                Authorization: `Bearer ${ idToken }`
              }
            })
            .then(resp => {
              console.log("Account created successfully");
              console.log("event emitted");
              console.log(resp);})
              return true
            .catch(error => {
              this.errorMessage = error.message
              this.errorSigningUp = true
              console.log(error);
              return false 
            })
          })
        }
      },

      async createCoupon(){
        var coupon = document.getElementById("couponCode").value;
        console.log("coupon code is " + coupon);
        if (coupon == "") {
          this.errorMessage = "coupon code is empty"
          this.errorSigningUp = true
        }
        else {
          return firebase.auth().currentUser.getIdToken().then(function(idToken) {
            var path = "/i/affiliate/coupon"
            axios.post(path, { coupon },
              {
                headers: {
                  Authorization: `Bearer ${ idToken }`
                }
              }
            ).then(resp => {
              console.log(resp);
              console.log("coupon created successfuly")
              return true
            }).catch(error => {
              // this.couponError = true
              // this.errorMessage = "error.message"
              // this.errorSigningUp = true
              
              console.log("error uh oh");
              console.log(error);
              return false 
            })
          })
        }
      }
    }
}

</script>


<style scoped>
/* General Modal */
  #modal-background {
    position: fixed; 
    z-index: 999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4) !important; 
    overflow-y: scroll;
  }

  #modal-content {
    background-color: #fefefe;
    border-radius: 3px;
    margin: 2% auto; 
    padding: 30px;
    border: 1px solid #888;
    width: 50%;
  }

/* Surface Section Styling */
  .registration-title {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .registration-section {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 90%;
  }

  .registration-section-input {
    color: grey;
    padding-left: 5px;
    font-size: 14px;
    height: 30px;
    width: 33%;
    border: solid 1px;
    border-color: lightgrey;
    border-radius: 4px;
  }

  .registration-section-source {
    width: 33%;
    border: solid 1px;
    border-radius: 4px;
    border-color: lightgrey;
    font-size: 14px;
    color: grey;
    height: 30px;
  }

  .registration-section-body {
    padding-top: 3px;
    width: 100%;
  }

/* Social Media Selector Styling */

  .social-media-inputs {
    display: flex;
    width: 100%;
    padding-top: 10px;
  }

  .social-media-inputs-one {
    width: 25%;
  }

  .social-media-inputs-two {
    display: flex;
    width: 75%;
  }

  .social-media-inputs-inner {
    width: 50%;
    padding-right: 10px;
    top: 50%;
    bottom: 50%;
  }

  .social-media-input-text {
    width: 100%;
    border: solid 1px;
    border-radius: 4px;
    border-color: lightgrey;
    font-size: 14px;
    color: grey;
    height: 30px;
    padding-left: 5px;
  }

/* Registration Button */
  .registration-button {
    background-color: orange;
    color: white;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .align-button {
    display: flex;
  }
  
</style>