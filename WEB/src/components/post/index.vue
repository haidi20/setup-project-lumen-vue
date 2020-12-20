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
// supports
import http from '@/api/';
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
      // ALERT DAN DIALOG PINDAH KE DATATABLE
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
    ...mapActions("datatable", [
      "setConfig", "fetchData", "methodAction", "changeData",
    ]),
    editData(value) {
      this.dialog = true;      
      this.post = {...value};
    },
    updateData() {
      this.changeData({post: this.post});
      this.dialog = false;
    },
    async removeData(value) {
      // try {
      //   await http.delete(`/api/posts/${value.id}`)
      //     .then(response => {
      //       this.alert = true;
      //       this.fetchData();
      //     });
      // } catch (error) {
      //   console.log('error update data = ' + error);
      //   return (null);
      // }
    },
    closeDialog() {
      this.dialog = false;
    }
  },
};
</script>

<style lang="scss" scoped></style>
