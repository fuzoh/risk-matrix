<script setup lang="ts">
import { useMatrixStore } from "@/stores/matrixStore";

const store = useMatrixStore();
</script>

<template>
  <div>
    <div v-for="risk in store.matrix.risks" :key="risk.id">
      <p>{{ risk.name }}</p>
    </div>
  </div>
</template>
