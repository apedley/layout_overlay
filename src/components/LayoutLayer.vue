<script setup lang="ts">
import { BoardLayer, KeyLabel } from "../boardLayout";
import LayoutKey from "./LayoutKey.vue";

interface LayerProps {
  layer: BoardLayer;
}

interface LayerColumn {
  keys: KeyLabel[];
  styleClass?: string;
}

interface LayerThumb {
  key: KeyLabel;
  homeKey?: boolean;
  styleClass?: string;
}

interface LayerKnob {
  key: KeyLabel;
  styleClass?: string;
}

interface LayerSideSwitch {
  key: KeyLabel;
  styleClass?: string;
}

const props = defineProps<LayerProps>();

const columns: LayerColumn[] = [

  // left
  {
    keys: props.layer.left.pinkyOuter as any,
    styleClass: "mt-14",
  },
  {
    keys: props.layer.left.pinky as any,
    styleClass: "mt-12",
  },
  {
    keys: props.layer.left.ring as any,
    styleClass: "mt-3",
  },
  {
    keys: props.layer.left.middle as any,
  },
  {
    keys: props.layer.left.index as any,
    styleClass: "mt-3",
  },
  {
    keys: props.layer.left.indexOuter as any,
    styleClass: "mt-6 mr-8",
  },
  // right
  {
    keys: props.layer.right.indexOuter as any,
    styleClass: "mt-6 ml-8",
  },
  {
    keys: props.layer.right.index as any,
    styleClass: "mt-3",
  },
  {
    keys: props.layer.right.middle as any,
  },
  {
    keys: props.layer.right.ring as any,
    styleClass: "mt-3 rotate-10",
  },
  {
    keys: props.layer.right.pinky as any,
    styleClass: "mt-12",
  },
  {
    keys: props.layer.right.pinkyOuter as any,
    styleClass: "mt-14",
  },
];

function isHomeRow(col: number, row: number): boolean {
  return ((col >= 1 && col <= 4) || (col >= 7 && col <= 10)) && row == 1;
  return false;
}

const thumbs: LayerThumb[] = [
  // left
  {
    key: props.layer.left.thumb[0],
    styleClass: "transform ml-[105px] mt-[20px]",
  },
  {
    key: props.layer.left.thumb[1],
    styleClass: "transform ml-[20px]",
  },
  {
    key: props.layer.left.thumb[2],
    // homeKey: true,
    styleClass: "mt-[8px] ml-[6px] rotate-[12deg]",
  },
  {
    key: props.layer.left.thumb[3],
    styleClass: "mt-[27px] ml-[4px] rotate-[24deg]",
  },
  // right
  {
    key: props.layer.right.thumb[0],
    styleClass: "ml-[20px] mt-[27px] mr-[4px] rotate-[-24deg]",
  },
  {
    key: props.layer.right.thumb[1],
    // homeKey: true,
    styleClass: "mt-[8px] mr-[6px] rotate-[-12deg]",
  },
  {
    key: props.layer.right.thumb[2],
  },
  {
    key: props.layer.right.thumb[3],
    styleClass: "mt-[20px] ml-[20px]",
  },
];
const thumbShift = "-translate-y-6";

const sideSwitches: LayerSideSwitch[] = [
  {
    key: props.layer.left.sideSwitch[0],
    // styleClass: "mt-[-20px] ml-[15px]",
    styleClass: "transform ml-[150px]",
  },
  {
    key: props.layer.left.sideSwitch[1],
    // styleClass: "mt-[-20px] ml-[15px]",
  },
  {
    key: props.layer.left.sideSwitch[2],
    // styleClass: "mt-[-20px] ml-[15px]",
  },
  {
    key: props.layer.right.sideSwitch[0],
    styleClass: "ml-[80px]",
    // styleClass: "mt-[-20px] ml-[15px]",
  },
  {
    key: props.layer.right.sideSwitch[1],
    // styleClass: "mt-[-20px] ml-[15px]",
  },
  {
    key: props.layer.right.sideSwitch[2],
    // styleClass: "mt-[-20px] ml-[15px]",
  },
];

const sideSwitchShift = "-translate-y-3";

</script>

<template>
  <div class="layer">
    <div class="flex flex-row">
      <div
        v-for="(c, i) in columns"
        :class="c.styleClass"
        class="flex flex-col"
      >
        <LayoutKey
          v-for="(k, j) in c.keys"
          :key="j"
          :label="k"
          :home="isHomeRow(i, j)"
        />
      </div>
    </div>

    <div class="flex flex-row thumbs">
      <LayoutKey
        v-for="(t, i) in thumbs"
        :key="i"
        :label="t.key"
        :home="t.homeKey"
        :class="`flex flex-col ${t.styleClass} ${thumbShift}`"
      />
    </div>

    <div class="flex flex-row sideSwitches">
      <LayoutKey
        v-for="(s, i) in sideSwitches"
        :key="i"
        :height=35
        :label="s.key"
        :class="`flex flex-col ${s.styleClass} ${sideSwitchShift}`"
      />
    </div>    
  </div>
</template>

<style scoped lang="scss">
.thumbs {
  height: 75px;
}

</style>
