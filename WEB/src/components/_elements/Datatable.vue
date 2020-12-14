<template>
  <v-container >
    <v-col
        sm="12"
        xs="12"
        md="8"
        offset-md="2"
    >
        <h3>Dashboard Component</h3>
        <!-- <v-row>
            <v-col
                md="2"
                sm="2"
                xs="3"
                class="space-pagesize"
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
        </v-row> -->
        <v-data-table
            :headers="headers"
            :items="items"
            disable-pagination
            :loading="this.$store.state.datatable.loading"
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
        editData: Function,
        removeData: Function,
    },
    computed:{  
        ...mapGetters('datatable', [
            "getNumberData", "items", "headers" 
        ]),
    },   
    mounted() {
        this.$store.dispatch('datatable/fetchData', {dataLink: this.dataLink});
    },
    methods: {
        numberData(item) {
            return this.getNumberData(item);
        },
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
        text-align: center;
        max-width: 3.5em !important;
    }
    .v-text-field__details {
        display:none !important;
    }
    .space-search {
        padding-top: 3em;
    }
    .space-pagesize {
        padding-top: 3em;
    }
    .v-input-search {
        max-width: 100% !important;
    }
</style>