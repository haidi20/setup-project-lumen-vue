<template>
  <v-container >
    <v-col
        sm="12"
        xs="12"
        md="6"
        offset-md="3"
    >
      <h3>Dashboard Component</h3>
      <v-data-table
          :headers="headers"
          :items="posts"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="edit(item.id)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="remove(item.id)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
    </v-col>
  </v-container>
</template>

<script>
// import {fetchPost} from '../../api/services/PostService'
import http from '../../api'

  export default {
    name: 'HelloWorld',
    data() {
        return {
            posts: [],
            searchTitle: "",
            headers: [
                { text: "Actions", value: "actions", sortable: false, align: "start" },
                { text: "Title", sortable: false, value: "title" },
                { text: "Date", value: "date", sortable: false },
                { text: "Author", value: "author", sortable: false },
            ],
            page: 1,
            totalPages: 0,
            pageSize: 3,
            pageSizes: [5, 10],
        }
    },
    mounted() {
        http.get("/api/posts")
        .then(ress => {
            this.posts = ress.data.data;

            console.log(this.posts);
        });
    },
    methods: {
        edit(id) {
            alert(id);
        },
        remove(id) {
            alert(id);
        }
    }
  }
</script>
