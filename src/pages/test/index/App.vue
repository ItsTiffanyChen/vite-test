<template>
  <div>
    <h1>
    test/index
    </h1>
    <hello-world />
    <goodbye-world />
    <hmm-world />
    <p>{{ id }}</p>
  </div>  
</template>
<script>
import HelloWorld from "../../../components/HelloWorld.vue"
import GoodbyeWorld from "../../../components/GoodbyeWorld.vue"
import HmmWorld from "../../../components/HmmWorld.vue"
import uniqueId from "lodash/uniqueId"

export default {
  components: {
    HelloWorld,
    GoodbyeWorld,
    HmmWorld
  },
  data() {
    return {
      id: uniqueId("test/index")
    }
  }
}
</script>
<style scoped lang="scss">
h1 {
  color: turquoise;
}
</style>