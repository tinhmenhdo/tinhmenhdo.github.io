import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

const TetIcons = {
  // Hoa Mai (Yellow Apricot Blossom) - Five petals, rounded
  MaiFlower: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 20 Q60 10 70 30 Q80 40 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L80 50 Q90 60 70 80 Q60 90 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 80 Q40 90 30 70 Q20 60 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L20 50 Q10 40 30 20 Q40 10 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L35 25 Q30 10 50 15 Q70 10 65 25 Z", transform: "rotate(45 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "8", fill: "#FF8F00" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "10", stroke: "#E65100", strokeWidth: "1", fill: "none", opacity: "0.3" })
  ] }),
  // Hoa Đào (Peach Blossom) - Pointed petals, more delicate
  PeachBlossom: (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 40 20 50 10 C60 20 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 80 40 90 50 C80 60 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 60 80 50 90 C40 80 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 20 60 10 50 C20 40 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 25 30 20 20 C35 25 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "5", fill: "#C2185B" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 40", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L60 50", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 60", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L40 50", stroke: "#880E4F", strokeWidth: "1" })
  ] }) }),
  // Cành Đào Sum Xuê (Lush Peach Branch)
  PeachBranchLush: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 200 C 50 150, 150 150, 250 50 C 280 20, 290 10, 300 0",
        stroke: "#5D4037",
        strokeWidth: "6",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M100 160 C 130 120, 150 80, 180 60", stroke: "#5D4037", strokeWidth: "4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M180 100 C 220 100, 240 120, 260 140", stroke: "#5D4037", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#F48FB1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "180", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "170", r: "6" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "160", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "115", cy: "150", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "120", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "165", cy: "110", r: "7" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "80", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "220", cy: "70", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "270", cy: "40", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "290", cy: "20", r: "7" }),
      /* @__PURE__ */ jsx("circle", { cx: "180", cy: "60", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "260", cy: "140", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "240", cy: "120", r: "7" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#C2185B", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "180", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "160", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "120", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "80", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "3" })
    ] })
  ] }),
  // Cành Mai Sum Xuê (Lush Ochna Branch)
  MaiBranchLush: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 200 C 50 150, 150 150, 250 50 C 280 20, 290 10, 300 0",
        stroke: "#5D4037",
        strokeWidth: "6",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M80 170 C 120 140, 140 100, 160 80", stroke: "#5D4037", strokeWidth: "4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M160 110 C 200 110, 220 130, 240 150", stroke: "#5D4037", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#FFD700", children: [
      /* @__PURE__ */ jsx("circle", { cx: "40", cy: "190", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "170", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "95", cy: "160", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "130", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "110", r: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "180", cy: "100", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "210", cy: "70", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "270", cy: "30", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "290", cy: "10", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "80", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "240", cy: "150", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "220", cy: "130", r: "7" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#E65100", children: [
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "170", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "110", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "3" })
    ] })
  ] }),
  // Bánh Chưng (Square Sticky Rice Cake)
  BanhChung: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "80", height: "80", rx: "4", fill: "#689F38", stroke: "#33691E", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "50", y1: "10", x2: "50", y2: "90", stroke: "#C5E1A5", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "50", x2: "90", y2: "50", stroke: "#C5E1A5", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "20", x2: "80", y2: "80", stroke: "#C5E1A5", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("line", { x1: "80", y1: "20", x2: "20", y2: "80", stroke: "#C5E1A5", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "40", width: "20", height: "20", fill: "#FFC107", transform: "rotate(45 50 50)", opacity: "0.8" })
  ] }),
  // Dây Pháo (Traditional Firecracker String) - No Chinese text, decorative pattern
  FirecrackerString: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 200", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M30 0 L30 200", stroke: "#8D6E63", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "40", height: "50", rx: "2", fill: "#D32F2F" }),
    /* @__PURE__ */ jsx("path", { d: "M10 18 L50 18", stroke: "#FFD700", strokeWidth: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M10 52 L50 52", stroke: "#FFD700", strokeWidth: "3" }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "23",
        y: "28",
        width: "14",
        height: "14",
        transform: "rotate(45 30 35)",
        fill: "none",
        stroke: "#FFD700",
        strokeWidth: "2"
      }
    ),
    [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxs("g", { transform: `translate(0, ${70 + i * 22})`, children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: i % 2 === 0 ? 8 : 22,
          y: "0",
          width: "18",
          height: "20",
          rx: "1",
          fill: "#D32F2F",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: i % 2 === 0 ? 26 : 22, y1: "0", x2: "30", y2: "0", stroke: "#5D4037", strokeWidth: "1" }),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: i % 2 === 0 ? 8 : 22,
          y1: "4",
          x2: i % 2 === 0 ? 26 : 40,
          y2: "4",
          stroke: "#FFD700",
          strokeWidth: "1",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: i % 2 === 0 ? 8 : 22,
          y1: "16",
          x2: i % 2 === 0 ? 26 : 40,
          y2: "16",
          stroke: "#FFD700",
          strokeWidth: "1",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      )
    ] }, i))
  ] }),
  // Ông Đồ (Vietnamese Scholar writing calligraphy)
  OngDo: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M60 180 Q60 120 100 110 Q140 120 140 180", fill: "#1A237E", stroke: "#000", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "80", r: "25", fill: "#FFCCBC" }),
    /* @__PURE__ */ jsx("path", { d: "M75 70 Q100 50 125 70 L125 80 Q100 60 75 80 Z", fill: "#000" }),
    /* @__PURE__ */ jsx("path", { d: "M90 95 Q100 120 110 95", fill: "none", stroke: "#FFF", strokeWidth: "2", opacity: "0.8" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "170", width: "120", height: "10", fill: "#5D4037" }),
    /* @__PURE__ */ jsx("rect", { x: "70", y: "140", width: "60", height: "40", fill: "#D32F2F", transform: "rotate(-5 100 160)" }),
    /* @__PURE__ */ jsx("rect", { x: "75", y: "145", width: "50", height: "30", fill: "#FFCDD2", transform: "rotate(-5 100 160)" }),
    /* @__PURE__ */ jsx("line", { x1: "120", y1: "130", x2: "135", y2: "100", stroke: "#795548", strokeWidth: "3" })
  ] }),
  // Cây Quất (Kumquat Tree)
  KumquatTree: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 250", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M60 200 L50 240 L150 240 L140 200 Z", fill: "#D84315", stroke: "#BF360C", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("rect", { x: "55", y: "200", width: "90", height: "10", fill: "#E64A19" }),
    /* @__PURE__ */ jsx("path", { d: "M80 220 L120 220", stroke: "#FFAB91", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M100 200 L100 150", stroke: "#795548", strokeWidth: "8", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M100 170 L80 140", stroke: "#795548", strokeWidth: "5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M100 160 L130 130", stroke: "#795548", strokeWidth: "5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#2E7D32", stroke: "#1B5E20", strokeWidth: "1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "40" }),
      /* @__PURE__ */ jsx("circle", { cx: "70", cy: "120", r: "35" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "120", r: "35" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "60", r: "30" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "80", r: "30" }),
      /* @__PURE__ */ jsx("circle", { cx: "140", cy: "80", r: "30" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#FF9800", stroke: "#E65100", strokeWidth: "1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "130", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "130", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "90", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "140", cy: "90", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "60", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "80", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "80", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "140", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "70", cy: "110", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "110", r: "8" })
    ] })
  ] }),
  // Nút thắt cát tường (Lucky Knot)
  LuckyKnot: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "none", stroke: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M50 20 C70 10 90 30 80 50 C90 70 70 90 50 80 C30 90 10 70 20 50 C10 30 30 10 50 20",
        stroke: "#D32F2F",
        strokeWidth: "4",
        fill: "none"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M50 30 L50 70 M30 50 L70 50", stroke: "#D32F2F", strokeWidth: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "10", stroke: "#FFD700", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M50 80 L40 100 M50 80 L60 100", stroke: "#D32F2F", strokeWidth: "2" })
  ] })
};

export { TetIcons as T };
