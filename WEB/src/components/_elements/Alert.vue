<template>
  <div>
    <v-alert 
        transition="fade-transition"
        v-model="alert"
        type="success">
          Update Data Success.
      </v-alert>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  
  computed: {
    ...mapGetters("alert", ["getAlert"]),
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