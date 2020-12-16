<template>
  <v-container fluid>
    <v-col sm="12" xs="12" md="12">
      <h2>{{ titlePage }}</h2>
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
          {{ getNoData(item) }}
        </template>
        <template v-if="actions" v-slot:[`item.actions`]="{ item }">
          <v-icon 
            small 
            class="mr-2"
            color="primary" 
            v-bind:key="index" 
            @click="value.method(item.id)" 
            v-for="(value, index) in getActions" >
                {{value.icon}}
          </v-icon>
          <!-- <v-icon small color="red" @click="removeData(item.id)">
                    mdi-delete
                </v-icon> -->
        </template>
        <template slot="no-data">
          Data Empty
        </template>
      </v-data-table>
      <br />
      <!-- @input="pageChange" -->
      <v-pagination
        v-model="page"
        :length="getTotalPages"
        total-visible="7"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
        :disabled="isLoading"
        style="float:right"
      ></v-pagination>
    </v-col>
  </v-container>
</template>

<script>
// import {fetchPost} from '../../api/services/PostService'
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    headers: Array,
    actions: Array, // next pengerjaan
    dataLink: String,
    isAction: Boolean,
    titlePage: String,
  },
  // realtime seperti useEffect di reactjs
  computed: {
    ...mapGetters("datatable", [
      "getPage",
      "getItems",
      "getNoData",
      "isLoading",
      "getSearch",
      "getSearch",
      "getActions",
      "getHeaders",
      "getPageSize",
      "getTotalPages",
      "getListPageSizes",
    ]),
    pageSize: {
      get() {
        return this.getPageSize;
      },
      set(value) {
        return this.pageSizeChange({ pageSize: value });
      },
    },
    search: {
      get() {
        return this.getSearch;
      },
      set(value) {
        return this.keyUpSearch({ search: value });
      },
    },
    page: {
      get() {
        return this.getPage;
      },
      set(value) {
        return this.pageChange({ page: value });
      },
    },
  },
  methods: {
    ...mapActions("datatable", [
      "fetchData",
      "pageChange",
      "setActions",
      "setHeaders",
      "keyUpSearch",
      "setDataLink",
      "streamSearch",
      "pageSizeChange",
    ]),
  },
  // ketika berjalan pertama kali
  mounted() {
    this.setActions({actions: this.actions});
    this.setDataLink({ dataLink: this.dataLink });
    this.setHeaders({ headers: this.headers, actions: this.actions });
    this.fetchData();
  },
  watch: {
    search: function(value) {
      this.streamSearch();
    },
  },
};
</script>

<style lang="css" scoped>
/* masih belum mau berubah warna header */
.bg-header-info {
  color: white !important;
  background: #42a5f5 !important;
}
.select-page-size {
  margin: 0px 7px;
  display: inherit;
  text-align: center;
  max-width: 3.5em !important;
}
.space-search {
  float: right;
  display: inherit;
}
.v-text-field__details {
  display: none !important;
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
