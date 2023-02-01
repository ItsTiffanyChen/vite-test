<template>
  <div>
    <h1>
    main/index
    </h1>
    <hello-world />
    <goodbye-world />
    <hmm-world />
  </div>  
</template>
<script>
import HelloWorld from "../../../components/HelloWorld.vue"
import GoodbyeWorld from "../../../components/GoodbyeWorld.vue"
import HmmWorld from "../../../components/HmmWorld.vue"

export default {
  components: {
    HelloWorld,
    GoodbyeWorld,
    HmmWorld
  }
}
</script>
<style scoped lang="scss">
h1 {
  color: gray;
}
</style>