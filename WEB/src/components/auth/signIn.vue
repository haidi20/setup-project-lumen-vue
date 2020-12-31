<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid>
        <Alert />
        <v-layout align-center justify-center class="space-sign-in">
          <v-flex xs12 sm8 md3>
            <v-card class="elevation-12">
              <v-toolbar dark color="success">
                <v-toolbar-title>Sign In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    name="username"
                    label="Username"
                    type="text"
                    v-model="username"
                  >
                    <v-icon slot="prepend" >
                      mdi-account
                    </v-icon>
                  </v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  >
                    <v-icon slot="prepend" >
                      mdi-lock
                    </v-icon>
                  </v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="signIn">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
            <div id="firebaseui-auth-container"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import {firebaseApp} from '@/api/firebaseConfig'

import {mapActions, mapGetters} from 'vuex'

// components
import Alert from "@/components/_elements/Alert";

export default {
  name: "SignIn",
  components: {
    Alert
  },
  data() {
    return {
      username: "haidi",
      password: "samarinda",
      loading: true,
    };
  },
  computed: {
    ...mapGetters("auth", [
     "getUser"
    ]),
  },
  mounted() {
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {
    ...mapActions("auth", [
      "storeDataAuth",
    ]),
    signIn(){
      let payload = {
        data: {
          username: this.username,
          password: this.password,
        }
      }

      this.storeDataAuth(payload);
    },
  },
};
</script>

<style>
  .space-sign-in {
    margin-top: 15em;
  }
</style>