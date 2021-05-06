<template>
  <div>
  </div>
</template>

<script lang="ts">
import {PropType} from "@nuxtjs/composition-api";

export default {
  name: "DonorTable",
  props: {
    title: {
      type: String,
      required: true
    },
    stats: {
      type: Array as PropType<DonorStat[]>,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
