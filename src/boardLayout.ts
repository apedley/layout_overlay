import { FixedArray } from "./array";

interface StyledLabel {
  label: string;
  style: object;
}

export type LabelValue = string | StyledLabel;

export function isStyledLabel(val: LabelValue): val is StyledLabel {
  return (val as any).style !== undefined;
}

export type KeyLabel = null | LabelValue | LabelValue[];

export interface BoardHalf {
  pinkyOuter: FixedArray<KeyLabel, 3>;
  pinky: FixedArray<KeyLabel, 3>;
  ring: FixedArray<KeyLabel, 3>;
  middle: FixedArray<KeyLabel, 3>;
  index: FixedArray<KeyLabel, 3>;
  indexOuter: FixedArray<KeyLabel, 3>;
  thumb: FixedArray<KeyLabel, 4>;
  sideSwitch: FixedArray<KeyLabel, 3>;
}

// export interface BoardHalf {
//   pinkyOuter: FixedArray<KeyLabel, 1>;
//   pinky: FixedArray<KeyLabel, 3>;
//   ring: FixedArray<KeyLabel, 3>;
//   middle: FixedArray<KeyLabel, 3>;
//   index: FixedArray<KeyLabel, 3>;
//   indexOuter: FixedArray<KeyLabel, 2>;
//   thumb: FixedArray<KeyLabel, 3>;
// }

export interface BoardLayer {
  title: string;
  left: BoardHalf;
  right: BoardHalf;
}

export enum Layer {
  base = "BASE",
  lower = "🠇",
  raise = "🠅",
  adjust = "ADJ",
  numpad = "NUM",
  mouse = "MOUSE",
  // alpha = "ALPHA",
  // nav = "NAV",
  // num = "NUM",
  // sym = "SYM",
  // fun = "FUN",
  // win = "WIN",
  // uni = "UNI",
}
export const baseLayer: BoardLayer = {
  title: "Base",
  left: {
    pinkyOuter: ["Esc", "Tab", "Shift"],
    pinky: ["Q", ["A", "Gui"], ["Z", Layer.raise]],
    ring: ["W", ["S", "Alt"], "X"],
    middle: ["E", ["D", "Ctrl"], "C"],
    index: ["R", ["F", "Shift"], "V"],
    indexOuter: ["T", "G", "B"],
    thumb: [
      ["Mute", "Vol"],
      Layer.lower,
      "Space",
      "Ctrl"
    ],
    sideSwitch: ["Prev", "Play", "Next"]
  },
  
    //         {
    //           label: ",",
    //           style: {
    //             fontSize: "2em",
    //             transform: "translateY(-10px)",
    //           },
    //         },
    //         "CTRL",
    //       ],
  right: {
    indexOuter: ["Y", "H", "N"],
    index: ["U", ["J", "Shift"], "M"],
    middle: ["I", ["K", "Ctrl"],
      {
        label: ",",
        style: {
          fontSize: "2em",
          transform: "translateY(-10px)",
        },
      }, 
    ],
    ring: ["O", ["L", "Alt"],
      {
        label: ".",
        style: {
          fontSize: "2em",
          transform: "translateY(-10px)",
        },
      }, 
    ],
    pinky: ["P", [";", "Gui"], "/"],
    pinkyOuter: ["Bksp", 
    [
      {
        label: " ' ",
        style: {
          fontSize: "2em",
          transform: "translateY(10px)",
        },
      }, 
      Layer.lower
    ], 
    "Shift"],
    thumb: [
      "Alt",
      "Enter",
      Layer.raise,
      ["Mute", "Scroll"],
    ],
    // sideSwitch: ["DPI-", "Point", "DPI+"]
    sideSwitch: ["Undo", "YRedo", "Redo"]
  },
};

