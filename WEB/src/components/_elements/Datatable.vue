<template>
  <v-container 
    fluid
  >
    <v-col
        sm="12"
        xs="12"
        md="12"
    >
        <h2> {{titlePage}} </h2>
        <div class="space-top-datatable">
            <p style="display:inline-block">show</p>
            <v-select
                v-model="pageSize"
                :items="getListPageSizes"
                
                class="select-page-size"
            />
            <p style="display:inherit">entires</p>
            <div class="space-search">
                <v-text-field 
                    class="search"
                    label="search"
                    v-model="search"
                    single-line 
                />
            </div>
        </div>
        <v-data-table
            :headers="getHeaders"
            :items="getItems"
            disable-pagination
            :loading="isLoading"
            loading-text="Loading.."
            :hide-default-footer="true"
            class="elevation-1"
        >
            <template v-slot:[`item.number`]="{ item }"> 
                {{ numberData(item) }}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
            <v-icon small color="primary" class="mr-2" @click="editData(item.id)">
                mdi-pencil
            </v-icon>
            <v-icon small color="red" @click="removeData(item.id)">
                mdi-delete
            </v-icon>
            </template>
            <template slot="no-data">
                Data Empty
            </template>
        </v-data-table>
        <br>
        <!-- <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="PageChange"
            :disabled="loading"
            style="float:right"
        ></v-pagination> -->
    </v-col>
  </v-container>
</template>

<script>
// import {fetchPost} from '../../api/services/PostService'
import {mapGetters} from 'vuex'

  export default {
    name: 'HelloWorld',
    props: {
        dataLink: String,
        titlePage: String,
        editData: Function,
        removeData: Function,
    },
    computed:{  
        ...mapGetters('datatable', [
            "getNoData", "getItems", "getHeaders", "isLoading",
            "getPageSize", "getListPageSizes" 
        ]),
        pageSize: {
            get(){
                return this.getPageSize;
            },
            set(value){
                this.$store.dispatch("datatable/pageSizeChange", {pageSize: value});
            }
        }
    },   
    mounted() {
        this.$store.dispatch('datatable/setDataLink', {dataLink: this.dataLink});
        this.$store.dispatch('datatable/fetchData');
    },
    methods: {
        numberData(value) {
            return this.getNoData(value);
        },
        // pageSizeChange(value) {
        //     this.$store.dispatch("datatable/pageSizeChange", {pageSize: value});
        // }
    },
  }
</script>

<style lang="css" scoped>   
    /* masih belum mau berubah warna header */
    .bg-header-info {
        color: white !important;
        background: #42A5F5 !important;
    }
    .select-page-size {
        margin: 0px 7px;
        display: inherit;
        text-align: center;
        max-width: 3.5em !important;
    }
    .space-search {
        float:right;
        display:inherit; 
    }
    .v-text-field__details {
        display:none !important;
    }    
    .v-input-search {
        max-width: 100% !important;
    }
    .space-top-datatable {
        width: 100%;
        height: 3em;
        display: inline-block;
    }
</style>