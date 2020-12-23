<template>
  <div>
    <div
      v-if="getBtnAdd != null"
    >
      <br>
      <v-icon
        large
        class="mr-2 btn-add"
        color="success"
        style="cursor:pointer"
        @click="getBtnAdd.method()"
      >
        mdi-plus-box
      </v-icon>
      <br>
    </div>
    <div class="space-top-datatable">
      <p style="display:inline-block">show</p>
       <v-select
        id="pageSize"
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
      <template v-if="getActions.length > 0" v-slot:[`item.actions`]="item">
        <v-icon 
          medium 
          class="mr-2"
          :color="value.color" 
          v-bind:key="index" 
          @click="value.method(item.item)" 
          v-for="(value, index) in getActions" >
              {{value.icon}}
        </v-icon>
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
  </div>
</template>

<script>
// import {fetchPost} from '../../api/services/PostService'
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  // realtime seperti useEffect di reactjs
  computed: {
    ...mapGetters("datatable", [
      "getPage",
      "getItems",
      "getNoData",
      "isLoading",
      "getSearch",
      "getBtnAdd",
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
      "pageChange",
      "keyUpSearch",
      "streamSearch",
      "pageSizeChange",
    ]),
  },
  // ketika berjalan pertama kali
  mounted() {
    // fetch data sudah di dalam action/datatable/setConfig
    // this.fetchData();
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
  height: 4em;
  display: inline-block;
}
</style>
