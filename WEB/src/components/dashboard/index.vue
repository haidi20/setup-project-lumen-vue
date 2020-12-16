<template>
    <div>
        <Datatable
            titlePage="Dashboard"
            v-bind:headers="headers"
            v-bind:actions="actions"
            v-bind:dataLink="dataLink" 
            v-bind:editData="editData"
            v-bind:removeData="removeData"
         />
    </div>
</template>

<script>
import Datatable from '../_elements/Datatable'
    export default {
      components: {
          Datatable
      },
      data() {
          return {
              dataLink: "/posts",
              titlePage: "Dashboard",
              headers: [
                    { text: "Title", sortable: false, value: "title" },
                    { text: "Date", value: "date", sortable: false },
                    { text: "Author", value: "author", sortable: false },
              ],
              actions: [
                  {icon: 'mdi-pencil', method: this.editData}
              ]
          }
      },
      methods: {
          editData(id) {
              alert(id);
          },
          removeData(id) {
              console.log('delete data ' + id);
          },
      }
    }
</script>

<style lang="scss" scoped>

</style>