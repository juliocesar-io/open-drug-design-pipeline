<script setup lang="ts">
import tasks from './data/tasks.json'
import sps from './data/sps_predicted_formatted.json'
import DataTable from './sps/DataTable.vue'
import { columnsSps } from './sps/columns'
</script>

<template>
  <DataTable :data="sps" :columns="columnsSps" />
</template>
