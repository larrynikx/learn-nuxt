<template>
  <div>
    {{title}}
  </div>
</template>

<script lang="ts">


export default {
  name: "DonorChart",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props: Object) {
    return {
      props
    }
  }
}
</script>

<style scoped></style>
