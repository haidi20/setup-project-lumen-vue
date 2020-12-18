<template>
  <v-container fluid>
    <v-col sm="12" xs="12" md="12">
      <h2>Posts</h2>
      <Datatable />
    </v-col>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Datatable from "../_elements/Datatable";
export default {
  components: {
    Datatable,
  },
  data() {
    return {
      config: {
        dataLink: "/posts",
        titlePage: "Dashboard",
        // actions optional
        actions: [
          { icon: "mdi-pencil", color: "primary", method: this.editData },
          { icon: "mdi-delete", color: "red", method: this.removeData },
        ],
        headers: [
          { text: "Title", sortable: false, value: "title" },
          { text: "Date", value: "date", sortable: false },
          { text: "Author", value: "author", sortable: false },
        ],
      }
    };
  },
  mounted() {
    this.setConfig({ config: this.config });
  },
  methods: {
    ...mapActions("datatable", ["setConfig"]),
    editData(value) {
      console.log(value);
    },
    removeData(value) {
      console.log(value.id);
    }
  },
};
</script>

<style lang="scss" scoped></style>
