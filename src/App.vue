<script setup lang="ts">
import {
  BoardLayer,
  // alphaLayer,
  // navLayer,
  // numLayer,
  // symLayer,
  // funLayer,
  // winLayer,
  // uniLayer,
  baseLayer,
  lowerLayer,
  raiseLayer,
  adjustLayer,
  numpadLayer,
  mouseLayer
} from "./boardLayout";
import LayoutLayer from "./components/LayoutLayer.vue";
import { onMounted, onUnmounted, Ref, ref } from "vue";
import { listen, UnlistenFn } from "@tauri-apps/api/event";
import LeaderList from "./components/LeaderList.vue";
import { m } from "@tauri-apps/api/dialog-20ff401c";

let layer: Ref<BoardLayer | null> = ref(baseLayer);
let leader = ref(false);
let shift = ref(false);
let layerChangeCount = ref(0);

const layers = [
  // alphaLayer,
  // alphaLayer,
  // navLayer,
  // numLayer,
  // symLayer,
  // funLayer,
  // uniLayer,
  // winLayer,
  baseLayer,
  lowerLayer,
  raiseLayer,
  adjustLayer,
  numpadLayer,
  mouseLayer,
];

if ((window as any).__TAURI__) {
  const unlisten: UnlistenFn[] = [];

  onMounted(async () => {
    unlisten.push(
      await listen<number>("layer", (ev) => {
        layer.value = layers[ev.payload];
        layerChangeCount.value++;
      }),
      await listen<boolean>("leader", (ev) => {
        leader.value = ev.payload;
      }),
      await listen<boolean>("shift", (ev) => {
        shift.value = ev.payload;
      })
    );
  });

  onUnmounted(() => {
    unlisten.forEach((fn) => fn());
  });
}
</script>

<template>
  <div>
    <LayoutLayer
      v-if="layer"
      :layer="layer"
      :key="layerChangeCount"
      class="layout"
    />
  </div>
  <LeaderList v-if="leader" class="leader"/>
  
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  flex-grow: 1;
  align-self: stretch;
  // background-color: rgba(73, 73, 73, 0.25);
  // border: 5px solid rgba(43, 43, 43, 0.3);
  padding: 10px;
  border-radius: 3px;
  user-select: none;
}
.leader {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7); 
}
</style>
