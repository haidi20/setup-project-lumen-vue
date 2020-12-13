<template>
  <v-container >
    <v-col
        sm="12"
        xs="12"
        md="8"
        offset-md="2"
    >
        <h3>Dashboard Component</h3>
        <v-row>
            <v-col
                md="2"
                sm="2"
                xs="3"
            >
                <v-select
                    v-model="pageSize"
                    :items="pageSizes"
                    @change="PageSizeChange"
                    class="select-page-size"
                ></v-select>
            </v-col>
            <v-col
                md="3"
                offset-md="7"
                class="space-search"
            >
                <v-text-field 
                    label="search"
                    v-model="search"
                    single-line 
                />
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="posts"
            disable-pagination
            :loading="loading"
            loading-text="Loading.."
            :hide-default-footer="true"
            id="data-table"
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
            :disabled="loading"
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
                { text: "No.", sortable: false, value: "number", },
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
            search: '',
            awaitingSearch: false,
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            const params = {
                page: this.page,
                search: this.search,
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
        },
    },
    watch: {
        search: function() {
            if (!this.awaitingSearch) {
                setTimeout(() => {
                    this.fetchData();
                    this.awaitingSearch = false;
                }, 2000); // 1 sec delay
            }

            this.awaitingSearch = true;
        }
    }
  }
</script>

<style>
    #data-table table thead tr th {
        color: white;
        background: #42A5F5;
    }
    .select-page-size {
        text-align: center;
        max-width: 3.5em !important;
    }
    .v-text-field__details {
        display:none !important;
    }
    .space-search {
        padding-top: 3em;
    }
    .v-input-search {
        max-width: 100% !important;
    }
</style>