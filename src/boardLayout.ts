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
  left: {
    pinkyOuter: ["Esc", "Tab", "Shift"],
    pinky: ["Q", ["A", "Gui"], "Z"],
    ring: ["W", ["S", "Alt"], "X"],
    middle: ["E", ["D", "Shift"], "C"],
    index: ["R", ["F", "Ctrl"], "V"],
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
    index: ["U", ["J", "Ctrl"], "M"],
    middle: ["I", ["K", "Shift"],
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
    {
      label: "'",
      style: {
        fontSize: "2em",
        transform: "translateY(10px)",
      },
    }, 
    "Shift"],
    thumb: [
      "Alt",
      "Enter",
      Layer.raise,
      ["Mute", "Alt Tab"],
    ],
    // sideSwitch: ["DPI-", "Point", "DPI+"]
    sideSwitch: ["Mo1", "Mo2", "Mo3"]
  },
};

export const lowerLayer: BoardLayer = {
  left: {
    pinkyOuter: ["~", "Updir", null],
    pinky: ["1", "LEFT", "Home"],
    ring: ["2", "DOWN", "PgDn"],
    middle: ["3", " UP ", "PgUp"],
    index: ["4", "RIGHT", "End"],
    indexOuter: ["5", "Word", null],
    thumb: [["Boot", "Scroll"], null, null, null],

    sideSwitch: ["Mode-", "RGB", "Mode+"]
  },
  right: {
    indexOuter: ["6", null, "Home"],
    index: ["7", "-", "PgDn"],
    middle: ["8", "=", "PgUp"],
    ring: ["9", "[", "End"],
    pinky: ["0", "]", null],
    pinkyOuter: ["DEL", "=", "\\"],
    thumb: [null, null, null, ["Boot", "Scroll"]],
    sideSwitch: ["DPI-", "Point", "DPI+"]
    
  },
};
export const raiseLayer: BoardLayer = {
  left: {
    pinkyOuter: ["F11", null, null],
    pinky: ["F1", null, "CAPS"],
    ring: ["F2", null, "_"],
    middle: ["F3", null, "+"],
    index: ["F4", null, "{"],
    indexOuter: ["5", null, "}"],
    thumb: [["Boot", "Zoom"], null, null, null],

    sideSwitch: ["Mo1", "Mo3", "Mo2"]
  },
  right: {
    indexOuter: ["F6", null, null],
    index: ["F7", null, null],
    middle: ["F8", null, null],
    ring: ["F9", "(", "|"],
    pinky: ["F0", ")", "\""],
    pinkyOuter: ["F12", "=", "Shh"],
    thumb: [null, null, null, ["Boot", "Zoom"]],

    sideSwitch: ["Mo1", "Mo3", "Mo2"]
  },
};
export const adjustLayer: BoardLayer = {
  left: {
    pinkyOuter: ["F11", null, null],
    pinky: ["F1", "Mode+", "Mode-"],
    ring: ["F2", "Spd+", "Spd-"],
    middle: ["F3", "Hue+", "Hue-"],
    index: ["F4", "Sat+", "Sat-"],
    indexOuter: ["F5", "Val+", "Val-"],
    thumb: [null, null, null, null],

    sideSwitch: ["Mo1", "Mo3", "Mo2"]
  },
  right: {
    indexOuter: ["F6", "Accel", null],
    index: ["F7", "🚫Mem", null],
    middle: ["F8", null, null],
    ring: ["F9", null, null],
    pinky: ["F10", null, null],
    pinkyOuter: ["F12", null, null],
    thumb: [null, null, null, null],

    sideSwitch: ["Mo1", "Mo3", "Mo2"]
  },
};
export const numpadLayer: BoardLayer = {
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
  left: {
    pinkyOuter: [null, null, null],
    pinky: [null, null, null],
    ring: [null, null, null],
    middle: [null, null, "Accel"],
    index: [null, null, "Zoom"],
    indexOuter: [null, null, "Snipe"],
    thumb: [null, "Mo3", "Mo2", "Mo1"],

    sideSwitch: [null, null, null]
  },
  right: {
    indexOuter: [null, null, "Mo4"],
    index: [null, null, "Mo5"],
    middle: [null, null, null],
    ring: [null, null, null],
    pinky: [null, null, null],
    pinkyOuter: [null, null, null],
    thumb: ["Mo1", "Mo2", "Mo3", null],

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
