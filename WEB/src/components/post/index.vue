<template>
<v-app data-app> 
  <v-container fluid>
    <v-col sm="12" xs="12" md="12">
      <v-alert 
        transition="fade-transition"
        v-model="alert"
        type="success">
          Update Data Success.
      </v-alert>
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
import Form from "./_partials/PostForm";
import Datatable from "../_elements/Datatable";
export default {
  components: {
    Datatable, Form
  },
  data() {
    return {
      alert: false,
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
    ...mapActions("datatable", ["setConfig", "fetchData"]),
    editData(value) {
      this.dialog = true;      
      this.post = {...value};
    },
    async updateData() {
      const data = {...this.post};

      try {
        await http.post(`/api/posts/${this.post.id}`, {...this.post})
          .then(response => {
            console.log(response);

            this.alert = true;
            this.dialog = false;
            this.fetchData();
          });
      } catch (error) {
        console.log('error update data = ' + error);
        return (null);
      }
    },
    removeData(value) {
      console.log(value.id);
    },
    closeDialog() {
      this.dialog = false;
    }
  },
  watch: {
    alert: function() {
      setTimeout(() => {
        this.alert = false;
      }, 2000)
    }
  }
};
</script>

<style lang="scss" scoped></style>
