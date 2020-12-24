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
    ...mapGetters("alert", ["getAlert", "getMessage", "getTimer"]),
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
      // getTimer apakah mau pakai timer atau tidak. mau di munculkan terus atau tidak 
      if(this.getTimer) {
        setTimeout(() => {
          this.setAlert({alert: false});
        }, 2000);
      }
    }
  }
}
</script>

<style>

</style>

// cara menggunakannya
// dispatch('alert/setAlert', { alert: true, message: payload.messageAlert }, { root: true });