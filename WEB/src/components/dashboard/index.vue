<template>
  <v-container fluid>
    <v-col sm="12" xs="12" md="12">
      <h2>Dashboard</h2>
      <p>Selamat Datang {{user.username}}</p>
    </v-col>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      user: {}
    }
  },
   computed: {
    ...mapGetters("auth", [
      "getUser",
    ]),
  },
  mounted() {
    this.user = this.getUser;
  },
}
</script>

<style lang="scss" scoped></style>
