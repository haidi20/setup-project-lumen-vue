<template>
  <v-container >
    <v-col
        sm="12"
        xs="12"
        md="8"
        offset-md="2"
    >
        <h3>Dashboard Component</h3>
        <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="Items per Page"
            @change="PageSizeChange"
        ></v-select>
        <v-data-table
            :headers="headers"
            :items="posts"
            disable-pagination
            :loading="loading"
            loading-text="Loading.."
            :hide-default-footer="true"
        >
            <template v-slot:[`item.number`]="{ item }"> 
                {{ numberData(item) }}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="edit(item.id)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="remove(item.id)">
                mdi-delete
            </v-icon>
            </template>
            <template slot="no-data">
                Data Empty
            </template>
        </v-data-table>
        <br>
        <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="PageChange"
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
    props: ['link'],
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
            pageSize: 5,
            pageSizes: [5, 10],
            loading: false,
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            const params = {
                page: this.page,
                per_page: this.pageSize,
            }
            this.posts = [];
            this.loading = true;
            http.get(`/api${this.link}`, {params})
            .then(ress => {
                let data = ress.data.data; 
                this.posts = data.data;
                this.totalPages = data.last_page;
                this.loading = false;
                console.log(data);
            });
        },
        edit(id) {
            alert(id);
        },
        remove(id) {
            alert(id);
        },
        PageChange(value) {
            this.page = value;
            this.fetchData();
        },
        PageSizeChange(size) {
            this.page = 1;
            this.pageSize = size;
            this.fetchData();
        },
        numberData(item) {
            let number = this.posts.map(function(x) {return x.id; }).indexOf(item.id) + 1;
            
            if(this.page == 1) {
                return number;
            }else {
                return (number + this.pageSize);
            }
        }
    }
  }
</script>
