<template>
  <h1>Hmmm {{ date }}</h1>
</template>
<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      date: dayjs().format()
    }
  }
}
</script>
<style scoped>
h1 {
  color: rgb(0, 85, 255);
}
</style>
