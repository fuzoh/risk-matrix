<script setup lang="ts">
import { useMatrixStore } from "@/stores/matrixStore";
import MatrixCell from "./MatrixCell.vue";

const store = useMatrixStore();
</script>

<template>
  <div class="matrix-container">
    <div class="matrix-x-axis">
      <div class="matrix-x-labels">
        <p
          class="matrix-label"
          v-for="(label, index) in store.matrix.template.x.labels"
          :key="index"
        >
          {{ label }}
        </p>
      </div>
      <div>
        <h3>{{ store.matrix.template.x.name }}</h3>
      </div>
    </div>
    <div class="matrix-y-axis">
      <div>
        <h3 class="rotate">{{ store.matrix.template.y.name }}</h3>
      </div>
      <div class="matrix-y-labels">
        <div
          class="matrix-label"
          v-for="(label, index) in store.matrix.template.y.labels"
          :key="index"
        >
          <p class="rotate">{{ label }}</p>
        </div>
      </div>
    </div>
    <div class="matrix-cells">
      <!-- Generating rows -->
      <div
        class="matrix-row"
        v-for="y in store.matrix.template.y.size"
        :key="y"
      >
        <!-- Generating column cells for each rows -->
        <MatrixCell
          v-for="x in store.matrix.template.x.size"
          :x="x"
          :y="y"
          :key="x"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
  font-size: 1.6em;
}

p {
  font-size: 1.2em;
}

.matrix-container {
  height: 100%;
  width: 100%;
  background-color: azure;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 6fr 1fr;
}

.matrix-x-axis {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.matrix-x-axis > * {
  flex: 1 1 0px;
}

.matrix-x-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.matrix-y-axis {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.matrix-y-axis > * {
  flex: 1 1 0px;
}

.matrix-y-labels {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.rotate {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.matrix-label {
  flex: 1 1 0px;
  text-align: center;
}

.matrix-cells {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: beige;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.matrix-row {
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