export const lowerLayer: BoardLayer = {
  title: "Lower",
  left: {
    pinkyOuter: ["~", "Updir", "F11"],
    pinky: ["1", "-_", "F1"],
    ring: ["2", "=+", "F2"],
    middle: ["3", "[", "F3"],
    index: ["4", "(", "F4"],
    indexOuter: ["5", "{", "F5"],
    thumb: [["Boot", "DPI"], null, null, null],

    sideSwitch: ["Mode-", "RGB", "Mode+"]
  },
  right: {
    indexOuter: ["6", "}", "F6"],
    index: ["7", ")", "F7"],
    middle: ["8", "]", "F8"],
    ring: ["9", "-_", "F9"],
    pinky: ["0", "=+ ", "F10"],
    pinkyOuter: ["DEL", "\\|", "F12"],
    thumb: [null, null, null, "Zoom"],
    sideSwitch: ["DPI-", "Point", "DPI+"]
    
  },
};
export const raiseLayer: BoardLayer = {
  title: "Raise",
  left: {
    pinkyOuter: ["F11", "Word", null],
    pinky: ["Home", "🠈", null],
    ring: ["🠉", "🠋", "_"],
    middle: ["End", "🠊", "+"],
    index: ["PgUp", "PgDn", "{"],
    indexOuter: [null, "Word", "}"],
    thumb: ["C+tab", null, null, null],

    sideSwitch: ["DPI-", "Snipe", "DPI+"]
  },
  right: { 
    indexOuter: ["Mo1", "", "Mo4"],
    index: ["Mo2", "", "Mo5"],
    middle: ["MWh🠋", "", null],
    ring:   ["MWh🠉", "", "🠈"],
    pinky: [null, "🠉", "🠋"],
    pinkyOuter: [null, null, "🠊"],
    thumb: [null, null, null, ["Boot", "DPI"]],

    sideSwitch: ["Mo1", "Mo3", "Mo2"]
  },
};
export const adjustLayer: BoardLayer = {
  title: "Adjust",
  left: {
    pinkyOuter: ["F11", null, ["RGB", "Tog"]],
    pinky: ["F1", "Mode+", "Mode-"],
    ring: ["F2", "Spd+", "Spd-"],
    middle: ["F3", "Hue+", "Hue-"],
    index: ["F4", "Sat+", "Sat-"],
    indexOuter: ["F5", "Val+", "Val-"],
    thumb: ["Scroll", null, null, null],
    
    sideSwitch: [null, null, null]
  },
  right: {
    indexOuter: ["F6", "Accel", "CAPS"],
    index: ["F7", "🚫Mem", null],
    middle: ["F8", null, null],
    ring: ["F9", null, null],
    pinky: ["F10", null, null],
    pinkyOuter: ["F12", null, null],
    thumb: [null, null, null, "RGB"],

    sideSwitch: [null, null, null]
  },
};
export const numpadLayer: BoardLayer = {
  title: "Numpad",
  left: {
    pinkyOuter: [null, null, null],
    pinky: [null, null, null],
    ring: [null, null, null],
    middle: [null, null, null],
    index: [null, null, null],
    indexOuter: [null, null, null],
    thumb: [null, null, null, null],

    sideSwitch: [null, null, null]
  },
  right: {
    indexOuter: [null, null, null],
    index: [null, null, null],
    middle: [null, null, null],
    ring: [null, null, null],
    pinky: [null, null, null],
    pinkyOuter: [null, null, null],
    thumb: [null, null, null, null],

    sideSwitch: [null, null, null]
  },
};
export const mouseLayer: BoardLayer = {
  title: "Mouse",
  left: {
    pinkyOuter: [null, null, null],
    pinky: [null, null, null],
    ring: [null, null, null],
    middle: [null, null, "Close"],
    index: [null, null, "Prv\nTab"],
    indexOuter: [null, "Snipe", "TabN"],
    thumb: ["Zoom", null, null, null],

    sideSwitch: [null, null, null]
  },
  /*
   ["Mo1", "Mo🠈", "Mo4"],
    index: ["Mo2", "Mo🠋", "Mo5"],
    middle: ["MWh🠋", "Mo🠉", null],
    ring: ["MWh🠉", "Mo🠊", "🠈"],
    */
  right: {
    indexOuter: ["Mo1", "Mo1", "Mo4"],
    index: ["Mo2", "Mo2", "Mo5"],
    middle: ["MWh🠋", "", null],
    ring:   ["MWh🠉", "", null],
    pinky: ["Scr+", "Scr-", "DPI-"],
    pinkyOuter: ["Snp+", "Snp-", "DPI+"],
    thumb: [null, "Snipe", null, "CTab"],
    sideSwitch: [null, null, null]
  },
};
// export const alphaLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["Z"],
//     pinky: ["J", "A", "ALT"],
//     ring: [
//       "W",
//       "R",
//       [
//         {
//           label: ",",
//           style: {
//             fontSize: "2em",
//             transform: "translateY(-10px)",
//           },
//         },
//         "CTRL",
//       ],
//     ],
//     middle: ["F", "S", ["(", "SHFT"]],
//     index: ["P", "T", "V"],
//     indexOuter: ["G", "D"],
//     thumb: [null, 
//       ["ESC", Layer.win],
//       [
//         {
//           label: "˽",
//           style: {
//             fontSize: "3em",
//             transform: "translateY(-15px)",
//           },
//         },
//         Layer.nav,
//       ],
//       ["TAB", Layer.uni],
//     ],
//   },
//   right: {
//     indexOuter: ["C", "H"],
//     index: ["L", "N", "M"],
//     middle: ["U", "E", [")", "SHFT"]],
//     ring: [
//       "Y",
//       "I",
//       [
//         {
//           label: ".",
//           style: {
//             fontSize: "2em",
//             transform: "translateY(-10px)",
//           },
//         },
//         "CTRL",
//       ],
//     ],
//     pinky: ["B", "O", ["?", "ALT"]],
//     pinkyOuter: ["K"],
//     thumb: [null, 
//       ["ENTER", Layer.fun],
//       ["⇽", Layer.num],
//       ["⇽WRD", Layer.sym],
//     ],
//   },
// };

