<template>
    <div>
        <Datatable
            v-bind:dataLink="dataLink" 
            v-bind:editData="editData"
            titlePage="Dashboard"
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
          }
      },
      methods: {
          editData(id) {
              console.log(id);
          },
          removeData(id) {
              console.log('delete data ' + id);
          },
      }
    }
</script>

<style lang="scss" scoped>

</style>