<template>
<v-app data-app> 
  <v-container fluid>
    <v-col sm="12" xs="12" md="12">
      <Alert />
      <h2>Posts</h2>
      <Datatable />
      <Form 
        :post="post"
        :dialog="dialog"
        :updateData="updateData"
        :closeDialog="closeDialog"
      />
    </v-col>
  </v-container>
</v-app>  
</template>

<script>
import { mapActions } from "vuex";
// components
import Alert from "@/components/_elements/Alert";
import Form from "./_partials/PostForm";
import Datatable from "@/components/_elements/Datatable";

export default {
  components: {
    Datatable, Form, Alert
  },
  data() {
    return { 
      dialog: false,
      post: {
        id: '',
        title: '',
        author: '',
      },
      config: {
        dataLink: "/posts",
        titlePage: "Dashboard",
        // actions optional
        actions: [
          { icon: "mdi-pencil", color: "primary", method: this.editData, permission: '' },
          { icon: "mdi-delete", color: "red", method: this.removeData, permission: '' },
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
    ...mapActions("datatable", [
      "setConfig", "fetchData", "methodAction", "methodAction",
    ]),
    editData(value) {
      this.dialog = true;      
      this.post = {...value};
    },
    updateData() {
      const payload = {
        method: "put",
        data: this.post,
        messageAlert: "Update Data Success.",
        url: `/api/posts/${this.post.id}`,
      }

      this.methodAction(payload);
      this.dialog = false;
    },
    removeData(value) {
      const payload = {
        data: this.post,
        method: "delete",
        url: `/api/posts/${value.id}`,
        messageAlert: "Delete Data Success.",
      }

      this.methodAction(payload);
    },
    closeDialog() {
      this.dialog = false;
    }
  },
};
</script>

<style lang="scss" scoped></style>
