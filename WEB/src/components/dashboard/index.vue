<template>
  <v-container >
    <v-col>
      <h3>Dashboard Component</h3>
    </v-col>
  </v-container>
</template>

<script>
import {fetchPost} from '../../api/services/PostService'

  export default {
    name: 'HelloWorld',
    data() {
        return {
            data: ""
        }
    },
    mounted() {
        fetchPost();
    }
  }
</script>