// // left thumb layers
// export const navLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["🔒"],
//     pinky: [null, "UNDO", "ALT"],
//     ring: [null, "CUT", "CTRL"],
//     middle: [null, "COPY", "SHFT"],
//     index: [null, "PASTE", "WIN"],
//     indexOuter: [null, "REDO"],
//     thumb: [null, null, null, null],
//   },
//   right: {
//     indexOuter: ["☰", "🔍"],
//     index: ["HOME", "⯇", "SEL WRD"],
//     middle: ["Pg↓", "⯆", "SEL LINE"],
//     ring: ["Pg↑", "▲", null],
//     pinky: ["END", "⯈", "CAPS LOCK"],
//     pinkyOuter: ["CAPS WRD"],
//     thumb: [null, "S(ENTER)", "⇾", "⇾ WRD"],
//   },
// };

// export const winLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["🔒"],
//     pinky: [null, "", ""],
//     ring: [null, "", ""],
//     middle: [null, "", ""],
//     index: [null, "", ""],
//     indexOuter: [null, "🖮"],
//     thumb: [null, null, null, null],
//   },
//   right: {
//     indexOuter: ["", "🗗"],
//     index: ["", "", ""],
//     middle: ["", "", ""],
//     ring: ["", "", null],
//     pinky: ["", "", ""],
//     pinkyOuter: [""],
//     thumb: [null, "", "", ""],
//   },
// };

// function getShiftedEmojiKey(emoji: string, shiftedEmoji: string): KeyLabel {
//   const getEmojiLabel: (e: string) => LabelValue = (e: string) => ({
//     label: e,
//     style: { filter: null, fontSize: "20px" },
//   });
//   return [getEmojiLabel(shiftedEmoji), getEmojiLabel(emoji)];
// }

// export const uniLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["🔒"],
//     pinky: [null, "Á", "ALT"],
//     ring: [null, "Ř", "CTRL"],
//     middle: [null, "Š", "SHFT"],
//     index: [null, "Ž", "WIN"],
//     indexOuter: [null, null],
//     thumb: [null, null, null, null],
//   },
//   right: {
//     indexOuter: ["Ú", "Č"],
//     index: ["Ů", "Ě", getShiftedEmojiKey("😘", "🥰")],
//     middle: ["Ď", "É", "SHFT"],
//     ring: ["Ň", "Í", getShiftedEmojiKey("🤢", "🤮")],
//     pinky: ["Ť", "Ý", getShiftedEmojiKey("🤨", "👍")],
//     pinkyOuter: ["Ó"],
//     thumb: [null, 
//       getShiftedEmojiKey("😭", "🙁"),
//       getShiftedEmojiKey("😅", "😁"),
//       getShiftedEmojiKey("😂", "🙂"),
//     ],
//   },
// };

// // right thumb layers
// export const numLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["|"],
//     pinky: ["<", "0", "ALT"],
//     ring: ["7", "1", ["4", "CTRL"]],
//     middle: ["8", "2", "5"],
//     index: ["9", "3", "6"],
//     indexOuter: [">", "!"],
//     thumb: [null, ".", "=", ","],
//   },
//   right: {
//     indexOuter: [null, null],
//     index: [null, "+", "WIN"],
//     middle: [null, "-", "SHFT"],
//     ring: [null, "*", "CTRL"],
//     pinky: [null, "/", "ALT"],
//     pinkyOuter: ["🔒"],
//     thumb: [null, null, null, null],
//   },
// };

// export const symLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["°"],
//     pinky: ["%", "Q", null],
//     ring: ["^", "X", "@"],
//     middle: ["'", '"', "`"],
//     index: [["$", "€"], "&", "#"],
//     indexOuter: ["~", "\\"],
//     thumb: [null, "]", ":", "}"],
//   },
//   right: {
//     indexOuter: [null, null],
//     index: [null, "[", "WIN"],
//     middle: [null, "{", "SHFT"],
//     ring: [null, "_", "CTRL"],
//     pinky: [null, ";", "ALT"],
//     pinkyOuter: ["🔒"],
//     thumb: [null, null, null, null],
//   },
// };

// export const funLayer: BoardLayer = {
//   left: {
//     pinkyOuter: ["Prt Scr"],
//     pinky: ["F9", "F5", "F1"],
//     ring: ["F10", "F6", "F2"],
//     middle: ["F11", "F7", "F3"],
//     index: ["F12", "F8", "F4"],
//     indexOuter: ["SCR↑", "SCR↓"],
//     thumb: [null, "🐭CNST0", "🐭 LEFT", "🐭RIGHT"],
//   },
//   right: {
//     indexOuter: [null, null],
//     index: [null, "🐭⯇", "WIN"],
//     middle: [null, "🐭⯆", "SHFT"],
//     ring: [null, "🐭▲", "CTRL"],
//     pinky: [null, "🐭⯈", "ALT"],
//     pinkyOuter: ["🔒"],
//     thumb: [null, null, null, null],
//   },
// };
