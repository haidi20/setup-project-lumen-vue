<template>
    <div>
        <Datatable
            v-bind:link="link" 
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
              link: "/posts"
          }
      },
    }
</script>

<style lang="scss" scoped>

</style>