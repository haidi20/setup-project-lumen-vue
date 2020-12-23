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
        :sendData="sendData"
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
      method: '', // post or put
      post: {
        id: '',
        title: '',
        author: '',
      },
      config: {
        pageSize: 5,
        dataLink: "/posts",
        titlePage: "Dashboard",
        // addData optional
        btnAdd: {
          method: this.addData, permission: true
        },
        // actions optional
        // permission comming soon
        actions: [
          { icon: "mdi-pencil", color: "primary", method: this.editData, permission: true },
          { icon: "mdi-delete", color: "red", method: this.removeData, permission: true },
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
      this.method = "put";
      this.dialog = true;      
      this.post = {...value};
    },
    addData() {
      this.post = {
        id: null,
        title: null,
        author: null,
      }
      this.dialog = true;     
      this.method = "post";
    },
    sendData() {
      const payload = {
        method: this.method,
        data: this.post,
        messageAlert: this.method == "put" ? "Update Data Success." : "Add New Data Success.",
        url: this.method == "put" ? `/${this.post.id}` : '/',
      }

      this.methodAction(payload);
      this.dialog = false;
      this.post = {
        id: null,
        title: null,
        author: null,
      }
    },
    removeData(value) {
      const payload = {
        data: null,
        method: "delete",
        url: `/${value.id}`,
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
