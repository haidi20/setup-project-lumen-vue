<template>
  <div>
    <h1>bisa login google</h1>
    <h5>{{name}}</h5>
    <br><br>
    <button class="btn btn-danger btn-md" @click="logOut">logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      user: {},
      name: '',
    }
  },
  created() {
    this.user = firebase.auth().currentUser;

    if(this.user) {
      this.name = this.user.displayName;
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push('/sign-in').catch(() => {});
    },
  }
}
</script>

<style>

</style>