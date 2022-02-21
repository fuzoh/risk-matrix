<script setup lang="ts">
import RiskMatrix from "@/components/matrix/RiskMatrix.vue";
import RiskList from "../components/risks/RiskList.vue";
</script>

<template>
  <main id="matrix-view">
    <RiskMatrix />
    <RiskList />
  </main>
</template>

<style>
#matrix-view {
  height: 80vh;
  width: 80vh;
}
</style>
