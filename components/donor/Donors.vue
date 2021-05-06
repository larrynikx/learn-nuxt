<template>
  <div>
    <donor-chart title="Donor Chart"/>
    <donor-table :stats="stats" title="Donor Table"/>
  </div>
</template>

<script>

import DonorChart from "~/components/donor/DonorChart";
import {reactive} from "@nuxtjs/composition-api";

import DonorStat from "./DonorStat"

export default {
  name: "Donors",
  components: {
    DonorChart
  },
  setup() {
    const stats = reactive < Array < DonorStat >> ([
      {
        month: 'January',
        year: '2019',
        name: 'hello'
      }
    ])
    return {
      stats
    }
  }
}
</script>

<style scoped>

</style>
