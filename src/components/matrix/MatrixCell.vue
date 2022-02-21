<script setup lang="ts">
import { useMatrixStore } from "@/stores/matrixStore";

interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>();

const store = useMatrixStore();

function newRisk(x: number, y: number) {
  alert(x + " " + y);
}
</script>

<template>
  <div class="matrix-cell" v-on:click="newRisk(props.x, props.y)">
    <p>{{ store.getRisksByCoordinates(props.x, props.y)?.id }}</p>
  </div>
</template>

<style>
.matrix-cell {
  flex: 1 1 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.matrix-cell:hover {
  background-color: aquamarine;
}
</style>
