<template>
  <div>
    <div>
      <div>
        <h2>User</h2>
        <p> {{name}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      name: ""
    }
  },
  mounted() {
    setTimeout(() => {
      this.name = "haidi";
    }, 2000);
  }
}
</script>

<style>

</style>>