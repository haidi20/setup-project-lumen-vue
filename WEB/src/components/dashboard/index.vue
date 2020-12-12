<template>
  <v-container >
    <v-col
        sm="12"
        xs="12"
        md="8"
        offset-md="2"
    >
        <h3>Dashboard Component</h3>
        <v-data-table
          :headers="headers"
          :items="posts"
          disable-pagination
          :hide-default-footer="true"
        >
            <template v-slot:[`item.number`]="{ item }"> 
                {{posts.map(function(x) {return x.id; }).indexOf(item.id) + 1}}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="edit(item.id)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="remove(item.id)">
                mdi-delete
            </v-icon>
            </template>
        </v-data-table>
        <br>
        <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
            style="float:right"
        ></v-pagination>
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
                { text: "No.", sortable: false, value: "number" },
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
            let fetchData = ress.data.data; 
            this.posts = fetchData.data;
            this.totalPages = fetchData.total;

            console.log(ress.data.data);
        });
    },
    methods: {
        edit(id) {
            alert(id);
        },
        remove(id) {
            alert(id);
        },
        handlePageChange(value) {
            console.log(value);
        },
    }
  }
</script>
