<template>
  <div>
    <v-alert 
        transition="fade-transition"
        v-model="alert"
        type="success">
          {{ getMessage }}
      </v-alert>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  
  computed: {
    ...mapGetters("alert", ["getAlert", "getMessage"]),
    alert: {
      get() {
        return this.getAlert;
      },
      set(value) {

      }
    }
  },
  methods: {
    ...mapActions('alert', ['setAlert']),
  },
  watch: {
    alert: function() {
      setTimeout(() => {
        this.setAlert({alert: false});
      }, 2000);
    }
  }
}
</script>

<style>

</style>