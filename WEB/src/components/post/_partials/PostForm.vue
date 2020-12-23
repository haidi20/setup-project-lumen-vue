<template>
  <div>
    <v-dialog
      persistent 
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Form Post
        </v-card-title>

        <v-card-text>
          <!-- content -->
          <br>
          <v-text-field
            id="title"
            label="Title"
            v-model="post.title"
          ></v-text-field>
          <v-text-field
            id="author"
            label="Author"
            v-model="post.author"
          ></v-text-field>
        </v-card-text>

        <v-divider>
        
        </v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            dark
            @click="closeDialog"
          >
              Close
          </v-btn>
          <v-btn
            id="send_data"
            color="green"
            dark
            @click="sendData"
          >
            Send
          </v-btn>            
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    dialog: Boolean,
    sendData: Function,
    closeDialog: Function,
  },
}
</script>

<style>

</style>