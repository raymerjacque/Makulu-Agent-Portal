// index.tsx
import React19 from "react";
import ReactDOM from "react-dom/client";

// App.tsx
import { useState as useState16, useCallback as useCallback3, useEffect as useEffect14, useRef as useRef10, useMemo as useMemo3 } from "react";

// components/AssistantPanel.tsx
import { useState, useRef, useEffect } from "react";

// components/icons.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var BotIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 8V4H8" }),
  /* @__PURE__ */ jsx("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M2 14h2" }),
  /* @__PURE__ */ jsx("path", { d: "M20 14h2" }),
  /* @__PURE__ */ jsx("path", { d: "M15 13v2" }),
  /* @__PURE__ */ jsx("path", { d: "M9 13v2" })
] });
var BrainCircuitIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 5a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M18 5a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M12 12a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M18 12a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M12 19a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M18 19a3 3 0 1 0-5.993.142" }),
  /* @__PURE__ */ jsx("path", { d: "M6 7.857v3.286" }),
  /* @__PURE__ */ jsx("path", { d: "M18 7.857v3.286" }),
  /* @__PURE__ */ jsx("path", { d: "M6 14.857v3.286" }),
  /* @__PURE__ */ jsx("path", { d: "M18 14.857v3.286" }),
  /* @__PURE__ */ jsx("path", { d: "M12 7.857v3.286" }),
  /* @__PURE__ */ jsx("path", { d: "M12 14.857v3.286" })
] });
var CodeIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
  /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
] });
var PauseIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { x: "6", y: "4", width: "4", height: "16" }),
  /* @__PURE__ */ jsx("rect", { x: "14", y: "4", width: "4", height: "16" })
] });
var DownloadIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
] });
var FileCodeIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ jsx("path", { d: "m10 13-2 2 2 2" }),
  /* @__PURE__ */ jsx("path", { d: "m14 17 2-2-2-2" })
] });
var LoaderIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `${className} animate-spin`, children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) });
var SendIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
  /* @__PURE__ */ jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
] });
var CanvasIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M8 12h8" }),
  /* @__PURE__ */ jsx("path", { d: "M12 8v8" })
] });
var XCircleIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
  /* @__PURE__ */ jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
] });
var RefreshCwIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
  /* @__PURE__ */ jsx("path", { d: "M21 3v5h-5" }),
  /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
  /* @__PURE__ */ jsx("path", { d: "M3 21v-5h5" })
] });
var MonitorPlayIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M10 7l6 5-6 5V7z" }),
  /* @__PURE__ */ jsx("rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M12 17v4" }),
  /* @__PURE__ */ jsx("path", { d: "M8 21h8" })
] });
var CodeSquareIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "m10 10-2 2 2 2" }),
  /* @__PURE__ */ jsx("path", { d: "m14 14 2-2-2-2" })
] });
var PanelLeftIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "9", y1: "3", x2: "9", y2: "21" })
] });
var PencilIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }) });
var TerminalSquareIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "m7 11 2-2-2-2" }),
  /* @__PURE__ */ jsx("path", { d: "M11 13h4" }),
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" })
] });
var FileTextIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] });
var RotateCwIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M21 2v6h-6" }),
  /* @__PURE__ */ jsx("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
  /* @__PURE__ */ jsx("path", { d: "M3 22v-6h6" }),
  /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" })
] });
var ClockIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
] });
var SignalIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M2 20h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M7 20v-4" }),
  /* @__PURE__ */ jsx("path", { d: "M12 20v-8" }),
  /* @__PURE__ */ jsx("path", { d: "M17 20V8" }),
  /* @__PURE__ */ jsx("path", { d: "M22 20V4" })
] });
var InfoIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
] });
var ShieldCheckIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })
] });
var PaintbrushIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" }),
  /* @__PURE__ */ jsx("path", { d: "M9 8c-2 3-4 3.5-7 4l8 8c.5-3 1-5 4-7" }),
  /* @__PURE__ */ jsx("path", { d: "M14.5 17.5 4.5 7.5" })
] });
var LayoutGridIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
] });
var SparklesIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9z" }) });
var GitMergeIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "3" }),
  /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "3" }),
  /* @__PURE__ */ jsx("path", { d: "M6 9v6c0 3 3 3 3 3h1.5" })
] });
var Wand2Icon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 21l1.9-5.8 5.8-1.9-5.8-1.9z" }) });
var SitemapIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "6", height: "6", x: "3", y: "3", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "6", height: "6", x: "15", y: "15", rx: "1" }),
  /* @__PURE__ */ jsx("path", { d: "M6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2" }),
  /* @__PURE__ */ jsx("path", { d: "M18 9h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" }),
  /* @__PURE__ */ jsx("path", { d: "M12 9v12" }),
  /* @__PURE__ */ jsx("path", { d: "M9 18H3" }),
  /* @__PURE__ */ jsx("path", { d: "M15 18h6" })
] });
var GitBranchPlusIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M6 3v12" }),
  /* @__PURE__ */ jsx("path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
  /* @__PURE__ */ jsx("path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
  /* @__PURE__ */ jsx("path", { d: "M15 6a9 9 0 0 0-9 9" }),
  /* @__PURE__ */ jsx("path", { d: "M18 15h6" }),
  /* @__PURE__ */ jsx("path", { d: "M21 12v6" })
] });
var DatabaseIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
  /* @__PURE__ */ jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
  /* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
] });
var ServerIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
] });
var PaletteIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "13.5", cy: "6.5", r: ".5" }),
  /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "10.5", r: ".5" }),
  /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "7.5", r: ".5" }),
  /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "12.5", r: ".5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.926-.746-1.648-1.648-1.648-.926 0-1.648-.746-1.648-1.648 0-.926.746-1.648 1.648-1.648.926 0 1.648-.746 1.648-1.648 0-.926-.746-1.648-1.648-1.648-.926 0-1.648-.746-1.648-1.648 0-.926.746-1.648 1.648-1.648.926 0 1.648-.746 1.648-1.648C13.648 2.746 12.926 2 12 2z" })
] });
var CheckIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) });
var XIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var Trash2Icon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("polyline", { points: "3 6 5 6 21 6" }),
  /* @__PURE__ */ jsx("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
  /* @__PURE__ */ jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
  /* @__PURE__ */ jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
] });
var PlusCircleIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "16" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "12", x2: "16", y2: "12" })
] });
var CheckCircleIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
] });
var ClipboardCheckIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }),
  /* @__PURE__ */ jsx("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ jsx("path", { d: "m9 14 2 2 4-4" })
] });
var BookOpenIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
  /* @__PURE__ */ jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
] });
var BugIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "m8 2 1.88 1.88" }),
  /* @__PURE__ */ jsx("path", { d: "M14.12 3.88 16 2" }),
  /* @__PURE__ */ jsx("path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
  /* @__PURE__ */ jsx("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }),
  /* @__PURE__ */ jsx("path", { d: "M12 20v-9" }),
  /* @__PURE__ */ jsx("path", { d: "M6.53 9C4.6 9.64 3 11.41 3 13.5c0 2.84 2.33 5.16 5.25 5.16" }),
  /* @__PURE__ */ jsx("path", { d: "M17.47 9c1.9 1.04 3.53 2.59 3.53 4.5 0 2.84-2.33 5.16-5.25 5.16" })
] });
var HistoryIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
  /* @__PURE__ */ jsx("path", { d: "M3 3v5h5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 7v5l4 2" })
] });
var FolderIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }) });
var ChevronRightIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx("path", { d: "m9 18 6-6-6-6" }) });
var LayersIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
  /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
  /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
] });
var TerminalIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("polyline", { points: "4 17 10 11 4 5" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
] });
var ImageIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
  /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
] });

// constants.ts
var languageOptions = [
  { value: "angular", label: "Angular" },
  { value: "bash", label: "Bash Script" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "dart", label: "Dart (Flutter)" },
  { value: "freebasic", label: "FreeBASIC" },
  { value: "go", label: "Go" },
  { value: "html", label: "HTML/CSS/JS" },
  { value: "java", label: "Java" },
  { value: "kotlin", label: "Kotlin (Android)" },
  { value: "node", label: "Node.js (Express)" },
  { value: "php", label: "PHP" },
  { value: "python", label: "Python" },
  { value: "react", label: "React/TS" },
  { value: "ruby", label: "Ruby" },
  { value: "rust", label: "Rust" },
  { value: "sql", label: "SQL" },
  { value: "svelte", label: "Svelte" },
  { value: "swift", label: "Swift" },
  { value: "terraform", label: "Terraform (HCL)" },
  { value: "typescript_node", label: "TypeScript (Node.js)" },
  { value: "vue", label: "Vue.js" }
];
var contentOptions = [
  { value: "powerpoint_presentation", label: "PowerPoint Presentation" },
  { value: "blog_post", label: "Blog Post" },
  { value: "article", label: "Article" },
  { value: "novel", label: "Novel" },
  { value: "tutorial_book", label: "Tutorial Book" },
  { value: "short_story", label: "Short Story" },
  { value: "poem", label: "Poem" },
  { value: "press_release", label: "Press Release" },
  { value: "resume", label: "Resume" },
  { value: "cover_letter", label: "Cover Letter" },
  { value: "resignation_letter", label: "Resignation Letter" },
  { value: "email", label: "Email" },
  { value: "social_media_post", label: "Social Media Post" },
  { value: "ad_copy", label: "Ad Copy" },
  { value: "product_description", label: "Product Description" },
  { value: "website_content", label: "Website Content" },
  { value: "speech", label: "Speech" },
  { value: "script", label: "Script" },
  { value: "technical_documentation", label: "Technical Documentation" },
  { value: "user_manual", label: "User Manual" },
  { value: "research_paper", label: "Research Paper" },
  { value: "lesson_plan", label: "Lesson Plan" },
  { value: "recipe", label: "Recipe" },
  { value: "travel_itinerary", label: "Travel Itinerary" }
];

// components/AssistantPanel.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var novelGenres = [
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Historical Fiction",
  "Horror",
  "Adventure",
  "Dystopian",
  "Young Adult",
  "Children's Fiction",
  "Literary Fiction"
];
var toneOptions = [
  "Optional",
  "Formal",
  "Informal",
  "Professional",
  "Conversational",
  "Humorous",
  "Serious",
  "Empathetic",
  "Authoritative",
  "Persuasive",
  "Inspirational",
  "Romantic",
  "Poetic",
  "Technical",
  "Journalistic",
  "Sarcastic",
  "Witty"
];
var NovelForm = ({ spec, setSpec, disabled }) => {
  const handleSpecChange = (field, value) => {
    setSpec({ ...spec, [field]: value });
  };
  const handleCharacterChange = (id, field, value) => {
    setSpec({
      ...spec,
      characters: spec.characters.map((c) => c.id === id ? { ...c, [field]: value } : c)
    });
  };
  const addCharacter = () => {
    setSpec({
      ...spec,
      characters: [...spec.characters, { id: crypto.randomUUID(), name: "", gender: "", age: "", description: "" }]
    });
  };
  const removeCharacter = (id) => {
    setSpec({ ...spec, characters: spec.characters.filter((c) => c.id !== id) });
  };
  const handlePlotPointChange = (id, value) => {
    setSpec({
      ...spec,
      plotPoints: spec.plotPoints.map((p) => p.id === id ? { ...p, description: value } : p)
    });
  };
  const addPlotPoint = () => {
    setSpec({ ...spec, plotPoints: [...spec.plotPoints, { id: crypto.randomUUID(), description: "" }] });
  };
  const removePlotPoint = (id) => {
    setSpec({ ...spec, plotPoints: spec.plotPoints.filter((p) => p.id !== id) });
  };
  return /* @__PURE__ */ jsxs2("div", { className: "space-y-4 text-sm", children: [
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "genre", className: "block text-xs font-medium text-gray-400 mb-1", children: "Genre" }),
        /* @__PURE__ */ jsx2(
          "select",
          {
            id: "genre",
            value: spec.genre,
            disabled,
            onChange: (e) => handleSpecChange("genre", e.target.value),
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500",
            children: novelGenres.map((g) => /* @__PURE__ */ jsx2("option", { value: g, children: g }, g))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "numChapters", className: "block text-xs font-medium text-gray-400 mb-1", children: "Chapters" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "number",
            id: "numChapters",
            value: spec.numChapters,
            disabled,
            onChange: (e) => handleSpecChange("numChapters", e.target.value),
            placeholder: "e.g., 10",
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "wordsPerChapter", className: "block text-xs font-medium text-gray-400 mb-1", children: "Words/Chapter" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "number",
            id: "wordsPerChapter",
            value: spec.wordsPerChapter,
            disabled,
            onChange: (e) => handleSpecChange("wordsPerChapter", e.target.value),
            placeholder: "e.g., 1500",
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("h4", { className: "text-xs font-medium text-gray-400 mb-2", children: "Main Characters" }),
      /* @__PURE__ */ jsx2("div", { className: "space-y-2", children: spec.characters.map((char, index) => /* @__PURE__ */ jsxs2("div", { className: "bg-gray-900/50 p-2 rounded-md border border-gray-700 space-y-2", children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx2("input", { type: "text", placeholder: "Name", value: char.name, disabled, onChange: (e) => handleCharacterChange(char.id, "name", e.target.value), className: "w-1/3 bg-gray-800 p-1 rounded-md text-xs border border-gray-600" }),
          /* @__PURE__ */ jsx2("input", { type: "text", placeholder: "Gender", value: char.gender, disabled, onChange: (e) => handleCharacterChange(char.id, "gender", e.target.value), className: "w-1/3 bg-gray-800 p-1 rounded-md text-xs border border-gray-600" }),
          /* @__PURE__ */ jsx2("input", { type: "text", placeholder: "Age", value: char.age, disabled, onChange: (e) => handleCharacterChange(char.id, "age", e.target.value), className: "w-1/3 bg-gray-800 p-1 rounded-md text-xs border border-gray-600" }),
          /* @__PURE__ */ jsx2("button", { onClick: () => removeCharacter(char.id), disabled, className: "text-red-500 hover:text-red-400 text-xs p-1", children: "\xD7" })
        ] }),
        /* @__PURE__ */ jsx2("textarea", { placeholder: "Character description...", value: char.description, disabled, onChange: (e) => handleCharacterChange(char.id, "description", e.target.value), rows: 2, className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600 resize-none" })
      ] }, char.id)) }),
      /* @__PURE__ */ jsx2("button", { onClick: addCharacter, disabled, className: "mt-2 text-xs text-indigo-400 hover:text-indigo-300", children: "+ Add Character" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("h4", { className: "text-xs font-medium text-gray-400 mb-2", children: "Key Plot Points / Twists" }),
      /* @__PURE__ */ jsx2("div", { className: "space-y-2", children: spec.plotPoints.map((point, index) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx2("input", { type: "text", placeholder: "Describe a plot point...", value: point.description, disabled, onChange: (e) => handlePlotPointChange(point.id, e.target.value), className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600" }),
        /* @__PURE__ */ jsx2("button", { onClick: () => removePlotPoint(point.id), disabled, className: "text-red-500 hover:text-red-400 text-xs p-1", children: "\xD7" })
      ] }, point.id)) }),
      /* @__PURE__ */ jsx2("button", { onClick: addPlotPoint, disabled, className: "mt-2 text-xs text-indigo-400 hover:text-indigo-300", children: "+ Add Plot Point" })
    ] })
  ] });
};
var TutorialBookForm = ({ spec, setSpec, disabled }) => {
  const handleSpecChange = (field, value) => {
    setSpec({ ...spec, [field]: value });
  };
  const handleConceptChange = (id, value) => {
    setSpec({
      ...spec,
      concepts: spec.concepts.map((p) => p.id === id ? { ...p, description: value } : p)
    });
  };
  const addConcept = () => {
    setSpec({ ...spec, concepts: [...spec.concepts, { id: crypto.randomUUID(), description: "" }] });
  };
  const removeConcept = (id) => {
    setSpec({ ...spec, concepts: spec.concepts.filter((p) => p.id !== id) });
  };
  return /* @__PURE__ */ jsxs2("div", { className: "space-y-4 text-sm", children: [
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "audience", className: "block text-xs font-medium text-gray-400 mb-1", children: "Target Audience" }),
        /* @__PURE__ */ jsxs2(
          "select",
          {
            id: "audience",
            value: spec.audience,
            disabled,
            onChange: (e) => handleSpecChange("audience", e.target.value),
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500",
            children: [
              /* @__PURE__ */ jsx2("option", { children: "Beginner" }),
              /* @__PURE__ */ jsx2("option", { children: "Intermediate" }),
              /* @__PURE__ */ jsx2("option", { children: "Expert" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "tone", className: "block text-xs font-medium text-gray-400 mb-1", children: "Tone" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "text",
            id: "tone",
            value: spec.tone,
            disabled,
            onChange: (e) => handleSpecChange("tone", e.target.value),
            placeholder: "e.g., Conversational",
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "tbWordsPerChapter", className: "block text-xs font-medium text-gray-400 mb-1", children: "Words / Chapter (Approx)" }),
      /* @__PURE__ */ jsx2(
        "input",
        {
          type: "number",
          id: "tbWordsPerChapter",
          value: spec.wordsPerChapter,
          disabled,
          onChange: (e) => handleSpecChange("wordsPerChapter", e.target.value),
          placeholder: "e.g., 1000",
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("h4", { className: "text-xs font-medium text-gray-400 mb-2", children: "Key Concepts to Cover" }),
      /* @__PURE__ */ jsx2("div", { className: "space-y-2", children: spec.concepts.map((point) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx2("input", { type: "text", placeholder: "Describe a concept or topic...", value: point.description, disabled, onChange: (e) => handleConceptChange(point.id, e.target.value), className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600" }),
        /* @__PURE__ */ jsx2("button", { onClick: () => removeConcept(point.id), disabled, className: "text-red-500 hover:text-red-400 text-xs p-1", children: "\xD7" })
      ] }, point.id)) }),
      /* @__PURE__ */ jsx2("button", { onClick: addConcept, disabled, className: "mt-2 text-xs text-indigo-400 hover:text-indigo-300", children: "+ Add Concept" })
    ] })
  ] });
};
var PowerPointForm = ({ spec, setSpec, disabled }) => {
  const themes = ["Professional Dark", "Minimalist Light", "Vibrant Gradient", "Corporate Blue", "Academic Formal"];
  const layouts = [
    { id: "title", name: "Title Slide" },
    { id: "title_and_content", name: "Title and Content" },
    { id: "section_header", name: "Section Header" },
    { id: "two_content", name: "Two Content" },
    { id: "comparison", name: "Comparison" },
    { id: "title_only", name: "Title Only" },
    { id: "blank", name: "Blank" },
    { id: "content_with_caption", name: "Content with Caption" },
    { id: "picture_with_caption", name: "Picture with Caption" }
  ];
  const handleSpecChange = (field, value) => {
    setSpec({ ...spec, [field]: value });
  };
  const handleSlideChange = (id, field, value) => {
    setSpec({
      ...spec,
      slides: spec.slides.map((s) => s.id === id ? { ...s, [field]: value } : s)
    });
  };
  const addSlide = () => {
    const newSlide = {
      id: crypto.randomUUID(),
      title: "",
      content: "",
      layout: "title_and_content",
      imagePrompt: ""
    };
    setSpec({ ...spec, slides: [...spec.slides, newSlide] });
  };
  const removeSlide = (id) => {
    setSpec({ ...spec, slides: spec.slides.filter((s) => s.id !== id) });
  };
  return /* @__PURE__ */ jsxs2("div", { className: "space-y-4 text-sm", children: [
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "theme", className: "block text-xs font-medium text-gray-400 mb-1", children: "Presentation Theme" }),
      /* @__PURE__ */ jsx2(
        "select",
        {
          id: "theme",
          value: spec.theme,
          disabled,
          onChange: (e) => handleSpecChange("theme", e.target.value),
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs focus:ring-1 focus:ring-indigo-500",
          children: themes.map((t) => /* @__PURE__ */ jsx2("option", { value: t, children: t }, t))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("h4", { className: "text-sm font-medium text-gray-300 mb-2", children: "Slides" }),
      /* @__PURE__ */ jsx2("div", { className: "space-y-3 max-h-80 overflow-y-auto pr-2", children: spec.slides.map((slide, index) => /* @__PURE__ */ jsxs2("div", { className: "bg-gray-900/50 p-3 rounded-md border border-gray-700 space-y-2", children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs2("span", { className: "font-bold text-gray-400", children: [
            "Slide ",
            index + 1
          ] }),
          /* @__PURE__ */ jsx2("button", { onClick: () => removeSlide(slide.id), disabled, className: "text-red-500 hover:text-red-400 text-xs p-1", children: "\xD7 Remove" })
        ] }),
        /* @__PURE__ */ jsx2(
          "select",
          {
            value: slide.layout,
            disabled,
            onChange: (e) => handleSlideChange(slide.id, "layout", e.target.value),
            className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600",
            children: layouts.map((l) => /* @__PURE__ */ jsx2("option", { value: l.id, children: l.name }, l.id))
          }
        ),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "text",
            placeholder: "Slide Title...",
            value: slide.title,
            disabled,
            onChange: (e) => handleSlideChange(slide.id, "title", e.target.value),
            className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600"
          }
        ),
        /* @__PURE__ */ jsx2(
          "textarea",
          {
            placeholder: "Slide content, notes, or bullet points...",
            value: slide.content,
            disabled,
            onChange: (e) => handleSlideChange(slide.id, "content", e.target.value),
            rows: 3,
            className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600 resize-y"
          }
        ),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "text",
            placeholder: "Optional: Prompt for an image...",
            value: slide.imagePrompt,
            disabled,
            onChange: (e) => handleSlideChange(slide.id, "imagePrompt", e.target.value),
            className: "w-full bg-gray-800 p-1 rounded-md text-xs border border-gray-600"
          }
        )
      ] }, slide.id)) }),
      /* @__PURE__ */ jsx2("button", { onClick: addSlide, disabled, className: "mt-2 w-full text-center py-2 text-xs text-indigo-400 hover:text-indigo-300 border-2 border-dashed border-gray-600 rounded-md hover:border-gray-500 transition-colors", children: "+ Add Slide" })
    ] })
  ] });
};
var AssistantPanel = (props) => {
  const {
    chatHistory,
    onSendMessage,
    onAttemptFix,
    onSkipFix,
    isLoading,
    appPhase,
    selectedLanguage,
    setSelectedLanguage,
    isNewProject,
    mode,
    contentType,
    setContentType,
    wordCount,
    setWordCount,
    novelSpec,
    setNovelSpec,
    tutorialBookSpec,
    setTutorialBookSpec,
    powerPointSpec,
    setPowerPointSpec,
    onSendToCanvas,
    keywords,
    setKeywords,
    audience,
    setAudience,
    tone,
    setTone,
    approvalMode,
    setApprovalMode,
    testingPreference,
    setTestingPreference,
    isPausedForRequest,
    settings
  } = props;
  const [currentMessage, setCurrentMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const chatLogRef = useRef(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const CHARACTER_LIMIT2 = 32500;
  const isPowerPointMode = contentType === "powerpoint_presentation";
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);
  const handleFileSelection = async (e) => {
    const files = e.target.files;
    if (!files) return;
    const readPromises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, content: reader.result });
        reader.onerror = reject;
        reader.readAsText(file);
      });
    });
    try {
      const results = await Promise.all(readPromises);
      setAttachedFiles((prev) => [...prev, ...results]);
    } catch (error) {
      console.error("Error reading files:", error);
      alert("There was an error reading one of the files.");
    } finally {
      if (e.target) e.target.value = "";
    }
  };
  const removeAttachedFile = (indexToRemove) => {
    setAttachedFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  const handleSend = () => {
    const canSendStandard = !isPowerPointMode && (currentMessage.trim() || attachedFiles.length > 0);
    const canSendPowerPoint = isPowerPointMode && powerPointSpec.slides.length > 0;
    if (canSendStandard || canSendPowerPoint) {
      let payload;
      if (contentType === "novel") {
        payload = novelSpec;
      } else if (contentType === "tutorial_book") {
        payload = tutorialBookSpec;
      } else if (contentType === "powerpoint_presentation") {
        payload = powerPointSpec;
      } else {
        payload = {
          keywords,
          audience,
          tone
        };
      }
      let attachedFileContent = "";
      if (attachedFiles.length > 0) {
        let combinedContent = attachedFiles.map((file) => `// FILE: ${file.name}

${file.content}`).join("\n\n---\n\n");
        if (combinedContent.length > CHARACTER_LIMIT2) {
          alert(`Total attached file content exceeds ${CHARACTER_LIMIT2} characters and has been truncated.`);
          attachedFileContent = combinedContent.substring(0, CHARACTER_LIMIT2);
        } else {
          attachedFileContent = combinedContent;
        }
      }
      const messageToSend = isPowerPointMode ? `Create a presentation about "${powerPointSpec.slides[0]?.title || "the topics provided in the slides"}".` : currentMessage;
      onSendMessage(messageToSend, attachedFileContent || void 0, payload);
      setCurrentMessage("");
      setAttachedFiles([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };
  const handleTextareaInput = (e) => {
    setCurrentMessage(e.target.value);
    const textarea = e.currentTarget;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 300);
    textarea.style.height = `${newHeight}px`;
  };
  const renderCoderControls = () => /* @__PURE__ */ jsxs2("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "language", className: "block text-sm font-medium text-gray-300 mb-2", children: "Language" }),
      /* @__PURE__ */ jsx2(
        "select",
        {
          id: "language",
          value: selectedLanguage,
          onChange: (e) => setSelectedLanguage(e.target.value),
          disabled: isLoading || !isNewProject,
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50",
          children: languageOptions.map((opt) => {
            const isLocked = settings.tier2.coderLanguages[opt.value] === "locked";
            return /* @__PURE__ */ jsxs2("option", { value: opt.value, disabled: isLocked, className: isLocked ? "text-gray-500" : "", children: [
              opt.label,
              isLocked ? " (Pro)" : ""
            ] }, opt.value);
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "approvalMode", className: "block text-sm font-medium text-gray-300 mb-2", children: "Generation Mode" }),
      /* @__PURE__ */ jsxs2(
        "select",
        {
          id: "approvalMode",
          value: approvalMode,
          onChange: (e) => setApprovalMode(e.target.value),
          disabled: isLoading || !isNewProject,
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsx2("option", { value: "auto", children: "Silent Mode, AI runs on Autopilot" }),
            /* @__PURE__ */ jsx2("option", { value: "manual", children: "Request user approval on changes as they are made" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "testingPreference", className: "block text-sm font-medium text-gray-300 mb-2", children: "Testing Preference" }),
      /* @__PURE__ */ jsxs2(
        "select",
        {
          id: "testingPreference",
          value: testingPreference,
          onChange: (e) => setTestingPreference(e.target.value),
          disabled: isLoading || !isNewProject,
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsx2("option", { value: "run_tests", children: "Run In-house Testing" }),
            /* @__PURE__ */ jsx2("option", { value: "skip_tests", children: "Skip In-house Testing" })
          ]
        }
      )
    ] })
  ] });
  const renderContentControls = () => {
    const showExtraFields = !["novel", "tutorial_book", "technical_documentation", "user_manual", "research_paper", "powerpoint_presentation"].includes(contentType);
    return /* @__PURE__ */ jsxs2("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("label", { htmlFor: "contentType", className: "block text-sm font-medium text-gray-300 mb-2", children: "Content Type" }),
        /* @__PURE__ */ jsx2(
          "select",
          {
            id: "contentType",
            value: contentType,
            onChange: (e) => setContentType(e.target.value),
            disabled: isLoading || !isNewProject,
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50",
            children: contentOptions.map((opt) => {
              const isLocked = settings.tier2.contentTypes[opt.value] === "locked";
              return /* @__PURE__ */ jsxs2("option", { value: opt.value, disabled: isLocked, className: isLocked ? "text-gray-500" : "", children: [
                opt.label,
                isLocked ? " (Pro)" : ""
              ] }, opt.value);
            })
          }
        )
      ] }),
      contentType === "novel" ? /* @__PURE__ */ jsx2(NovelForm, { spec: novelSpec, setSpec: setNovelSpec, disabled: isLoading || !isNewProject }) : contentType === "tutorial_book" ? /* @__PURE__ */ jsx2(TutorialBookForm, { spec: tutorialBookSpec, setSpec: setTutorialBookSpec, disabled: isLoading || !isNewProject }) : contentType === "powerpoint_presentation" ? /* @__PURE__ */ jsx2(PowerPointForm, { spec: powerPointSpec, setSpec: setPowerPointSpec, disabled: isLoading || !isNewProject }) : /* @__PURE__ */ jsxs2("div", { className: "space-y-3", children: [
        showExtraFields && /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsxs2("label", { htmlFor: "keywords", className: "block text-sm font-medium text-gray-300 mb-2", children: [
              "Keywords ",
              /* @__PURE__ */ jsx2("span", { className: "text-gray-400", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx2(
              "input",
              {
                type: "text",
                id: "keywords",
                value: keywords,
                onChange: (e) => setKeywords(e.target.value),
                disabled: isLoading || !isNewProject,
                placeholder: "e.g., bees, pollination, honey",
                className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 placeholder:text-gray-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsxs2("label", { htmlFor: "audience", className: "block text-sm font-medium text-gray-300 mb-2", children: [
              "Target Audience ",
              /* @__PURE__ */ jsx2("span", { className: "text-gray-400", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx2(
              "input",
              {
                type: "text",
                id: "audience",
                value: audience,
                onChange: (e) => setAudience(e.target.value),
                disabled: isLoading || !isNewProject,
                placeholder: "e.g., school project, my boss, website visitors",
                className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 placeholder:text-gray-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsx2("label", { htmlFor: "tone", className: "block text-sm font-medium text-gray-300 mb-2", children: "Tone" }),
            /* @__PURE__ */ jsx2(
              "select",
              {
                id: "tone",
                value: tone,
                onChange: (e) => setTone(e.target.value),
                disabled: isLoading || !isNewProject,
                className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50",
                children: toneOptions.map((opt) => /* @__PURE__ */ jsx2("option", { value: opt, children: opt }, opt))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsx2("label", { htmlFor: "wordCount", className: "block text-sm font-medium text-gray-300 mb-2", children: "Word Count" }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              type: "text",
              id: "wordCount",
              value: wordCount,
              onChange: (e) => setWordCount(e.target.value),
              disabled: isLoading || !isNewProject,
              placeholder: "e.g., 500 or 'no limit'",
              className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 placeholder:text-gray-500"
            }
          )
        ] })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsx2("div", { className: "bg-gray-800/50 flex flex-col h-full border-r border-gray-700", children: /* @__PURE__ */ jsxs2("div", { className: "flex-grow flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsx2("div", { className: "p-4 border-b border-gray-700 overflow-y-auto", children: mode === "coder" ? renderCoderControls() : renderContentControls() }),
    /* @__PURE__ */ jsxs2("div", { ref: chatLogRef, className: "flex-grow overflow-y-auto p-4 space-y-4", children: [
      chatHistory.map((msg) => /* @__PURE__ */ jsx2("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxs2("div", { className: `max-w-prose p-3 rounded-lg ${msg.role === "user" ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-200"}`, children: [
        /* @__PURE__ */ jsx2("p", { className: "text-sm whitespace-pre-wrap", children: msg.content }),
        msg.isFailure && /* @__PURE__ */ jsxs2("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ jsx2(
            "button",
            {
              onClick: onAttemptFix,
              disabled: isLoading,
              className: "flex-1 text-center px-4 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors text-sm font-bold disabled:bg-gray-500 disabled:cursor-not-allowed",
              children: "Attempt to fix"
            }
          ),
          /* @__PURE__ */ jsx2(
            "button",
            {
              onClick: onSkipFix,
              disabled: isLoading,
              className: "flex-1 text-center px-4 py-1.5 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors text-sm font-medium disabled:bg-gray-500 disabled:cursor-not-allowed",
              children: "Skip"
            }
          )
        ] }),
        msg.showSendToCanvas && /* @__PURE__ */ jsx2("div", { className: "mt-3", children: /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: onSendToCanvas,
            disabled: isLoading,
            className: "w-full text-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-sm font-bold disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsx2(CanvasIcon, { className: "w-4 h-4" }),
              "Send Project to Canvas"
            ]
          }
        ) })
      ] }) }, msg.id)),
      isLoading && !isPausedForRequest && /* @__PURE__ */ jsx2("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx2("div", { className: "max-w-prose p-3 rounded-lg bg-gray-700 text-gray-200", children: /* @__PURE__ */ jsx2(LoaderIcon, { className: "w-5 h-5 text-gray-400" }) }) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "p-4 border-t border-gray-700", children: [
      attachedFiles.length > 0 && /* @__PURE__ */ jsxs2("div", { className: "mb-2 p-2 bg-gray-900/50 rounded-md border border-gray-600 max-h-28 overflow-y-auto", children: [
        /* @__PURE__ */ jsx2("p", { className: "text-xs text-gray-400 mb-2 font-semibold", children: "Attached Files:" }),
        /* @__PURE__ */ jsx2("div", { className: "flex flex-wrap gap-2", children: attachedFiles.map((file, index) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-1.5 bg-gray-700 text-xs text-gray-200 pl-2 pr-1 py-1 rounded-full", children: [
          /* @__PURE__ */ jsx2("span", { children: file.name }),
          /* @__PURE__ */ jsx2("button", { onClick: () => removeAttachedFile(index), className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ jsx2(XCircleIcon, { className: "w-4 h-4" }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "file",
            multiple: true,
            ref: fileInputRef,
            onChange: handleFileSelection,
            className: "hidden",
            accept: "text/*,.txt,.md,.log,.json,.xml,.yml,.yaml,.csv,.ini,.toml,.html,.htm,.css,.js,.mjs,.jsx,.ts,.tsx,.vue,.svelte,.py,.rb,.php,.pl,.sh,.java,.cs,.go,.rs,.swift,.kt,.kts,.c,.h,.cpp,.hpp,.sql,.bas"
          }
        ),
        /* @__PURE__ */ jsx2(
          "button",
          {
            onClick: () => fileInputRef.current?.click(),
            title: "Attach files",
            disabled: isLoading,
            className: "p-2 mb-1.5 text-gray-400 hover:text-white disabled:text-gray-600 disabled:cursor-not-allowed",
            children: /* @__PURE__ */ jsx2(PlusCircleIcon, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "relative flex-grow", children: [
          /* @__PURE__ */ jsx2(
            "textarea",
            {
              ref: textareaRef,
              rows: 3,
              className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 pr-12 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder:text-gray-500 resize-none max-h-[300px] disabled:bg-gray-800 disabled:cursor-not-allowed",
              placeholder: isPausedForRequest ? "Generation paused. Enter your request..." : isPowerPointMode ? "Define your slides in the form above. The main prompt is not needed." : appPhase === "awaiting-clarification" ? "Please provide the requested clarification..." : isNewProject ? mode === "coder" ? "Describe the app you want to build..." : "Describe the content you want to generate..." : "Describe the changes you want to make...",
              value: currentMessage,
              onChange: handleTextareaInput,
              disabled: isLoading && !isPausedForRequest || isPowerPointMode,
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }
            }
          ),
          /* @__PURE__ */ jsx2(
            "button",
            {
              onClick: handleSend,
              disabled: isLoading && !isPausedForRequest || (isPowerPointMode ? powerPointSpec.slides.length === 0 : !currentMessage.trim() && attachedFiles.length === 0),
              className: "absolute right-2 bottom-2 p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors",
              children: /* @__PURE__ */ jsx2(SendIcon, { className: "w-5 h-5 text-white" })
            }
          )
        ] })
      ] })
    ] })
  ] }) });
};

// components/EditorPanel.tsx
import { useMemo as useMemo2, useState as useState2, useEffect as useEffect2 } from "react";

// components/LivePreviewPanel.tsx
import { useMemo } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var LivePreviewPanel = ({ files }) => {
  const srcDoc = useMemo(() => {
    const htmlFile = files.find((f) => f.path.endsWith("index.html"));
    if (!htmlFile) {
      return `
        <body style="background-color: #1f2937; color: #d1d5db; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
          <div style="text-align: center;">
            <h1 style="color: #ffffff;">index.html not found</h1>
            <p>A live preview requires an index.html file in the project.</p>
          </div>
        </body>
      `;
    }
    let htmlContent = htmlFile.content;
    const basePath = htmlFile.path.includes("/") ? htmlFile.path.substring(0, htmlFile.path.lastIndexOf("/") + 1) : "";
    const getFileContent = (href) => {
      let path = href.startsWith("/") ? href.slice(1) : basePath + href;
      path = path.replace(/^(?:\.\/)+/, "");
      const file = files.find((f) => f.path === path);
      return file?.content;
    };
    htmlContent = htmlContent.replace(/<link[^>]+href=(["'])(.*?)\1/g, (match, quote, href) => {
      if (href.startsWith("http") || href.startsWith("//")) return match;
      const cssContent = getFileContent(href);
      return cssContent ? `<style>
${cssContent}
</style>` : `<!-- asset not found: ${href} -->`;
    });
    htmlContent = htmlContent.replace(/<script[^>]+src=(["'])(.*?)\1[^>]*><\/script>/gi, (match, quote, src) => {
      if (src.startsWith("http") || src.startsWith("//")) return match;
      const jsContent = getFileContent(src);
      const isModule = /type\s*=\s*["']module["']/.test(match);
      const scriptTag = isModule ? `<script type="module">` : `<script>`;
      return jsContent ? `${scriptTag}
${jsContent}
<\/script>` : `<!-- asset not found: ${src} -->`;
    });
    return htmlContent;
  }, [files]);
  return /* @__PURE__ */ jsx3(
    "iframe",
    {
      srcDoc,
      title: "Live Preview",
      sandbox: "allow-scripts",
      className: "w-full h-full bg-white border-none"
    },
    srcDoc
  );
};

// components/EditorPanel.tsx
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var countWords = (text) => {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
};
var buildFileTree = (files) => {
  const treeRoot = { name: "root", path: "", children: {} };
  for (const file of files) {
    let current = treeRoot.children;
    const parts = file.path.split("/");
    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = {
          name: part,
          path: parts.slice(0, index + 1).join("/"),
          children: {}
        };
      }
      if (index === parts.length - 1) {
        current[part].file = file;
        delete current[part].children;
      }
      current = current[part].children;
    });
  }
  const convertMapToArray = (childrenMap) => {
    const childrenArray = Object.values(childrenMap);
    childrenArray.forEach((child) => {
      if (child.children) {
        child.children = convertMapToArray(child.children);
      }
    });
    childrenArray.sort((a, b) => {
      const aIsFolder = !!a.children;
      const bIsFolder = !!b.children;
      if (aIsFolder !== bIsFolder) {
        return aIsFolder ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
    return childrenArray;
  };
  return convertMapToArray(treeRoot.children);
};
var TreeItem = ({ node, selectedFile, onSelectFile, onRegenerateFile, onFileDoubleClick, isContentMode, isLoading, depth }) => {
  const [isOpen, setIsOpen] = useState2(true);
  const isFolder = !!node.children;
  if (isFolder) {
    return /* @__PURE__ */ jsxs3("li", { children: [
      /* @__PURE__ */ jsxs3(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "flex items-center gap-2 w-full text-left p-2 rounded-md text-sm text-gray-300 hover:bg-gray-700/50",
          style: { paddingLeft: `${depth * 1.25 + 0.5}rem` },
          children: [
            /* @__PURE__ */ jsx4(ChevronRightIcon, { className: `w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}` }),
            /* @__PURE__ */ jsx4(FolderIcon, { className: "w-4 h-4 flex-shrink-0" }),
            /* @__PURE__ */ jsx4("span", { className: "truncate font-semibold", children: node.name })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsx4("ul", { className: "space-y-px", children: node.children?.map((child) => /* @__PURE__ */ jsx4(
        TreeItem,
        {
          node: child,
          selectedFile,
          onSelectFile,
          onRegenerateFile,
          onFileDoubleClick,
          isContentMode,
          isLoading,
          depth: depth + 1
        },
        child.path
      )) })
    ] });
  }
  const file = node.file;
  return /* @__PURE__ */ jsxs3("li", { className: "flex items-center justify-between group", style: { paddingLeft: `${depth * 1.25}rem` }, children: [
    /* @__PURE__ */ jsxs3(
      "button",
      {
        onClick: () => onSelectFile(file.path),
        onDoubleClick: () => onFileDoubleClick(file.path),
        className: `flex-grow text-left flex items-center gap-2 p-2 rounded-md text-sm w-full ${selectedFile === file.path ? "bg-indigo-600/30 text-white" : "text-gray-300 hover:bg-gray-700/50"}`,
        children: [
          file.status === "failed" && /* @__PURE__ */ jsx4(XCircleIcon, { className: "w-4 h-4 flex-shrink-0 text-red-500" }),
          file.status === "regenerating" && /* @__PURE__ */ jsx4(LoaderIcon, { className: "w-4 h-4 flex-shrink-0" }),
          (!file.status || file.status === "generated" || file.status === "queued") && /* @__PURE__ */ jsx4(FileCodeIcon, { className: "w-4 h-4 flex-shrink-0" }),
          /* @__PURE__ */ jsx4("span", { className: "truncate", children: node.name })
        ]
      }
    ),
    isContentMode && file.path.endsWith(".md") && /* @__PURE__ */ jsx4(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          onRegenerateFile(file.path);
        },
        title: `Regenerate ${file.path}`,
        disabled: isLoading,
        className: "p-1 mr-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ jsx4(RefreshCwIcon, { className: "w-4 h-4" })
      }
    )
  ] });
};
var FileTree = (props) => {
  const fileTree = useMemo2(() => buildFileTree(props.files), [props.files]);
  return /* @__PURE__ */ jsxs3("div", { className: "w-64 bg-gray-900/70 border-r border-gray-700 p-2 overflow-y-auto", children: [
    /* @__PURE__ */ jsx4("h3", { className: "text-sm font-semibold text-gray-400 mb-2 px-2", children: "Workspace" }),
    /* @__PURE__ */ jsx4("ul", { className: "space-y-px", children: fileTree.map((node) => /* @__PURE__ */ jsx4(
      TreeItem,
      {
        node,
        ...props,
        depth: 0
      },
      node.path
    )) })
  ] });
};
var CodeEditor = ({ file, onContentChange }) => {
  if (!file) {
    return /* @__PURE__ */ jsx4("div", { className: "flex-grow flex items-center justify-center text-gray-500", children: "Select a file to view its content" });
  }
  return /* @__PURE__ */ jsx4(
    "textarea",
    {
      value: file.content,
      onChange: (e) => onContentChange(e.target.value),
      className: "w-full h-full bg-gray-900 text-gray-200 p-4 font-mono text-sm resize-none focus:outline-none",
      spellCheck: "false"
    }
  );
};
var EditorPanel = ({ files, selectedFile, onSelectFile, onFileContentChange, onRegenerateFile, onFileDoubleClick, isContentMode, isLoading, isPreviewEnabled }) => {
  const [view, setView] = useState2("code");
  const currentFile = files.find((f) => f.path === selectedFile);
  const wordCount = useMemo2(() => countWords(currentFile?.content || ""), [currentFile]);
  useEffect2(() => {
    if (!isPreviewEnabled && view === "preview") {
      setView("code");
    }
  }, [isPreviewEnabled, view]);
  const handleContentChange = (newContent) => {
    if (selectedFile) {
      onFileContentChange(selectedFile, newContent);
    }
  };
  return /* @__PURE__ */ jsxs3("div", { className: "bg-gray-800/50 flex flex-col h-full border-r border-gray-700", children: [
    /* @__PURE__ */ jsx4("div", { className: "p-2 border-b border-gray-700 flex justify-between items-center h-[57px]", children: /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx4("h2", { className: "text-lg font-semibold px-2", children: "Editor" }),
      /* @__PURE__ */ jsxs3("div", { className: "bg-gray-900/50 rounded-lg p-1 flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxs3(
          "button",
          {
            onClick: () => setView("code"),
            className: `px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${view === "code" ? "bg-indigo-600 text-white" : "text-gray-400 hover:bg-gray-700"}`,
            children: [
              /* @__PURE__ */ jsx4(CodeSquareIcon, { className: "w-4 h-4" }),
              " Code"
            ]
          }
        ),
        isPreviewEnabled && /* @__PURE__ */ jsxs3(
          "button",
          {
            onClick: () => setView("preview"),
            className: `px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${view === "preview" ? "bg-indigo-600 text-white" : "text-gray-400 hover:bg-gray-700"}`,
            children: [
              /* @__PURE__ */ jsx4(MonitorPlayIcon, { className: "w-4 h-4" }),
              " Preview"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs3("div", { className: "flex-grow flex min-h-0", children: [
      /* @__PURE__ */ jsx4(
        FileTree,
        {
          files,
          selectedFile,
          onSelectFile,
          onRegenerateFile,
          onFileDoubleClick,
          isContentMode,
          isLoading
        }
      ),
      /* @__PURE__ */ jsx4("div", { className: "flex-grow flex flex-col", children: view === "code" ? /* @__PURE__ */ jsxs3(Fragment2, { children: [
        selectedFile && /* @__PURE__ */ jsxs3("div", { className: "bg-gray-900 text-gray-400 text-sm px-4 py-2 border-b border-gray-700 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx4("span", { children: selectedFile }),
          /* @__PURE__ */ jsxs3("span", { className: "text-xs bg-gray-700 px-2 py-0.5 rounded-full", children: [
            "Word Count: ",
            wordCount
          ] })
        ] }),
        /* @__PURE__ */ jsx4(CodeEditor, { file: currentFile, onContentChange: handleContentChange })
      ] }) : /* @__PURE__ */ jsx4(LivePreviewPanel, { files }) })
    ] })
  ] });
};

// components/Header.tsx
import { useState as useState4, useEffect as useEffect3, useRef as useRef2 } from "react";

// components/Tooltip.tsx
import { useState as useState3 } from "react";
import { Fragment as Fragment3, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Tooltip = ({ children, text, isLocked }) => {
  const [isVisible, setIsVisible] = useState3(false);
  if (!isLocked) {
    return /* @__PURE__ */ jsx5(Fragment3, { children });
  }
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxs4(
          "div",
          {
            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm z-50 border border-gray-700",
            role: "tooltip",
            children: [
              text,
              /* @__PURE__ */ jsx5(
                "div",
                {
                  className: "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900"
                }
              )
            ]
          }
        )
      ]
    }
  );
};

// components/Header.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var LOCKED_FEATURE_MESSAGE = "This Feature is locked, please upgrade to Pro to unlock this feature";
var ProjectNameEditor = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState4(false);
  const [currentValue, setCurrentValue] = useState4(value);
  const inputRef = useRef2(null);
  useEffect3(() => {
    setCurrentValue(value);
  }, [value]);
  useEffect3(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);
  const handleBlur = () => {
    setIsEditing(false);
    onChange(currentValue);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleBlur();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setCurrentValue(value);
    }
  };
  return /* @__PURE__ */ jsx6("div", { className: "flex items-center gap-2", children: isEditing ? /* @__PURE__ */ jsx6(
    "input",
    {
      ref: inputRef,
      type: "text",
      value: currentValue,
      onChange: (e) => setCurrentValue(e.target.value),
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: "bg-gray-700 text-white text-lg font-semibold rounded px-2 py-1 -ml-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    }
  ) : /* @__PURE__ */ jsxs5("button", { onClick: () => setIsEditing(true), className: "flex items-center gap-2 text-lg font-semibold rounded px-2 py-1 -ml-2 hover:bg-gray-800 transition-colors", children: [
    /* @__PURE__ */ jsx6("span", { className: "truncate max-w-32 md:max-w-xs", children: value }),
    /* @__PURE__ */ jsx6(PencilIcon, { className: "w-4 h-4 text-gray-400" })
  ] }) });
};
var ModeSwitcher = ({ mode, setMode, disabled, settings }) => {
  const isCoderLocked = settings.tier1.coderMode === "locked";
  const isContentLocked = settings.tier1.contentMode === "locked";
  const isChatLocked = settings.tier1.chatMode === "locked";
  const isImageLocked = settings.tier1.imageMode === "locked";
  const isCanvasLocked = settings.tier1.canvasMode === "locked";
  return /* @__PURE__ */ jsxs5("div", { className: `flex items-center bg-gray-900/50 rounded-lg p-1 space-x-1`, children: [
    /* @__PURE__ */ jsx6(Tooltip, { text: LOCKED_FEATURE_MESSAGE, isLocked: isCoderLocked, children: /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => !disabled && !isCoderLocked && setMode("coder"),
        "aria-disabled": disabled || isCoderLocked,
        className: `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-all ${mode === "coder" ? "bg-indigo-600 text-white shadow" : "text-gray-300 hover:bg-gray-700/50"} ${disabled || isCoderLocked ? "opacity-50 cursor-not-allowed" : ""} ${isCoderLocked ? "pointer-events-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx6(CodeSquareIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { className: "hidden sm:inline", children: "Coder" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx6(Tooltip, { text: LOCKED_FEATURE_MESSAGE, isLocked: isContentLocked, children: /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => !disabled && !isContentLocked && setMode("content"),
        "aria-disabled": disabled || isContentLocked,
        className: `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-all ${mode === "content" ? "bg-indigo-600 text-white shadow" : "text-gray-300 hover:bg-gray-700/50"} ${disabled || isContentLocked ? "opacity-50 cursor-not-allowed" : ""} ${isContentLocked ? "pointer-events-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx6(FileTextIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { className: "hidden sm:inline", children: "Content" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx6(Tooltip, { text: LOCKED_FEATURE_MESSAGE, isLocked: isChatLocked, children: /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => !disabled && !isChatLocked && setMode("audio"),
        "aria-disabled": disabled || isChatLocked,
        className: `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-all ${mode === "audio" ? "bg-indigo-600 text-white shadow" : "text-gray-300 hover:bg-gray-700/50"} ${disabled || isChatLocked ? "opacity-50 cursor-not-allowed" : ""} ${isChatLocked ? "pointer-events-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx6(BotIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { className: "hidden sm:inline", children: "Chat" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx6(Tooltip, { text: LOCKED_FEATURE_MESSAGE, isLocked: isImageLocked, children: /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => !disabled && !isImageLocked && setMode("image"),
        "aria-disabled": disabled || isImageLocked,
        className: `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-all ${mode === "image" ? "bg-indigo-600 text-white shadow" : "text-gray-300 hover:bg-gray-700/50"} ${disabled || isImageLocked ? "opacity-50 cursor-not-allowed" : ""} ${isImageLocked ? "pointer-events-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx6(ImageIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { className: "hidden sm:inline", children: "Image" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx6(Tooltip, { text: LOCKED_FEATURE_MESSAGE, isLocked: isCanvasLocked, children: /* @__PURE__ */ jsxs5(
      "button",
      {
        onClick: () => !disabled && !isCanvasLocked && setMode("canvas"),
        "aria-disabled": disabled || isCanvasLocked,
        className: `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-all ${mode === "canvas" ? "bg-indigo-600 text-white shadow" : "text-gray-300 hover:bg-gray-700/50"} ${disabled || isCanvasLocked ? "opacity-50 cursor-not-allowed" : ""} ${isCanvasLocked ? "pointer-events-none" : ""}`,
        children: [
          /* @__PURE__ */ jsx6(CanvasIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { className: "hidden sm:inline", children: "Canvas" })
        ]
      }
    ) })
  ] });
};
var Header = (props) => {
  const {
    projectName,
    setProjectName,
    panelVisibility,
    onTogglePanel,
    isDetailedLogsVisible,
    setIsDetailedLogsVisible,
    isLoading,
    onDownload,
    isProjectReady,
    mode,
    setMode,
    isExporting,
    elapsedTime,
    apiStats,
    onNewSession,
    onOpenAbout,
    onOpenTutorial,
    onOpenFeedback,
    onOpenHistory,
    isPreviewEnabled,
    isLivePreviewActive,
    onToggleLivePreview,
    isPausedForRequest,
    onPauseGeneration,
    settings
  } = props;
  const formatTime2 = (ms) => {
    if (ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1e3);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1e3;
    const pad = (num, length = 2) => num.toString().padStart(length, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
  };
  const ToggleButton = ({ isActive, onClick, children, label, disabled = false, pulsing = false }) => {
    return /* @__PURE__ */ jsx6(
      "button",
      {
        onClick,
        title: label,
        disabled,
        className: `p-2 rounded-md transition-colors ${isActive ? "bg-indigo-600/50 text-white hover:bg-indigo-600/80" : "text-gray-400 hover:bg-gray-700 hover:text-white"} ${disabled ? "opacity-50 cursor-not-allowed disabled:hover:bg-transparent" : ""} ${pulsing ? "animate-pulse bg-indigo-600/40" : ""}`,
        children
      }
    );
  };
  return /* @__PURE__ */ jsxs5("header", { className: "bg-gray-800/80 border-b border-gray-700 flex items-center justify-between px-2 md:px-4 py-2 flex-shrink-0", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1 md:gap-2", children: [
      /* @__PURE__ */ jsx6(
        "button",
        {
          onClick: onNewSession,
          disabled: isLoading,
          title: "New Session",
          className: "p-2 rounded-md transition-colors text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
          children: /* @__PURE__ */ jsx6(RotateCwIcon, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx6(
        "button",
        {
          onClick: onOpenHistory,
          disabled: isLoading,
          title: "Session History",
          className: "p-2 rounded-md transition-colors text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
          children: /* @__PURE__ */ jsx6(HistoryIcon, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx6("div", { className: "hidden sm:block w-px h-6 bg-gray-600 mx-2" }),
      /* @__PURE__ */ jsx6(ProjectNameEditor, { value: projectName, onChange: setProjectName }),
      /* @__PURE__ */ jsx6("div", { className: "hidden md:block w-px h-6 bg-gray-600" }),
      /* @__PURE__ */ jsx6(ModeSwitcher, { mode, setMode, disabled: isLoading, settings })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1 md:gap-4", children: [
      /* @__PURE__ */ jsx6("div", { className: "hidden lg:flex items-center gap-4", children: isLoading && mode !== "audio" && /* @__PURE__ */ jsxs5(Fragment4, { children: [
        /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 text-sm text-yellow-300 font-mono bg-gray-900/50 px-3 py-1.5 rounded-md w-48 justify-center", children: [
          /* @__PURE__ */ jsx6(ClockIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx6("span", { children: formatTime2(elapsedTime) })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 text-sm text-cyan-300 font-mono bg-gray-900/50 px-3 py-1.5 rounded-md", children: [
          /* @__PURE__ */ jsx6(SignalIcon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxs5("span", { children: [
            "Req: ",
            apiStats.requests,
            " / Res: ",
            apiStats.responses
          ] })
        ] })
      ] }) }),
      isLoading && !isPausedForRequest && /* @__PURE__ */ jsxs5(
        "button",
        {
          onClick: onPauseGeneration,
          title: "Pause generation to make a request",
          className: "flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1.5 px-3 rounded-md transition-all text-sm animate-pulse",
          children: [
            /* @__PURE__ */ jsx6(PauseIcon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx6("span", { className: "hidden md:inline", children: "Make a Request" })
          ]
        }
      ),
      /* @__PURE__ */ jsx6(
        "button",
        {
          onClick: onDownload,
          disabled: !isProjectReady || isLoading || isExporting || mode === "canvas" || mode === "audio" || mode === "image",
          className: "flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-1.5 px-3 rounded-md transition-all text-sm",
          children: isExporting ? /* @__PURE__ */ jsxs5(Fragment4, { children: [
            /* @__PURE__ */ jsx6(LoaderIcon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx6("span", { className: "hidden md:inline", children: "Exporting..." })
          ] }) : /* @__PURE__ */ jsxs5(Fragment4, { children: [
            /* @__PURE__ */ jsx6(DownloadIcon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx6("span", { className: "hidden md:inline", children: "Download .zip" })
          ] })
        }
      ),
      mode === "coder" && /* @__PURE__ */ jsx6(
        ToggleButton,
        {
          isActive: isLivePreviewActive,
          onClick: onToggleLivePreview,
          label: isPreviewEnabled ? "Toggle Live Preview" : "Live Preview not available for this project type",
          disabled: !isPreviewEnabled,
          children: /* @__PURE__ */ jsx6(MonitorPlayIcon, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsxs5("div", { className: "hidden md:flex items-center gap-2 border-l border-gray-600 pl-3", children: [
        /* @__PURE__ */ jsx6(
          ToggleButton,
          {
            isActive: panelVisibility.assistant,
            onClick: () => onTogglePanel("assistant"),
            label: "Toggle Assistant Panel",
            disabled: isLoading || mode === "audio" || mode === "image",
            children: /* @__PURE__ */ jsx6(PanelLeftIcon, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx6(
          ToggleButton,
          {
            isActive: panelVisibility.agentLogs,
            onClick: () => onTogglePanel("agentLogs"),
            label: "Toggle Agent Logs",
            disabled: isLoading || mode === "audio" || mode === "image",
            children: /* @__PURE__ */ jsx6(TerminalSquareIcon, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx6(
          ToggleButton,
          {
            isActive: panelVisibility.editor,
            onClick: () => onTogglePanel("editor"),
            label: "Toggle Editor Panel",
            disabled: isLoading || mode === "audio" || mode === "image",
            children: /* @__PURE__ */ jsx6(CodeSquareIcon, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx6("div", { className: "w-px h-6 bg-gray-600 mx-1" }),
        /* @__PURE__ */ jsx6(
          ToggleButton,
          {
            isActive: isDetailedLogsVisible,
            onClick: () => setIsDetailedLogsVisible(!isDetailedLogsVisible),
            label: "Toggle Detailed Logs",
            pulsing: isLoading,
            children: /* @__PURE__ */ jsx6(FileTextIcon, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "border-l border-gray-600 pl-2 md:pl-3 ml-1 flex items-center gap-1", children: [
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: onOpenTutorial,
            title: "Open Tutorial Guide",
            className: "p-2 rounded-md transition-colors text-gray-400 hover:bg-gray-700 hover:text-white",
            children: /* @__PURE__ */ jsx6(BookOpenIcon, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: onOpenFeedback,
            title: "Bug Report/Feedback",
            className: "p-2 rounded-md transition-colors text-gray-400 hover:bg-gray-700 hover:text-white",
            children: /* @__PURE__ */ jsx6(BugIcon, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: onOpenAbout,
            title: "About this App",
            className: "p-2 rounded-md transition-colors text-gray-400 hover:bg-gray-700 hover:text-white",
            children: /* @__PURE__ */ jsx6(InfoIcon, { className: "w-5 h-5" })
          }
        )
      ] })
    ] })
  ] });
};

// components/DetailedLogsPanel.tsx
import { useEffect as useEffect4, useRef as useRef3, useState as useState5 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var DetailedLogsPanel = ({ logs, onClose, onClear }) => {
  const scrollRef = useRef3(null);
  const [isCopied, setIsCopied] = useState5(false);
  useEffect4(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);
  const handleCopy = () => {
    if (logs.length === 0) return;
    const logText = logs.map((log) => `[${log.timestamp}] ${log.content}`).join("\n");
    navigator.clipboard.writeText(logText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    }).catch((err) => {
      console.error("Failed to copy logs: ", err);
    });
  };
  return /* @__PURE__ */ jsxs6("div", { className: "bg-gray-900/80 flex flex-col h-full text-gray-300", children: [
    /* @__PURE__ */ jsxs6("div", { className: "p-2 border-b border-gray-700 flex justify-between items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsx7("h2", { className: "text-md font-semibold px-2", children: "Detailed Logs" }),
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: handleCopy,
            disabled: logs.length === 0,
            className: "text-sm text-gray-400 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md transition-colors disabled:text-gray-600 disabled:hover:bg-transparent disabled:cursor-not-allowed",
            children: isCopied ? "Copied!" : "Copy"
          }
        ),
        /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: onClear,
            className: "text-sm text-gray-400 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md transition-colors",
            children: "Clear"
          }
        ),
        /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: onClose,
            className: "text-sm text-gray-400 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md transition-colors",
            children: "Close"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx7("div", { ref: scrollRef, className: "flex-grow overflow-y-auto p-4 font-mono text-xs", children: logs.length === 0 ? /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-center h-full text-gray-500", children: "No detailed logs yet. Generate a project to see the full process." }) : /* @__PURE__ */ jsx7("ul", { className: "space-y-2", children: logs.map((log, index) => /* @__PURE__ */ jsxs6("li", { className: "whitespace-pre-wrap break-words", children: [
      /* @__PURE__ */ jsxs6("span", { className: "text-gray-500 mr-2", children: [
        "[",
        log.timestamp,
        "]"
      ] }),
      /* @__PURE__ */ jsx7("span", { children: log.content })
    ] }, index)) }) })
  ] });
};

// components/AgentLogsPanel.tsx
import { useRef as useRef4, useEffect as useEffect5 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var getIconForSource = (source) => {
  switch (source) {
    case "system":
      return /* @__PURE__ */ jsx8(BotIcon, { className: "w-5 h-5 text-indigo-400" });
    // Coder Mode
    case "architect":
      return /* @__PURE__ */ jsx8(SitemapIcon, { className: "w-5 h-5 text-fuchsia-400" });
    case "planner":
      return /* @__PURE__ */ jsx8(BrainCircuitIcon, { className: "w-5 h-5 text-sky-400" });
    case "coder":
      return /* @__PURE__ */ jsx8(CodeIcon, { className: "w-5 h-5 text-emerald-400" });
    case "refactor":
      return /* @__PURE__ */ jsx8(GitBranchPlusIcon, { className: "w-5 h-5 text-amber-400" });
    case "db-agent":
      return /* @__PURE__ */ jsx8(DatabaseIcon, { className: "w-5 h-5 text-cyan-400" });
    case "api-agent":
      return /* @__PURE__ */ jsx8(ServerIcon, { className: "w-5 h-5 text-lime-400" });
    case "theme-agent":
      return /* @__PURE__ */ jsx8(PaletteIcon, { className: "w-5 h-5 text-orange-400" });
    case "verifier":
      return /* @__PURE__ */ jsx8(ShieldCheckIcon, { className: "w-5 h-5 text-teal-400" });
    case "devops":
      return /* @__PURE__ */ jsx8(TerminalIcon, { className: "w-5 h-5 text-teal-400" });
    case "debugger":
      return /* @__PURE__ */ jsx8(BugIcon, { className: "w-5 h-5 text-red-400" });
    case "aesthetics":
      return /* @__PURE__ */ jsx8(PaintbrushIcon, { className: "w-5 h-5 text-pink-400" });
    case "layout":
      return /* @__PURE__ */ jsx8(LayoutGridIcon, { className: "w-5 h-5 text-orange-400" });
    case "qa":
      return /* @__PURE__ */ jsx8(SparklesIcon, { className: "w-5 h-5 text-yellow-300" });
    case "qa-engineer":
      return /* @__PURE__ */ jsx8(ClipboardCheckIcon, { className: "w-5 h-5 text-cyan-400" });
    case "project-cto":
      return /* @__PURE__ */ jsx8(GitMergeIcon, { className: "w-5 h-5 text-purple-400" });
    case "editor":
      return /* @__PURE__ */ jsx8(PencilIcon, { className: "w-5 h-5 text-cyan-400" });
    case "infrastructure":
      return /* @__PURE__ */ jsx8(LayersIcon, { className: "w-5 h-5 text-teal-400" });
    case "security-analyst":
      return /* @__PURE__ */ jsx8(ShieldCheckIcon, { className: "w-5 h-5 text-red-500" });
    // Content Mode
    case "content-planner":
      return /* @__PURE__ */ jsx8(FileTextIcon, { className: "w-5 h-5 text-sky-400" });
    case "writer":
      return /* @__PURE__ */ jsx8(PencilIcon, { className: "w-5 h-5 text-emerald-400" });
    case "content-verifier":
      return /* @__PURE__ */ jsx8(ShieldCheckIcon, { className: "w-5 h-5 text-teal-400" });
    case "word-counter":
      return /* @__PURE__ */ jsx8(BotIcon, { className: "w-5 h-5 text-gray-400" });
    case "refiner":
      return /* @__PURE__ */ jsx8(SparklesIcon, { className: "w-5 h-5 text-yellow-300" });
    // Novel Mode
    case "novel-orchestrator":
      return /* @__PURE__ */ jsx8(GitMergeIcon, { className: "w-5 h-5 text-purple-400" });
    case "summarizer":
      return /* @__PURE__ */ jsx8(BrainCircuitIcon, { className: "w-5 h-5 text-blue-400" });
    case "character-verifier":
      return /* @__PURE__ */ jsx8(ShieldCheckIcon, { className: "w-5 h-5 text-green-400" });
    case "plot-verifier":
      return /* @__PURE__ */ jsx8(ShieldCheckIcon, { className: "w-5 h-5 text-lime-400" });
    case "humanizer":
      return /* @__PURE__ */ jsx8(Wand2Icon, { className: "w-5 h-5 text-rose-400" });
    // Audio Mode
    case "master-agent":
      return /* @__PURE__ */ jsx8(GitMergeIcon, { className: "w-5 h-5 text-purple-400" });
    case "details-agent":
      return /* @__PURE__ */ jsx8(ClipboardCheckIcon, { className: "w-5 h-5 text-cyan-400" });
    default:
      return null;
  }
};
var getStatusClasses = (status) => {
  switch (status) {
    case "running":
      return "text-yellow-400";
    case "success":
      return "text-green-400";
    case "error":
      return "text-red-400";
    case "info":
      return "text-gray-300";
  }
};
var AgentLogsPanel = ({ agentLogs }) => {
  const agentLogsRef = useRef4(null);
  useEffect5(() => {
    if (agentLogsRef.current) {
      agentLogsRef.current.scrollTop = agentLogsRef.current.scrollHeight;
    }
  }, [agentLogs]);
  return /* @__PURE__ */ jsxs7("div", { className: "bg-gray-800/50 flex flex-col h-full border-r border-gray-700", children: [
    /* @__PURE__ */ jsx8("div", { className: "p-2 border-b border-gray-700 flex justify-between items-center h-[57px]", children: /* @__PURE__ */ jsx8("h2", { className: "text-lg font-semibold px-2", children: "Agent Logs" }) }),
    /* @__PURE__ */ jsx8("div", { ref: agentLogsRef, className: "flex-grow overflow-y-auto p-4 min-h-0", children: agentLogs.length === 0 ? /* @__PURE__ */ jsx8("div", { className: "flex items-center justify-center h-full text-gray-500", children: "Agent logs will appear here..." }) : /* @__PURE__ */ jsx8("ul", { className: "space-y-3", children: agentLogs.map((log, index) => /* @__PURE__ */ jsxs7("li", { className: "flex items-start gap-3 text-sm", children: [
      /* @__PURE__ */ jsx8("div", { className: "mt-1 flex-shrink-0", children: getIconForSource(log.source) }),
      /* @__PURE__ */ jsx8("span", { className: `${getStatusClasses(log.status)} whitespace-pre-wrap break-words`, children: log.message })
    ] }, index)) }) })
  ] });
};

// components/Resizer.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Resizer = ({ orientation, onMouseDown }) => {
  const baseClasses = "bg-gray-700/80 hover:bg-indigo-600 transition-colors z-10 flex-shrink-0";
  const orientationClasses = orientation === "horizontal" ? "w-1.5 cursor-col-resize h-full" : "h-1.5 cursor-row-resize w-full";
  return /* @__PURE__ */ jsx9(
    "div",
    {
      className: `${baseClasses} ${orientationClasses}`,
      onMouseDown,
      role: "separator",
      "aria-orientation": orientation
    }
  );
};

// components/MarkdownPreviewModal.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var MarkdownPreviewModal = ({
  isOpen,
  onClose,
  file
}) => {
  if (!isOpen || !file) return null;
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "markdown-preview-title",
      children: [
        /* @__PURE__ */ jsxs8(
          "div",
          {
            className: "bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-gray-700",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs8("header", { className: "flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0", children: [
                /* @__PURE__ */ jsx10("h2", { id: "markdown-preview-title", className: "text-lg font-semibold text-white truncate", children: file.path }),
                /* @__PURE__ */ jsx10(
                  "button",
                  {
                    onClick: onClose,
                    className: "p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors",
                    "aria-label": "Close preview",
                    children: /* @__PURE__ */ jsxs8("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ jsx10("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ jsx10("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx10("main", { className: "flex-grow p-6 sm:p-8 overflow-y-auto", children: /* @__PURE__ */ jsx10("div", { className: "prose prose-invert max-w-none text-gray-300 whitespace-pre-wrap leading-relaxed", children: file.content }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx10("style", { children: `
        .prose {
          font-family: 'Georgia', serif;
          font-size: 1.125rem;
          line-height: 1.75;
        }
        .prose-invert {
          color: #d1d5db;
        }
      ` })
      ]
    }
  );
};

// components/ExportModal.tsx
import { useState as useState6 } from "react";
import { Fragment as Fragment5, jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var formatOptions = [
  { id: "md", name: "Markdown", description: "Raw source files, best for editing." },
  { id: "txt", name: "Plain Text", description: "Just the text, no formatting." },
  { id: "pdf", name: "PDF Document", description: "A single, combined PDF file." }
];
var ExportModal = ({
  isOpen,
  onClose,
  onConfirm,
  isProcessing
}) => {
  const [selectedFormat, setSelectedFormat] = useState6("pdf");
  if (!isOpen) return null;
  const handleConfirm = () => {
    if (!isProcessing) {
      onConfirm(selectedFormat);
    }
  };
  return /* @__PURE__ */ jsx11(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "export-modal-title",
      children: /* @__PURE__ */ jsxs9(
        "div",
        {
          className: "bg-gray-800 rounded-lg shadow-xl w-full max-w-lg p-6 border border-gray-700 transform transition-all",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx11("h2", { id: "export-modal-title", className: "text-xl font-bold mb-4 text-white", children: "Choose Export Format" }),
            /* @__PURE__ */ jsx11("p", { className: "text-gray-400 text-sm mb-6", children: "Select the format for your downloaded content project. Multi-page projects will be combined into a single file for PDF format." }),
            /* @__PURE__ */ jsx11("div", { className: "space-y-3 mb-8", children: formatOptions.map((option) => /* @__PURE__ */ jsxs9(
              "button",
              {
                onClick: () => setSelectedFormat(option.id),
                className: `w-full text-left flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${selectedFormat === option.id ? "bg-indigo-600/20 border-indigo-500" : "bg-gray-900/50 border-gray-700 hover:border-gray-500"}`,
                children: [
                  /* @__PURE__ */ jsx11("div", { className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${selectedFormat === option.id ? "bg-indigo-500" : "bg-gray-600"}`, children: /* @__PURE__ */ jsx11(FileTextIcon, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsxs9("div", { children: [
                    /* @__PURE__ */ jsx11("h3", { className: "font-semibold text-white", children: option.name }),
                    /* @__PURE__ */ jsx11("p", { className: "text-sm text-gray-400", children: option.description })
                  ] }),
                  /* @__PURE__ */ jsx11("div", { className: "ml-auto flex-shrink-0", children: /* @__PURE__ */ jsx11("div", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedFormat === option.id ? "border-indigo-500 bg-indigo-500" : "border-gray-500"}`, children: selectedFormat === option.id && /* @__PURE__ */ jsx11("div", { className: "w-2 h-2 bg-white rounded-full" }) }) })
                ]
              },
              option.id
            )) }),
            /* @__PURE__ */ jsxs9("div", { className: "flex justify-end gap-3", children: [
              /* @__PURE__ */ jsx11(
                "button",
                {
                  onClick: onClose,
                  disabled: isProcessing,
                  className: "px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-colors disabled:opacity-50",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx11(
                "button",
                {
                  onClick: handleConfirm,
                  disabled: isProcessing,
                  className: "px-6 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center gap-2 disabled:bg-gray-500 disabled:cursor-wait",
                  children: isProcessing ? /* @__PURE__ */ jsxs9(Fragment5, { children: [
                    /* @__PURE__ */ jsx11(LoaderIcon, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx11("span", { children: "Processing..." })
                  ] }) : "Download"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};

// components/CanvasMode.tsx
import { useState as useState10, useEffect as useEffect9 } from "react";

// components/CanvasChatPanel.tsx
import { useState as useState7, useRef as useRef5, useEffect as useEffect6 } from "react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var CanvasChatPanel = ({ chatHistory, onSendMessage, isLoading }) => {
  const [currentMessage, setCurrentMessage] = useState7("");
  const chatLogRef = useRef5(null);
  const textareaRef = useRef5(null);
  useEffect6(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatHistory]);
  const handleSend = () => {
    if (currentMessage.trim()) {
      onSendMessage(currentMessage);
      setCurrentMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };
  const handleTextareaInput = (e) => {
    setCurrentMessage(e.target.value);
    const textarea = e.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 300)}px`;
  };
  return /* @__PURE__ */ jsxs10("div", { className: "bg-gray-800/50 flex flex-col h-full border-r border-gray-700", children: [
    /* @__PURE__ */ jsx12("div", { className: "p-2 border-b border-gray-700 flex justify-between items-center h-[57px]", children: /* @__PURE__ */ jsx12("h2", { className: "text-lg font-semibold px-2", children: "AI Assistant" }) }),
    /* @__PURE__ */ jsxs10("div", { ref: chatLogRef, className: "flex-grow overflow-y-auto p-4 space-y-4", children: [
      chatHistory.map((msg) => /* @__PURE__ */ jsx12("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx12("div", { className: `max-w-prose p-3 rounded-lg ${msg.role === "user" ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-200"}`, children: /* @__PURE__ */ jsx12("p", { className: "text-sm whitespace-pre-wrap", children: msg.content }) }) }, msg.id)),
      isLoading && /* @__PURE__ */ jsx12("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx12("div", { className: "max-w-prose p-3 rounded-lg bg-gray-700 text-gray-200", children: /* @__PURE__ */ jsx12(LoaderIcon, { className: "w-5 h-5 text-gray-400" }) }) })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "p-4 border-t border-gray-700", children: /* @__PURE__ */ jsxs10("div", { className: "relative", children: [
      /* @__PURE__ */ jsx12(
        "textarea",
        {
          ref: textareaRef,
          rows: 3,
          className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 pr-12 text-sm focus:ring-2 focus:ring-indigo-500 transition-colors placeholder:text-gray-500 resize-none max-h-[300px]",
          placeholder: "Ask about the canvas content...",
          value: currentMessage,
          onChange: handleTextareaInput,
          disabled: isLoading,
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }
        }
      ),
      /* @__PURE__ */ jsx12(
        "button",
        {
          onClick: handleSend,
          disabled: isLoading || !currentMessage.trim(),
          className: "absolute right-2 bottom-2 p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors",
          children: /* @__PURE__ */ jsx12(SendIcon, { className: "w-5 h-5 text-white" })
        }
      )
    ] }) })
  ] });
};

// components/CanvasEditor.tsx
import { useState as useState9, useEffect as useEffect8, useRef as useRef7, useCallback } from "react";

// components/AIContextMenu.tsx
import { useState as useState8, useRef as useRef6, useEffect as useEffect7 } from "react";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var AIContextMenu = ({ x, y, selection, onClose, onSubmit, isLoading, onGetAIQuickActions }) => {
  const [isInputVisible, setIsInputVisible] = useState8(false);
  const [prompt, setPrompt] = useState8("");
  const [isFetchingActions, setIsFetchingActions] = useState8(true);
  const [quickActions, setQuickActions] = useState8([]);
  const menuRef = useRef6(null);
  const textareaRef = useRef6(null);
  useEffect7(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  useEffect7(() => {
    if (isInputVisible && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isInputVisible]);
  useEffect7(() => {
    setIsFetchingActions(true);
    onGetAIQuickActions(selection.text).then((actions) => {
      setQuickActions(actions);
    }).catch(() => {
      setQuickActions(["Summarize", "Fix Grammar & Spelling", "Explain This"]);
    }).finally(() => {
      setIsFetchingActions(false);
    });
  }, [selection.text, onGetAIQuickActions]);
  useEffect7(() => {
    if (menuRef.current) {
      const menu = menuRef.current;
      const rect = menu.getBoundingClientRect();
      const margin = 10;
      let finalX = x;
      let finalY = y;
      if (finalX + rect.width > window.innerWidth - margin) {
        finalX = window.innerWidth - rect.width - margin;
      }
      if (finalX < margin) {
        finalX = margin;
      }
      if (finalY + rect.height > window.innerHeight - margin) {
        finalY = y - rect.height;
      }
      if (finalY < margin) {
        finalY = margin;
      }
      menu.style.left = `${finalX}px`;
      menu.style.top = `${finalY}px`;
    }
  }, [x, y, isInputVisible, isFetchingActions, quickActions]);
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };
  const handleTextareaInput = (e) => {
    setPrompt(e.target.value);
    const textarea = e.currentTarget;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 350);
    textarea.style.height = `${newHeight}px`;
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return /* @__PURE__ */ jsx13(
    "div",
    {
      ref: menuRef,
      style: {
        position: "fixed",
        top: y,
        left: x,
        width: isInputVisible ? "400px" : "250px"
      },
      className: "bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50 text-white text-sm flex flex-col",
      children: isFetchingActions ? /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2 px-4 py-2 text-gray-400", children: [
        /* @__PURE__ */ jsx13(LoaderIcon, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx13("span", { children: "Analyzing..." })
      ] }) : isInputVisible ? /* @__PURE__ */ jsx13("form", { onSubmit: handleSubmit, className: "p-2", children: /* @__PURE__ */ jsxs11("div", { className: "relative", children: [
        /* @__PURE__ */ jsx13(
          "textarea",
          {
            ref: textareaRef,
            value: prompt,
            onChange: handleTextareaInput,
            onKeyDown: handleKeyDown,
            placeholder: "e.g., rewrite this as a poem...",
            disabled: isLoading,
            className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 pr-10 text-sm focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-gray-500 resize-none overflow-y-auto",
            style: { minHeight: "100px" }
          }
        ),
        /* @__PURE__ */ jsx13(
          "button",
          {
            type: "submit",
            disabled: isLoading || !prompt.trim(),
            className: "absolute right-3 bottom-2 p-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx13(SendIcon, { className: "w-4 h-4 text-white" })
          }
        )
      ] }) }) : /* @__PURE__ */ jsxs11("div", { className: "py-1", children: [
        quickActions.map((action) => /* @__PURE__ */ jsx13(
          "button",
          {
            onClick: () => onSubmit(action),
            className: "flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors",
            children: /* @__PURE__ */ jsx13("span", { children: action })
          },
          action
        )),
        /* @__PURE__ */ jsx13("div", { className: "h-px bg-gray-700 my-1" }),
        /* @__PURE__ */ jsxs11(
          "button",
          {
            onClick: () => setIsInputVisible(true),
            className: "flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors",
            children: [
              /* @__PURE__ */ jsx13(PencilIcon, { className: "w-4 h-4 text-indigo-400" }),
              /* @__PURE__ */ jsx13("span", { children: "Custom Request..." })
            ]
          }
        )
      ] })
    }
  );
};

// components/CanvasEditor.tsx
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var LOCKED_FEATURE_MESSAGE2 = "This Feature is locked, please upgrade to Pro to unlock this feature";
var comprehensiveFileAccept = "text/*,.txt,.md,.log,.json,.xml,.yml,.yaml,.csv,.ini,.toml,.html,.htm,.css,.js,.mjs,.jsx,.ts,.tsx,.vue,.svelte,.py,.rb,.php,.pl,.sh,.java,.cs,.go,.rs,.swift,.kt,.kts,.c,.h,.cpp,.hpp,.sql,.bas";
var CanvasEditor = ({ content, onContentChange, characterLimit, onAIRequest, isLoading, onGetAIQuickActions, settings }) => {
  const [lineNumbers, setLineNumbers] = useState9("1");
  const [isDragging, setIsDragging] = useState9(false);
  const [contextMenu, setContextMenu] = useState9(null);
  const lineNumbersRef = useRef7(null);
  const textareaRef = useRef7(null);
  const fileInputRef = useRef7(null);
  const isFileAttachmentLocked = settings.tier2.canvasMode.fileAttachments === "locked";
  useEffect8(() => {
    const lines = content.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1).join("\n"));
  }, [content]);
  const handleScroll = () => {
    if (lineNumbersRef.current && textareaRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };
  const handleFileAdded = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      if (text) {
        const formattedText = `filename: ${file.name} :

${text}

`;
        const newContent = content ? `${content}${formattedText}` : formattedText;
        onContentChange(newContent.slice(0, characterLimit));
      }
    };
    reader.readAsText(file);
  }, [content, onContentChange, characterLimit]);
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (isFileAttachmentLocked) return;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileAdded(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isFileAttachmentLocked) {
      setIsDragging(true);
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleAddFileClick = () => {
    if (!isFileAttachmentLocked) {
      fileInputRef.current?.click();
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileAdded(e.target.files[0]);
      e.target.value = "";
    }
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    const textarea = e.currentTarget;
    const { selectionStart, selectionEnd } = textarea;
    let text = textarea.value.substring(selectionStart, selectionEnd);
    let start = selectionStart;
    let end = selectionEnd;
    if (selectionStart === selectionEnd) {
      const textToCursor = textarea.value.substring(0, selectionStart);
      const lineStart = textToCursor.lastIndexOf("\n") + 1;
      const textFromCursor = textarea.value.substring(selectionStart);
      let lineEnd = textFromCursor.indexOf("\n");
      if (lineEnd === -1) {
        lineEnd = textFromCursor.length;
      }
      lineEnd += selectionStart;
      text = textarea.value.substring(lineStart, lineEnd);
      start = lineStart;
      end = lineEnd;
    }
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      selection: { start, end, text }
    });
  };
  const handleAIRequestFromMenu = (prompt) => {
    if (contextMenu) {
      onAIRequest(prompt, contextMenu.selection);
    }
    setContextMenu(null);
  };
  const charCount = content.length;
  const isOverLimit = charCount > characterLimit;
  return /* @__PURE__ */ jsxs12("div", { className: "bg-gray-900 flex flex-col h-full text-gray-300 relative", onDrop: handleDrop, onDragOver: handleDragOver, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, children: [
    isDragging && /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 bg-black/70 flex items-center justify-center z-20 pointer-events-none border-4 border-dashed border-indigo-500 rounded-lg", children: /* @__PURE__ */ jsx14("p", { className: "text-xl font-bold text-white", children: "Drop text file here" }) }),
    /* @__PURE__ */ jsxs12("div", { className: "p-2 border-b border-gray-700 flex justify-between items-center h-[57px] flex-shrink-0", children: [
      /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx14("h2", { className: "text-lg font-semibold px-2", children: "Canvas" }),
        /* @__PURE__ */ jsx14(Tooltip, { text: LOCKED_FEATURE_MESSAGE2, isLocked: isFileAttachmentLocked, children: /* @__PURE__ */ jsx14(
          "button",
          {
            onClick: handleAddFileClick,
            title: "Add a text file to the canvas",
            "aria-disabled": isFileAttachmentLocked,
            className: `p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors ${isFileAttachmentLocked ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`,
            children: /* @__PURE__ */ jsx14(PlusCircleIcon, { className: "w-6 h-6" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: `text-sm px-2 py-1 rounded ${isOverLimit ? "text-red-400 font-bold" : "text-gray-400"}`, children: [
        charCount.toLocaleString(),
        " / ",
        characterLimit.toLocaleString()
      ] })
    ] }),
    /* @__PURE__ */ jsxs12("div", { className: "flex-grow flex min-h-0", children: [
      /* @__PURE__ */ jsx14("div", { ref: lineNumbersRef, className: "bg-gray-800/50 p-4 text-right text-gray-500 font-mono text-sm select-none overflow-y-hidden", children: /* @__PURE__ */ jsx14("pre", { className: "!p-0 !m-0", children: lineNumbers }) }),
      /* @__PURE__ */ jsx14(
        "textarea",
        {
          ref: textareaRef,
          value: content,
          onChange: (e) => onContentChange(e.target.value),
          onScroll: handleScroll,
          onContextMenu: handleContextMenu,
          className: "w-full h-full bg-gray-900 text-gray-200 p-4 font-mono text-sm resize-none focus:outline-none",
          placeholder: "Paste code or text here, or drop a file...",
          spellCheck: "false"
        }
      )
    ] }),
    /* @__PURE__ */ jsx14(
      "input",
      {
        type: "file",
        ref: fileInputRef,
        onChange: handleFileChange,
        className: "hidden",
        accept: comprehensiveFileAccept
      }
    ),
    contextMenu && /* @__PURE__ */ jsx14(
      AIContextMenu,
      {
        x: contextMenu.x,
        y: contextMenu.y,
        selection: contextMenu.selection,
        onClose: () => setContextMenu(null),
        onSubmit: handleAIRequestFromMenu,
        isLoading,
        onGetAIQuickActions
      }
    )
  ] });
};

// components/CanvasMode.tsx
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var CHARACTER_LIMIT = 32500;
var useMediaQuery = (query) => {
  const [matches, setMatches] = useState10(false);
  useEffect9(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};
var CanvasMode = (props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeView, setActiveView] = useState10("editor");
  if (isMobile) {
    return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs13("div", { className: "flex-shrink-0 border-b border-gray-700 flex bg-gray-800/50", children: [
        /* @__PURE__ */ jsxs13(
          "button",
          {
            onClick: () => setActiveView("editor"),
            className: `flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${activeView === "editor" ? "text-white bg-indigo-600/20" : "text-gray-400 hover:bg-gray-700/50"}`,
            children: [
              /* @__PURE__ */ jsx15(PencilIcon, { className: "w-5 h-5" }),
              "Canvas"
            ]
          }
        ),
        /* @__PURE__ */ jsxs13(
          "button",
          {
            onClick: () => setActiveView("chat"),
            className: `flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${activeView === "chat" ? "text-white bg-indigo-600/20" : "text-gray-400 hover:bg-gray-700/50"}`,
            children: [
              /* @__PURE__ */ jsx15(BotIcon, { className: "w-5 h-5" }),
              "AI Assistant"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs13("div", { className: "flex-grow min-h-0", children: [
        activeView === "editor" && /* @__PURE__ */ jsx15(
          CanvasEditor,
          {
            content: props.canvasContent,
            onContentChange: props.onCanvasContentChange,
            characterLimit: CHARACTER_LIMIT,
            onAIRequest: props.onAISelectionRequest,
            isLoading: props.isLoading,
            onGetAIQuickActions: props.onGetAIQuickActions,
            settings: props.settings
          }
        ),
        activeView === "chat" && /* @__PURE__ */ jsx15(
          CanvasChatPanel,
          {
            chatHistory: props.chatHistory,
            onSendMessage: props.onSendMessage,
            isLoading: props.isLoading
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs13("div", { className: "flex flex-row h-full", children: [
    /* @__PURE__ */ jsx15("div", { className: "w-[30%] h-full flex-shrink-0", children: /* @__PURE__ */ jsx15(
      CanvasChatPanel,
      {
        chatHistory: props.chatHistory,
        onSendMessage: props.onSendMessage,
        isLoading: props.isLoading
      }
    ) }),
    /* @__PURE__ */ jsx15("div", { className: "w-[70%] h-full flex-shrink-0", children: /* @__PURE__ */ jsx15(
      CanvasEditor,
      {
        content: props.canvasContent,
        onContentChange: props.onCanvasContentChange,
        characterLimit: CHARACTER_LIMIT,
        onAIRequest: props.onAISelectionRequest,
        isLoading: props.isLoading,
        onGetAIQuickActions: props.onGetAIQuickActions,
        settings: props.settings
      }
    ) })
  ] });
};

// components/DiffModal.tsx
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var generateDiff = (oldStr, newStr) => {
  const oldL = oldStr.split("\n");
  const newL = newStr.split("\n");
  const n = oldL.length;
  const m = newL.length;
  const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
  for (let i2 = 1; i2 <= n; i2++) {
    for (let j2 = 1; j2 <= m; j2++) {
      if (oldL[i2 - 1] === newL[j2 - 1]) {
        dp[i2][j2] = 1 + dp[i2 - 1][j2 - 1];
      } else {
        dp[i2][j2] = Math.max(dp[i2 - 1][j2], dp[i2][j2 - 1]);
      }
    }
  }
  const result = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldL[i - 1] === newL[j - 1]) {
      result.unshift({ type: "unchanged", line: oldL[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: "added", line: newL[j - 1] });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      result.unshift({ type: "deleted", line: oldL[i - 1] });
      i--;
    } else {
      break;
    }
  }
  return result;
};
var DiffModal = ({ isOpen, originalText, proposedText, onAccept, onReject }) => {
  if (!isOpen) return null;
  const diff = generateDiff(originalText, proposedText);
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8",
      onClick: onReject,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "diff-modal-title",
      children: /* @__PURE__ */ jsxs14(
        "div",
        {
          className: "bg-gray-800 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col border border-gray-700",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs14("header", { className: "flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0", children: [
              /* @__PURE__ */ jsx16("h2", { id: "diff-modal-title", className: "text-lg font-semibold text-white truncate", children: "AI Proposed Changes" }),
              /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxs14(
                  "button",
                  {
                    onClick: onReject,
                    className: "flex items-center gap-2 bg-red-600/80 hover:bg-red-700/80 text-white font-bold py-2 px-4 rounded-md transition-all text-sm",
                    children: [
                      /* @__PURE__ */ jsx16(XIcon, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsx16("span", { children: "Reject" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs14(
                  "button",
                  {
                    onClick: onAccept,
                    className: "flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition-all text-sm",
                    children: [
                      /* @__PURE__ */ jsx16(CheckIcon, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsx16("span", { children: "Accept" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx16("main", { className: "flex-grow overflow-auto font-mono text-sm bg-gray-900", children: /* @__PURE__ */ jsx16("div", { className: "p-4", children: diff.map((item, index) => {
              let bgClass = "";
              let symbol = "  ";
              let symbolClass = "text-gray-500";
              if (item.type === "added") {
                bgClass = "bg-green-900/40";
                symbol = "+ ";
                symbolClass = "text-green-400";
              } else if (item.type === "deleted") {
                bgClass = "bg-red-900/40";
                symbol = "- ";
                symbolClass = "text-red-400";
              }
              return /* @__PURE__ */ jsxs14("div", { className: `flex ${bgClass}`, children: [
                /* @__PURE__ */ jsx16("span", { className: `w-8 flex-shrink-0 text-right pr-2 select-none ${symbolClass}`, children: symbol }),
                /* @__PURE__ */ jsx16("span", { className: "flex-grow break-words whitespace-pre-wrap", children: item.line })
              ] }, index);
            }) }) })
          ]
        }
      )
    }
  );
};

// components/AboutModal.tsx
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var appDescription = "Welcome to the AI Agent Portal, a next-generation development environment designed to turn your ideas into reality. This application leverages a sophisticated multi-agent system, where specialized AIs like an Architect, Coder, and QA Engineer collaborate to build complex projects from a single prompt. Whether you're generating a full-stack web application in Coder Mode, writing a novel in Content Mode, or refactoring code in the interactive Canvas, the AI team follows advanced workflows like Test-Driven Development and automated Docker orchestration to deliver high-quality, production-ready results.";
var AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "about-modal-title",
      children: /* @__PURE__ */ jsxs15(
        "div",
        {
          className: "bg-gray-800 rounded-lg shadow-xl w-full max-w-lg p-6 border border-gray-700",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx17("h2", { id: "about-modal-title", className: "text-2xl font-bold mb-4 text-white text-center", children: "AI Agent Portal" }),
            /* @__PURE__ */ jsxs15("div", { className: "text-gray-300 text-sm mb-6 space-y-4", children: [
              /* @__PURE__ */ jsx17("p", { className: "text-center", children: appDescription }),
              /* @__PURE__ */ jsxs15("div", { className: "text-center font-semibold mt-4", children: [
                /* @__PURE__ */ jsx17("p", { children: "Made by MakuluLinux, Coded by J.M.Raymer" }),
                /* @__PURE__ */ jsx17("p", { className: "text-xs text-gray-400 mt-2", children: "Powered by A.I Models via Pollinations / Gemini / OpenAI / MakuluLinux" })
              ] })
            ] }),
            /* @__PURE__ */ jsx17("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx17(
              "button",
              {
                onClick: onClose,
                className: "px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors",
                children: "Close"
              }
            ) })
          ]
        }
      )
    }
  );
};

// components/TutorialModal.tsx
import { useState as useState11, useEffect as useEffect10 } from "react";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var Section = ({ title, children }) => /* @__PURE__ */ jsxs16("div", { className: "mb-6", children: [
  /* @__PURE__ */ jsx18("h3", { className: "text-xl font-bold text-indigo-400 mb-3 border-b-2 border-indigo-500/30 pb-2", children: title }),
  /* @__PURE__ */ jsx18("div", { className: "space-y-3 text-gray-300 leading-relaxed", children })
] });
var SubSection = ({ title, children }) => /* @__PURE__ */ jsxs16("div", { className: "mb-4 pl-4 border-l-2 border-gray-600", children: [
  /* @__PURE__ */ jsx18("h4", { className: "text-md font-semibold text-gray-100 mb-2", children: title }),
  /* @__PURE__ */ jsx18("div", { className: "space-y-2 text-gray-400", children })
] });
var TutorialModal = ({ isOpen, onClose }) => {
  const [committedZoom, setCommittedZoom] = useState11(100);
  const [liveZoom, setLiveZoom] = useState11(100);
  useEffect10(() => {
    if (isOpen) {
      setCommittedZoom(100);
      setLiveZoom(100);
    }
  }, [isOpen]);
  const handleZoomCommit = () => {
    setCommittedZoom(liveZoom);
  };
  if (!isOpen) return null;
  const getModalStyle = () => {
    const baseWidthRem = 64;
    const maxWidthRem = 96;
    const zoomFactor = (committedZoom - 100) / 100;
    const currentWidth = baseWidthRem + (maxWidthRem - baseWidthRem) * zoomFactor;
    return {
      maxWidth: `${Math.min(currentWidth, maxWidthRem)}rem`
    };
  };
  const getContentStyle = () => {
    const baseFontSizeRem = 0.875;
    return {
      fontSize: `${baseFontSizeRem * (committedZoom / 100)}rem`
    };
  };
  return /* @__PURE__ */ jsx18(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "tutorial-modal-title",
      children: /* @__PURE__ */ jsxs16(
        "div",
        {
          style: getModalStyle(),
          className: "bg-gray-800 rounded-lg shadow-2xl w-full h-[90vh] flex flex-col border border-gray-700 transition-all duration-300",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs16("header", { className: "flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0", children: [
              /* @__PURE__ */ jsx18("h2", { id: "tutorial-modal-title", className: "text-xl font-semibold text-white", children: "Application Guide" }),
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx18("label", { htmlFor: "zoom-slider", className: "text-sm text-gray-400", children: "Zoom:" }),
                  /* @__PURE__ */ jsx18(
                    "input",
                    {
                      id: "zoom-slider",
                      type: "range",
                      min: "80",
                      max: "200",
                      step: "10",
                      value: liveZoom,
                      onChange: (e) => setLiveZoom(Number(e.target.value)),
                      onMouseUp: handleZoomCommit,
                      onTouchEnd: handleZoomCommit,
                      className: "w-32"
                    }
                  ),
                  /* @__PURE__ */ jsxs16("span", { className: "text-sm text-white font-mono w-12 text-center", children: [
                    liveZoom,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx18(
                  "button",
                  {
                    onClick: onClose,
                    className: "px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors text-sm",
                    "aria-label": "Close tutorial",
                    children: "Close"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs16("main", { style: getContentStyle(), className: "flex-grow p-6 overflow-y-auto", children: [
              /* @__PURE__ */ jsxs16(Section, { title: "Introduction & Core Concepts", children: [
                /* @__PURE__ */ jsx18("p", { children: "Welcome to the AI Agent Coder Pro! This application is a powerful tool for generating code and content using a team of specialized AI agents. Unlike a single AI, this app uses a multi-agent system where each agent has a specific role, allowing them to collaborate to build complex projects from a simple prompt across several distinct modes." }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "The Multi-Agent System & Advanced Workflows", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    "The core of this application is its team of AI agents that follow advanced development workflows to ensure high-quality output. You can watch this process unfold in the ",
                    /* @__PURE__ */ jsx18("strong", { children: "Agent Logs" }),
                    " panel."
                  ] }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2 mt-2", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Hierarchical Planning:" }),
                      ' For complex projects, the AI doesn\'t just plan files. It uses a deeper `Project \u2192 Epic \u2192 Feature \u2192 Files` structure. This allows it to break down large tasks into manageable parts, building one component at a time and using a "session memory" to ensure all the pieces fit together.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Intelligent Context Sharing:" }),
                      " After a service (like a backend) is built, the AI generates an ",
                      /* @__PURE__ */ jsx18("strong", { children: "API Contract" }),
                      ". This contract is then given to the agents building the next service (like the frontend), ensuring all parts of your application are built to work together perfectly."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Blueprint Generation:" }),
                      ' To speed up development, the AI can select a boilerplate "blueprint" (e.g., Vite + React) to instantly lay down the foundational files, allowing the agents to focus on your specific features.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Docker Orchestration:" }),
                      " As a final step, an Infrastructure agent can automatically generate `Dockerfile`s and a `docker-compose.yml` file, containerizing your entire application for easy local development and deployment."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "The 'Project CTO' Agent & Iterative Development", children: [
                  /* @__PURE__ */ jsx18("p", { children: 'The application can manage a project over its entire lifecycle, not just for initial creation. This is handled by a top-level agent, the "Project CTO."' }),
                  /* @__PURE__ */ jsx18("p", { children: 'Once an initial project is built, you can provide follow-up prompts like "Now, add a commenting system to the blog posts." The CTO agent analyzes this request against the existing codebase and creates a new, targeted plan that may involve changes to multiple parts of the application. This transforms the application from a project generator into a project maintainer, allowing you to evolve your code over time.' })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "The 'Pair Programmer' Clarification Loop", children: [
                  /* @__PURE__ */ jsx18("p", { children: "If the AI encounters an ambiguous requirement, it can now ask for your input. For example, if you ask to \"add a button,\" the Coder agent may pause and ask in the chat: `[CLARIFICATION NEEDED] What should the button's text be, and what should happen when it's clicked?`" }),
                  /* @__PURE__ */ jsx18("p", { children: "The entire generation process pauses until you provide a reply. Your answer is then fed back into the Coder's context, and it resumes its work with the clearer instructions. This reduces wasted effort and transforms the interaction into a collaborative pair-programming session." })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Meet the Agents", children: [
                  /* @__PURE__ */ jsx18("p", { children: "Here are the specialists on your AI team. They are categorized by their primary function." }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-3 mb-2", children: "Core Coder Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Project CTO:" }),
                      " The master orchestrator for follow-up requests. It analyzes new feature requests against the existing code and creates targeted plans to evolve your application."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Architect:" }),
                      ' Breaks your initial prompt into a high-level plan of "epics" (services like `frontend`) and "features," and selects the best "blueprint" for each epic.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Planner:" }),
                      " Creates a detailed, file-by-file plan for a single feature, prioritizing a minimalist structure to optimize generation speed."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "QA-Engineer (TDD Agent):" }),
                      " Writes a set of failing tests that define what the code *should* do *before* the Coder starts. This is a core part of Test-Driven Development."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Coder:" }),
                      " The workhorse. It writes the code for a single file, with the primary goal of making the QA-Engineer's tests pass."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Refactor Agent:" }),
                      " A specialist that makes precise, surgical changes to existing code based on specific instructions from other agents."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Debugger Agent:" }),
                      " Performs root cause analysis on errors found by other agents and creates a targeted fix for the Refactor Agent to implement."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-4 mb-2", children: "Specialist Coder Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "DB-Agent:" }),
                      " An expert database architect that designs and writes SQL schema files."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "API-Agent:" }),
                      " A backend specialist that generates the code for API endpoints."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Theme-Agent:" }),
                      " A frontend specialist that creates CSS or other styling files to define the application's visual theme."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-4 mb-2", children: "Quality & Deployment Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "DevOps Agent:" }),
                      " Simulates a CI/CD pipeline, checking for syntax errors, broken imports, and integration issues before the code is finalized."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Aesthetics & Layout Agents:" }),
                      " A duo of UI specialists. The Aesthetics agent improves visual design (colors, spacing), while the Layout agent refactors the structure for a responsive and intuitive user flow."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "QA Agent:" }),
                      " The final inspector. It performs a last review to find any subtle bugs or logical errors that other agents might have missed."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Security-Analyst:" }),
                      " Scans the code for common security vulnerabilities (like XSS) and violations of best practices (like hardcoded secrets)."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Infrastructure Agent:" }),
                      " The final agent to run. It generates all necessary Docker files (`Dockerfile`, `docker-compose.yml`) and a `README.md` to make your project easy to run."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-4 mb-2", children: "Content & Writing Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Content-Planner:" }),
                      " Outlines the structure for written content, from single articles to multi-chapter books."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Writer:" }),
                      " The primary agent for generating articles, blog posts, and other text-based content."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Novel-Orchestrator:" }),
                      " Manages the complex, chapter-by-chapter process of writing a novel, ensuring continuity."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Tutorial-Orchestrator:" }),
                      " Manages the generation of structured, multi-chapter tutorial books."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Content Verifiers:" }),
                      " Specialists (like `Plot-Verifier` and `Character-Verifier`) that read generated chapters to ensure consistency."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Humanizer Agent:" }),
                      ' Subtly refines AI-generated text to make it sound more natural and engaging, while preserving the core meaning and target word count. Also gives the AI its "Electra" persona.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Summarizer Agent:" }),
                      ` Acts as the system's "session memory." It summarizes completed epics and chapters, providing context for subsequent agents to ensure all parts of a project integrate correctly.`
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-4 mb-2", children: "Chat Mode Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Master-Agent:" }),
                      " The primary orchestrator for chat queries. It provides a comprehensive, conversational answer based on the full conversation history."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Details-Agent:" }),
                      " A fact-checker that provides concise, direct, and factually dense responses. (The `Humanizer` agent then combines these two responses)."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx18("h5", { className: "font-semibold text-gray-200 mt-4 mb-2", children: "Image Mode Agents" }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Stylist-Agent:" }),
                      ' Injects artistic style keywords (e.g., "cinematic", "art deco") into your prompt.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Lighting-Agent:" }),
                      ' Adds keywords for lighting conditions (e.g., "dramatic lighting", "god rays").'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Focus-Agent:" }),
                      ' Adds camera and lens details (e.g., "macro shot", "bokeh").'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Details-Agent:" }),
                      ' Adds keywords to enhance fine details and quality (e.g., "hyperdetailed", "masterpiece").'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Finalizer-Agent:" }),
                      " Combines your original prompt with all the enhancements from other agents to create the final, master prompt."
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs16(Section, { title: "Application Modes", children: [
                /* @__PURE__ */ jsx18("p", { children: "The application has several distinct modes, accessible from the header. You can only switch modes when a project is not being generated." }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Coder Mode", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Purpose:" }),
                    " This is your primary tool for turning an idea into a functional, multi-service project. Whether you need a simple website or a full-stack web application, Coder Mode orchestrates the agents to build it for you."
                  ] }),
                  /* @__PURE__ */ jsx18("p", { children: /* @__PURE__ */ jsx18("strong", { children: "Key Options:" }) }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Generation Mode:" }),
                      ' Choose "Silent Mode" to let the AI build the entire project on autopilot, or "Manual Mode" to review and approve the file plan for each feature before generation begins.'
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Testing Preference:" }),
                      ' Choose "Run In-house Testing" to use the advanced Test-Driven Development workflow, or "Skip Testing" for a faster, more direct generation process.'
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Content Mode", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Purpose:" }),
                    " This mode is for generating high-quality written content. It's not just for simple articles; it's a powerful tool for creating structured, long-form documents and presentations."
                  ] }),
                  /* @__PURE__ */ jsx18("p", { children: /* @__PURE__ */ jsx18("strong", { children: "Content Types:" }) }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Standard Content (Blog Post, etc.):" }),
                      " Ideal for single-document generation. You can provide keywords, a target audience, and a desired tone."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Novel & Tutorial Book:" }),
                      " Project-level tools for creating multi-chapter works, complete with detailed planning forms to guide the AI."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "PowerPoint Presentation:" }),
                      " A unique generator where you define the slides in a form. The AI then writes the content and can even generate relevant images for each slide, compiling it all into a downloadable `.pptx` file."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Chat Mode", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Purpose:" }),
                    " A dedicated, full-screen conversational experience. This mode is designed for direct, text-based interaction, allowing you to ask questions, brainstorm ideas, and get high-quality responses from a specialized team of AI agents."
                  ] }),
                  /* @__PURE__ */ jsx18("p", { children: /* @__PURE__ */ jsx18("strong", { children: "Workflow:" }) }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2", children: [
                    /* @__PURE__ */ jsx18("li", { children: "Simply type your message and send. There are no other controls, allowing for a focused conversation." }),
                    /* @__PURE__ */ jsx18("li", { children: "Behind the scenes, a `Master-Agent` provides a comprehensive answer while a `Details-Agent` provides a factual one. A final `Humanizer` agent synthesizes these into the single, high-quality response you receive." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Image Mode", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Purpose:" }),
                    " This mode is for creating high-quality, detailed images from text prompts. It uses a team of specialist agents to enhance your ideas before generation."
                  ] }),
                  /* @__PURE__ */ jsx18("p", { children: /* @__PURE__ */ jsx18("strong", { children: "Workflow:" }) }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2", children: [
                    /* @__PURE__ */ jsx18("li", { children: 'Enter a simple prompt (e.g., "a cat in a library") and choose an aspect ratio.' }),
                    /* @__PURE__ */ jsx18("li", { children: 'A team of agents (Stylist, Lighting, Focus, Details) will automatically add professional keywords to enhance your prompt. You can see this process in the "Agent Activity" log.' }),
                    /* @__PURE__ */ jsx18("li", { children: "A `Finalizer` agent creates the master prompt, which is then used to generate a gallery of four unique images." }),
                    /* @__PURE__ */ jsx18("li", { children: 'Click the "Surprise Me" button to have the AI generate a random, creative prompt for you.' })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "Canvas Mode", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Purpose:" }),
                    " Canvas Mode is a powerful, interactive, and conversational workspace designed for fine-tuning, refactoring, and exploring code or text. It's where you collaborate directly with the AI on existing content."
                  ] }),
                  /* @__PURE__ */ jsxs16("p", { children: [
                    /* @__PURE__ */ jsx18("strong", { children: "Workflow:" }),
                    " The screen is split between the ",
                    /* @__PURE__ */ jsx18("strong", { children: "Canvas Editor" }),
                    " and the ",
                    /* @__PURE__ */ jsx18("strong", { children: "AI Assistant" }),
                    " chat. You can directly edit text in the editor, or use the AI to make changes by chatting with it or using the powerful right-click context menu on selected text."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs16(Section, { title: "Session History & Persistence", children: [
                /* @__PURE__ */ jsx18("p", { children: "This application is designed to be a persistent workspace, ensuring your projects are always saved and accessible. This is handled automatically using your browser's local storage (IndexedDB), meaning your data stays private on your computer." }),
                /* @__PURE__ */ jsx18(SubSection, { title: "Automatic Saving", children: /* @__PURE__ */ jsxs16("p", { children: [
                  "As you work on a project in ",
                  /* @__PURE__ */ jsx18("strong", { children: "Coder Mode" }),
                  " or ",
                  /* @__PURE__ */ jsx18("strong", { children: "Content Mode" }),
                  ", the entire state\u2014including your prompts, AI logs, generated files, and settings\u2014is automatically saved in the background. You don't need to do anything to save your progress."
                ] }) }),
                /* @__PURE__ */ jsxs16(SubSection, { title: "The History Panel", children: [
                  /* @__PURE__ */ jsxs16("p", { children: [
                    "Clicking the ",
                    /* @__PURE__ */ jsx18("strong", { children: "History" }),
                    " icon in the header opens the Project History panel. Here you will see a list of all your past projects."
                  ] }),
                  /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-2", children: [
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Load:" }),
                      " Click this button to load a past project. The application will restore the entire state, allowing you to continue exactly where you left off."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Delete:" }),
                      " This will permanently remove a project's history from your browser's storage."
                    ] }),
                    /* @__PURE__ */ jsxs16("li", { children: [
                      /* @__PURE__ */ jsx18("strong", { children: "Import / Export:" }),
                      " These buttons allow you to manage your entire project database. You can ",
                      /* @__PURE__ */ jsx18("strong", { children: "Export" }),
                      " all your projects to a single JSON file for backup or to transfer to another computer. The ",
                      /* @__PURE__ */ jsx18("strong", { children: "Import" }),
                      " button lets you load a previously exported file, which will overwrite your current history."
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx18(Section, { title: "Interface & Panels", children: /* @__PURE__ */ jsxs16("ul", { className: "list-disc list-inside space-y-3", children: [
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Header:" }),
                  " Contains the project name, mode switcher, primary actions like download/history, and toggles for showing/hiding panels."
                ] }),
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Assistant Panel:" }),
                  " Your main interaction point. Here you select project options, see the chat history, and type your prompts."
                ] }),
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Agent Logs Panel:" }),
                  " A real-time feed showing which AI agent is currently working and what task it is performing."
                ] }),
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Editor Panel:" }),
                  " Displays the file tree of your project. You can select files to view and edit their content."
                ] }),
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Detailed Logs Panel:" }),
                  " A verbose, technical log showing the full prompts sent to the AI and the raw responses received."
                ] }),
                /* @__PURE__ */ jsxs16("li", { children: [
                  /* @__PURE__ */ jsx18("strong", { children: "Live Preview Panel:" }),
                  " In Coder Mode, this can be activated for projects with an `index.html` file. It renders a live, interactive preview of your web application."
                ] })
              ] }) })
            ] })
          ]
        }
      )
    }
  );
};

// components/FeedbackModal.tsx
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var FEEDBACK_URL = "https://form.jotform.com/242014707772454";
var FeedbackModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "feedback-modal-title",
      children: /* @__PURE__ */ jsxs17(
        "div",
        {
          className: "bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col border border-gray-700",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs17("header", { className: "flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0", children: [
              /* @__PURE__ */ jsx19("h2", { id: "feedback-modal-title", className: "text-xl font-semibold text-white", children: "Bug Report / Feedback" }),
              /* @__PURE__ */ jsx19(
                "button",
                {
                  onClick: onClose,
                  className: "px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors text-sm",
                  "aria-label": "Close feedback form",
                  children: "Close"
                }
              )
            ] }),
            /* @__PURE__ */ jsx19("main", { className: "flex-grow bg-gray-200", children: /* @__PURE__ */ jsx19(
              "iframe",
              {
                src: FEEDBACK_URL,
                className: "w-full h-full border-none",
                title: "Bug Report and Feedback Form",
                children: "Loading..."
              }
            ) })
          ]
        }
      )
    }
  );
};

// components/HistoryModal.tsx
import { useState as useState12, useEffect as useEffect11, useCallback as useCallback2 } from "react";

// services/dbService.ts
var DB_NAME = "AI_Agent_Coder_DB";
var DB_VERSION = 1;
var STORE_NAME = "sessions";
var db = null;
function getDb() {
  return new Promise((resolve, reject) => {
    if (db) {
      return resolve(db);
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (event) => {
      console.error("IndexedDB error:", request.error);
      reject("Error opening database");
    };
    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };
    request.onupgradeneeded = (event) => {
      const dbInstance = event.target.result;
      if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
        const store = dbInstance.createObjectStore(STORE_NAME, { keyPath: "id" });
        store.createIndex("timestamp", "timestamp", { unique: false });
      }
    };
  });
}
async function saveSession(sessionData) {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(sessionData);
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error("Failed to save session:", error);
  }
}
async function getAllSessionsMetadata() {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index("timestamp");
    const request = index.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const allSessions = request.result;
        const metadata = allSessions.map(({ id, projectName, timestamp, mode }) => ({ id, projectName, timestamp, mode })).sort((a, b) => b.timestamp - a.timestamp);
        resolve(metadata);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error("Failed to get all sessions metadata:", error);
    return [];
  }
}
async function getSession(id) {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error(`Failed to get session ${id}:`, error);
    return null;
  }
}
async function deleteSession(id) {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.delete(id);
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error(`Failed to delete session ${id}:`, error);
  }
}
async function exportAllSessions() {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error("Failed to export all sessions:", error);
    return [];
  }
}
async function importSessions(sessions) {
  try {
    const db2 = await getDb();
    const transaction = db2.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.clear();
    sessions.forEach((session) => {
      store.put(session);
    });
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error("Failed to import sessions:", error);
    throw error;
  }
}

// components/HistoryModal.tsx
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var HistoryModal = ({ isOpen, onClose, onLoadSession }) => {
  const [sessions, setSessions] = useState12([]);
  const [isLoading, setIsLoading] = useState12(true);
  const [error, setError] = useState12(null);
  const fetchSessions = useCallback2(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const sessionsMeta = await getAllSessionsMetadata();
      setSessions(sessionsMeta);
    } catch (err) {
      setError("Failed to load session history.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect11(() => {
    if (isOpen) {
      fetchSessions();
    }
  }, [isOpen, fetchSessions]);
  const handleLoad = async (id) => {
    const fullSession = await getSession(id);
    if (fullSession) {
      onLoadSession(fullSession);
    } else {
      alert("Error: Could not load the selected session.");
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project history? This cannot be undone.")) {
      await deleteSession(id);
      fetchSessions();
    }
  };
  const handleExport = async () => {
    try {
      const allData = await exportAllSessions();
      const jsonString = JSON.stringify(allData, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-agent-coder-history-${(/* @__PURE__ */ new Date()).toISOString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to export history.");
      console.error(err);
    }
  };
  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const importedData = JSON.parse(event.target?.result);
            if (Array.isArray(importedData)) {
              if (window.confirm("Importing this file will overwrite your current history. Are you sure you want to continue?")) {
                await importSessions(importedData);
                fetchSessions();
                alert("History imported successfully!");
              }
            } else {
              throw new Error("Invalid file format.");
            }
          } catch (err) {
            alert("Failed to import history. The file may be corrupt or in the wrong format.");
            console.error(err);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx20(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "history-modal-title",
      children: /* @__PURE__ */ jsxs18(
        "div",
        {
          className: "bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col border border-gray-700",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs18("header", { className: "flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0", children: [
              /* @__PURE__ */ jsx20("h2", { id: "history-modal-title", className: "text-xl font-semibold text-white", children: "Project History" }),
              /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx20("button", { onClick: handleImport, className: "text-sm text-gray-300 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors", children: "Import" }),
                /* @__PURE__ */ jsx20("button", { onClick: handleExport, className: "text-sm text-gray-300 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors", children: "Export" }),
                /* @__PURE__ */ jsx20("button", { onClick: onClose, className: "px-4 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors text-sm", children: "Close" })
              ] })
            ] }),
            /* @__PURE__ */ jsx20("main", { className: "flex-grow p-4 overflow-y-auto", children: isLoading ? /* @__PURE__ */ jsx20("div", { className: "flex items-center justify-center h-full text-gray-400", children: /* @__PURE__ */ jsx20(LoaderIcon, { className: "w-8 h-8" }) }) : error ? /* @__PURE__ */ jsx20("div", { className: "text-center text-red-400", children: error }) : sessions.length === 0 ? /* @__PURE__ */ jsx20("div", { className: "text-center text-gray-500", children: "No saved projects found." }) : /* @__PURE__ */ jsx20("ul", { className: "space-y-3", children: sessions.map((session) => /* @__PURE__ */ jsxs18("li", { className: "bg-gray-900/50 p-3 rounded-lg flex items-center justify-between group", children: [
              /* @__PURE__ */ jsxs18("div", { children: [
                /* @__PURE__ */ jsx20("p", { className: "font-semibold text-white", children: session.projectName }),
                /* @__PURE__ */ jsxs18("p", { className: "text-xs text-gray-400", children: [
                  new Date(session.timestamp).toLocaleString(),
                  " - ",
                  /* @__PURE__ */ jsxs18("span", { className: "capitalize font-medium text-indigo-400", children: [
                    session.mode,
                    " Mode"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx20(
                  "button",
                  {
                    onClick: () => handleLoad(session.id),
                    className: "text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1 px-3 rounded-md transition-all",
                    children: "Load"
                  }
                ),
                /* @__PURE__ */ jsx20(
                  "button",
                  {
                    onClick: () => handleDelete(session.id),
                    title: "Delete Session",
                    className: "p-2 rounded-md text-gray-500 hover:bg-red-900/50 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all",
                    children: /* @__PURE__ */ jsx20(Trash2Icon, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] }, session.id)) }) })
          ]
        }
      )
    }
  );
};

// components/MobileFooter.tsx
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
var TabButton = ({ isActive, onClick, icon, label }) => {
  return /* @__PURE__ */ jsxs19(
    "button",
    {
      onClick,
      className: `flex flex-col items-center justify-center gap-1 w-full pt-2 pb-1 transition-colors ${isActive ? "text-indigo-400" : "text-gray-400 hover:text-white"}`,
      children: [
        icon,
        /* @__PURE__ */ jsx21("span", { className: "text-xs", children: label })
      ]
    }
  );
};
var MobileFooter = ({ activeView, setActiveView, panelVisibility }) => {
  return /* @__PURE__ */ jsxs19("footer", { className: "fixed bottom-0 left-0 right-0 h-16 bg-gray-800/90 border-t border-gray-700 backdrop-blur-sm flex items-center justify-around z-30", children: [
    panelVisibility.assistant && /* @__PURE__ */ jsx21(
      TabButton,
      {
        isActive: activeView === "assistant",
        onClick: () => setActiveView("assistant"),
        icon: /* @__PURE__ */ jsx21(PanelLeftIcon, { className: "w-6 h-6" }),
        label: "Assistant"
      }
    ),
    panelVisibility.agentLogs && /* @__PURE__ */ jsx21(
      TabButton,
      {
        isActive: activeView === "agentLogs",
        onClick: () => setActiveView("agentLogs"),
        icon: /* @__PURE__ */ jsx21(TerminalSquareIcon, { className: "w-6 h-6" }),
        label: "Logs"
      }
    ),
    panelVisibility.editor && /* @__PURE__ */ jsx21(
      TabButton,
      {
        isActive: activeView === "editor",
        onClick: () => setActiveView("editor"),
        icon: /* @__PURE__ */ jsx21(CodeSquareIcon, { className: "w-6 h-6" }),
        label: "Editor"
      }
    )
  ] });
};

// components/PlanReviewPanel.tsx
import { useState as useState13 } from "react";
import { jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
var PlanItem = ({ item, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState13(false);
  const [path, setPath] = useState13(item.path);
  const [description, setDescription] = useState13(item.description);
  const handleSave = () => {
    onUpdate(item.id, path, description);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setPath(item.path);
    setDescription(item.description);
    setIsEditing(false);
  };
  if (isEditing) {
    return /* @__PURE__ */ jsxs20("div", { className: "bg-gray-900/70 p-3 rounded-lg border border-indigo-500 space-y-2", children: [
      /* @__PURE__ */ jsx22(
        "input",
        {
          type: "text",
          value: path,
          onChange: (e) => setPath(e.target.value),
          className: "w-full bg-gray-800 p-2 rounded-md text-sm font-semibold border border-gray-600 focus:ring-1 focus:ring-indigo-500"
        }
      ),
      /* @__PURE__ */ jsx22(
        "textarea",
        {
          value: description,
          onChange: (e) => setDescription(e.target.value),
          rows: 3,
          className: "w-full bg-gray-800 p-2 rounded-md text-sm border border-gray-600 focus:ring-1 focus:ring-indigo-500 resize-y"
        }
      ),
      /* @__PURE__ */ jsxs20("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsx22("button", { onClick: handleCancel, className: "p-2 rounded-md hover:bg-gray-700", children: /* @__PURE__ */ jsx22(XIcon, { className: "w-4 h-4 text-red-400" }) }),
        /* @__PURE__ */ jsx22("button", { onClick: handleSave, className: "p-2 rounded-md hover:bg-gray-700", children: /* @__PURE__ */ jsx22(CheckIcon, { className: "w-4 h-4 text-green-400" }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs20("div", { className: "bg-gray-800/50 p-3 rounded-lg flex items-start gap-3 group", children: [
    /* @__PURE__ */ jsx22(FileCodeIcon, { className: "w-5 h-5 mt-1 text-gray-400 flex-shrink-0" }),
    /* @__PURE__ */ jsxs20("div", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx22("h4", { className: "font-semibold text-white", children: item.path }),
      /* @__PURE__ */ jsx22("p", { className: "text-gray-300 text-sm", children: item.description })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
      /* @__PURE__ */ jsx22("button", { onClick: () => setIsEditing(true), className: "p-2 rounded-md hover:bg-gray-700", children: /* @__PURE__ */ jsx22(PencilIcon, { className: "w-4 h-4 text-gray-400" }) }),
      /* @__PURE__ */ jsx22("button", { onClick: () => onDelete(item.id), className: "p-2 rounded-md hover:bg-gray-700", children: /* @__PURE__ */ jsx22(Trash2Icon, { className: "w-4 h-4 text-red-500" }) })
    ] })
  ] });
};
var PlanReviewPanel = ({ title, plan, onPlanChange, onApprove, isLoading }) => {
  const handleUpdateItem = (id, newPath, newDescription) => {
    onPlanChange(plan.map((item) => item.id === id ? { ...item, path: newPath, description: newDescription } : item));
  };
  const handleDeleteItem = (id) => {
    onPlanChange(plan.filter((item) => item.id !== id));
  };
  const handleAddItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      path: "new_file.js",
      description: "A new file.",
      dependencies: []
    };
    onPlanChange([...plan, newItem]);
  };
  return /* @__PURE__ */ jsxs20("div", { className: "bg-gray-800/50 flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs20("header", { className: "p-4 border-b border-gray-700 flex-shrink-0", children: [
      /* @__PURE__ */ jsx22("h2", { className: "text-xl font-bold text-white", children: title }),
      /* @__PURE__ */ jsx22("p", { className: "text-gray-400 text-sm mt-1", children: "The AI has generated a file plan for this component. You can review, edit, add, or remove files before approving the plan and starting code generation." })
    ] }),
    /* @__PURE__ */ jsxs20("main", { className: "flex-grow overflow-y-auto p-4 space-y-3", children: [
      plan.map((item) => /* @__PURE__ */ jsx22(PlanItem, { item, onUpdate: handleUpdateItem, onDelete: handleDeleteItem }, item.id)),
      /* @__PURE__ */ jsxs20(
        "button",
        {
          onClick: handleAddItem,
          className: "w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:border-gray-500 transition-colors",
          children: [
            /* @__PURE__ */ jsx22(PlusCircleIcon, { className: "w-5 h-5" }),
            "Add File to Plan"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx22("footer", { className: "p-4 border-t border-gray-700 flex-shrink-0 flex justify-end", children: /* @__PURE__ */ jsxs20(
      "button",
      {
        onClick: onApprove,
        disabled: isLoading || plan.length === 0,
        className: "flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-md transition-all text-sm",
        children: [
          /* @__PURE__ */ jsx22(CheckCircleIcon, { className: "w-5 h-5" }),
          "Approve Plan & Generate Code"
        ]
      }
    ) })
  ] });
};

// components/AudioMode.tsx
import { useState as useState14, useRef as useRef8, useEffect as useEffect12 } from "react";
import { jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
var getIconForSource2 = (source) => {
  switch (source) {
    case "system":
      return /* @__PURE__ */ jsx23(BotIcon, { className: "w-5 h-5 text-indigo-400" });
    case "master-agent":
      return /* @__PURE__ */ jsx23(GitMergeIcon, { className: "w-5 h-5 text-purple-400" });
    case "details-agent":
      return /* @__PURE__ */ jsx23(ClipboardCheckIcon, { className: "w-5 h-5 text-cyan-400" });
    case "humanizer":
      return /* @__PURE__ */ jsx23(Wand2Icon, { className: "w-5 h-5 text-rose-400" });
    default:
      return /* @__PURE__ */ jsx23(BotIcon, { className: "w-5 h-5 text-indigo-400" });
  }
};
var getStatusClasses2 = (status) => {
  switch (status) {
    case "running":
      return "text-yellow-400";
    case "success":
      return "text-green-400";
    case "error":
      return "text-red-400";
    case "info":
      return "text-gray-300";
  }
};
var formatAudioTime = (ms) => {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1e3;
  const pad = (num, length = 2) => num.toString().padStart(length, "0");
  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
};
var AudioMode = ({ chatHistory, onSendMessage, isThinking, thinkingLogs, elapsedTime, attachedFile, setAttachedFile }) => {
  const [currentMessage, setCurrentMessage] = useState14("");
  const [visibleLogs, setVisibleLogs] = useState14([]);
  const chatLogRef = useRef8(null);
  const textareaRef = useRef8(null);
  const fileInputRef = useRef8(null);
  useEffect12(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatHistory, visibleLogs]);
  useEffect12(() => {
    if (isThinking) {
      setVisibleLogs(thinkingLogs);
    } else {
      if (visibleLogs.length > 0) {
        const timer = setTimeout(() => {
          setVisibleLogs([]);
        }, 2e3);
        return () => clearTimeout(timer);
      }
    }
  }, [isThinking, thinkingLogs, visibleLogs.length]);
  const handleSend = () => {
    if (currentMessage.trim() || attachedFile) {
      onSendMessage(currentMessage);
      setCurrentMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };
  const handleTextareaInput = (e) => {
    setCurrentMessage(e.target.value);
    const textarea = e.currentTarget;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 200);
    textarea.style.height = `${newHeight}px`;
  };
  const handleFileSelection = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAttachedFile({ name: file.name, content: reader.result });
    };
    reader.onerror = (err) => {
      console.error("Error reading file:", err);
      alert("There was an error reading the file.");
    };
    reader.readAsText(file);
    if (e.target) e.target.value = "";
  };
  return /* @__PURE__ */ jsxs21("div", { className: "relative flex flex-col h-full bg-gray-900", children: [
    chatHistory.length === 0 && !isThinking && /* @__PURE__ */ jsxs21("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl p-4 text-center text-gray-400 animate-fade-in pointer-events-none", style: { top: "20%" }, children: [
      /* @__PURE__ */ jsx23("h2", { className: "text-2xl font-bold text-white mb-4", children: "Welcome to the MakuluLinux AI Agent Portal." }),
      /* @__PURE__ */ jsx23("p", { className: "text-md", children: "You are currently in Chat Mode, you can simply start chatting to the AI below, or switch to other modes above, This whole portal uses Multi Agent technology to provide you with superior AI Excellence well above the industry standard, Guaranteed to make your life easier and give you the best possible end result. At MakuluLinux we push boundaries and this Portal is just another stepping stone on that journey" }),
      /* @__PURE__ */ jsx23("p", { className: "text-md mt-4", children: "P.S:  Be sure to click on the 'Tutorial Guide' button in the top right corner, it gives you a detailed breakdown of this application and how the Agent Technology works." }),
      /* @__PURE__ */ jsx23("p", { className: "text-md mt-4", children: "#############." }),
      /* @__PURE__ */ jsx23("p", { className: "text-md mt-4", children: "We use both Free and Paid models to Generate content depending on our audience, We would like the thank Pollinations for the generous tokens they contribute to make the free version possible." })
    ] }),
    /* @__PURE__ */ jsx23("div", { ref: chatLogRef, className: "flex-grow p-4 overflow-y-auto flex flex-col justify-end", children: /* @__PURE__ */ jsxs21("div", { className: "w-full max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx23("div", { className: "space-y-6", children: chatHistory.map((msg) => /* @__PURE__ */ jsxs21("div", { className: `flex items-end gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: [
        msg.role === "assistant" && /* @__PURE__ */ jsx23("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center", children: /* @__PURE__ */ jsx23(BotIcon, { className: "w-6 h-6 text-indigo-400" }) }),
        /* @__PURE__ */ jsx23("div", { className: `max-w-prose p-4 rounded-2xl ${msg.role === "user" ? "bg-indigo-600 text-white rounded-br-none" : "bg-gray-700 text-gray-200 rounded-bl-none"}`, children: /* @__PURE__ */ jsx23("p", { className: "text-md whitespace-pre-wrap", children: msg.content }) })
      ] }, msg.id)) }),
      isThinking && chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === "user" && /* @__PURE__ */ jsxs21("div", { className: "flex items-end gap-3 justify-start mt-6", children: [
        /* @__PURE__ */ jsx23("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center", children: /* @__PURE__ */ jsx23(BotIcon, { className: "w-6 h-6 text-indigo-400" }) }),
        /* @__PURE__ */ jsx23("div", { className: "max-w-lg p-4 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none", children: /* @__PURE__ */ jsx23(LoaderIcon, { className: "w-6 h-6 text-gray-400" }) })
      ] }),
      /* @__PURE__ */ jsx23("div", { className: `w-full max-w-3xl mx-auto transition-all duration-500 ease-in-out overflow-hidden mt-4 ${visibleLogs.length > 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxs21("div", { className: "bg-gray-800/50 border border-gray-700 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxs21("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsx23("h3", { className: "text-sm font-semibold text-gray-400", children: "Thinking..." }),
          isThinking && /* @__PURE__ */ jsx23("span", { className: "text-sm font-mono text-yellow-300", children: formatAudioTime(elapsedTime) })
        ] }),
        /* @__PURE__ */ jsx23("ul", { className: "space-y-2", children: visibleLogs.map((log, index) => /* @__PURE__ */ jsxs21("li", { className: "flex items-start gap-3 text-sm animate-fade-in", style: { animationDelay: `${index * 100}ms` }, children: [
          /* @__PURE__ */ jsx23("div", { className: "mt-0.5 flex-shrink-0", children: getIconForSource2(log.source) }),
          /* @__PURE__ */ jsx23("span", { className: `${getStatusClasses2(log.status)}`, children: log.message })
        ] }, index)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx23("div", { className: "p-4 border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm flex-shrink-0", children: /* @__PURE__ */ jsxs21("div", { className: "w-full max-w-3xl mx-auto", children: [
      attachedFile && /* @__PURE__ */ jsx23("div", { className: "mb-3 hidden", children: /* @__PURE__ */ jsxs21("div", { className: "bg-gray-700/50 rounded-lg p-2 flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxs21("span", { className: "text-gray-300 truncate pr-2", children: [
          "Attached: ",
          attachedFile.name
        ] }),
        /* @__PURE__ */ jsx23("button", { onClick: () => setAttachedFile(null), className: "text-gray-400 hover:text-white flex-shrink-0", children: /* @__PURE__ */ jsx23(XCircleIcon, { className: "w-5 h-5" }) })
      ] }) }),
      /* @__PURE__ */ jsxs21("div", { className: "relative flex items-end gap-2", children: [
        /* @__PURE__ */ jsx23(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            onChange: handleFileSelection,
            className: "hidden",
            accept: "text/*,.txt,.md,.log,.json,.xml,.yml,.yaml,.csv,.ini,.toml,.html,.htm,.css,.js,.mjs,.jsx,.ts,.tsx,.vue,.svelte,.py,.rb,.php,.pl,.sh,.java,.cs,.go,.rs,.swift,.kt,.kts,.c,.h,.cpp,.hpp,.sql,.bas"
          }
        ),
        /* @__PURE__ */ jsx23(
          "button",
          {
            onClick: () => fileInputRef.current?.click(),
            title: "Attach a text file for context",
            disabled: isThinking,
            className: "p-3 text-gray-400 hover:text-white disabled:text-gray-600 disabled:cursor-not-allowed flex-shrink-0 hidden",
            children: /* @__PURE__ */ jsx23(PlusCircleIcon, { className: "w-7 h-7" })
          }
        ),
        /* @__PURE__ */ jsx23(
          "textarea",
          {
            ref: textareaRef,
            className: "w-full bg-gray-800 border border-gray-600 rounded-2xl py-3 px-5 pr-14 text-md focus:ring-2 focus:ring-indigo-500 transition-colors placeholder:text-gray-500 resize-none",
            placeholder: "Send a message...",
            value: currentMessage,
            onChange: handleTextareaInput,
            disabled: isThinking,
            rows: 1,
            onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }
          }
        ),
        /* @__PURE__ */ jsx23(
          "button",
          {
            onClick: handleSend,
            disabled: isThinking || !currentMessage.trim() && !attachedFile,
            className: "absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx23(SendIcon, { className: "w-5 h-5 text-white" })
          }
        )
      ] })
    ] }) })
  ] });
};

// components/ImageMode.tsx
import { useState as useState15, useRef as useRef9, useEffect as useEffect13 } from "react";

// components/ImageZoomModal.tsx
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
var ImageZoomModal = ({
  isOpen,
  onClose,
  imageSrc
}) => {
  if (!isOpen || !imageSrc) return null;
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Zoomed image view",
      children: /* @__PURE__ */ jsxs22(
        "div",
        {
          className: "relative max-w-6xl max-h-[90vh] flex shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx24(
              "img",
              {
                src: imageSrc,
                alt: "Zoomed-in generated image",
                className: "object-contain w-auto h-auto max-w-full max-h-full rounded-lg"
              }
            ),
            /* @__PURE__ */ jsx24(
              "button",
              {
                onClick: onClose,
                className: "absolute -top-3 -right-3 p-1.5 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors border-2 border-gray-600",
                "aria-label": "Close zoomed image",
                children: /* @__PURE__ */ jsxs22("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx24("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ jsx24("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ] })
              }
            )
          ]
        }
      )
    }
  );
};

// components/ImageMode.tsx
import { Fragment as Fragment6, jsx as jsx25, jsxs as jsxs23 } from "react/jsx-runtime";
var LOCKED_FEATURE_MESSAGE3 = "This Feature is locked, please upgrade to Pro to unlock this feature";
var aspectRatios = [
  { value: "1:1", label: "Square (1024x1024)" },
  { value: "16:9", label: "Landscape (1024x576)" },
  { value: "9:16", label: "Portrait (576x1024)" },
  { value: "4:3", label: "Landscape (1024x768)" },
  { value: "3:4", label: "Portrait (768x1024)" },
  { value: "1920:1080", label: "Widescreen HD (1920x1080)" },
  { value: "1080:1920", label: "Portrait HD (1080:1920)" }
];
var getIconForSource3 = (source) => {
  switch (source) {
    case "system":
      return /* @__PURE__ */ jsx25(BotIcon, { className: "w-5 h-5 text-indigo-400" });
    case "stylist-agent":
      return /* @__PURE__ */ jsx25(PaintbrushIcon, { className: "w-5 h-5 text-pink-400" });
    case "lighting-agent":
      return /* @__PURE__ */ jsx25(SparklesIcon, { className: "w-5 h-5 text-yellow-300" });
    case "focus-agent":
      return /* @__PURE__ */ jsx25(Wand2Icon, { className: "w-5 h-5 text-rose-400" });
    case "finalizer-agent":
      return /* @__PURE__ */ jsx25(BrainCircuitIcon, { className: "w-5 h-5 text-sky-400" });
    case "details-agent":
      return /* @__PURE__ */ jsx25(ClipboardCheckIcon, { className: "w-5 h-5 text-cyan-400" });
    default:
      return null;
  }
};
var getStatusClasses3 = (status) => {
  switch (status) {
    case "running":
      return "text-yellow-400";
    case "success":
      return "text-green-400";
    case "error":
      return "text-red-400";
    case "info":
      return "text-gray-300";
  }
};
var ImageMode = ({ onGenerate, onSurpriseMe, prompt, setPrompt, generatedImages, isLoading, agentLogs, settings }) => {
  const [aspectRatio, setAspectRatio] = useState15("1:1");
  const [selectedImage, setSelectedImage] = useState15(null);
  const logsContainerRef = useRef9(null);
  const isAspectRatioLocked = settings.tier2.imageMode.aspectRatio === "locked";
  useEffect13(() => {
    if (isAspectRatioLocked) {
      setAspectRatio("1:1");
    }
  }, [isAspectRatioLocked]);
  useEffect13(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [agentLogs]);
  const handleGenerateClick = () => {
    if (prompt.trim() && !isLoading) {
      onGenerate(prompt, aspectRatio);
    }
  };
  const handleSurpriseMeClick = () => {
    if (!isLoading) {
      onSurpriseMe();
    }
  };
  return /* @__PURE__ */ jsxs23("div", { className: "flex flex-col md:flex-row h-full flex-grow min-h-0", children: [
    /* @__PURE__ */ jsxs23("div", { className: "w-full md:w-[35%] lg:w-[30%] h-full flex flex-col border-r border-gray-700 bg-gray-800/50 flex-shrink-0", children: [
      /* @__PURE__ */ jsxs23("header", { className: "p-4 border-b border-gray-700 flex-shrink-0", children: [
        /* @__PURE__ */ jsx25("h2", { className: "text-xl font-bold text-white", children: "Image Generator" }),
        /* @__PURE__ */ jsx25("p", { className: "text-gray-400 text-sm mt-1", children: "Describe the image you want to create. Specialized AI agents will refine your idea into a professional prompt." })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: "p-4 space-y-4 flex-shrink-0", children: [
        /* @__PURE__ */ jsxs23("div", { children: [
          /* @__PURE__ */ jsx25("label", { htmlFor: "aspectRatio", className: "block text-sm font-medium text-gray-300 mb-2", children: "Aspect Ratio" }),
          /* @__PURE__ */ jsx25(Tooltip, { text: LOCKED_FEATURE_MESSAGE3, isLocked: isAspectRatioLocked, children: /* @__PURE__ */ jsx25(
            "select",
            {
              id: "aspectRatio",
              value: aspectRatio,
              onChange: (e) => setAspectRatio(e.target.value),
              "aria-disabled": isLoading || isAspectRatioLocked,
              className: `w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 ${isLoading || isAspectRatioLocked ? "opacity-50 cursor-not-allowed" : ""} ${isAspectRatioLocked ? "pointer-events-none" : ""}`,
              children: aspectRatios.map((opt) => /* @__PURE__ */ jsx25("option", { value: opt.value, children: opt.label }, opt.value))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs23("div", { children: [
          /* @__PURE__ */ jsx25("label", { htmlFor: "prompt", className: "block text-sm font-medium text-gray-300 mb-2", children: "Prompt" }),
          /* @__PURE__ */ jsx25(
            "textarea",
            {
              id: "prompt",
              rows: 6,
              value: prompt,
              onChange: (e) => setPrompt(e.target.value),
              disabled: isLoading,
              placeholder: "e.g., A majestic lion with a crown made of stars, cinematic lighting",
              className: "w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 resize-y"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs23(
            "button",
            {
              onClick: handleSurpriseMeClick,
              disabled: isLoading,
              className: "w-1/3 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 px-4 rounded-md transition-all text-sm",
              children: [
                /* @__PURE__ */ jsx25(Wand2Icon, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx25("span", { children: "Surprise Me" })
              ]
            }
          ),
          /* @__PURE__ */ jsx25(
            "button",
            {
              onClick: handleGenerateClick,
              disabled: isLoading || !prompt.trim(),
              className: "w-2/3 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 px-4 rounded-md transition-all text-sm",
              children: isLoading ? /* @__PURE__ */ jsxs23(Fragment6, { children: [
                /* @__PURE__ */ jsx25(LoaderIcon, { className: "w-5 h-5" }),
                " Generating..."
              ] }) : "Generate"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: "flex-grow flex flex-col min-h-0 p-4 border-t border-gray-700", children: [
        /* @__PURE__ */ jsx25("h3", { className: "text-md font-semibold text-gray-300 mb-3 flex-shrink-0", children: "Agent Activity" }),
        /* @__PURE__ */ jsx25("div", { ref: logsContainerRef, className: "flex-grow overflow-y-auto pr-2", children: agentLogs.length === 0 && !isLoading ? /* @__PURE__ */ jsx25("div", { className: "flex items-center justify-center h-full text-gray-500 text-sm", children: "Agent logs will appear here..." }) : /* @__PURE__ */ jsx25("ul", { className: "space-y-3", children: agentLogs.map((log, index) => /* @__PURE__ */ jsxs23("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsx25("div", { className: "mt-1 flex-shrink-0", children: getIconForSource3(log.source) }),
          /* @__PURE__ */ jsx25("span", { className: `${getStatusClasses3(log.status)}`, children: log.message })
        ] }, index)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx25("div", { className: "w-full md:w-[65%] lg:w-[70%] h-full flex flex-col p-4 bg-gray-900", children: isLoading ? /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center h-full flex-col gap-4 text-gray-400", children: [
      /* @__PURE__ */ jsx25(LoaderIcon, { className: "w-12 h-12" }),
      /* @__PURE__ */ jsx25("p", { className: "text-lg", children: "Generating images..." })
    ] }) : generatedImages.length > 0 ? /* @__PURE__ */ jsx25("div", { className: "grid flex-grow grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 min-h-0", children: generatedImages.map((imageSrc, index) => /* @__PURE__ */ jsx25(
      "div",
      {
        className: "bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all",
        onClick: () => setSelectedImage(imageSrc),
        children: /* @__PURE__ */ jsx25("img", { src: imageSrc, alt: `Generated image ${index + 1}`, className: "w-full h-full object-cover" })
      },
      index
    )) }) : /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-center h-full flex-col gap-2 text-gray-500", children: [
      /* @__PURE__ */ jsx25(TerminalSquareIcon, { className: "w-16 h-16" }),
      /* @__PURE__ */ jsx25("h3", { className: "text-xl font-semibold", children: "Image Canvas" }),
      /* @__PURE__ */ jsx25("p", { children: "Your generated images will appear here." })
    ] }) }),
    /* @__PURE__ */ jsx25(ImageZoomModal, { isOpen: !!selectedImage, onClose: () => setSelectedImage(null), imageSrc: selectedImage })
  ] });
};

// services/blueprints.ts
var viteReactTsBlueprint = {
  id: "vite-react-ts",
  name: "Vite + React + TypeScript",
  description: "A standard Vite boilerplate for a React project using TypeScript.",
  getFiles: (epicName) => [
    {
      path: `${epicName}/package.json`,
      content: JSON.stringify({
        name: epicName,
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0"
        },
        devDependencies: {
          "@types/react": "^18.2.15",
          "@types/react-dom": "^18.2.7",
          "@vitejs/plugin-react": "^4.0.3",
          typescript: "^5.0.2",
          vite: "^4.4.5",
          tailwindcss: "^3.3.3",
          autoprefixer: "^10.4.16",
          postcss: "^8.4.31"
        }
      }, null, 2)
    },
    {
      path: `${epicName}/vite.config.ts`,
      content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`
    },
    {
      path: `${epicName}/tsconfig.json`,
      content: JSON.stringify({
        compilerOptions: {
          target: "ES2020",
          useDefineForClassFields: true,
          lib: ["ES2020", "DOM", "DOM.Iterable"],
          module: "ESNext",
          skipLibCheck: true,
          moduleResolution: "bundler",
          allowImportingTsExtensions: true,
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: "react-jsx",
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noFallthroughCasesInSwitch: true
        },
        include: ["src"],
        references: [{ path: "./tsconfig.node.json" }]
      }, null, 2)
    },
    {
      path: `${epicName}/index.html`,
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`
    },
    {
      path: `${epicName}/src/main.tsx`,
      content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`
    },
    {
      path: `${epicName}/src/App.tsx`,
      content: `function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to your AI-generated React App!</h1>
    </div>
  )
}

export default App`
    },
    {
      path: `${epicName}/src/index.css`,
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;`
    },
    {
      path: `${epicName}/tailwind.config.js`,
      content: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    },
    {
      path: `${epicName}/postcss.config.js`,
      content: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
    }
  ]
};
var nodeExpressApiBlueprint = {
  id: "node-express-api",
  name: "Node.js Express API",
  description: "A basic boilerplate for a Node.js API server using Express.",
  getFiles: (epicName) => [
    {
      path: `${epicName}/package.json`,
      content: JSON.stringify({
        name: epicName,
        version: "1.0.0",
        description: "API Server",
        main: "index.js",
        type: "module",
        scripts: {
          start: "node index.js"
        },
        dependencies: {
          express: "^4.18.2",
          cors: "^2.8.5"
        }
      }, null, 2)
    },
    {
      path: `${epicName}/index.js`,
      content: `import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

// Your routes will go here

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});`
    },
    {
      path: `${epicName}/.gitignore`,
      content: `node_modules
.env`
    }
  ]
};
var blueprints = [
  viteReactTsBlueprint,
  nodeExpressApiBlueprint
];
var getBlueprintById = (id) => {
  return blueprints.find((b) => b.id === id);
};

// services/aiService.ts
var POLLINATIONS_API_URL = "https://text.pollinations.ai/prompt/";
var API_PARAMS = "?token=sUch0nfoGzRCfw9L";
var MODELS = ["openai", "gemini", "gpt-5-nano"];
var MAX_PROMPT_LENGTH = 32500;
var RETRY_DELAY_MS = 6e4;
var MAX_ATTEMPTS = 10;
var DIGEN_API_URL = "https://makulu.online:3008";
var DIGEN_API_PASSWORD = "cookies";
var DIGEN_POLL_INTERVAL_MS = 5e3;
var DIGEN_POLL_TIMEOUT_MS = 3e5;
var ELECTRA_API_URL = "https://makulu.online:2006/api/ask";
var ELECTRA_MAX_RETRIES = 10;
var isInFallbackMode = false;
var fallbackModeEndTime = 0;
var FALLBACK_DURATION_MS = 5 * 60 * 1e3;
var primaryApiRequestQueue = Promise.resolve();
var lastPrimaryApiCallStartTime = 0;
var PRIMARY_API_INTERVAL_MS = 3e3;
var lastImageApiCallTime = 0;
var IMAGE_API_INTERVAL_MS = 5e3;
var _callPrimaryApiWithRetries = (prompt, log, onRequest, onResponse) => {
  const requestFn = async () => {
    let lastError = null;
    let truncatedPrompt = prompt;
    if (truncatedPrompt.length > MAX_PROMPT_LENGTH) {
      log?.(`[API Limiter] Prompt is too long (${truncatedPrompt.length} chars). Truncating to ${MAX_PROMPT_LENGTH} characters.`);
      truncatedPrompt = truncatedPrompt.substring(0, MAX_PROMPT_LENGTH);
    }
    let requestFired = false;
    const fireRequest = () => {
      if (!requestFired) {
        onRequest?.();
        requestFired = true;
      }
    };
    let responseFired = false;
    const fireResponse = () => {
      if (!responseFired) {
        onResponse?.();
        responseFired = true;
      }
    };
    fireRequest();
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      for (const model of MODELS) {
        try {
          log?.(`[API Request - Primary] Calling generation API with model: ${model} (Attempt ${attempt})...`);
          const fullUrl = `${POLLINATIONS_API_URL}${encodeURIComponent(truncatedPrompt)}${API_PARAMS}&model=${model}&seed=${Math.floor(Math.random() * 1e6)}`;
          const response = await fetch(fullUrl);
          if (!response.ok) {
            const errorBody = await response.text();
            log?.(`[API Error - Primary] Model ${model} failed with status ${response.status}: ${errorBody}`);
            throw new Error(`API request failed for model ${model} with status ${response.status}`);
          }
          fireResponse();
          const text = await response.text();
          log?.(`[API Response - Primary] Raw text from '${model}': ${text.substring(0, 200)}...`);
          const codeBlockRegex = /```(?:[a-zA-Z]+)?\s*([\s\S]*?)\s*```/;
          const match = text.match(codeBlockRegex);
          if (match && match[1]) {
            log?.(`[API Parser - Primary] Extracted content from code block.`);
            return match[1].trim();
          }
          try {
            const jsonResponse = JSON.parse(text);
            const responseText = jsonResponse.text || jsonResponse.completion;
            if (responseText && typeof responseText === "string") {
              log?.(`[API Parser - Primary] Extracted content from JSON response field.`);
              return responseText.trim();
            }
            if (typeof jsonResponse === "object" && jsonResponse !== null) {
              log?.(`[API Parser - Primary] Parsed raw text as JSON object, returning stringified version.`);
              return JSON.stringify(jsonResponse);
            }
          } catch (e) {
          }
          log?.(`[API Parser - Primary] No code block or known JSON structure found. Returning raw text as fallback.`);
          return text.trim();
        } catch (error) {
          lastError = error;
          log?.(`[API Error - Primary on model ${model}, attempt ${attempt}] ${lastError.message}`);
          console.error(`Error calling Pollinations AI API with model ${model} on attempt ${attempt}:`, error);
        }
      }
      if (attempt < MAX_ATTEMPTS) {
        log?.(`[API Retry - Primary] All models failed on attempt ${attempt}. Waiting ${RETRY_DELAY_MS / 1e3} seconds before retrying...`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      }
    }
    throw new Error(`All models failed after ${MAX_ATTEMPTS} attempts. Last error: ${lastError?.message || "Primary API call failed exhaustively."}`);
  };
  const queuedRequest = primaryApiRequestQueue.then(() => {
    const now = Date.now();
    const timeSinceLastStart = now - lastPrimaryApiCallStartTime;
    const delay = timeSinceLastStart < PRIMARY_API_INTERVAL_MS ? PRIMARY_API_INTERVAL_MS - timeSinceLastStart : 0;
    if (delay > 0) {
      log?.(`[API Rate Limiter] Delaying next primary API request for ${delay}ms to maintain 3s interval.`);
    }
    return new Promise((resolve) => setTimeout(resolve, delay));
  }).then(() => {
    lastPrimaryApiCallStartTime = Date.now();
    return requestFn();
  });
  primaryApiRequestQueue = queuedRequest.then(() => {
  }, () => {
  });
  return queuedRequest;
};
var _callFallbackApiWithRetries = async (prompt, log, onRequest, onResponse) => {
  let attempts = 0;
  while (attempts < ELECTRA_MAX_RETRIES) {
    attempts++;
    try {
      log?.(`[API Request - Fallback] Calling Electra API... (Attempt ${attempts}/${ELECTRA_MAX_RETRIES})`);
      onRequest?.();
      const response = await fetch(ELECTRA_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, mode: "informational" })
      });
      if (!response.ok) {
        const errorBody = await response.text();
        log?.(`[API Error - Fallback] Status ${response.status}: ${errorBody}`);
        throw new Error(`Fallback API request failed with status ${response.status}`);
      }
      onResponse?.();
      const data = await response.json();
      const text = data.response;
      if (typeof text !== "string") {
        log?.(`[API Error - Fallback] Invalid response format. Expected a string in the 'response' field.`);
        throw new Error("Invalid Fallback API response format.");
      }
      log?.(`[API Response - Fallback] Raw text: ${text.substring(0, 200)}...`);
      const codeBlockRegex = /```(?:[a-zA-Z]+)?\s*([\s\S]*?)\s*```/;
      const match = text.match(codeBlockRegex);
      if (match && match[1]) {
        log?.(`[API Parser - Fallback] Extracted content from code block.`);
        return match[1].trim();
      }
      log?.(`[API Parser - Fallback] No code block found. Returning raw text as fallback.`);
      return text.trim();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      log?.(`[API Error - Fallback on Attempt ${attempts}] ${errorMessage}`);
      console.error(`Error calling Fallback AI API on attempt ${attempts}:`, error);
      if (attempts >= ELECTRA_MAX_RETRIES) {
        throw new Error(`Fallback API failed after ${ELECTRA_MAX_RETRIES} attempts.`);
      }
      await new Promise((resolve) => setTimeout(resolve, 1e3 * Math.pow(2, attempts)));
    }
  }
  throw new Error(`Fallback API call failed exhaustively after ${ELECTRA_MAX_RETRIES} attempts.`);
};
var callApi = async (prompt, log, onRequest, onResponse, forceFallback = false) => {
  const now = Date.now();
  if (forceFallback) {
    log?.("[API Strategy] Fallback API forced due to audio file attachment. Using secondary API.");
    return await _callFallbackApiWithRetries(prompt, log, onRequest, onResponse);
  }
  if (isInFallbackMode && now > fallbackModeEndTime) {
    log?.("[API Strategy] Fallback duration expired. Attempting to switch back to primary API.");
    isInFallbackMode = false;
  }
  if (isInFallbackMode) {
    log?.("[API Strategy] In active fallback mode. Using secondary API.");
    try {
      const result = await _callFallbackApiWithRetries(prompt, log, onRequest, onResponse);
      return result;
    } catch (fallbackError) {
      log?.("[API Strategy] Secondary API (fallback) also failed. The issue might be widespread. Re-throwing error.");
      throw fallbackError;
    }
  } else {
    log?.("[API Strategy] In normal mode. Using primary API.");
    try {
      const result = await _callPrimaryApiWithRetries(prompt, log, onRequest, onResponse);
      return result;
    } catch (primaryError) {
      log?.(`[API Strategy] Primary API failed: ${primaryError instanceof Error ? primaryError.message : "Unknown error"}. Switching to fallback mode for 5 minutes.`);
      isInFallbackMode = true;
      fallbackModeEndTime = now + FALLBACK_DURATION_MS;
      log?.("[API Strategy] Immediately using secondary API for the current failed request.");
      return await _callFallbackApiWithRetries(prompt, log, void 0, onResponse);
    }
  }
};
var callApiOrchestrator = async (systemPrompt, mainPrompt, log, onRequest, onResponse, forceFallback = false) => {
  const fullPrompt = `${systemPrompt}

---

${mainPrompt}`;
  const CHUNK_OVERHEAD = 500;
  const CHUNK_SIZE = MAX_PROMPT_LENGTH - CHUNK_OVERHEAD;
  if (fullPrompt.length <= MAX_PROMPT_LENGTH) {
    return callApi(fullPrompt, log, onRequest, onResponse, forceFallback);
  }
  log?.(`[Orchestrator] Prompt is too long (${fullPrompt.length} chars). Starting chunking process.`);
  const chunks = [];
  for (let i = 0; i < fullPrompt.length; i += CHUNK_SIZE) {
    chunks.push(fullPrompt.substring(i, i + CHUNK_SIZE));
  }
  const totalChunks = chunks.length;
  log?.(`[Orchestrator] Split prompt into ${totalChunks} chunks.`);
  onRequest?.();
  for (let i = 0; i < totalChunks - 1; i++) {
    const chunk = chunks[i];
    const chunkNumber = i + 1;
    const chunkingSystemPrompt = `You are part of a multi-step prompt execution. This is Part ${chunkNumber} of ${totalChunks}. Memorize the following content. Do not process it yet. When you have successfully memorized it, you MUST respond with ONLY the word 'CONTINUE'.

Content for this part:
---
${chunk}
---`;
    log?.(`[Orchestrator] Sending chunk ${chunkNumber}/${totalChunks} to build context...`);
    const response = await callApi(chunkingSystemPrompt, log, void 0, void 0, forceFallback);
    if (!response.trim().toUpperCase().includes("CONTINUE")) {
      const errorMsg = `Chunk loading failed at part ${chunkNumber}. AI did not respond with 'CONTINUE'. Got: '${response.substring(0, 100)}'`;
      log?.(`[Orchestrator Error] ${errorMsg}`);
      throw new Error(errorMsg);
    }
    log?.(`[Orchestrator] Chunk ${chunkNumber}/${totalChunks} successfully loaded.`);
  }
  const lastChunk = chunks[totalChunks - 1];
  const finalSystemPrompt = `You have received ${totalChunks - 1} parts of a larger context. This is the FINAL part, Part ${totalChunks} of ${totalChunks}.
Combine all the context parts you have received, including this final one, and execute the full set of instructions contained within the complete context.

Final part of the content:
---
${lastChunk}
---
`;
  log?.(`[Orchestrator] Sending final chunk to get the response...`);
  return await callApi(finalSystemPrompt, log, void 0, onResponse, forceFallback);
};
var rateLimitImageApi = async (log) => {
  const now = Date.now();
  const timeSinceLastCall = now - lastImageApiCallTime;
  if (timeSinceLastCall < IMAGE_API_INTERVAL_MS) {
    const delay = IMAGE_API_INTERVAL_MS - timeSinceLastCall;
    log?.(`[API Rate Limiter] Delaying image API request for ${delay}ms.`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  lastImageApiCallTime = Date.now();
};
var IMAGE_API_CONFIG = {
  baseUrl: "https://image.pollinations.ai/prompt/",
  defaultParams: {
    model: "flux",
    width: 1024,
    height: 576,
    nologo: "true",
    nofeed: "true",
    private: "true",
    enhance: "false"
  }
};
var generateImageUrl = (params) => {
  const encodedPrompt = encodeURIComponent(params.prompt);
  const queryParams = {
    ...IMAGE_API_CONFIG.defaultParams,
    model: params.model || IMAGE_API_CONFIG.defaultParams.model,
    width: String(params.width || IMAGE_API_CONFIG.defaultParams.width),
    height: String(params.height || IMAGE_API_CONFIG.defaultParams.height),
    seed: String(params.seed || Math.floor(Math.random() * 1e6))
  };
  const queryString = new URLSearchParams(queryParams).toString();
  return `${IMAGE_API_CONFIG.baseUrl}${encodedPrompt}?${queryString}&token=sUch0nfoGzRCfw9L`;
};
var generateProjectName = async (prompt, log, onRequest, onResponse) => {
  const systemPrompt = `You are a creative assistant. Your task is to generate a short, descriptive project name based on a user's prompt.
The name should be between 2 and 5 words. It should be catchy and relevant to the project description.

Important Rules:
- ONLY return the project name.
- Do NOT add any commentary, explanations, or markdown formatting.
- Do NOT use quotes around the name.

Example:
User Prompt: "A simple to-do list application with a calendar view"
Your Output: TaskMaster Calendar`;
  const mainPrompt = `User's Prompt: "${prompt}"`;
  try {
    const name = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    return name.replace(/["']/g, "").trim();
  } catch (error) {
    log?.(`[Project Namer Error] Failed to generate project name: ${error instanceof Error ? error.message : "Unknown error"}`);
    console.error("Error generating project name:", error);
    return "AI Generated Project";
  }
};
var determineComplexityAndPlan = async (prompt, language, log, onRequest, onResponse, attachedFileContent) => {
  const systemPrompt = `You are a "Scaffolding Agent". Your task is to analyze a user's request for a code project and determine its complexity. Your entire response MUST be a valid JSON object inside a single markdown code block.

A request is "complex" if it clearly requires multiple, distinct components, such as:
- A frontend and a backend API.
- A database.
- User authentication.
- Multiple pages or views with different functionalities.
- A full-stack application.

A request is "simple" if it can be implemented in a few files within a single component/directory, such as:
- A single HTML page with CSS and JS.
- A single, self-contained React/Vue/Svelte component.
- A basic script.
- A static website or landing page.

RESPONSE FORMAT:

1.  If the request is COMPLEX, your response MUST have this exact structure:
    \`\`\`json
    {
      "complexity": "complex"
    }
    \`\`\`

2.  If the request is SIMPLE, you MUST bypass high-level architecture and directly generate a minimal file plan. Your response MUST have this exact structure:
    \`\`\`json
    {
      "complexity": "simple",
      "plan": [
        {
          "path": "index.html",
          "description": "The main HTML structure for the web page.",
          "dependencies": [],
          "type": "general"
        }
      ]
    }
    \`\`\`
    The "plan" must be an array of file plan objects, each with "path", "description", "dependencies", and "type".
    The plan should be minimal and follow best practices for the requested language.
`;
  const mainPrompt = `
**User Request:** "Build a ${language} application: ${prompt}"
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your plan.
${attachedFileContent}
---
` : ""}
Analyze this request and respond with the appropriate JSON object based on its complexity.`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    if (result.complexity === "simple" && Array.isArray(result.plan)) {
      log?.(`[Scaffolder] Simple project detected. Generated plan with ${result.plan.length} files.`);
      return result;
    } else if (result.complexity === "complex") {
      log?.(`[Scaffolder] Complex project detected. Handing off to Architect.`);
      return result;
    }
    throw new Error("Invalid JSON structure from Scaffolding Agent.");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown parsing error";
    log?.(`[Scaffolder Error] Failed to parse JSON response: ${errorMessage}`);
    throw new Error("Scaffolding Agent failed to analyze the project.");
  }
};
var planProjectEpics = async (prompt, language, log, onRequest, onResponse, attachedFileContent) => {
  const blueprintOptions = blueprints.map((b) => `- ${b.id}: ${b.description}`).join("\n");
  const systemPrompt = `You are a master software architect. Your task is to break down a user request into a hierarchical plan of "epics" and "features" and select a suitable boilerplate "blueprint" and "stateManagement" strategy for each epic.

The output must be ONLY a valid JSON object with a single key "epics", which is an array of objects.

Each "epic" object must have FIVE keys:
1. "name": A short, descriptive name for the epic (e.g., "frontend", "backend"). **MUST be a single, URL-safe word.**
2. "description": A concise, single-sentence explanation of what this epic will accomplish.
3. "blueprintId": A string. You MUST choose the most appropriate ID from the "Available Blueprints" list below. If no blueprint is a good fit, use "null".
4. "features": An array of "feature" objects that make up the epic.
5. "stateManagement": A string. For frontend epics (React, Vue, etc.), analyze the project complexity. If the app is complex and requires shared state (e.g., user authentication, shopping cart), choose an appropriate state management strategy: "context-api" for simple cases, or "zustand" or "redux" for more complex apps. If state management is not needed or the epic is not a frontend, use "none".

CRITICAL LOGIC:
- **THEMATIC LOCK:** You MUST ensure the generated names and descriptions are directly related to the overall project goal: "${prompt}". Do not generate generic content like "Web Development Services" if the user asks for an "electrician company".
- **PRIORITIZE SIMPLICITY & MINIMALISM:** This is the most important rule. For simple requests like a landing page, you MUST create exactly one epic with a maximum of two well-defined, distinct features (e.g., "HTML_Structure" and "Styling"). Do not create redundant features. Violation of this rule will result in failure.
- **UNIQUENESS:** Feature names within an epic MUST be unique.
- Epics must be in a logical build order.
- Features within an epic must also be in a logical build order.
- You MUST select a blueprint that is appropriate for the requested language: "${language}". For example, do not choose a React blueprint for a simple HTML request. If no blueprint is a good fit, you MUST use "null".

Your entire response MUST be enclosed in a single markdown JSON code block.`;
  const mainPrompt = `
**Available Blueprints:**
${blueprintOptions}
---
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your plan. Base your plan on this content if the prompt asks for it.
${attachedFileContent}
---
` : ""}
Example for "Build a full-stack e-commerce site":
\`\`\`json
{
  "epics": [
    {
      "name": "backend",
      "description": "Create the Node.js Express server, API endpoints for products and users, and define the database structure.",
      "blueprintId": "node-express-api",
      "features": [
        { "name": "API_Server_Foundation", "description": "Set up the basic Express server and routing." },
        { "name": "Product_API_Endpoints", "description": "Create CRUD API endpoints for products." }
      ],
      "stateManagement": "none"
    },
    {
      "name": "frontend",
      "description": "Build the React user interface to browse products, manage the cart, and checkout.",
      "blueprintId": "vite-react-ts",
      "features": [
        { "name": "Product_List_View", "description": "Create a component to display a list of all products." },
        { "name": "Shopping_Cart", "description": "Create components and logic to manage the user's shopping cart." }
      ],
      "stateManagement": "zustand"
    }
  ]
}
\`\`\`

User Request: "Build a ${language} application: ${prompt}"`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    if (!result.epics || !Array.isArray(result.epics)) {
      throw new Error("Invalid JSON structure: 'epics' array not found.");
    }
    result.epics.forEach((epic) => {
      if (!epic.features || !Array.isArray(epic.features)) {
        throw new Error(`Invalid epic structure: 'features' array not found in epic "${epic.name}".`);
      }
    });
    log?.(`[Architect] Parsed project epics and features: ${JSON.stringify(result.epics, null, 2)}`);
    return result.epics;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown parsing error";
    log?.(`[Architect Error] Failed to parse JSON response: ${errorMessage}`);
    throw new Error("Failed to generate project epics. The AI model might be unavailable or the response was not valid JSON.");
  }
};
var planProjectStructure = async (prompt, language, currentFeature, currentEpic, completedEpicsContext, existingFilesContext, log, onRequest, onResponse) => {
  const systemPrompt = `You are an expert software architect. Your task is to create a detailed file plan for a specific feature.

The output must be ONLY a valid JSON object with a single key "files", which is an array of objects.

Each object must have four keys:
1. "path": The full file path (e.g., "src/components/Button.tsx").
2. "description": A detailed, single-sentence description of the file's purpose and key functionality.
3. "dependencies": An array of strings, listing the 'path' of other files in THIS CURRENT PLAN that this file directly depends on. An empty array [] means no dependencies within this feature.
4. "type": A classification of the file's purpose. Must be one of: 'database', 'api', 'theme', 'general'.

CRITICAL LOGIC:
- **THEMATIC LOCK:** The planned file paths and descriptions MUST be directly related to the overall project goal: "${prompt}".
- **CRITICAL: MINIMALIST FILE STRUCTURE:** This is the most important rule. You MUST create the absolute minimum number of files required to implement the feature. It is much better to have fewer, larger files than many small, modular files. Combine functionality into a single file where possible (e.g., for a React component, include styles and types directly in the component file instead of separate files). This principle is vital to reduce generation time and complexity.
- The file list must be in a logical generation order.
- **DO NOT** re-plan any files that have already been created from a boilerplate blueprint.
- Only plan the **NEW** files or modifications needed to implement the feature on top of the existing structure.
- If a state management strategy ("${currentEpic.stateManagement || "none"}") is specified for this epic, your file plan MUST include all necessary files to implement it (e.g., context providers, stores, actions, reducers).

Your entire response MUST be enclosed in a single markdown JSON code block.`;
  const mainPrompt = `
---
**PROJECT CONTEXT**
- Overall User Request: "${prompt}"
- Current Epic: "${currentEpic.name}" - ${currentEpic.description}
- **Epic's State Management Strategy:** ${currentEpic.stateManagement || "none"}
- Current Feature to Plan: "${currentFeature.name}"
- Feature Description: "${currentFeature.description}"
- **Existing Files (from blueprint):** ${existingFilesContext || "None"}
---
${completedEpicsContext ? `
**COMPLETED EPICS CONTEXT (Technical Summaries & API Contracts):**
The following components have already been built. You MUST ensure your plan for the current feature integrates correctly with the existing code.
- **Pay close attention to any provided "API Contract" JSON.** Use it to understand available endpoints for frontend components.
---
${completedEpicsContext}
---
` : ""}
Language: ${language}.
Based on all the provided context, generate the file plan for the "${currentFeature.name}" feature.`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    log?.(`[Planner] Parsed file plan for feature "${currentFeature.name}": ${JSON.stringify(result.files, null, 2)}`);
    return result.files.map((file) => ({ ...file, type: file.type || "general" }));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown parsing error";
    log?.(`[Planner Error] Failed to parse JSON response for feature "${currentFeature.name}": ${errorMessage}`);
    console.error("Error planning project structure:", error);
    throw new Error(`Failed to generate project plan for feature "${currentFeature.name}".`);
  }
};
var generateFileContent = async (originalPrompt, language, filePath, fileDescription, log, onRequest, onResponse, dependencyContext, correctionFeedback, testContext) => {
  let languageExpert = "web developer specializing in HTML, CSS, and JavaScript";
  switch (language) {
    case "react":
      languageExpert = "React developer specializing in TypeScript and Tailwind CSS";
      break;
    case "python":
      languageExpert = "Python developer";
      break;
    case "go":
      languageExpert = "Go developer";
      break;
    case "cpp":
      languageExpert = "C++ developer";
      break;
    case "node":
      languageExpert = "Node.js developer specializing in Express";
      break;
    case "java":
      languageExpert = "Java developer";
      break;
    case "csharp":
      languageExpert = "C# .NET developer";
      break;
    case "php":
      languageExpert = "PHP developer";
      break;
    case "ruby":
      languageExpert = "Ruby developer";
      break;
    case "rust":
      languageExpert = "Rust developer";
      break;
    case "swift":
      languageExpert = "Swift developer";
      break;
    case "vue":
      languageExpert = "Vue.js developer";
      break;
    case "svelte":
      languageExpert = "Svelte developer";
      break;
    case "typescript_node":
      languageExpert = "TypeScript developer specializing in Node.js";
      break;
    case "bash":
      languageExpert = "Linux systems administrator and Bash scripter";
      break;
    case "freebasic":
      languageExpert = "FreeBASIC programmer";
      break;
    case "angular":
      languageExpert = "Angular developer specializing in TypeScript";
      break;
    case "dart":
      languageExpert = "Dart developer specializing in Flutter for cross-platform apps";
      break;
    case "kotlin":
      languageExpert = "Kotlin developer specializing in native Android development";
      break;
    case "sql":
      languageExpert = "SQL database administrator";
      break;
    case "terraform":
      languageExpert = "DevOps engineer specializing in Terraform (HCL)";
      break;
  }
  let languageRules = "";
  switch (language) {
    case "html":
      languageRules = `- For index.html, it must link to style.css and script.js.
- For style.css, write clean, modern CSS.
- For script.js, write standard JavaScript code to add interactivity. It must correctly reference element IDs and classes defined in the dependency context of index.html.
- If you need images, generate placeholder images using the URL format: \`https://image.pollinations.ai/prompt/[URL-encoded description]?nologo=true\` (e.g., \`<img src="https://image.pollinations.ai/prompt/a%20photo%20of%20a%20product?nologo=true" />\`). Make the image descriptions relevant to the application's purpose.`;
      break;
    case "python":
      languageRules = `- If you use any external packages, make sure they are listed in the description for a requirements.txt file.
- For an empty requirements.txt, the file should either be completely empty or contain only comments.`;
      break;
    case "bash":
      languageRules = `- The script MUST start with a shebang, e.g., \`#!/bin/bash\`.
- The script should be executable (though you can't set permissions, write the code as if it will be).
- Use modern bash scripting practices (e.g., use \`[[ ... ]]\` instead of \`[ ... ]\`).`;
      break;
    case "freebasic":
      languageRules = `- Write code compatible with the FreeBASIC compiler (fbc).
- Use standard FreeBASIC syntax.`;
      break;
    case "java":
      languageRules = `- The main class and file name must match. For 'Main.java', the class must be 'public class Main'.
- It must contain a 'public static void main(String[] args)' method.`;
      break;
    case "csharp":
      languageRules = `- Use modern C# syntax (e.g., top-level statements are acceptable for Program.cs).
- For a .csproj file, provide a minimal but valid XML structure for a .NET console application.`;
      break;
    case "php":
      languageRules = `- The file must start with \`<?php\`.`;
      break;
    case "rust":
      languageRules = `- For 'Cargo.toml', provide a valid TOML structure with [package] and [dependencies] sections.
- For 'src/main.rs', it must contain a \`fn main()\` function.`;
      break;
    case "typescript_node":
      languageRules = `- For 'package.json', provide valid JSON with name, version, and devDependencies for typescript, ts-node, and @types/node.
- For 'tsconfig.json', provide a standard configuration for a Node.js project.`;
      break;
    case "vue":
      languageRules = `- For '.vue' files, use the standard Single-File Component structure (<template>, <script>, <style>).
- Use Vue 3 Composition API for <script setup>.
- If you need images, generate placeholder images using the URL format: \`https://image.pollinations.ai/prompt/[URL-encoded description]?nologo=true\`.`;
      break;
    case "svelte":
      languageRules = `- For '.svelte' files, use the standard Svelte component structure (<script>, HTML, <style>).
- If you need images, generate placeholder images using the URL format: \`https://image.pollinations.ai/prompt/[URL-encoded description]?nologo=true\`.`;
      break;
    case "angular":
      languageRules = `- For '.ts' files, use modern Angular syntax and TypeScript. For '.html' files, use Angular template syntax. For '.css' files, write standard CSS.`;
      break;
    case "dart":
      languageRules = `- Write Dart code compatible with the Flutter framework for building user interfaces.`;
      break;
    case "kotlin":
      languageRules = `- Write modern Kotlin code for Android development. Ensure class names match file names for files containing classes.`;
      break;
    case "sql":
      languageRules = `- The file MUST contain valid SQL for creating schemas or querying data. Specify dialect if known, otherwise use standard SQL. The file should end in '.sql'.`;
      break;
    case "terraform":
      languageRules = `- The file MUST contain valid HashiCorp Configuration Language (HCL) for Terraform. The file should end in '.tf'.`;
      break;
    default:
      languageRules = `- Be mindful of the overall project structure. If you are writing JavaScript, ensure it correctly references HTML element IDs and classes that are described in the plan for the HTML files. If you are writing HTML, ensure it has the elements that the JavaScript file will need.`;
  }
  const systemPrompt = `You are an expert ${languageExpert}. Your SOLE purpose is to generate a complete, raw code file OR a refactor request OR a clarification question.

**CRITICAL RESPONSE RULES:**

**Rule 1: If you can write the code successfully...**
- Your entire response MUST be enclosed in a single markdown code block for the language.
- Do NOT add any text outside the code block.

**Rule 2: If you CANNOT write the code because a dependency file is MISSING something or is INCORRECT...**
- DO NOT GUESS or write broken code.
- Instead, your ENTIRE response MUST be a valid JSON object inside a markdown JSON code block.
- The JSON object must have this EXACT structure:
  \`\`\`json
  {
    "refactorRequest": {
      "filePath": "path/to/dependency/to/change.js",
      "changeDescription": "A clear, concise description of the change needed. For example: 'Add a new export function named 'getUser(id)' that takes an id and returns a user object.'"
    }
  }
  \`\`\`
- The "filePath" MUST be one of the files from the dependency context.
- The "changeDescription" must be a specific instruction for another AI agent.

**Rule 3: If the request is AMBIGUOUS and you need more information to proceed...**
- DO NOT GUESS.
- Your ENTIRE response MUST be a valid JSON object inside a markdown JSON code block.
- The JSON object must have this EXACT structure:
  \`\`\`json
  {
    "clarificationNeeded": "Your specific question for the user. For example: 'What should the button label be and what should happen when it is clicked?'"
  }
  \`\`\`

---
**Language-Specific Rules:**
${languageRules}
---`;
  const mainPrompt = `
**Primary Task:**
Your primary task is to generate the full and complete code for the file: "${filePath}".
This file's purpose is: "${fileDescription}".
You MUST ensure the generated code's content, text, and any placeholder images are directly related to the overall project goal, which is: "${originalPrompt}".
${testContext ? `
---
**TEST-DRIVEN DEVELOPMENT CONTEXT:**
A QA Engineer has already written the following test file: "${testContext.path}".
Your primary goal is to write the code for "${filePath}" that makes all of these tests pass.

**Test File Content:**
\`\`\`
${testContext.content}
\`\`\`
---
` : ""}
---
**Context (If Available):**
${dependencyContext ? `Here is the code of its dependencies and any relevant API Contracts. Use this to ensure your code integrates correctly (e.g., call the correct API endpoints):
${dependencyContext}` : "No dependency code provided."}
${correctionFeedback ? `PREVIOUS ATTEMPTS FAILED OR USER PROVIDED CLARIFICATION. You MUST address this feedback:
${correctionFeedback}` : ""}
---
Now, generate either the complete code for "${filePath}", a refactor request, or a clarification question.`;
  const responseText = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  try {
    const potentialJson = JSON.parse(responseText);
    if (potentialJson.refactorRequest && potentialJson.refactorRequest.filePath && potentialJson.refactorRequest.changeDescription) {
      log?.(`[Coder] Identified a refactor request for: ${potentialJson.refactorRequest.filePath}`);
      return { type: "refactor", request: potentialJson.refactorRequest };
    }
    if (potentialJson.clarificationNeeded && typeof potentialJson.clarificationNeeded === "string") {
      log?.(`[Coder] Identified a need for clarification: ${potentialJson.clarificationNeeded}`);
      return { type: "clarification", question: `[CLARIFICATION NEEDED] ${potentialJson.clarificationNeeded}` };
    }
  } catch (e) {
  }
  return { type: "code", content: responseText };
};
var runDevOpsChecks = async (originalPrompt, language, filePath, fileDescription, code, dependencyContext, testContext, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "DevOps Agent" simulating a CI/CD pipeline. Your task is to analyze a code file for any obvious errors.

Your analysis MUST check for:
1.  **Syntax Errors:** Is the code valid for the language (${language})?
2.  **Missing Imports/Dependencies:** Does the code use variables, functions, or modules that are not defined or imported? (You can infer from the dependency context).
3.  **Correctness:** Does the code correctly implement the requirements described in the file description?
4.  **Integration:** Does the code correctly interact with the provided dependency context (e.g., calling functions with the right arguments, using correct component props)?
5.  **(If a test file is provided) Test Fulfillment:** Does the code seem to correctly implement the logic required to make the tests pass?

**CRITICAL RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.

- If ALL checks pass, respond with:
  \`\`\`json
  { "success": true }
  \`\`\`

- If ANY check fails, respond with:
  \`\`\`json
  {
    "success": false,
    "feedback": "A single, concise sentence explaining the MOST CRITICAL error found."
  }
  \`\`\`
  The feedback must be specific and actionable for a debugger agent. For example: "The 'Button' component is used but not imported from './components/Button'." or "The 'calculateTotal' function is missing a return statement."`;
  const mainPrompt = `
**Language:** ${language}
**File Path:** ${filePath}
**File Description:** ${fileDescription}
**Overall Project Goal:** "${originalPrompt}"
---
${testContext ? `
**Test File to Satisfy (${testContext.path}):**
\`\`\`
${testContext.content}
\`\`\`
---
` : ""}
**Dependency Context:**
${dependencyContext || "No dependencies."}
---
**Code to Verify:**
\`\`\`
${code}
\`\`\`
---
Analyze the code and respond with the JSON object.`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    return {
      success: result.success,
      feedback: result.success ? "" : result.feedback || "No feedback provided."
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown parsing error";
    log?.(`[DevOps Error] Failed to parse JSON response: ${errorMessage}`);
    return {
      success: false,
      feedback: "The DevOps agent failed to return a valid JSON response."
    };
  }
};
var improveFileAesthetics = async (originalPrompt, language, filePath, code, log, onRequest, onResponse) => {
  const systemPrompt = `You are an "Aesthetics Agent" and an expert ${language} developer with a keen eye for UI/UX design and code readability.
Your task is to take a piece of code and subtly improve its aesthetics without changing its core functionality.

Improvements can include:
- **Styling (for UI code):** Adding tasteful padding, margins, better color choices, font sizes, etc., using Tailwind CSS classes where appropriate. The styling MUST be directly relevant to the project goal: "${originalPrompt}".
- **Formatting:** Ensuring consistent indentation and code style.
- **Comments:** Adding clarifying comments where necessary.
- **Variable Names:** Making variable and function names more descriptive.

**CRITICAL RULES:**
1.  You MUST NOT add new functionality.
2.  You MUST NOT remove existing functionality.
3.  Your response MUST ONLY be the complete, improved code inside a single markdown code block.
4.  Do NOT add any explanation or commentary.
5.  If the code is already perfect and needs no improvement, return the original code.`;
  const mainPrompt = `
**Language:** ${language}
**File Path:** ${filePath}
**Original Code:**
\`\`\`
${code}
\`\`\`
Improve the aesthetics of this code and return the complete file.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[Aesthetics Agent Error] Failed to improve aesthetics for ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}. Returning original code.`);
    return code;
  }
};
var improveFileLayout = async (originalPrompt, language, filePath, code, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Layout Agent," an expert frontend developer specializing in responsive design and component structure.
Your task is to refactor the given UI code to improve its layout, structure, and responsiveness without changing its core functionality or visual style.

Improvements can include:
- **Structural HTML:** Replacing \`div\`s with more semantic tags (\`nav\`, \`main\`, \`section\`, etc.).
- **Responsiveness:** Adding or adjusting Tailwind CSS classes (like \`md:\`, \`lg:\`) to ensure the layout works well on all screen sizes.
- **Component Organization:** Restructuring the component's internal layout for better clarity and maintainability (e.g., using Flexbox or Grid appropriately).

**CRITICAL RULES:**
1.  You MUST NOT add new functionality.
2.  You MUST NOT significantly change the existing color scheme, fonts, or overall visual theme.
3.  Your response MUST ONLY be the complete, improved code inside a single markdown code block.
4.  Do NOT add any explanation or commentary.
5.  If the layout is already perfect, return the original code.`;
  const mainPrompt = `
**Language:** ${language}
**File Path:** ${filePath}
**Original Code:**
\`\`\`
${code}
\`\`\`
Improve the layout and responsiveness of this code and return the complete file.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[Layout Agent Error] Failed to improve layout for ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}. Returning original code.`);
    return code;
  }
};
var performQualityAssurance = async (originalPrompt, language, filePath, code, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "QA Agent" and a senior ${language} developer.
Your task is to perform a final quality assurance check on a given code file. You are looking for subtle bugs, logical errors, or edge cases that might have been missed.

If you find an issue, you must fix it directly in the code.

**CRITICAL RULES:**
1.  Your focus is on correctness and robustness. Do not make stylistic changes.
2.  You MUST NOT add new functionality.
3.  Your response MUST ONLY be the complete, corrected code inside a single markdown code block.
4.  Do NOT add any explanation or commentary.
5.  If the code is perfect and has no issues, return the original code.`;
  const mainPrompt = `
**Language:** ${language}
**File Path:** ${filePath}
**Original Code:**
\`\`\`
${code}
\`\`\`
Review this code for any subtle bugs or logical errors. If you find any, fix them. Return the complete, corrected file.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[QA Agent Error] Failed to run QA check for ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}. Returning original code.`);
    return code;
  }
};
var finalProjectReview = async (prompt, plannedFiles, generationLogSummary, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Project CTO" AI. Your role is to provide a final, high-level summary of a project generation task.
Your summary should be encouraging and concise.

Based on the user's prompt, the file plan, and a summary of the generation logs, you will provide a final verdict.
- If the logs indicate success, your message should be positive and confirm completion.
- If the logs indicate failures, your message should clearly state that there were issues but offer a path forward (e.g., "attempt to fix").`;
  const mainPrompt = `
**Original User Prompt:** "${prompt}"

**Final File Plan:**
${plannedFiles.map((f) => `- ${f.path}: ${f.description}`).join("\n")}

**Generation Log Summary:**
${generationLogSummary}

---
Based on all this information, write a brief, user-friendly message to the user summarizing the outcome of the project generation.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var createFollowUpPrompt = async (followUpPrompt, filePath, fileContent, chatHistory, originalPrompt, projectPlan, log, onRequest, onResponse, attachedFileContent) => {
  const systemPrompt = `You are a "Lead Developer" agent. Your task is to interpret a user's follow-up request and create a new, precise instruction for a subordinate "Coder" agent.

You will be given:
1. The user's original high-level project goal.
2. The user's new follow-up request.
3. The full content of the file to be modified.
4. The chat history for context.
5. The original file plan for the whole project.
6. (Optional) Content from a file the user just attached.

Your job is to synthesize all of this information into a single, actionable instruction that describes the desired change for the specified file.

**CRITICAL RULES:**
- Your response MUST be ONLY the new instruction for the Coder agent.
- Do NOT add any commentary or explanation.
- The instruction should be a single, detailed sentence.`;
  const mainPrompt = `
**Original Project Goal:** "${originalPrompt}"
**Project File Plan:**
${projectPlan.map((f) => `- ${f.path}: ${f.description}`).join("\n")}

**Chat History:**
${chatHistory.map((m) => `${m.role}: ${m.content}`).join("\n")}

**File to Modify:** ${filePath}
**Current Content of ${filePath}:**
\`\`\`
${fileContent}
\`\`\`
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your instruction.
${attachedFileContent}
---
` : ""}
**User's New Follow-up Request:** "${followUpPrompt}"

---
Based on all the above, generate the precise instruction for the Coder agent.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var summarizeEpic = async (epic, epicFileContent, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Summarizer Agent". Your job is to create a technical summary of a completed software "epic" and, if applicable, a formal API contract.

You will receive the epic's name, description, and the full code of all files generated for it.

**RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.
The JSON object MUST have two keys:
1.  \`summary\`: A string containing a concise, technical summary (2-3 sentences) of the epic's functionality. It should describe what the code *does*.
2.  \`apiContract\`: If the epic is a backend API (e.g., Node.js/Express, Python/Flask), this MUST be a JSON string representing the API's contract. If it's not a backend API, this MUST be \`null\`.

**API Contract Rules:**
- The contract must be a JSON string.
- The top-level keys should be the main routes (e.g., \`/api/users\`, \`/api/products\`).
- Each route should have keys for the HTTP methods (\`GET\`, \`POST\`, etc.).
- Each method should describe its purpose and the expected request body/response format.

**Example for a backend epic:**
\`\`\`json
{
  "summary": "This epic implements a Node.js Express server with two main API routes. The /api/products route provides GET and POST methods for retrieving and creating products, while the /api/auth route handles user registration via a POST request.",
  "apiContract": "{\\"/api/products\\":{\\"GET\\":{\\"description\\":\\"Retrieves a list of all products.\\",\\"response\\":[{\\"id\\":\\"string\\",\\"name\\":\\"string\\",\\"price\\":\\"number\\"}]},\\"POST\\":{\\"description\\":\\"Creates a new product.\\",\\"body\\":{\\"name\\":\\"string\\",\\"price\\":\\"number\\"},\\"response\\":{\\"id\\":\\"string\\",\\"name\\":\\"string\\",\\"price\\":\\"number\\"}}},\\"/api/auth/register\\":{\\"POST\\":{\\"description\\":\\"Registers a new user.\\",\\"body\\":{\\"username\\":\\"string\\",\\"password\\":\\"string\\"},\\"response\\":{\\"success\\":\\"boolean\\",\\"userId\\":\\"string\\"}}}}"
}
\`\`\`

**Example for a frontend epic:**
\`\`\`json
{
  "summary": "This epic creates the foundational React application using Vite and TypeScript. It includes a main App component and basic Tailwind CSS setup for styling.",
  "apiContract": null
}
\`\`\`
`;
  const mainPrompt = `
**Epic Name:** ${epic.name}
**Epic Description:** ${epic.description}
---
**Full Code for Epic:**
${epicFileContent}
---
Generate the JSON response.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  const result = JSON.parse(jsonString);
  return {
    summary: result.summary,
    apiContract: result.apiContract
  };
};
var refactorFileContent = async (request, originalContent, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Refactor Agent". You are a hyper-intelligent but extremely literal AI that only follows instructions precisely.
Your task is to take a file's content and a specific change description, and apply that change to the code.

**CRITICAL RULES:**
1. You MUST apply the requested change and nothing more.
2. Do NOT add any new functionality or make other unrelated improvements.
3. Your response MUST ONLY be the complete, refactored code inside a single markdown code block.
4. Do NOT add any explanation or commentary.
`;
  const mainPrompt = `
**File to Refactor:** ${request.filePath}
**Change to Implement:** "${request.changeDescription}"
---
**Original File Content:**
\`\`\`
${originalContent}
\`\`\`
---
Now, apply the change and return the complete, updated file content.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var debugAndProposeFix = async (originalPrompt, filePlan, code, feedback, dependencyContext, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Debugger Agent", a senior software engineer specializing in root cause analysis.
Your task is to analyze a failed code generation attempt and propose a precise, surgical fix.

You will be given:
- The original goal for the file.
- The code that was generated.
- The error or feedback from a verification step (e.g., a linter or a test runner).
- The context of dependency files.

Your job is to determine the single, most likely cause of the failure and create a "RefactorRequest" to fix it. The fix might be in the generated file itself OR in one of its dependencies.

**RESPONSE FORMAT:**
Your ENTIRE response MUST be a valid JSON object inside a markdown JSON code block.
The JSON object must have this EXACT structure:
\`\`\`json
{
  "filePath": "path/to/file/to/change.js",
  "changeDescription": "A clear, concise description of the change needed. For example: 'Add 'export' before the 'calculateTotal' function definition.' OR 'In the Button component, add a new prop named 'onClick' of type function.'"
}
\`\`\`

**CRITICAL LOGIC:**
- Your proposed fix should be as small and targeted as possible.
- If the error is in the generated code, \`filePath\` should be the path of the generated code.
- If the error is because a dependency is missing something, \`filePath\` should be the path of the dependency file.`;
  const mainPrompt = `
**Overall Project Goal:** "${originalPrompt}"
---
**File Generation Context:**
- **File Path:** ${filePlan.path}
- **Description:** ${filePlan.description}
---
**Generated Code (that failed verification):**
\`\`\`
${code}
\`\`\`
---
**Verification Failure Feedback / Error Message:**
${feedback}
---
**Dependency Context:**
${dependencyContext || "No dependencies provided."}
---
Analyze the failure and produce the JSON RefactorRequest to fix the root cause.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  return JSON.parse(jsonString);
};
var generateTddTestFile = async (originalPrompt, language, filePlan, log, onRequest, onResponse) => {
  const languageSupport = {
    "react": { extension: "test.tsx", framework: "Vitest/React Testing Library" },
    "node": { extension: "test.js", framework: "Jest" },
    "typescript_node": { extension: "test.ts", framework: "Jest with ts-jest" }
  };
  if (!Object.keys(languageSupport).includes(language)) {
    log(`[QA-Engineer] TDD is not currently supported for language: ${language}. Skipping test generation.`);
    return null;
  }
  const { extension, framework } = languageSupport[language];
  const testFilePath = filePlan.path.replace(/\.(tsx|ts|js)$/, `.${extension}`);
  const systemPrompt = `You are a "QA Engineer" agent specializing in Test-Driven Development (TDD) using ${framework}.
Your task is to write a set of tests for a given file *before* its code is written.

**CRITICAL RULES:**
1.  The tests should cover the key requirements mentioned in the file description.
2.  You should write at least one test that is expected to **fail** initially, which the Coder agent will then need to make pass.
3.  Your response MUST ONLY be the complete, raw code for the test file, enclosed in a single markdown code block.
4.  Do NOT add any explanation or commentary.`;
  const mainPrompt = `
**Overall Project Goal:** "${originalPrompt}"
**Language/Framework:** ${language} / ${framework}
---
**File to be Implemented by Coder:** ${filePlan.path}
**Description of File to be Implemented:** "${filePlan.description}"
---
Based on the description, write the complete code for the test file: **${testFilePath}**.`;
  try {
    const testFileContent = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    return { testFilePath, testFileContent };
  } catch (error) {
    log(`[QA-Engineer Error] Failed to generate test file for ${filePlan.path}: ${error instanceof Error ? error.message : "Unknown error"}`);
    return null;
  }
};
var generateDatabaseSchema = async (originalPrompt, filePlan, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "DB-Agent," an expert database architect.
Your sole task is to generate a complete SQL schema file based on the provided description.

**CRITICAL RULES:**
1.  The schema should be well-structured with appropriate data types, primary keys, and foreign key constraints.
2.  You MUST add comments explaining the purpose of each table and key columns.
3.  Your response MUST ONLY be the complete, raw SQL code, enclosed in a single markdown \`\`\`sql code block.
4.  Do NOT add any explanation or commentary.`;
  const mainPrompt = `
**Overall Project Goal:** "${originalPrompt}"
---
**SQL File Path:** ${filePlan.path}
**Description of Schema:** "${filePlan.description}"
---
Generate the complete SQL schema.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var generateApiEndpoint = async (originalPrompt, language, filePlan, dependencyContext, log, onRequest, onResponse) => {
  const systemPrompt = `You are an "API-Agent," an expert backend developer for ${language}.
Your sole task is to generate the code for API endpoints in a single file.

**CRITICAL RULES:**
1.  The code must be production-quality and follow best practices for the ${language} framework (e.g., Express for Node.js).
2.  The code MUST correctly implement the logic described in the file plan.
3.  Your response MUST ONLY be the complete, raw code, enclosed in a single markdown code block.
4.  Do NOT add any explanation or commentary.`;
  const mainPrompt = `
**Overall Project Goal:** "${originalPrompt}"
---
**API File Path:** ${filePlan.path}
**Description of Endpoints:** "${filePlan.description}"
**Dependency Context (e.g., server setup):**
${dependencyContext || "None"}
---
Generate the complete code for the API endpoints.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var generateThemeStyles = async (originalPrompt, language, filePlan, dependencyContext, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Theme-Agent," an expert frontend developer and UI designer.
Your sole task is to generate a complete CSS (or equivalent styling) file that defines the visual theme of an application.

**CRITICAL RULES:**
1.  The theme should be modern, aesthetically pleasing, and directly relevant to the project's purpose: "${originalPrompt}".
2.  The styling should be comprehensive, defining variables for colors, fonts, and spacing where appropriate.
3.  Your response MUST ONLY be the complete, raw CSS code, enclosed in a single markdown \`\`\`css code block.
4.  Do NOT add any explanation or commentary.`;
  const mainPrompt = `
**Overall Project Goal:** "${originalPrompt}"
---
**Stylesheet Path:** ${filePlan.path}
**Description of Theme:** "${filePlan.description}"
**Dependency Context (e.g., HTML structure):**
${dependencyContext || "None"}
---
Generate the complete code for the application's theme.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var generateInfrastructureFiles = async (projectName, epics, files, log, onRequest, onResponse) => {
  const systemPrompt = `You are an "Infrastructure Agent", an expert in DevOps and containerization with Docker.
Your task is to generate a \`docker-compose.yml\` file and a \`README.md\` for a multi-service application.

**RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.
The JSON object must have a single key "files", which is an array of file objects.
Each file object must have "path" and "content" keys.

**Example Response:**
\`\`\`json
{
  "files": [
    {
      "path": "docker-compose.yml",
      "content": "version: '3.8'\\nservices:\\n  frontend:\\n    build: ./frontend\\n    ports:\\n      - '5173:5173'\\n"
    },
    {
      "path": "README.md",
      "content": "# My Project\\n\\nTo run this project with Docker, use: \`docker-compose up -d\`"
    }
  ]
}
\`\`\`

**CRITICAL LOGIC:**
- For each epic, you must determine the appropriate Docker setup.
- For frontend services (like React/Vite), you also need to generate a corresponding \`Dockerfile\`.
- For backend services (like Node.js), you also need to generate a corresponding \`Dockerfile\`.
- The \`docker-compose.yml\` must correctly define services for each epic, link them, and expose the correct ports.
- The \`README.md\` must be simple and provide instructions on how to run the project using Docker Compose.`;
  const mainPrompt = `
**Project Name:** ${projectName}
---
**Project Architecture (Epics):**
${epics.map((e) => `- ${e.name}: ${e.description}`).join("\n")}
---
**Project Files (for context):**
${files.map((f) => f.path).join("\n")}
---
Generate the \`docker-compose.yml\`, any necessary \`Dockerfile\`s, and a \`README.md\`.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  const result = JSON.parse(jsonString);
  return result.files;
};
var runSecurityAnalysis = async (filePath, code, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Security Analyst" agent. Your task is to scan a code file for common security vulnerabilities and violations of best practices.

Your analysis MUST check for:
1.  **Cross-Site Scripting (XSS)** vulnerabilities (e.g., directly rendering user input in HTML).
2.  **Hardcoded Secrets** (API keys, passwords, etc.).
3.  **Insecure Dependencies** (if visible in a package file).
4.  **Lack of Input Validation.**
5.  Other common vulnerabilities relevant to the language.

**CRITICAL RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.

- If NO issues are found, respond with:
  \`\`\`json
  { "success": true }
  \`\`\`

- If ANY issue is found, respond with:
  \`\`\`json
  {
    "success": false,
    "feedback": "A single, concise sentence explaining the MOST CRITICAL security issue found."
  }
  \`\`\`
  The feedback must be specific and actionable. For example: "The component directly renders 'userInput' without sanitization, creating an XSS risk."`;
  const mainPrompt = `
**File to Analyze:** ${filePath}
---
**Code to Analyze:**
\`\`\`
${code}
\`\`\`
---
Analyze the code for security issues and respond with the JSON object.`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    return {
      success: result.success,
      feedback: result.success ? "" : result.feedback || "No feedback provided."
    };
  } catch (error) {
    log?.(`[Security Analyst Error] Failed to parse JSON response: ${error instanceof Error ? error.message : "Unknown parsing error"}`);
    return { success: true, feedback: "Analysis could not be completed." };
  }
};
var planContentProject = async (prompt, contentType, wordCount, keywords, audience, tone, log, onRequest, onResponse, attachedFileContent) => {
  const systemPrompt = `You are an expert "Content Planner" AI. Your task is to take a user's request for written content and break it down into a logical file plan.

For most content types, this will be a single file. For multi-part content like a tutorial, it might be multiple files.

**RESPONSE FORMAT:**
Your response must be ONLY a valid JSON object with a single key "files", which is an array of file plan objects.
Each object must have "path" and "description" keys. The description should be a detailed, single-sentence outline for that section.

**CRITICAL LOGIC:**
- The file paths should be descriptive (e.g., "01_Introduction_to_Bees.md", "02_The_Role_of_the_Queen.md").
- The plan must be the minimum number of files to meet the user's request.
- The descriptions should form a cohesive outline for the entire piece of content.

Example for "a blog post about the benefits of hydration":
\`\`\`json
{
  "files": [
    {
      "path": "benefits_of_hydration_blog_post.md",
      "description": "A comprehensive blog post covering an introduction to hydration, its benefits for physical health (like digestion and skin), mental clarity, and a concluding summary with practical tips."
    }
  ]
}
\`\`\`

Example for "a short tutorial on how to use git":
\`\`\`json
{
  "files": [
    {
      "path": "01_Introduction_to_Git.md",
      "description": "Explains what version control is and the basic concepts of Git (repository, commit, branch)."
    },
    {
      "path": "02_Basic_Git_Commands.md",
      "description": "Covers the essential commands: git init, git add, git commit, and git status."
    },
    {
      "path": "03_Branching_and_Merging.md",
      "description": "Details how to use git branch, git checkout, and git merge for parallel development."
    }
  ]
}
\`\`\`
`;
  const mainPrompt = `
**Content Type:** ${contentType}
**Topic/Prompt:** "${prompt}"
**Target Word Count:** ${wordCount}
**Keywords:** ${keywords || "None"}
**Audience:** ${audience || "General"}
**Tone:** ${tone}
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your plan.
${attachedFileContent}
---
` : ""}
---
Generate the file plan for this content request.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  const result = JSON.parse(jsonString);
  return result.files;
};
var generateAndRefineContent = async (originalPrompt, fileToGenerate, wordCount, keywords, audience, tone, addLog, log, onProgress, onRequest, onResponse) => {
  const MAX_REFINEMENT_ATTEMPTS = 3;
  let currentContent = "";
  for (let attempt = 1; attempt <= MAX_REFINEMENT_ATTEMPTS; attempt++) {
    addLog({ source: "writer", message: `Writing content for ${fileToGenerate.path} (Attempt ${attempt})...`, status: "running" });
    const writerSystemPrompt = `You are an expert "Writer" AI. Your task is to generate the full text content for a specific file based on its description.

**CRITICAL RULES:**
1. Your response MUST be ONLY the generated text content in Markdown format.
2. Do NOT include a title in the content unless the description specifically asks for it.
3. Do NOT add any commentary, explanations, or meta-discussion.
4. The generated content's topic, style, and information MUST be directly relevant to the project goal: "${originalPrompt}".
5. Ensure the content meets all the specified constraints (word count, keywords, tone, audience).`;
    const writerMainPrompt = `
**Overall Topic:** "${originalPrompt}"
**File Path:** ${fileToGenerate.path}
**Content Outline/Description:** "${fileToGenerate.description}"
**Target Word Count:** ${wordCount}
**Keywords to Include:** ${keywords || "None"}
**Target Audience:** ${audience || "General"}
**Desired Tone:** ${tone}
---
${currentContent ? `This is attempt #${attempt}. The previous version failed verification. Here is the previous version for context:

${currentContent}

---` : ""}
Generate the complete Markdown content now.`;
    currentContent = await callApiOrchestrator(writerSystemPrompt, writerMainPrompt, log, onRequest, onResponse);
    onProgress(currentContent);
    addLog({ source: "writer", message: `Draft content generated for ${fileToGenerate.path}. Verifying...`, status: "success" });
    addLog({ source: "content-verifier", message: `Verifying content against constraints (Attempt ${attempt})...`, status: "running" });
    const verifierSystemPrompt = `You are a "Content Verifier" AI. Your task is to check a piece of text against a set of constraints.

**RESPONSE FORMAT:**
Your response MUST be a valid JSON object inside a markdown code block.
- If the content meets ALL constraints, respond with:
  \`\`\`json
  { "success": true }
  \`\`\`
- If the content fails ANY constraint, respond with:
  \`\`\`json
  {
    "success": false,
    "feedback": "A concise, single sentence explaining why it failed. For example: 'The text does not meet the 500-word count requirement.' or 'The content fails to include the keyword 'pollination'.'"
  }
  \`\`\`
`;
    const verifierMainPrompt = `
**Constraints:**
- **Topic:** The content must be about: "${fileToGenerate.description}"
- **Word Count:** ${wordCount}
- **Keywords:** ${keywords || "None"}
- **Audience:** ${audience || "General"}
- **Tone:** ${tone}

**Content to Verify:**
---
${currentContent}
---
Check if the content meets all constraints and provide the JSON response.`;
    const verificationResultJson = await callApiOrchestrator(verifierSystemPrompt, verifierMainPrompt, log, onRequest, onResponse);
    const verificationResult = JSON.parse(verificationResultJson);
    if (verificationResult.success) {
      addLog({ source: "content-verifier", message: "Content verification successful.", status: "success" });
      return { success: true, content: currentContent };
    } else {
      addLog({ source: "content-verifier", message: `Verification failed: ${verificationResult.feedback}`, status: "error" });
      if (attempt === MAX_REFINEMENT_ATTEMPTS) {
        return { success: false, content: currentContent, failureReason: verificationResult.feedback };
      }
      addLog({ source: "refiner", message: `Attempting to refine content based on feedback...`, status: "running" });
    }
  }
  return { success: false, content: currentContent, failureReason: `Failed to meet criteria after ${MAX_REFINEMENT_ATTEMPTS} attempts.` };
};
var planNovelProject = async (prompt, log, onRequest, onResponse, attachedFileContent) => {
  const systemPrompt = `You are a master "Novel Planner". Your task is to create a detailed, chapter-by-chapter outline for a novel based on the user's premise and specifications.

**RESPONSE FORMAT:**
Your response must be ONLY a valid JSON object with a single key "chapters", which is an array of file plan objects.
Each object must have "path" and "description" keys.
- The "path" should be in the format "01_Chapter_Title.md", "02_Another_Title.md", etc. The title should be short and descriptive.
- The "description" should be a detailed, single-paragraph summary of the key events, character developments, and plot points for that chapter.

**CRITICAL LOGIC:**
- The outline must be cohesive and tell a complete story arc over the specified number of chapters.
- The descriptions must incorporate the user-defined characters and plot points naturally.
- The total number of chapters in your plan MUST EXACTLY match the user's requested 'numChapters'.`;
  const mainPrompt = `
**Novel Premise:** "${prompt.premise}"
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your plan.
${attachedFileContent}
---
` : ""}
**Specifications:**
- **Genre:** ${prompt.spec.genre}
- **Number of Chapters:** ${prompt.spec.numChapters}
- **Words per Chapter (Approx):** ${prompt.spec.wordsPerChapter}
- **Main Characters:**
${prompt.spec.characters.map((c) => `  - ${c.name} (${c.gender}, ${c.age}): ${c.description}`).join("\n")}
- **Key Plot Points/Twists:**
${prompt.spec.plotPoints.map((p) => `  - ${p.description}`).join("\n")}
---
Generate the chapter-by-chapter plan for this novel.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  const result = JSON.parse(jsonString);
  return result.chapters;
};
var generateAndRefineChapter = async (fullPrompt, chapterPlan, previousChapterSummary, addLog, log, onProgress, onRequest, onResponse) => {
  const MAX_REFINEMENT_ATTEMPTS = 3;
  let currentContent = "";
  let lastFeedback = "";
  for (let attempt = 1; attempt <= MAX_REFINEMENT_ATTEMPTS; attempt++) {
    addLog({ source: "writer", message: `Writing ${chapterPlan.path} (Attempt ${attempt})...`, status: "running" });
    const writerSystemPrompt = `You are a master "Novelist" AI. Your task is to write a single chapter of a novel based on a detailed plan.

**CRITICAL RULES:**
1. Your response MUST be ONLY the text of the chapter in Markdown format.
2. Do NOT include the chapter title (e.g., "Chapter 1") in the output.
3. Write in a compelling, literary style appropriate for the genre (${fullPrompt.spec.genre}).
4. Ensure the chapter is approximately ${fullPrompt.spec.wordsPerChapter} words long.
5. You MUST adhere to the provided outline for this chapter.
6. You MUST maintain continuity from the previous chapter's summary.`;
    const writerMainPrompt = `
**Novel Premise:** "${fullPrompt.premise}"
**Genre:** ${fullPrompt.spec.genre}
---
**Characters:**
${fullPrompt.spec.characters.map((c) => `- ${c.name}: ${c.description}`).join("\n")}
---
**Summary of Previous Chapter:**
${previousChapterSummary}
---
**Plan for Current Chapter (${chapterPlan.path}):**
"${chapterPlan.description}"
---
${lastFeedback ? `The previous attempt failed verification with the following feedback. You MUST correct this:
${lastFeedback}
---` : ""}
Now, write the complete text for this chapter.`;
    currentContent = await callApiOrchestrator(writerSystemPrompt, writerMainPrompt, log, onRequest, onResponse);
    onProgress(currentContent);
    addLog({ source: "writer", message: `Draft of ${chapterPlan.path} complete. Verifying...`, status: "success" });
    addLog({ source: "plot-verifier", message: `Verifying plot points...`, status: "running" });
    const plotVerifierSystemPrompt = `You are a "Plot Verifier" AI. You check if a chapter correctly follows its outline. Respond with a JSON object: \`{"success": true}\` or \`{"success": false, "feedback": "reason"}\`.`;
    const plotVerifierMainPrompt = `**Chapter Outline:** "${chapterPlan.description}"

**Chapter Text:**
${currentContent}

Does the text follow the outline?`;
    const plotResult = JSON.parse(await callApiOrchestrator(plotVerifierSystemPrompt, plotVerifierMainPrompt, log, onRequest, onResponse));
    if (!plotResult.success) {
      lastFeedback = plotResult.feedback;
      addLog({ source: "plot-verifier", message: `Plot verification failed: ${lastFeedback}`, status: "error" });
      continue;
    }
    addLog({ source: "plot-verifier", message: `Plot verification successful.`, status: "success" });
    addLog({ source: "character-verifier", message: `Verifying character consistency...`, status: "running" });
    const charVerifierSystemPrompt = `You are a "Character Verifier" AI. You check for character consistency. Respond with a JSON object: \`{"success": true}\` or \`{"success": false, "feedback": "reason"}\`.`;
    const charVerifierMainPrompt = `**Character Descriptions:**
${fullPrompt.spec.characters.map((c) => `- ${c.name}: ${c.description}`).join("\n")}

**Chapter Text:**
${currentContent}

Are the characters' actions and dialogue consistent with their descriptions?`;
    const charResult = JSON.parse(await callApiOrchestrator(charVerifierSystemPrompt, charVerifierMainPrompt, log, onRequest, onResponse));
    if (!charResult.success) {
      lastFeedback = charResult.feedback;
      addLog({ source: "character-verifier", message: `Character verification failed: ${lastFeedback}`, status: "error" });
      continue;
    }
    addLog({ source: "character-verifier", message: `Character verification successful.`, status: "success" });
    return { success: true, content: currentContent };
  }
  return { success: false, content: currentContent, failureReason: `Failed to meet criteria after ${MAX_REFINEMENT_ATTEMPTS} attempts.` };
};
var humanizeContent = async (originalContent, wordCountTarget, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Humanizer" agent, an expert editor specializing in making AI-generated text sound more natural, engaging, and less robotic.
Your task is to revise a piece of text to improve its flow, word choice, and overall readability.

**CRITICAL RULES:**
1.  You MUST NOT change the core meaning or factual information of the text.
2.  Your revision should aim to be close to the target word count.
3.  The tone should remain consistent with the original piece.
4.  Your response MUST ONLY be the complete, revised text.
5.  Do NOT add any explanation, commentary, or markdown formatting unless it was part of the original.
6.  If the text contains any self-reference to the AI (e.g., "As a large language model...", "As an AI..."), you MUST replace it with the name "Electra". For example, "As an AI, I cannot..." should become "As Electra, I cannot...".`;
  const mainPrompt = `
**Target Word Count:** ${wordCountTarget}
---
**Original Text:**
${originalContent}
---
Revise this text to make it sound more human-written.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[Humanizer Agent Error] Failed to humanize content: ${error instanceof Error ? error.message : "Unknown error"}. Returning original content.`);
    return originalContent;
  }
};
var summarizeText = async (textToSummarize, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Summarizer" agent. Your task is to read a piece of text and create a concise, one-paragraph summary.
The summary should capture the key events, characters, and plot points of the text. It will be used as context for the next AI agent.

**CRITICAL RULES:**
1.  The summary MUST be a single paragraph.
2.  It MUST be purely technical and descriptive. Do not add any creative flair.
3.  Your response MUST ONLY be the summary text.
4.  Do NOT add any commentary or titles like "Summary:".`;
  const mainPrompt = `
**Text to Summarize:**
---
${textToSummarize}
---
Generate the one-paragraph summary.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[Summarizer Agent Error] Failed to summarize text: ${error instanceof Error ? error.message : "Unknown error"}. Returning empty string.`);
    return "Summary could not be generated.";
  }
};
var planTutorialBookProject = async (prompt, log, onRequest, onResponse, attachedFileContent) => {
  const systemPrompt = `You are a master "Curriculum Planner". Your task is to create a detailed, chapter-by-chapter outline for a tutorial book based on the user's topic and specifications.

**RESPONSE FORMAT:**
Your response must be ONLY a valid JSON object with a single key "chapters", which is an array of file plan objects.
Each object must have "path" and "description" keys.
- The "path" should be in the format "01_Chapter_Title.md", "02_Another_Title.md", etc. The title should be short and descriptive of the chapter's content.
- The "description" should be a detailed, single-paragraph summary of the key concepts, examples, and learning objectives for that chapter.

**CRITICAL LOGIC:**
- The outline must be structured logically, starting from basic concepts and building up to more advanced topics.
- The plan must incorporate all the "Key Concepts to Cover" provided by the user.
- You must create a number of chapters that makes sense for the provided concepts, typically one chapter per major concept or a few related smaller concepts.`;
  const mainPrompt = `
**Book Topic:** "${prompt.premise}"
${attachedFileContent ? `
---
**USER-PROVIDED FILE CONTEXT:**
The user has attached the following file content for context. You MUST take this into account when creating your plan.
${attachedFileContent}
---
` : ""}
**Specifications:**
- **Target Audience:** ${prompt.spec.audience}
- **Tone:** ${prompt.spec.tone}
- **Words per Chapter (Approx):** ${prompt.spec.wordsPerChapter}
- **Key Concepts to Cover:**
${prompt.spec.concepts.map((c) => `  - ${c.description}`).join("\n")}
---
Generate the chapter-by-chapter plan for this tutorial book.`;
  const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  const result = JSON.parse(jsonString);
  return result.chapters;
};
var generateAndRefineTutorialChapter = async (fullPrompt, chapterPlan, previousChapterSummary, addLog, log, onProgress, onRequest, onResponse) => {
  const MAX_REFINEMENT_ATTEMPTS = 3;
  let currentContent = "";
  let lastFeedback = "";
  for (let attempt = 1; attempt <= MAX_REFINEMENT_ATTEMPTS; attempt++) {
    addLog({ source: "writer", message: `Writing tutorial chapter ${chapterPlan.path} (Attempt ${attempt})...`, status: "running" });
    const writerSystemPrompt = `You are an expert "Technical Writer" AI. Your task is to write a single chapter of a tutorial book based on a detailed plan.

**CRITICAL RULES:**
1. Your response MUST be ONLY the text of the chapter in Markdown format.
2. Do NOT include the chapter title (e.g., "Chapter 1") in the output.
3. Write in a clear, educational style appropriate for the target audience (${fullPrompt.spec.audience}) and tone (${fullPrompt.spec.tone}). Use code blocks and examples where appropriate.
4. Ensure the chapter is approximately ${fullPrompt.spec.wordsPerChapter} words long.
5. You MUST adhere to the provided outline for this chapter.
6. You MUST maintain continuity from the previous chapter's summary.`;
    const writerMainPrompt = `
**Book Topic:** "${fullPrompt.premise}"
---
**Summary of Previous Chapter:**
${previousChapterSummary}
---
**Plan for Current Chapter (${chapterPlan.path}):**
"${chapterPlan.description}"
---
${lastFeedback ? `The previous attempt failed verification with the following feedback. You MUST correct this:
${lastFeedback}
---` : ""}
Now, write the complete text for this chapter.`;
    currentContent = await callApiOrchestrator(writerSystemPrompt, writerMainPrompt, log, onRequest, onResponse);
    onProgress(currentContent);
    addLog({ source: "writer", message: `Draft of ${chapterPlan.path} complete. Verifying...`, status: "success" });
    addLog({ source: "content-verifier", message: `Verifying content against constraints...`, status: "running" });
    const verifierSystemPrompt = `You are a "Content Verifier" AI. You check if a tutorial chapter correctly follows its outline and meets all constraints. Respond with a JSON object: \`{"success": true}\` or \`{"success": false, "feedback": "reason"}\`.`;
    const verifierMainPrompt = `**Chapter Outline:** "${chapterPlan.description}"

**Chapter Text:**
${currentContent}

Does the text follow the outline and explain the concepts clearly for a ${fullPrompt.spec.audience} audience?`;
    const verifierResult = JSON.parse(await callApiOrchestrator(verifierSystemPrompt, verifierMainPrompt, log, onRequest, onResponse));
    if (!verifierResult.success) {
      lastFeedback = verifierResult.feedback;
      addLog({ source: "content-verifier", message: `Verification failed: ${lastFeedback}`, status: "error" });
      continue;
    }
    addLog({ source: "content-verifier", message: `Verification successful.`, status: "success" });
    return { success: true, content: currentContent };
  }
  return { success: false, content: currentContent, failureReason: `Failed to write a valid chapter after ${MAX_REFINEMENT_ATTEMPTS} attempts.` };
};
var regenerateChapter = async (fullPrompt, chapterPlan, previousChapterSummary, nextChapterSummary, addLog, log, onProgress, onRequest, onResponse) => {
  addLog({ source: "writer", message: `Regenerating ${chapterPlan.path}...`, status: "running" });
  const writerSystemPrompt = `You are a master "Novelist" AI and editor. Your task is to rewrite a single chapter of a novel to better fit between the preceding and succeeding chapters.

**CRITICAL RULES:**
1. Your response MUST be ONLY the text of the rewritten chapter in Markdown format.
2. Do NOT include the chapter title.
3. Write in a compelling style appropriate for the genre (${fullPrompt.spec.genre}).
4. Ensure the chapter is approximately ${fullPrompt.spec.wordsPerChapter} words long.
5. You MUST adhere to the original outline for this chapter while improving the transitions.
6. The rewritten chapter MUST connect logically with the summaries of both the previous and next chapters.`;
  const writerMainPrompt = `
**Novel Premise:** "${fullPrompt.premise}"
---
**Summary of Previous Chapter:**
${previousChapterSummary}
---
**Plan for Chapter to Regenerate (${chapterPlan.path}):**
"${chapterPlan.description}"
---
**Summary of Next Chapter:**
${nextChapterSummary}
---
Now, rewrite the complete text for this chapter to create a seamless narrative flow.`;
  const content = await callApiOrchestrator(writerSystemPrompt, writerMainPrompt, log, onRequest, onResponse);
  onProgress(content);
  addLog({ source: "writer", message: `Regeneration of ${chapterPlan.path} complete.`, status: "success" });
  return { success: true, content };
};
var regenerateTutorialChapter = async (fullPrompt, chapterPlan, previousChapterSummary, nextChapterSummary, addLog, log, onProgress, onRequest, onResponse) => {
  addLog({ source: "writer", message: `Regenerating tutorial chapter ${chapterPlan.path}...`, status: "running" });
  const writerSystemPrompt = `You are an expert "Technical Writer" and editor. Your task is to rewrite a single chapter of a tutorial book to improve its clarity and flow between the preceding and succeeding chapters.

**CRITICAL RULES:**
1. Your response MUST be ONLY the text of the rewritten chapter in Markdown format.
2. Do NOT include the chapter title.
3. Write in a clear, educational style appropriate for the target audience (${fullPrompt.spec.audience}).
4. Ensure the chapter is approximately ${fullPrompt.spec.wordsPerChapter} words long.
5. You MUST adhere to the original outline for this chapter while improving the transitions and explanations.
6. The rewritten chapter MUST connect logically with the summaries of both the previous and next chapters.`;
  const writerMainPrompt = `
**Book Topic:** "${fullPrompt.premise}"
---
**Summary of Previous Chapter:**
${previousChapterSummary}
---
**Plan for Chapter to Regenerate (${chapterPlan.path}):**
"${chapterPlan.description}"
---
**Summary of Next Chapter:**
${nextChapterSummary}
---
Now, rewrite the complete text for this chapter to create a clear and logical learning path.`;
  const content = await callApiOrchestrator(writerSystemPrompt, writerMainPrompt, log, onRequest, onResponse);
  onProgress(content);
  addLog({ source: "writer", message: `Regeneration of ${chapterPlan.path} complete.`, status: "success" });
  return { success: true, content };
};
var summarizeChatHistory = async (chatHistoryText, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Summarizer" agent. Your task is to read a conversation transcript and create a very concise summary of the key points.
This summary will be used as a condensed memory for future turns in the conversation.

**CRITICAL RULES:**
1.  The summary MUST be as short as possible while retaining the essential context of the user's requests and the assistant's key responses.
2.  Focus on what the user wants to achieve.
3.  Your response MUST ONLY be the summary text.
4.  Do NOT add any commentary or titles like "Summary:".`;
  const mainPrompt = `
**Conversation Transcript:**
---
${chatHistoryText}
---
Generate the concise summary.`;
  try {
    return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
  } catch (error) {
    log?.(`[Summarizer Agent Error] Failed to summarize chat history: ${error instanceof Error ? error.message : "Unknown error"}.`);
    return "Could not summarize history.";
  }
};
var processAudioQueryWithAgents = async (promptHistory, addLog, log, onRequest, onResponse, forceFallback) => {
  const masterAgentSystemPrompt = `You are a "Master Agent", a helpful and conversational AI assistant. Your goal is to provide a comprehensive, well-rounded answer based on the full conversation history. You should be friendly and thorough. Your response should be plain text, suitable for text-to-speech. Do not use markdown.`;
  addLog({ source: "master-agent", message: "Formulating comprehensive answer...", status: "running" });
  const masterAgentPromise = callApiOrchestrator(masterAgentSystemPrompt, promptHistory, log, onRequest, onResponse, forceFallback);
  const detailsAgentSystemPrompt = `You are a "Details Agent", a specialist in providing concise, factually dense information. Extract the key question from the user's last turn and provide a direct, data-driven answer. Avoid conversational filler. Your response should be plain text. Do not use markdown.`;
  addLog({ source: "details-agent", message: "Extracting key facts and details...", status: "running" });
  const detailsAgentPromise = callApiOrchestrator(detailsAgentSystemPrompt, promptHistory, log, onRequest, onResponse, forceFallback);
  const [masterResponse, detailsResponse] = await Promise.all([masterAgentPromise, detailsAgentPromise]);
  addLog({ source: "master-agent", message: "Comprehensive answer generated.", status: "success" });
  addLog({ source: "details-agent", message: "Factual details extracted.", status: "success" });
  addLog({ source: "humanizer", message: "Combining responses into a natural, spoken answer...", status: "running" });
  const humanizerSystemPrompt = `You are a "Humanizer" agent for a voice assistant. Your job is to combine two different AI responses (one conversational, one factual) into a single, natural-sounding spoken response.

**CRITICAL RULES:**
1.  Your response must be plain text. Do NOT use markdown.
2.  Synthesize the best parts of both inputs into a cohesive answer.
3.  The final response should be conversational and easy to understand when read aloud.
4.  Your response MUST ONLY be the final text. Do not add any commentary.
5.  Only introduce yourself as "Electra" if it is contextually appropriate (e.g., when asked for your name, or when replacing a self-reference like "As an AI..."). Do NOT add your name to every response; it should sound natural.`;
  const humanizerMainPrompt = `
**Conversational Answer (from Master Agent):**
---
${masterResponse}
---
**Factual Answer (from Details Agent):**
---
${detailsResponse}
---
Combine these into a single, excellent response for a voice assistant.`;
  const finalResponse = await callApiOrchestrator(humanizerSystemPrompt, humanizerMainPrompt, log, onRequest, onResponse, forceFallback);
  addLog({ source: "humanizer", message: "Final response synthesized.", status: "success" });
  return finalResponse;
};
var chatWithCanvasContent = async (userPrompt, canvasContent, chatHistory, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Canvas Assistant" AI. Your task is to interact with a user about a large text document ("the canvas"). You can either chat about it or propose direct updates to it.

**RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.

1.  **If the user is asking a question or having a conversation about the content:**
    Respond with a "chat" message.
    \`\`\`json
    {
      "type": "chat",
      "message": "Your conversational response here."
    }
    \`\`\`

2.  **If the user is asking you to modify, add to, or rewrite the canvas content:**
    Respond with an "update" containing the FULL, new content of the canvas.
    \`\`\`json
    {
      "type": "update",
      "content": "The full, modified text of the entire canvas goes here..."
    }
    \`\`\`

**CRITICAL LOGIC:**
- Analyze the user's intent. Are they asking a question, or are they giving an editing command?
- When providing an "update", you MUST return the entire canvas content, including your changes. Do not just return the changed portion.`;
  const historyText = chatHistory.map((m) => `${m.role}: ${m.content}`).join("\n");
  const mainPrompt = `
**Full Canvas Content:**
---
${canvasContent}
---
**Conversation History:**
---
${historyText}
---
**User's Latest Message:** "${userPrompt}"
---
Now, provide your response in the specified JSON format.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var modifySelectedCanvasContent = async (userPrompt, selectedText, fullCanvasContent, chatHistory, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Canvas Selection Editor" AI. Your task is to modify a specific piece of selected text based on a user's instruction.

**CRITICAL RULES:**
1.  Your response MUST ONLY be the modified version of the selected text.
2.  Do NOT return the full canvas content, only the changed selection.
3.  Do NOT add any commentary, explanation, or markdown formatting.`;
  const historyText = chatHistory.map((m) => `${m.role}: ${m.content}`).join("\n");
  const mainPrompt = `
**Full Canvas Content (for context):**
---
${fullCanvasContent}
---
**Conversation History (for context):**
---
${historyText}
---
**Selected Text to Modify:**
---
${selectedText}
---
**User's Instruction:** "${userPrompt}"
---
Now, provide ONLY the modified version of the selected text.`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var getAIQuickActions = async (selectedText, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Contextual Action Suggester" AI. Based on a piece of selected text, you must suggest three brief, relevant actions a user might want to perform.

**RESPONSE FORMAT:**
Your entire response MUST be a valid JSON object inside a markdown code block.
The object should have a single key "actions", which is an array of exactly three strings.

**CRITICAL LOGIC:**
- The actions should be short (1-4 words).
- They should be relevant to the content of the text. For code, suggest things like "Explain This", "Add Type Definitions", "Refactor". For prose, suggest things like "Summarize", "Improve Wording", "Change Tone to Formal".
- Always include a generic but useful fallback if the text is unclear.

**Example for code selection:**
\`\`\`json
{
  "actions": ["Explain This", "Add JSDoc Comments", "Optimize Function"]
}
\`\`\`

**Example for prose selection:**
\`\`\`json
{
  "actions": ["Summarize", "Fix Grammar", "Expand on This"]
}
\`\`\`
`;
  const mainPrompt = `
**Selected Text:**
---
${selectedText}
---
Generate the JSON response with three suggested actions.`;
  try {
    const jsonString = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    const result = JSON.parse(jsonString);
    if (result.actions && Array.isArray(result.actions) && result.actions.length > 0) {
      return result.actions.slice(0, 3);
    }
  } catch (e) {
    log(`[Quick Actions Error] Failed to get quick actions: ${e instanceof Error ? e.message : "Unknown error"}. Returning defaults.`);
  }
  return ["Summarize", "Fix Grammar & Spelling", "Explain This"];
};
var stylizeImagePrompt = async (prompt, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Stylist Agent" for an image generation AI. Your task is to take a user's prompt and add stylistic keywords to make the image more visually interesting.
    
**CRITICAL RULES:**
1. Your response MUST ONLY be a comma-separated list of stylistic keywords.
2. Do NOT repeat the user's original prompt.
3. Examples of keywords: "concept art", "hyperrealistic", "cinematic", "art deco", "fantasy", "steampunk".`;
  const mainPrompt = `**User Prompt:** "${prompt}"

**Stylistic Keywords:**`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var addLightingToImagePrompt = async (prompt, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Lighting Agent" for an image generation AI. Your task is to add lighting-related keywords to a user's prompt.
    
**CRITICAL RULES:**
1. Your response MUST ONLY be a comma-separated list of lighting keywords.
2. Examples: "cinematic lighting", "dramatic lighting", "soft light", "volumetric lighting", "god rays".`;
  const mainPrompt = `**User Prompt:** "${prompt}"

**Lighting Keywords:**`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var addFocusToImagePrompt = async (prompt, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Focus Agent" for an image generation AI. Your task is to add camera and focus-related keywords to a user's prompt.
    
**CRITICAL RULES:**
1. Your response MUST ONLY be a comma-separated list of camera/focus keywords.
2. Examples: "depth of field", "bokeh", "wide angle lens", "macro shot", "8k".`;
  const mainPrompt = `**User Prompt:** "${prompt}"

**Camera/Focus Keywords:**`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var addDetailsToImagePrompt = async (prompt, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Details Agent" for an image generation AI. Your task is to add fine details and corrective keywords to a user's prompt.
    
**CRITICAL RULES:**
1. Your response MUST ONLY be a comma-separated list of detail-oriented keywords.
2. Examples: "hyperdetailed", "intricate details", "masterpiece", "well-composed", "award-winning".`;
  const mainPrompt = `**User Prompt:** "${prompt}"

**Detail Keywords:**`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var finalizeImagePrompt = async (originalPrompt, style, lighting, focus, details, log, onRequest, onResponse) => {
  const systemPrompt = `You are a "Finalizer Agent". Your task is to combine a user's prompt with several keyword lists into a single, cohesive, and powerful final prompt for an image generation AI.

**CRITICAL RULES:**
1. Combine all inputs into a single, comma-separated string.
2. Prioritize the user's original prompt at the beginning.
3. Remove duplicate or conflicting keywords.
4. Your response MUST ONLY be the final, combined prompt.`;
  const mainPrompt = `
**Original Prompt:** ${originalPrompt}
**Style Keywords:** ${style}
**Lighting Keywords:** ${lighting}
**Focus Keywords:** ${focus}
**Detail Keywords:** ${details}
---
**Final Combined Prompt:**`;
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};
var _generateImagesWithDigenAI = async (prompt, aspectRatio, log, onRequest, onResponse) => {
  log("[API Strategy] Primary image generator failed. Switching to Digen AI.");
  const aspectRatioMap = {
    "1:1": "1:1",
    "16:9": "16:9",
    "1920:1080": "16:9",
    "4:3": "16:9",
    "9:16": "9:16",
    "1080:1920": "9:16",
    "3:4": "9:16"
  };
  const digenAspectRatio = aspectRatioMap[aspectRatio] || "1:1";
  onRequest();
  const generateResponse = await fetch(`${DIGEN_API_URL}/generate-image`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      aspect_ratio: digenAspectRatio,
      password: DIGEN_API_PASSWORD
    })
  });
  if (!generateResponse.ok) {
    onResponse();
    throw new Error(`Digen AI image generation request failed with status ${generateResponse.status}`);
  }
  const generateData = await generateResponse.json();
  const jobId = generateData.job_id;
  if (!jobId) {
    onResponse();
    throw new Error("Digen AI did not return a job_id.");
  }
  log(`[Digen AI] Image generation job queued. Job ID: ${jobId}`);
  const startTime = Date.now();
  while (Date.now() - startTime < DIGEN_POLL_TIMEOUT_MS) {
    await new Promise((resolve) => setTimeout(resolve, DIGEN_POLL_INTERVAL_MS));
    const statusResponse = await fetch(`${DIGEN_API_URL}/get-status/${jobId}`);
    if (!statusResponse.ok) {
      log(`[Digen AI] Polling failed with status ${statusResponse.status}. Retrying...`);
      continue;
    }
    const statusData = await statusResponse.json();
    switch (statusData.status) {
      case "complete":
        onResponse();
        log("[Digen AI] Job complete. Validating response...");
        if (statusData.result && Array.isArray(statusData.result) && statusData.result.length > 0) {
          const firstItem = statusData.result[0];
          if (typeof firstItem === "object" && firstItem !== null && typeof firstItem.image === "string") {
            log("[Digen AI] Response is an array of image/thumbnail objects. Extracting image URLs.");
            const urls = statusData.result.map((item) => item.image).filter(Boolean);
            if (urls.length > 0) {
              return urls;
            }
          }
          if (typeof firstItem === "object" && firstItem !== null && typeof firstItem.url === "string") {
            log("[Digen AI] Response is an array of URL objects. Extracting URLs.");
            const urls = statusData.result.map((item) => item.url).filter(Boolean);
            if (urls.length > 0) {
              return urls;
            }
          }
          if (typeof firstItem === "string") {
            log("[Digen AI] Response is an array of strings. Returning URLs.");
            return statusData.result;
          }
        }
        const errorDetail = `Digen AI job finished, but the response format was unexpected. Expected an array of strings, {url: string} objects, or {image: string} objects. Raw server response: ${JSON.stringify(statusData)}`;
        log(`[Digen AI Error] ${errorDetail}`);
        throw new Error(errorDetail);
      case "error":
        onResponse();
        throw new Error(`Digen AI job failed: ${statusData.error}`);
      case "processing":
        log("[Digen AI] Job is processing...");
        break;
      case "queued":
        log(`[Digen AI] Job is queued at position ${statusData.queue_position}...`);
        break;
      default:
        log(`[Digen AI] Unknown status: ${statusData.status}`);
    }
  }
  onResponse();
  throw new Error("Digen AI job timed out after 5 minutes.");
};
var generateImages = async (prompt, aspectRatio, count, log, onRequest, onResponse) => {
  try {
    log("[API Strategy] Attempting image generation with primary API (Pollinations).");
    const [w, h] = aspectRatio.split(":").map(Number);
    let width, height;
    if (aspectRatio === "1920:1080") {
      width = 1920;
      height = 1080;
    } else if (aspectRatio === "1080:1920") {
      width = 1080;
      height = 1920;
    } else {
      if (w > h) {
        width = 1024;
        height = Math.round(1024 * (h / w));
      } else {
        height = 1024;
        width = Math.round(1024 * (w / h));
      }
    }
    const imageUrls = [];
    for (let i = 0; i < count; i++) {
      const imageUrl = generateImageUrl({ prompt, width, height, seed: Math.floor(Math.random() * 1e6) });
      imageUrls.push(imageUrl);
    }
    if (imageUrls.length > 0) {
      log("[API Strategy] Validating one generated image URL to check API health...");
      onRequest();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15e3);
      const testResponse = await fetch(imageUrls[0], { signal: controller.signal });
      clearTimeout(timeoutId);
      const contentType = testResponse.headers.get("Content-Type");
      if (!testResponse.ok || !contentType || !contentType.startsWith("image/")) {
        const errorBody = await testResponse.text().catch(() => "Could not read error body.");
        log(`[API Error - Primary Health Check] Status: ${testResponse.status}, Content-Type: ${contentType}, Body: ${errorBody.substring(0, 100)}`);
        throw new Error(`Primary API health check failed. Status: ${testResponse.status}, Content-Type: ${contentType}`);
      }
      onResponse();
      log("[API Strategy] Primary API health check passed.");
    }
    return imageUrls;
  } catch (error) {
    log(`[API Strategy] Primary image API failed: ${error instanceof Error ? error.message : "Unknown error"}.`);
    onResponse();
    return await _generateImagesWithDigenAI(prompt, aspectRatio, log, onRequest, onResponse);
  }
};
var generateRandomImagePrompt = async (log, onRequest, onResponse) => {
  const systemPrompt = `You are a creative AI that generates interesting, short, and visually descriptive prompts for an image generation model.

**CRITICAL RULES:**
1.  Your response MUST ONLY be the prompt text.
2.  Do NOT add any commentary or quotes.
3.  The prompt should be 5-15 words.
4.  Be creative and surprising!`;
  const mainPrompt = "Generate a random image prompt.";
  return await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
};

// services/settingsService.ts
function createDefaultSettings() {
  const unlocked = "unlocked";
  return {
    tier1: {
      coderMode: unlocked,
      contentMode: unlocked,
      chatMode: unlocked,
      imageMode: unlocked,
      canvasMode: unlocked
    },
    tier2: {
      coderLanguages: languageOptions.reduce((acc, lang) => {
        acc[lang.value] = unlocked;
        return acc;
      }, {}),
      contentTypes: contentOptions.reduce((acc, type) => {
        acc[type.value] = unlocked;
        return acc;
      }, {}),
      imageMode: {
        aspectRatio: unlocked
      },
      canvasMode: {
        fileAttachments: unlocked
      }
    }
  };
}
function mergeSettings(defaults, user) {
  const isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
  const merged = { ...defaults };
  if (isObject(user)) {
    for (const key in defaults) {
      const typedKey = key;
      if (isObject(defaults[typedKey]) && isObject(user[typedKey])) {
        merged[typedKey] = { ...defaults[typedKey], ...user[typedKey] };
        if (typedKey === "tier2") {
          const tier2Defaults = defaults.tier2;
          const userTier2 = user.tier2 || {};
          const mergedTier2 = merged.tier2;
          for (const subKey in tier2Defaults) {
            const typedSubKey = subKey;
            if (isObject(tier2Defaults[typedSubKey]) && isObject(userTier2[typedSubKey])) {
              mergedTier2[typedSubKey] = { ...tier2Defaults[typedSubKey], ...userTier2[typedSubKey] };
            }
          }
        }
      }
    }
  }
  return merged;
}
async function loadSettings() {
  try {
    const response = await fetch("/settings.json");
    if (!response.ok) {
      console.warn("settings.json not found, unlocking all features.");
      return createDefaultSettings();
    }
    const userSettings = await response.json();
    return mergeSettings(createDefaultSettings(), userSettings);
  } catch (error) {
    console.error("Error loading or parsing settings.json, unlocking all features.", error);
    return createDefaultSettings();
  }
}

// App.tsx
import { Fragment as Fragment7, jsx as jsx26, jsxs as jsxs24 } from "react/jsx-runtime";
var MIN_PANEL_PERCENT = 10;
var MAX_CORRECTION_ATTEMPTS = 3;
var MAX_REFACTOR_ATTEMPTS = 5;
var initialNovelSpec = {
  genre: "Fantasy",
  numChapters: "10",
  wordsPerChapter: "1500",
  characters: [],
  plotPoints: []
};
var initialTutorialBookSpec = {
  audience: "Beginner",
  tone: "Conversational and encouraging",
  wordsPerChapter: "1000",
  concepts: []
};
var initialPowerPointSpec = {
  theme: "Professional Dark",
  slides: [
    { id: crypto.randomUUID(), layout: "title", title: "Presentation Title", content: "Subtitle or author name", imagePrompt: "" }
  ]
};
function withTimeout(promise, ms, onTimeout) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      console.warn(`Operation timed out after ${ms}ms.`);
      resolve(onTimeout());
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
}
function useDebouncedEffect(effect, deps, delay) {
  useEffect14(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...deps || [], delay]);
}
var useMediaQuery2 = (query) => {
  const [matches, setMatches] = useState16(false);
  useEffect14(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};
var countWords2 = (text) => {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
};
var formatTime = (ms) => {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1e3);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1e3;
  const pad = (num, length = 2) => num.toString().padStart(length, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
};
var App = () => {
  const [sessionId, setSessionId] = useState16(crypto.randomUUID());
  const [chatHistory, setChatHistory] = useState16([]);
  const [originalPrompt, setOriginalPrompt] = useState16("");
  const [projectPlan, setProjectPlan] = useState16([]);
  const [projectHistory, setProjectHistory] = useState16([]);
  const [files, setFiles] = useState16([]);
  const [selectedFile, setSelectedFile] = useState16(null);
  const [agentLogs, setAgentLogs] = useState16([]);
  const [detailedLogs, setDetailedLogs] = useState16([]);
  const [projectName, setProjectName] = useState16("AI Content Generator");
  const [panelVisibility, setPanelVisibility] = useState16({ assistant: true, editor: false, agentLogs: true });
  const [isDetailedLogsVisible, setIsDetailedLogsVisible] = useState16(false);
  const [elapsedTime, setElapsedTime] = useState16(0);
  const timerStartTimeRef = useRef10(0);
  const [apiStats, setApiStats] = useState16({ requests: 0, responses: 0 });
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState16(false);
  const [previewFile, setPreviewFile] = useState16(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState16(false);
  const [isExporting, setIsExporting] = useState16(false);
  const [isDiffModalOpen, setIsDiffModalOpen] = useState16(false);
  const [diffData, setDiffData] = useState16(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState16(false);
  const [isTutorialModalOpen, setIsTutorialModalOpen] = useState16(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState16(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState16(false);
  const [mode, setMode] = useState16("audio");
  const [selectedLanguage, setSelectedLanguage] = useState16("html");
  const [contentType, setContentType] = useState16("blog_post");
  const [wordCount, setWordCount] = useState16("no limit");
  const [keywords, setKeywords] = useState16("");
  const [audience, setAudience] = useState16("");
  const [tone, setTone] = useState16("Optional");
  const [novelSpec, setNovelSpec] = useState16(initialNovelSpec);
  const [tutorialBookSpec, setTutorialBookSpec] = useState16(initialTutorialBookSpec);
  const [powerPointSpec, setPowerPointSpec] = useState16(initialPowerPointSpec);
  const [isLivePreviewActive, setIsLivePreviewActive] = useState16(false);
  const [approvalMode, setApprovalMode] = useState16("auto");
  const [testingPreference, setTestingPreference] = useState16("run_tests");
  const [settings, setSettings] = useState16(null);
  const [canvasContent, setCanvasContent] = useState16("");
  const [canvasChatHistory, setCanvasChatHistory] = useState16([]);
  const [isCanvasLoading, setIsCanvasLoading] = useState16(false);
  const [audioChatHistory, setAudioChatHistory] = useState16([]);
  const [isAudioLoading, setIsAudioLoading] = useState16(false);
  const [audioLogStartIndex, setAudioLogStartIndex] = useState16(0);
  const [aiVoice, setAiVoice] = useState16("");
  const [attachedFile, setAttachedFile] = useState16(null);
  const [summarizedAudioHistory, setSummarizedAudioHistory] = useState16(null);
  const [generatedImages, setGeneratedImages] = useState16([]);
  const [isImageLoading, setIsImageLoading] = useState16(false);
  const [imagePrompt, setImagePrompt] = useState16("");
  const [appPhase, setAppPhase] = useState16("idle");
  const [projectEpics, setProjectEpics] = useState16([]);
  const [pausedGenerationState, setPausedGenerationState] = useState16(null);
  const [isPausedForRequest, setIsPausedForRequest] = useState16(false);
  const [queuedRequest, setQueuedRequest] = useState16(null);
  const isPausedForRequestRef = useRef10(isPausedForRequest);
  const queuedRequestRef = useRef10(queuedRequest);
  useEffect14(() => {
    isPausedForRequestRef.current = isPausedForRequest;
  }, [isPausedForRequest]);
  useEffect14(() => {
    queuedRequestRef.current = queuedRequest;
  }, [queuedRequest]);
  const [horizontalSizes, setHorizontalSizes] = useState16([34, 33, 33]);
  const [verticalSize, setVerticalSize] = useState16(70);
  const [isDragging, setIsDragging] = useState16(null);
  const [draggedIndex, setDraggedIndex] = useState16(null);
  const initialSizesRef = useRef10([]);
  const initialPosRef = useRef10({ x: 0, y: 0 });
  const [lastFailureContext, setLastFailureContext] = useState16(null);
  const isMobile = useMediaQuery2("(max-width: 768px)");
  const [mobileActiveView, setMobileActiveView] = useState16("assistant");
  const appRef = useRef10(null);
  const mainPanelsRef = useRef10(null);
  const isNewProject = useMemo3(() => projectHistory.length === 0, [projectHistory]);
  const isLoading = useMemo3(() => ["planning-epics", "generating-code"].includes(appPhase) || isImageLoading, [appPhase, isImageLoading]);
  const isProjectReady = useMemo3(() => appPhase === "ready" && files.length > 0 || appPhase === "ready" && contentType === "powerpoint_presentation", [appPhase, files, contentType]);
  const areMainPanelsHidden = useMemo3(() => !panelVisibility.assistant && !panelVisibility.editor && !panelVisibility.agentLogs, [panelVisibility]);
  const isPreviewEnabled = useMemo3(() => mode === "coder" && files.some((f) => f.path.endsWith("index.html")), [mode, files]);
  const isThinkingForAudio = useMemo3(() => isAudioLoading, [isAudioLoading]);
  const isAudioThinkingPanelVisible = useMemo3(() => isThinkingForAudio, [isThinkingForAudio]);
  const thinkingLogs = isThinkingForAudio ? agentLogs.slice(audioLogStartIndex) : [];
  const apiStatsRef = useRef10(apiStats);
  const elapsedTimeRef = useRef10(elapsedTime);
  useEffect14(() => {
    apiStatsRef.current = apiStats;
  }, [apiStats]);
  useEffect14(() => {
    elapsedTimeRef.current = elapsedTime;
  }, [elapsedTime]);
  useEffect14(() => {
    const fetchSettings = async () => {
      const loadedSettings = await loadSettings();
      setSettings(loadedSettings);
    };
    fetchSettings();
  }, []);
  useDebouncedEffect(() => {
    if (appPhase !== "idle" && !["canvas", "audio", "image"].includes(mode)) {
      const sessionData = {
        id: sessionId,
        timestamp: Date.now(),
        projectName,
        mode,
        appPhase,
        originalPrompt,
        chatHistory,
        audioChatHistory,
        aiVoice,
        projectEpics,
        projectPlan,
        projectHistory,
        files,
        agentLogs,
        detailedLogs,
        selectedLanguage,
        contentType,
        wordCount,
        keywords,
        audience,
        tone,
        novelSpec,
        tutorialBookSpec,
        powerPointSpec,
        selectedFile,
        approvalMode,
        testingPreference,
        generatedImages
      };
      saveSession(sessionData);
    }
  }, [
    sessionId,
    projectName,
    mode,
    appPhase,
    originalPrompt,
    chatHistory,
    audioChatHistory,
    aiVoice,
    projectEpics,
    projectPlan,
    projectHistory,
    files,
    agentLogs,
    detailedLogs,
    selectedLanguage,
    contentType,
    wordCount,
    keywords,
    audience,
    tone,
    novelSpec,
    tutorialBookSpec,
    powerPointSpec,
    selectedFile,
    approvalMode,
    testingPreference,
    generatedImages
  ], 1e3);
  useEffect14(() => {
    let interval;
    if (isLoading || isThinkingForAudio) {
      timerStartTimeRef.current = Date.now();
      interval = setInterval(() => {
        setElapsedTime(Date.now() - timerStartTimeRef.current);
      }, 50);
    } else {
      setElapsedTime(0);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isLoading, isThinkingForAudio]);
  const incrementRequests = useCallback3(() => setApiStats((s) => ({ ...s, requests: s.requests + 1 })), []);
  const incrementResponses = useCallback3(() => setApiStats((s) => ({ ...s, responses: s.responses + 1 })), []);
  const addLog = useCallback3((log) => setAgentLogs((prev) => [...prev, log]), []);
  const addDetailedLog = useCallback3((content) => {
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    setDetailedLogs((prev) => [...prev, { timestamp, content }]);
  }, []);
  const updateProjectHistory = useCallback3((filePath, fileDescription) => {
    setProjectHistory((prev) => {
      const existingFile = prev.find((f) => f.filePath === filePath);
      if (existingFile) {
        return prev.map((f) => f.filePath === filePath ? { ...f, promptHistory: [fileDescription] } : f);
      }
      return [...prev, { filePath, promptHistory: [fileDescription] }];
    });
  }, []);
  const processFileGeneration = useCallback3(async (originalPrompt2, fileToGenerate, allGeneratedCodeRecord, dependencyContext, clarificationHistory, midGenRequest) => {
    const fileType = fileToGenerate.type || "general";
    const currentFilesRecord = allGeneratedCodeRecord || {};
    let testContext = void 0;
    if (fileType !== "general") {
      const agentSourceMap = {
        "database": "db-agent",
        "api": "api-agent",
        "theme": "theme-agent"
      };
      const agent = agentSourceMap[fileType];
      addLog({ source: agent, message: `Generating ${fileType} file: ${fileToGenerate.path}...`, status: "running" });
      try {
        let content = "";
        if (fileType === "database") content = await generateDatabaseSchema(originalPrompt2, fileToGenerate, addDetailedLog, incrementRequests, incrementResponses);
        else if (fileType === "api") content = await generateApiEndpoint(originalPrompt2, selectedLanguage, fileToGenerate, dependencyContext, addDetailedLog, incrementRequests, incrementResponses);
        else if (fileType === "theme") content = await generateThemeStyles(originalPrompt2, selectedLanguage, fileToGenerate, dependencyContext, addDetailedLog, incrementRequests, incrementResponses);
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content } : f));
        addLog({ source: agent, message: `Generated ${fileType} file: ${fileToGenerate.path}. Verifying...`, status: "success" });
        const verificationResult = await runDevOpsChecks(originalPrompt2, selectedLanguage, fileToGenerate.path, fileToGenerate.description, content, dependencyContext, void 0, addDetailedLog, incrementRequests, incrementResponses);
        if (verificationResult.success) {
          addLog({ source: "devops", message: `Verification successful for ${fileToGenerate.path}`, status: "success" });
          updateProjectHistory(fileToGenerate.path, fileToGenerate.description);
          return { status: "success", failureHistory: [], finalContent: content };
        } else {
          addLog({ source: "devops", message: `Verification failed: ${verificationResult.feedback}`, status: "error" });
          return { status: "failure", failureHistory: [verificationResult.feedback], finalContent: content };
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        addLog({ source: agent, message: `Failed to generate ${fileToGenerate.path}: ${errorMessage}`, status: "error" });
        return { status: "failure", failureHistory: [errorMessage], finalContent: "" };
      }
    }
    if (testingPreference === "run_tests") {
      try {
        const testFileResult = await generateTddTestFile(originalPrompt2, selectedLanguage, fileToGenerate, addDetailedLog, incrementRequests, incrementResponses);
        if (testFileResult) {
          const { testFilePath, testFileContent } = testFileResult;
          addLog({ source: "qa-engineer", message: `Writing failing tests for ${fileToGenerate.path} -> ${testFilePath}`, status: "running" });
          testContext = { path: testFilePath, content: testFileContent };
          setFiles((prev) => {
            const testFileExists = prev.some((f) => f.path === testFilePath);
            const newTestFile = { path: testFilePath, content: testFileContent, status: "generated" };
            return testFileExists ? prev.map((f) => f.path === testFilePath ? newTestFile : f) : [...prev, newTestFile];
          });
          currentFilesRecord[testFilePath] = testFileContent;
          addLog({ source: "qa-engineer", message: `Successfully generated test file: ${testFilePath}`, status: "success" });
        }
      } catch (testError) {
        addLog({ source: "qa-engineer", message: `Non-critical error generating TDD test file for ${fileToGenerate.path}: ${testError.message}`, status: "error" });
      }
    } else {
      addLog({ source: "system", message: `Skipping TDD test generation for ${fileToGenerate.path} as per user preference.`, status: "info" });
    }
    let currentContent = files.find((f) => f.path === fileToGenerate.path)?.content || "";
    let lastSuccessfulContent = currentContent;
    let fileIsCorrect = false;
    const failureHistory = [];
    let currentDescription = fileToGenerate.description;
    let localDependencyContext = dependencyContext;
    const fullClarificationHistory = (clarificationHistory || []).map((item) => `Q: ${item.question}
A: ${item.answer}`).join("\n\n");
    for (let attempt = 1; attempt <= MAX_CORRECTION_ATTEMPTS; attempt++) {
      let refactorAttempts = 0;
      let generationSucceeded = false;
      let generationError = false;
      while (refactorAttempts < MAX_REFACTOR_ATTEMPTS) {
        const logMessage = attempt > 1 || refactorAttempts > 0 ? `Attempting to generate ${fileToGenerate.path} (Gen: ${attempt}, Refactor: ${refactorAttempts})...` : `Generating code for ${fileToGenerate.path}...`;
        addLog({ source: "coder", message: logMessage, status: "running" });
        let combinedFeedback = [...failureHistory, fullClarificationHistory].filter(Boolean).join("\n\n---\n\n");
        if (midGenRequest) {
          combinedFeedback += `

[USER MID-GENERATION REQUEST]: ${midGenRequest}`;
        }
        try {
          const generationResult = await generateFileContent(
            originalPrompt2,
            selectedLanguage,
            fileToGenerate.path,
            currentDescription,
            addDetailedLog,
            incrementRequests,
            incrementResponses,
            localDependencyContext,
            combinedFeedback,
            testContext
          );
          if (generationResult.type === "clarification") {
            return { status: "clarification_needed", question: generationResult.question, finalContent: currentContent, failureHistory };
          }
          if (generationResult.type === "refactor") {
            refactorAttempts++;
            const { request } = generationResult;
            addLog({ source: "refactor", message: `Refactor requested for "${request.filePath}": ${request.changeDescription}`, status: "running" });
            if (!currentFilesRecord.hasOwnProperty(request.filePath)) {
              addLog({ source: "refactor", message: `Refactor requested for missing file "${request.filePath}". Attempting to create it...`, status: "info" });
              const newFile = { path: request.filePath, content: "", status: "generated" };
              setFiles((prev) => {
                if (prev.some((f) => f.path === request.filePath)) return prev;
                return [...prev, newFile];
              });
              currentFilesRecord[request.filePath] = "";
              addLog({ source: "refactor", message: `File "${request.filePath}" created. Proceeding with refactor...`, status: "success" });
            }
            const refactoredContent = await refactorFileContent(request, currentFilesRecord[request.filePath], addDetailedLog, incrementRequests, incrementResponses);
            setFiles((prev) => prev.map((f) => f.path === request.filePath ? { ...f, content: refactoredContent } : f));
            currentFilesRecord[request.filePath] = refactoredContent;
            localDependencyContext = fileToGenerate.dependencies?.map((depPath) => `// FILE: ${depPath}

${currentFilesRecord[depPath] || ""}`).join("\n\n---\n\n");
            addLog({ source: "refactor", message: `Successfully refactored "${request.filePath}". Retrying generation for "${fileToGenerate.path}".`, status: "success" });
            continue;
          } else {
            currentContent = generationResult.content;
            generationSucceeded = true;
            break;
          }
        } catch (fileError) {
          const errorMessage = fileError instanceof Error ? fileError.message : "Code generation failed.";
          addLog({ source: "coder", message: `Failed to generate code for ${fileToGenerate.path}: ${errorMessage}`, status: "error" });
          failureHistory.push(`Attempt ${attempt}: Generation failed with error: ${errorMessage}`);
          generationError = true;
          break;
        }
      }
      if (generationError) break;
      if (!generationSucceeded) {
        addLog({ source: "system", message: `Exceeded max refactor attempts for ${fileToGenerate.path}. Failing generation.`, status: "error" });
        failureHistory.push("Exceeded maximum refactor attempts.");
        break;
      }
      setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: currentContent } : f));
      lastSuccessfulContent = currentContent;
      addLog({ source: "coder", message: `Generated code for ${fileToGenerate.path}.`, status: "success" });
      addLog({ source: "devops", message: `Running DevOps checks (Attempt ${attempt}) for ${fileToGenerate.path}...`, status: "running" });
      try {
        const verificationDependencyContext = fileToGenerate.dependencies?.map((depPath) => `// FILE: ${depPath}

${currentFilesRecord[depPath] || ""}`).join("\n\n---\n\n");
        const verificationResult = await runDevOpsChecks(originalPrompt2, selectedLanguage, fileToGenerate.path, currentDescription, currentContent, verificationDependencyContext, testContext, addDetailedLog, incrementRequests, incrementResponses);
        if (verificationResult.success) {
          addLog({ source: "devops", message: `All DevOps checks passed for ${fileToGenerate.path}`, status: "success" });
          fileIsCorrect = true;
          break;
        } else {
          addLog({ source: "devops", message: `DevOps checks failed (Attempt ${attempt}): ${verificationResult.feedback}`, status: "error" });
          addLog({ source: "debugger", message: `Debugger analyzing failure for ${fileToGenerate.path}...`, status: "running" });
          try {
            const fixRequest = await debugAndProposeFix(originalPrompt2, fileToGenerate, currentContent, verificationResult.feedback, verificationDependencyContext || "", addDetailedLog, incrementRequests, incrementResponses);
            addLog({ source: "debugger", message: `Debugger proposes fix for "${fixRequest.filePath}": ${fixRequest.changeDescription}`, status: "info" });
            const fileToRefactorContent = fixRequest.filePath === fileToGenerate.path ? currentContent : currentFilesRecord[fixRequest.filePath];
            if (!fileToRefactorContent) throw new Error(`Debugger requested refactor on a file with no content: ${fixRequest.filePath}. Falling back to standard retry.`);
            const refactoredContent = await refactorFileContent(fixRequest, fileToRefactorContent, addDetailedLog, incrementRequests, incrementResponses);
            setFiles((prev) => prev.map((f) => f.path === fixRequest.filePath ? { ...f, content: refactoredContent } : f));
            if (fixRequest.filePath === fileToGenerate.path) {
              currentContent = refactoredContent;
            } else {
              currentFilesRecord[fixRequest.filePath] = refactoredContent;
            }
            addLog({ source: "refactor", message: `Applied debugger's fix to ${fixRequest.filePath}. Retrying generation...`, status: "success" });
            localDependencyContext = fileToGenerate.dependencies?.map((depPath) => `// FILE: ${depPath}

${currentFilesRecord[depPath] || ""}`).join("\n\n---\n\n");
            failureHistory.length = 0;
            continue;
          } catch (debugError) {
            const errorMessage = debugError instanceof Error ? debugError.message : "Debugger failed.";
            addLog({ source: "debugger", message: `Debugger failed: ${errorMessage}. Falling back to standard retry.`, status: "error" });
            failureHistory.push(`Attempt ${attempt}: Verification failed with feedback: ${verificationResult.feedback}`);
          }
        }
      } catch (verificationError) {
        const errorMessage = verificationError instanceof Error ? verificationError.message : "Verification failed.";
        addLog({ source: "devops", message: `Failed to run DevOps checks on ${fileToGenerate.path}: ${errorMessage}`, status: "error" });
        failureHistory.push(`Attempt ${attempt}: Verification failed with error: ${errorMessage}`);
      }
    }
    if (fileIsCorrect) {
      updateProjectHistory(fileToGenerate.path, currentDescription);
      const POST_PROCESS_TIMEOUT = 45e3;
      addLog({ source: "aesthetics", message: `Improving aesthetics for ${fileToGenerate.path}...`, status: "running" });
      const aestheticCode = await withTimeout(
        improveFileAesthetics(originalPrompt2, selectedLanguage, fileToGenerate.path, currentContent, addDetailedLog, incrementRequests, incrementResponses),
        POST_PROCESS_TIMEOUT,
        () => {
          addLog({ source: "aesthetics", message: `Aesthetics improvement for ${fileToGenerate.path} timed out. Skipping.`, status: "error" });
          return currentContent;
        }
      );
      if (aestheticCode !== currentContent) {
        currentContent = aestheticCode;
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: currentContent } : f));
        addLog({ source: "aesthetics", message: `Aesthetics improved for ${fileToGenerate.path}`, status: "success" });
      }
      addLog({ source: "layout", message: `Improving layout for ${fileToGenerate.path}...`, status: "running" });
      const layoutCode = await withTimeout(
        improveFileLayout(originalPrompt2, selectedLanguage, fileToGenerate.path, currentContent, addDetailedLog, incrementRequests, incrementResponses),
        POST_PROCESS_TIMEOUT,
        () => {
          addLog({ source: "layout", message: `Layout improvement for ${fileToGenerate.path} timed out. Skipping.`, status: "error" });
          return currentContent;
        }
      );
      if (layoutCode !== currentContent) {
        currentContent = layoutCode;
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: currentContent } : f));
        addLog({ source: "layout", message: `Layout improved for ${fileToGenerate.path}`, status: "success" });
      }
      addLog({ source: "qa", message: `Performing final QA check for ${fileToGenerate.path}...`, status: "running" });
      const qaCode = await withTimeout(
        performQualityAssurance(originalPrompt2, selectedLanguage, fileToGenerate.path, currentContent, addDetailedLog, incrementRequests, incrementResponses),
        POST_PROCESS_TIMEOUT,
        () => {
          addLog({ source: "qa", message: `QA check for ${fileToGenerate.path} timed out. Skipping.`, status: "error" });
          return currentContent;
        }
      );
      if (qaCode !== currentContent) {
        currentContent = qaCode;
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: qaCode } : f));
        addLog({ source: "qa", message: `Final fixes applied to ${fileToGenerate.path}`, status: "success" });
      } else {
        addLog({ source: "qa", message: `No issues found in ${fileToGenerate.path}`, status: "info" });
      }
      addLog({ source: "security-analyst", message: `Performing security analysis for ${fileToGenerate.path}...`, status: "running" });
      const securityResult = await withTimeout(
        runSecurityAnalysis(fileToGenerate.path, currentContent, addDetailedLog, incrementRequests, incrementResponses),
        POST_PROCESS_TIMEOUT,
        () => {
          addLog({ source: "security-analyst", message: `Security analysis for ${fileToGenerate.path} timed out. Skipping.`, status: "error" });
          return { success: true, feedback: "Timeout" };
        }
      );
      if (!securityResult.success && securityResult.feedback !== "Timeout") {
        addLog({ source: "security-analyst", message: `Security/Best-practice issues found: ${securityResult.feedback}`, status: "error" });
        try {
          addLog({ source: "debugger", message: `Debugger analyzing security report for ${fileToGenerate.path}...`, status: "running" });
          const fixRequest = await debugAndProposeFix(originalPrompt2, fileToGenerate, currentContent, securityResult.feedback, dependencyContext || "", addDetailedLog, incrementRequests, incrementResponses);
          addLog({ source: "refactor", message: `Applying security fix to ${fixRequest.filePath}...`, status: "running" });
          const fileToRefactorContent = fixRequest.filePath === fileToGenerate.path ? currentContent : allGeneratedCodeRecord[fixRequest.filePath];
          if (!fileToRefactorContent) throw new Error(`Security fix failed: could not find content for ${fixRequest.filePath}`);
          const refactoredContent = await refactorFileContent(fixRequest, fileToRefactorContent, addDetailedLog, incrementRequests, incrementResponses);
          if (fixRequest.filePath === fileToGenerate.path) {
            currentContent = refactoredContent;
          } else {
            allGeneratedCodeRecord[fixRequest.filePath] = refactoredContent;
          }
          setFiles((prev) => prev.map((f) => f.path === fixRequest.filePath ? { ...f, content: refactoredContent } : f));
          addLog({ source: "refactor", message: `Applied security fix to ${fixRequest.filePath}.`, status: "success" });
        } catch (e) {
          addLog({ source: "debugger", message: `Failed to auto-fix security issue: ${e.message}`, status: "error" });
        }
      } else if (securityResult.success && securityResult.feedback !== "Timeout") {
        addLog({ source: "security-analyst", message: `No security issues found in ${fileToGenerate.path}`, status: "success" });
      }
    } else {
      addLog({ source: "system", message: `Could not fix ${fileToGenerate.path} after ${MAX_CORRECTION_ATTEMPTS} attempts. Reverting to last good version.`, status: "error" });
      setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: lastSuccessfulContent } : f));
    }
    return { status: fileIsCorrect ? "success" : "failure", failureHistory, finalContent: currentContent };
  }, [addLog, addDetailedLog, selectedLanguage, files, updateProjectHistory, incrementRequests, incrementResponses, testingPreference]);
  const handleAttemptFix = useCallback3(async () => {
    if (!lastFailureContext) return;
    setAppPhase("generating-code");
    setChatHistory((prev) => {
      const lastMessage = prev[prev.length - 1];
      if (lastMessage && lastMessage.isFailure) {
        return prev.slice(0, -1);
      }
      return prev;
    });
    if (mode === "coder") {
      addLog({ source: "system", message: "Attempting to fix project generation errors...", status: "info" });
      const { originalPrompt: originalPrompt2, plannedFiles, failedFiles } = lastFailureContext;
      const filesToProcess = plannedFiles.filter((pf) => failedFiles.some((ff) => ff.path === pf.path));
      const newFinalFailures = [];
      const generatedCodeRecord = {};
      files.forEach((f) => {
        if (f.status === "generated") {
          generatedCodeRecord[f.path] = f.content;
        }
      });
      for (const fileToGenerate of filesToProcess) {
        const dependencyContext = fileToGenerate.dependencies?.map((depPath) => `// FILE: ${depPath}

${generatedCodeRecord[depPath] || `// Error: Dependency not found: ${depPath}`}`).join("\n\n---\n\n");
        const { status, failureHistory, finalContent } = await processFileGeneration(originalPrompt2, fileToGenerate, generatedCodeRecord, dependencyContext);
        if (status === "clarification_needed") {
          newFinalFailures.push({ path: fileToGenerate.path, reason: "Process requires clarification, cannot auto-fix." });
          continue;
        }
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: status === "success" ? "generated" : "failed", content: finalContent } : f));
        if (status === "success") {
          generatedCodeRecord[fileToGenerate.path] = finalContent;
        } else {
          newFinalFailures.push({ path: fileToGenerate.path, reason: failureHistory.join("\n") });
        }
      }
      addLog({ source: "project-cto", message: "Performing final project review after fix attempt...", status: "running" });
      const logSummary = newFinalFailures.length > 0 ? `Fix attempt failed with ${newFinalFailures.length} unresolved error(s):
${newFinalFailures.map((f) => `- ${f.path}: ${f.reason}`).join("\n")}` : "Fix attempt completed successfully.";
      const verdict = await finalProjectReview(originalPrompt2, plannedFiles, logSummary, addDetailedLog, incrementRequests, incrementResponses);
      const isSuccess = newFinalFailures.length === 0;
      if (!isSuccess) {
        setLastFailureContext({ originalPrompt: originalPrompt2, plannedFiles, failedFiles: newFinalFailures });
      } else {
        setLastFailureContext(null);
        try {
          addLog({ source: "infrastructure", message: "Generating Docker files and README...", status: "running" });
          const infraFiles = await generateInfrastructureFiles(projectName, projectEpics, files, addDetailedLog, incrementRequests, incrementResponses);
          setFiles((prev) => [...prev, ...infraFiles.map((f) => ({ ...f, status: "generated" }))]);
          addLog({ source: "infrastructure", message: "Docker orchestration files created.", status: "success" });
        } catch (e) {
          addLog({ source: "infrastructure", message: `Failed to generate Docker files: ${e.message}`, status: "error" });
        }
      }
      setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: verdict, isFailure: !isSuccess, showSendToCanvas: isSuccess && plannedFiles.length > 0 }]);
      setAppPhase("ready");
    } else if (mode === "content") {
      addLog({ source: "system", message: "Attempting to fix content generation errors...", status: "info" });
      const { originalPrompt: originalPrompt2, plannedFiles, failedFiles } = lastFailureContext;
      const filesToProcess = plannedFiles.filter((pf) => failedFiles.some((ff) => ff.path === pf.path));
      const newFinalFailures = [];
      for (const fileToGenerate of filesToProcess) {
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: "regenerating" } : f));
        const { success, content, failureReason } = await generateAndRefineContent(
          originalPrompt2,
          fileToGenerate,
          wordCount,
          keywords,
          audience,
          tone,
          addLog,
          addDetailedLog,
          (content2) => setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: content2 } : f)),
          incrementRequests,
          incrementResponses
        );
        if (success) {
          let finalContent = content;
          try {
            addLog({ source: "humanizer", message: `Humanizing content for ${fileToGenerate.path}...`, status: "running" });
            finalContent = await humanizeContent(content, wordCount, addDetailedLog, incrementRequests, incrementResponses);
            addLog({ source: "humanizer", message: `Content for ${fileToGenerate.path} humanized.`, status: "success" });
          } catch (e) {
            addLog({ source: "humanizer", message: `Could not humanize content for ${fileToGenerate.path}. Error: ${e.message}`, status: "error" });
          }
          setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: "generated", content: finalContent } : f));
        } else {
          newFinalFailures.push({ path: fileToGenerate.path, reason: failureReason || "Failed to meet criteria." });
          setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: "failed", content } : f));
        }
      }
      const isSuccess = newFinalFailures.length === 0;
      const verdict = isSuccess ? "SUCCESS: The content was successfully fixed and regenerated." : `FAILURE: The fix attempt failed for ${newFinalFailures.map((f) => f.path).join(", ")}.`;
      if (!isSuccess) {
        setLastFailureContext({ originalPrompt: originalPrompt2, plannedFiles, failedFiles: newFinalFailures });
      } else {
        setLastFailureContext(null);
      }
      setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: verdict, isFailure: !isSuccess, showSendToCanvas: isSuccess && plannedFiles.length > 0 }]);
      setAppPhase("ready");
    }
  }, [lastFailureContext, processFileGeneration, addLog, addDetailedLog, files, incrementRequests, incrementResponses, mode, wordCount, keywords, audience, tone, projectName, projectEpics]);
  const handleSkipFix = useCallback3(() => {
    setLastFailureContext(null);
    setChatHistory((prev) => prev.map((msg) => msg.isFailure ? { ...msg, isFailure: false } : msg));
    addLog({ source: "system", message: "User skipped fix attempt.", status: "info" });
  }, [addLog]);
  const finishProjectGeneration = useCallback3(async (allGeneratedFiles, completedEpics) => {
    const finalTime = elapsedTimeRef.current;
    const finalStats = apiStatsRef.current;
    addLog({ source: "project-cto", message: "Performing final project review...", status: "running" });
    const allFilePlans = projectHistory.map((h) => ({ ...projectPlan.find((p) => p.path === h.filePath), id: crypto.randomUUID(), path: h.filePath, description: h.promptHistory[0] }));
    const failedFiles = allGeneratedFiles.filter((f) => f.status === "failed");
    const logSummary = failedFiles.length > 0 ? `Generation failed with ${failedFiles.length} unresolved error(s):
${failedFiles.map((f) => `- ${f.path}`).join("\n")}` : "Generation completed with all files successfully verified and corrected.";
    const verdict = await finalProjectReview(originalPrompt, allFilePlans, logSummary, addDetailedLog, incrementRequests, incrementResponses);
    const isSuccess = failedFiles.length === 0;
    if (isSuccess && mode === "coder") {
      try {
        addLog({ source: "infrastructure", message: "Generating Docker files and README...", status: "running" });
        const infraFiles = await generateInfrastructureFiles(projectName, completedEpics, allGeneratedFiles, addDetailedLog, incrementRequests, incrementResponses);
        setFiles((prev) => [...prev, ...infraFiles.map((f) => ({ ...f, status: "generated" }))]);
        addLog({ source: "infrastructure", message: "Docker orchestration files created.", status: "success" });
      } catch (e) {
        addLog({ source: "infrastructure", message: `Failed to generate Docker files: ${e.message}`, status: "error" });
      }
    }
    if (!isSuccess) {
      setLastFailureContext({
        originalPrompt,
        plannedFiles: allFilePlans,
        failedFiles: failedFiles.map((f) => ({ path: f.path, reason: "Failed during generation" }))
      });
    } else {
      setLastFailureContext(null);
    }
    const statsSummary = `

---
**Project Generation Summary**
- **Total Time:** ${formatTime(finalTime)}
- **AI Requests:** ${finalStats.requests}
- **AI Responses:** ${finalStats.responses}`;
    const finalVerdict = verdict + statsSummary;
    setChatHistory((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: finalVerdict, isFailure: !isSuccess, showSendToCanvas: isSuccess && allFilePlans.length > 0 }]);
    setAppPhase("ready");
  }, [addLog, addDetailedLog, originalPrompt, projectHistory, projectPlan, incrementRequests, incrementResponses, mode, projectName]);
  let startFeatureGeneration;
  const planNextTask = useCallback3(async (epics) => {
    const epicIndex = epics.findIndex((e) => e.status !== "completed" && e.status !== "failed");
    if (epicIndex === -1) {
      await finishProjectGeneration(files, epics.filter((e) => e.status === "completed"));
      return;
    }
    const currentEpic = epics[epicIndex];
    const featureIndex = currentEpic.features.findIndex((f) => f.status === "pending");
    if (featureIndex === -1) {
      addLog({ source: "summarizer", message: `All features for epic "${currentEpic.name}" are complete. Creating technical summary...`, status: "running" });
      const epicFileContent = files.filter((file) => currentEpic.features.flatMap((f) => f.files.map((fp) => fp.path)).includes(file.path)).map((f) => `// FILE: ${f.path}

${f.content}`).join("\n\n---\n\n");
      try {
        const { summary, apiContract } = await summarizeEpic(currentEpic, epicFileContent, addDetailedLog, incrementRequests, incrementResponses);
        const updatedEpics = epics.map((e) => e.id === currentEpic.id ? { ...e, status: "completed", summary, apiContract } : e);
        setProjectEpics(updatedEpics);
        addLog({ source: "summarizer", message: `Summary created for epic "${currentEpic.name}". ${apiContract ? "API Contract generated." : ""}`, status: "success" });
        await planNextTask(updatedEpics);
      } catch (error) {
        addLog({ source: "summarizer", message: `Failed to summarize epic "${currentEpic.name}".`, status: "error" });
        const updatedEpics = epics.map((e) => e.id === currentEpic.id ? { ...e, status: "failed" } : e);
        setProjectEpics(updatedEpics);
        await finishProjectGeneration(files, updatedEpics.filter((e) => e.status === "completed"));
      }
      return;
    }
    const currentFeature = currentEpic.features[featureIndex];
    setProjectEpics((prev) => prev.map((e) => e.id === currentEpic.id ? {
      ...e,
      status: "planning",
      features: e.features.map((f) => f.id === currentFeature.id ? { ...f, status: "planning" } : f)
    } : e));
    addLog({ source: "planner", message: `Planning files for feature: "${currentFeature.name}" (from epic "${currentEpic.name}")...`, status: "running" });
    const completedEpicsContext = epics.filter((e) => e.status === "completed").map((e) => {
      let context = `--- EPIC: ${e.name} ---
${e.summary || "No summary available."}`;
      if (e.apiContract) {
        context += `

**API Contract for ${e.name}:**
\`\`\`json
${e.apiContract}
\`\`\``;
      }
      return context;
    }).join("\n\n");
    const existingFilesContext = files.map((f) => f.path).join(", ");
    try {
      const subPlanRaw = await planProjectStructure(originalPrompt, selectedLanguage, currentFeature, currentEpic, completedEpicsContext, existingFilesContext, addDetailedLog, incrementRequests, incrementResponses);
      const subPlan = subPlanRaw.map((pf) => ({ ...pf, id: crypto.randomUUID() }));
      setProjectPlan(subPlan);
      addLog({ source: "planner", message: `Created plan with ${subPlan.length} files for feature "${currentFeature.name}".`, status: "success" });
      if (approvalMode === "auto") {
        addLog({ source: "system", message: `Plan for feature "${currentFeature.name}" auto-approved in Silent Mode. Starting generation...`, status: "info" });
        await startFeatureGeneration(subPlan, epics, epicIndex, featureIndex);
      } else {
        setProjectEpics((prev) => prev.map((e) => e.id === currentEpic.id ? { ...e, status: "reviewing" } : e));
        setChatHistory((prev) => [...prev, {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `I've created a plan for the "${currentFeature.name}" feature. Please review and approve it to continue.`
        }]);
        setAppPhase("reviewing-plan");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "planner", message: `Critical error planning feature "${currentFeature.name}": ${errorMessage}`, status: "error" });
      setProjectEpics((prev) => prev.map((e) => e.id === currentEpic.id ? { ...e, status: "failed" } : e));
      setAppPhase("ready");
    }
  }, [addLog, addDetailedLog, finishProjectGeneration, originalPrompt, selectedLanguage, incrementRequests, incrementResponses, files, approvalMode, startFeatureGeneration]);
  const executeGenerationPlan = useCallback3(async (plan, index, allGeneratedCodeRecord, clarificationHistory, epics, epicIndex, featureIndex) => {
    if (index >= plan.length) {
      const currentEpic = epics[epicIndex];
      const currentFeature = currentEpic.features[featureIndex];
      const updatedEpics = epics.map((e) => e.id === currentEpic.id ? {
        ...e,
        features: e.features.map((f) => f.id === currentFeature.id ? { ...f, status: "completed" } : f)
      } : e);
      setProjectEpics(updatedEpics);
      await planNextTask(updatedEpics);
      return;
    }
    while (isPausedForRequestRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    const fileToGenerate = plan[index];
    const dependencyContext = fileToGenerate.dependencies?.map((depPath) => `// FILE: ${depPath}

${allGeneratedCodeRecord[depPath] || `// Error: Dependency not found: ${depPath}`}`).join("\n\n---\n\n");
    const apiContractContext = epics.filter((e) => e.status === "completed" && e.apiContract).map((e) => `// --- API Contract from Epic: ${e.name} ---
// This is a reference for available backend endpoints.

${e.apiContract}`).join("\n\n");
    const fullContext = [dependencyContext, apiContractContext].filter(Boolean).join("\n\n---\n\n");
    const midGenRequest = queuedRequestRef.current;
    if (midGenRequest) {
      setQueuedRequest(null);
    }
    const result = await processFileGeneration(originalPrompt, fileToGenerate, allGeneratedCodeRecord, fullContext, clarificationHistory, midGenRequest ?? void 0);
    if (result.status === "clarification_needed" && result.question) {
      setPausedGenerationState({
        plan,
        currentIndex: index,
        allGeneratedCodeRecord,
        clarificationHistory: [...clarificationHistory, { question: result.question, answer: "" }],
        // Placeholder for answer
        epicIndex,
        featureIndex
      });
      setAppPhase("awaiting-clarification");
      setChatHistory((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: result.question }]);
      return;
    }
    setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: result.status === "success" ? "generated" : "failed", content: result.finalContent } : f));
    const newCodeRecord = { ...allGeneratedCodeRecord };
    if (result.status === "success") {
      newCodeRecord[fileToGenerate.path] = result.finalContent;
    }
    await executeGenerationPlan(plan, index + 1, newCodeRecord, clarificationHistory, epics, epicIndex, featureIndex);
  }, [processFileGeneration, originalPrompt, planNextTask, setQueuedRequest]);
  startFeatureGeneration = useCallback3(async (plan, epics, epicIndex, featureIndex) => {
    if (epicIndex >= epics.length) return;
    if (plan.length === 0) {
      const currentEpic2 = epics[epicIndex];
      const currentFeature2 = currentEpic2.features[featureIndex];
      const updatedEpics = epics.map((e) => e.id === currentEpic2.id ? {
        ...e,
        features: e.features.map((f) => f.id === currentFeature2.id ? { ...f, status: "completed" } : f)
      } : e);
      setProjectEpics(updatedEpics);
      await planNextTask(updatedEpics);
      return;
    }
    const currentEpic = epics[epicIndex];
    const currentFeature = currentEpic.features[featureIndex];
    setAppPhase("generating-code");
    setProjectEpics((prev) => prev.map((e) => e.id === currentEpic.id ? {
      ...e,
      status: "generating",
      features: e.features.map((f) => f.id === currentFeature.id ? { ...f, status: "generating" } : f)
    } : e));
    setPanelVisibility((prev) => ({ ...prev, editor: true }));
    if (isMobile) setMobileActiveView("agentLogs");
    const newQueuedFiles = plan.map((pf) => ({ path: pf.path, content: `// Queued for generation...`, status: "queued" }));
    setFiles((prev) => [...prev, ...newQueuedFiles]);
    if (plan.length > 0 && !selectedFile) setSelectedFile(plan[0].path);
    const initialCodeRecord = files.reduce((acc, file) => {
      if (file.status === "generated") acc[file.path] = file.content;
      return acc;
    }, {});
    await executeGenerationPlan(plan, 0, initialCodeRecord, [], epics, epicIndex, featureIndex);
  }, [isMobile, selectedFile, files, executeGenerationPlan, planNextTask]);
  const handleCoderModeGeneration = useCallback3(async (message, attachedFileContent) => {
    setOriginalPrompt(message);
    setAppPhase("planning-epics");
    addLog({ source: "system", message: "Scaffolding Agent analyzing project complexity...", status: "running" });
    try {
      const complexityResult = await determineComplexityAndPlan(message, selectedLanguage, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
      if (complexityResult.complexity === "simple") {
        addLog({ source: "system", message: "Simple project detected. Bypassing architect and generating file plan directly.", status: "info" });
        const simpleFeature = {
          id: crypto.randomUUID(),
          name: "Core",
          description: "Main functionality for the simple project",
          files: [],
          // this will be populated by the plan
          status: "pending"
        };
        const simpleEpic = {
          id: crypto.randomUUID(),
          name: "main",
          description: "Main application epic",
          status: "pending",
          features: [simpleFeature]
        };
        setProjectEpics([simpleEpic]);
        const subPlan = complexityResult.plan.map((pf) => ({ ...pf, id: crypto.randomUUID() }));
        setProjectPlan(subPlan);
        await startFeatureGeneration(subPlan, [simpleEpic], 0, 0);
      } else {
        addLog({ source: "architect", message: "Complex project detected. Breaking down the project into high-level epics...", status: "running" });
        const plannedEpicsRaw = await planProjectEpics(message, selectedLanguage, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
        const epics = plannedEpicsRaw.map((e) => ({
          ...e,
          id: crypto.randomUUID(),
          status: "pending",
          features: e.features.map((f) => ({ ...f, id: crypto.randomUUID(), files: [], status: "pending" }))
        }));
        setProjectEpics(epics);
        addLog({ source: "architect", message: `Project architecture defined with ${epics.length} epic(s).`, status: "success" });
        const blueprintFiles = [];
        for (const epic of epics) {
          if (epic.blueprintId) {
            const blueprint = getBlueprintById(epic.blueprintId);
            if (blueprint) {
              addLog({ source: "system", message: `Applying blueprint "${blueprint.name}" for epic "${epic.name}".`, status: "info" });
              const filesFromBlueprint = blueprint.getFiles(epic.name).map((f) => ({ ...f, status: "generated" }));
              blueprintFiles.push(...filesFromBlueprint);
            }
          }
        }
        if (blueprintFiles.length > 0) {
          setFiles((prev) => [...prev, ...blueprintFiles]);
          if (!selectedFile && blueprintFiles[0]) {
            setSelectedFile(blueprintFiles[0].path);
          }
        }
        setChatHistory((prev) => [...prev, {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `I've broken your project into ${epics.length} component(s): ${epics.map((e) => `"${e.name}"`).join(", ")}. We will now proceed to plan the first component.`
        }]);
        await planNextTask(epics);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Critical error during planning: ${errorMessage}`, status: "error" });
      setChatHistory((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: `A critical error occurred during planning: ${errorMessage}` }]);
      setAppPhase("idle");
    }
  }, [addLog, addDetailedLog, selectedLanguage, planNextTask, incrementRequests, incrementResponses, selectedFile, startFeatureGeneration]);
  const handleFeaturePlanApproval = useCallback3(async () => {
    if (projectPlan.length === 0) return;
    const epicIndex = projectEpics.findIndex((e) => e.status === "reviewing");
    if (epicIndex === -1) {
      addLog({ source: "system", message: `Error: Could not find epic in 'reviewing' state for plan approval.`, status: "error" });
      return;
    }
    const currentEpic = projectEpics[epicIndex];
    const featureIndex = currentEpic.features.findIndex((f) => f.status === "planning");
    if (featureIndex === -1) {
      addLog({ source: "system", message: `Error: Could not find feature in 'planning' state for plan approval.`, status: "error" });
      return;
    }
    addLog({ source: "system", message: `User approved plan for feature "${currentEpic.features[featureIndex].name}". Starting code generation...`, status: "info" });
    await startFeatureGeneration(projectPlan, projectEpics, epicIndex, featureIndex);
  }, [projectPlan, addLog, projectEpics, startFeatureGeneration]);
  const resumeGeneration = useCallback3(async (userAnswer) => {
    if (!pausedGenerationState) return;
    addLog({ source: "system", message: `Resuming generation with user clarification...`, status: "info" });
    setAppPhase("generating-code");
    const { plan, currentIndex, allGeneratedCodeRecord, clarificationHistory, epicIndex, featureIndex } = pausedGenerationState;
    const updatedClarificationHistory = [...clarificationHistory];
    updatedClarificationHistory[updatedClarificationHistory.length - 1].answer = userAnswer;
    setPausedGenerationState(null);
    await executeGenerationPlan(plan, currentIndex, allGeneratedCodeRecord, updatedClarificationHistory, projectEpics, epicIndex, featureIndex);
  }, [pausedGenerationState, executeGenerationPlan, addLog, projectEpics]);
  const handleSimpleContentGeneration = useCallback3(async (message, attachedFileContent, contentSpec) => {
    setOriginalPrompt(message);
    addLog({ source: "system", message: `Starting content generation for type: ${contentType}`, status: "info" });
    const specKeywords = contentSpec?.keywords || "";
    const specAudience = contentSpec?.audience || "";
    const specTone = contentSpec?.tone || "Optional";
    const plannedFilesRaw = await planContentProject(message, contentType, wordCount, specKeywords, specAudience, specTone, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
    const plannedFiles = plannedFilesRaw.map((p) => ({ ...p, id: crypto.randomUUID() }));
    setProjectPlan(plannedFiles);
    setFiles(plannedFiles.map((pf) => ({ path: pf.path, content: `Content generation is queued...`, status: "queued" })));
    if (plannedFiles.length > 0) setSelectedFile(plannedFiles[0].path);
    const finalFailures = [];
    for (const fileToGenerate of plannedFiles) {
      const { success, content, failureReason } = await generateAndRefineContent(
        message,
        fileToGenerate,
        wordCount,
        specKeywords,
        specAudience,
        specTone,
        addLog,
        addDetailedLog,
        (content2) => setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, content: content2 } : f)),
        incrementRequests,
        incrementResponses
      );
      if (success) {
        updateProjectHistory(fileToGenerate.path, fileToGenerate.description);
        let finalContent = content;
        try {
          addLog({ source: "humanizer", message: `Humanizing content for ${fileToGenerate.path}...`, status: "running" });
          finalContent = await humanizeContent(content, wordCount, addDetailedLog, incrementRequests, incrementResponses);
          addLog({ source: "humanizer", message: `Content for ${fileToGenerate.path} humanized.`, status: "success" });
          const finalWordCount = countWords2(finalContent);
          const targetText = isNaN(parseInt(wordCount)) ? wordCount : `~${wordCount}`;
          addLog({ source: "word-counter", message: `Current word count: ${finalWordCount}. Target: ${targetText}.`, status: "info" });
        } catch (e) {
          addLog({ source: "humanizer", message: `Could not humanize content for ${fileToGenerate.path}. Using original version. Error: ${e.message}`, status: "error" });
        }
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: "generated", content: finalContent } : f));
      } else {
        finalFailures.push({ path: fileToGenerate.path, reason: failureReason || "Failed to meet criteria." });
        setFiles((prev) => prev.map((f) => f.path === fileToGenerate.path ? { ...f, status: "failed" } : f));
      }
    }
    const isSuccess = finalFailures.length === 0;
    let verdict = isSuccess ? `SUCCESS: Your content has been generated successfully.` : `FAILURE: The content generation failed because the following files could not meet the requirements: ${finalFailures.map((f) => f.path).join(", ")}.`;
    if (!isSuccess) {
      setLastFailureContext({
        originalPrompt: message,
        plannedFiles,
        failedFiles: finalFailures
      });
    }
    setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: verdict, isFailure: !isSuccess, showSendToCanvas: isSuccess && plannedFiles.length > 0 }]);
  }, [addLog, addDetailedLog, contentType, wordCount, updateProjectHistory, incrementRequests, incrementResponses]);
  const handleNovelGeneration = useCallback3(async (message, attachedFileContent) => {
    addLog({ source: "system", message: "Starting novel generation...", status: "info" });
    setOriginalPrompt(message);
    const fullPrompt = { premise: message, spec: novelSpec };
    addLog({ source: "content-planner", message: "Planning the novel structure...", status: "running" });
    const plannedChaptersRaw = await planNovelProject(fullPrompt, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
    const plannedChapters = plannedChaptersRaw.map((p) => ({ ...p, id: crypto.randomUUID() }));
    setProjectPlan(plannedChapters);
    setFiles(plannedChapters.map((p) => ({ path: p.path, content: "Queued for writing...", status: "queued" })));
    if (plannedChapters.length > 0) setSelectedFile(plannedChapters[0].path);
    addLog({ source: "content-planner", message: `Novel planned with ${plannedChapters.length} chapters.`, status: "success" });
    let previousChapterSummary = "This is the first chapter of the novel.";
    const failedChapters = [];
    for (const chapterPlan of plannedChapters) {
      try {
        addLog({ source: "novel-orchestrator", message: `Beginning work on ${chapterPlan.path}...`, status: "running" });
        const { success, content, failureReason } = await generateAndRefineChapter(
          fullPrompt,
          chapterPlan,
          previousChapterSummary,
          addLog,
          addDetailedLog,
          (content2) => {
            setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, content: content2 } : f));
            if (selectedFile !== chapterPlan.path) {
              setSelectedFile(chapterPlan.path);
            }
          },
          incrementRequests,
          incrementResponses
        );
        if (!success) throw new Error(failureReason || "Content failed verification after multiple attempts.");
        let finalContent = content;
        try {
          addLog({ source: "humanizer", message: `Humanizing ${chapterPlan.path}...`, status: "running" });
          finalContent = await humanizeContent(content, novelSpec.wordsPerChapter, addDetailedLog, incrementRequests, incrementResponses);
          addLog({ source: "humanizer", message: `Successfully humanized ${chapterPlan.path}.`, status: "success" });
          const finalWordCount = countWords2(finalContent);
          addLog({ source: "word-counter", message: `Current word count: ${finalWordCount}. Target: ~${novelSpec.wordsPerChapter}.`, status: "info" });
        } catch (e) {
          addLog({ source: "humanizer", message: `Could not humanize ${chapterPlan.path}. Using original version. Error: ${e.message}`, status: "error" });
        }
        updateProjectHistory(chapterPlan.path, chapterPlan.description);
        setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, status: "generated", content: finalContent } : f));
        addLog({ source: "summarizer", message: `Summarizing ${chapterPlan.path}...`, status: "running" });
        previousChapterSummary = await summarizeText(finalContent, addDetailedLog, incrementRequests, incrementResponses);
        addLog({ source: "summarizer", message: `Summary created for ${chapterPlan.path}.`, status: "success" });
        addLog({ source: "novel-orchestrator", message: `Successfully completed ${chapterPlan.path}.`, status: "success" });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        addLog({ source: "system", message: `Failed to generate chapter ${chapterPlan.path}. Reason: ${errorMessage}`, status: "error" });
        failedChapters.push({ path: chapterPlan.path, reason: errorMessage });
        setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, status: "failed" } : f));
      }
    }
    const isSuccess = failedChapters.length === 0;
    let verdict;
    if (!isSuccess) {
      const failedPaths = failedChapters.map((f) => f.path).join(", ");
      verdict = `PARTIAL SUCCESS: Your novel generation finished, but the following chapters failed: ${failedPaths}. You can review the successful chapters and attempt to regenerate the failed ones.`;
      addLog({ source: "qa", message: `Novel generation finished with ${failedChapters.length} failures.`, status: "error" });
      setLastFailureContext({
        originalPrompt: message,
        plannedFiles: plannedChapters,
        failedFiles: failedChapters
      });
    } else {
      verdict = `SUCCESS: Your novel has been generated successfully! All ${plannedChapters.length} chapters have been written.`;
      addLog({ source: "qa", message: "Final check complete. Novel generation successful.", status: "success" });
    }
    setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: verdict, isFailure: false, showSendToCanvas: isSuccess && plannedChapters.length > 0 }]);
  }, [addLog, addDetailedLog, novelSpec, selectedFile, updateProjectHistory, incrementRequests, incrementResponses]);
  const handleTutorialBookGeneration = useCallback3(async (message, attachedFileContent) => {
    addLog({ source: "system", message: "Starting tutorial book generation...", status: "info" });
    setOriginalPrompt(message);
    const fullPrompt = { premise: message, spec: tutorialBookSpec };
    addLog({ source: "content-planner", message: "Planning the book curriculum...", status: "running" });
    const plannedChaptersRaw = await planTutorialBookProject(fullPrompt, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
    const plannedChapters = plannedChaptersRaw.map((p) => ({ ...p, id: crypto.randomUUID() }));
    setProjectPlan(plannedChapters);
    setFiles(plannedChapters.map((p) => ({ path: p.path, content: "Queued for writing...", status: "queued" })));
    if (plannedChapters.length > 0) setSelectedFile(plannedChapters[0].path);
    addLog({ source: "content-planner", message: `Tutorial book planned with ${plannedChapters.length} chapters.`, status: "success" });
    let previousChapterSummary = "This is the first chapter of the book, an introduction.";
    const failedChapters = [];
    for (const chapterPlan of plannedChapters) {
      try {
        addLog({ source: "tutorial-orchestrator", message: `Beginning work on ${chapterPlan.path}...`, status: "running" });
        const { success, content, failureReason } = await generateAndRefineTutorialChapter(
          fullPrompt,
          chapterPlan,
          previousChapterSummary,
          addLog,
          addDetailedLog,
          (content2) => {
            setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, content: content2 } : f));
            if (selectedFile !== chapterPlan.path) {
              setSelectedFile(chapterPlan.path);
            }
          },
          incrementRequests,
          incrementResponses
        );
        if (!success) throw new Error(failureReason || "Content failed verification after multiple attempts.");
        let finalContent = content;
        try {
          addLog({ source: "humanizer", message: `Humanizing ${chapterPlan.path}...`, status: "running" });
          finalContent = await humanizeContent(content, tutorialBookSpec.wordsPerChapter, addDetailedLog, incrementRequests, incrementResponses);
          addLog({ source: "humanizer", message: `Successfully humanized ${chapterPlan.path}.`, status: "success" });
          const finalWordCount = countWords2(finalContent);
          addLog({ source: "word-counter", message: `Current word count: ${finalWordCount}. Target: ~${tutorialBookSpec.wordsPerChapter}.`, status: "info" });
        } catch (e) {
          addLog({ source: "humanizer", message: `Could not humanize ${chapterPlan.path}. Using original version. Error: ${e.message}`, status: "error" });
        }
        updateProjectHistory(chapterPlan.path, chapterPlan.description);
        setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, status: "generated", content: finalContent } : f));
        addLog({ source: "summarizer", message: `Summarizing ${chapterPlan.path}...`, status: "running" });
        previousChapterSummary = await summarizeText(finalContent, addDetailedLog, incrementRequests, incrementResponses);
        addLog({ source: "summarizer", message: `Summary created for ${chapterPlan.path}.`, status: "success" });
        addLog({ source: "tutorial-orchestrator", message: `Successfully completed ${chapterPlan.path}.`, status: "success" });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        addLog({ source: "system", message: `Failed to generate chapter ${chapterPlan.path}. Reason: ${errorMessage}`, status: "error" });
        failedChapters.push({ path: chapterPlan.path, reason: errorMessage });
        setFiles((prev) => prev.map((f) => f.path === chapterPlan.path ? { ...f, status: "failed" } : f));
      }
    }
    const isSuccess = failedChapters.length === 0;
    let verdict;
    if (!isSuccess) {
      const failedPaths = failedChapters.map((f) => f.path).join(", ");
      verdict = `PARTIAL SUCCESS: Your tutorial book generation finished, but the following chapters failed: ${failedPaths}. You can review the successful chapters and attempt to regenerate the failed ones.`;
      setLastFailureContext({
        originalPrompt: message,
        plannedFiles: plannedChapters,
        failedFiles: failedChapters
      });
    } else {
      verdict = `SUCCESS: Your tutorial book has been generated successfully! All ${plannedChapters.length} chapters have been written.`;
    }
    setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: verdict, isFailure: false, showSendToCanvas: isSuccess && plannedChapters.length > 0 }]);
  }, [addLog, addDetailedLog, tutorialBookSpec, selectedFile, updateProjectHistory, incrementRequests, incrementResponses]);
  const handlePowerPointGeneration = useCallback3(async (message, attachedFileContent) => {
    addLog({ source: "system", message: "Starting PowerPoint presentation generation...", status: "info" });
    setOriginalPrompt(message);
    try {
      const fullSpec = powerPointSpec;
      addLog({ source: "system", message: "User-defined slide plan received. Compiling PPTX file...", status: "info" });
      const pptx = new PptxGenJS();
      pptx.layout = "LAYOUT_16x9";
      for (const [index, slideSpec] of fullSpec.slides.entries()) {
        addLog({ source: "writer", message: `Processing slide ${index + 1}: "${slideSpec.title}"`, status: "running" });
        let imageBase64 = null;
        if (slideSpec.imagePrompt) {
          addLog({ source: "writer", message: `Generating image for slide ${index + 1}...`, status: "running" });
          try {
            await rateLimitImageApi(addDetailedLog);
            const imageUrl = generateImageUrl({ prompt: slideSpec.imagePrompt, width: 1024, height: 576 });
            const response = await fetch(imageUrl);
            if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
            const blob = await response.blob();
            imageBase64 = await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
            addLog({ source: "writer", message: `Image added to slide ${index + 1}.`, status: "success" });
          } catch (imgError) {
            addLog({ source: "writer", message: `Failed to generate or add image for slide ${index + 1}: ${imgError.message}`, status: "error" });
          }
        }
        const slide = pptx.addSlide();
        const title = slideSpec.title;
        const content = slideSpec.content.split("\n").filter((p) => p.trim() !== "");
        const contentObjects = content.map((point) => ({ text: point, options: { breakLine: true } }));
        if (imageBase64) {
          switch (slideSpec.layout) {
            case "title":
              slide.addText(title, { x: 0, y: 0.25, w: "100%", h: 1, align: "center", fontSize: 48, bold: true });
              if (content.length > 0) {
                slide.addText(content.join("\n"), { x: 0, y: 1.5, w: "100%", h: 1, align: "center", fontSize: 24 });
              }
              const imgW = 4;
              const imgH = imgW * 9 / 16;
              const imgX = (10 - imgW) / 2;
              const imgY = 2.8;
              slide.addImage({ data: imageBase64, x: imgX, y: imgY, w: imgW, h: imgH });
              break;
            case "title_and_content":
              slide.addText(title, { x: 0.5, y: 0.2, w: "90%", h: 0.75, fontSize: 32, bold: true });
              slide.addText(contentObjects, { x: 0.5, y: 1.1, w: 4.5, h: 4.25, bullet: true, fontSize: 18 });
              const tacImgW = 4.5;
              const tacImgH = tacImgW * 9 / 16;
              slide.addImage({ data: imageBase64, x: 5.2, y: 1.1, w: tacImgW, h: tacImgH });
              break;
            case "content_with_caption":
              slide.addText(title, { x: 0.5, y: 0.2, w: "90%", h: 0.75, fontSize: 32, bold: true });
              const cwcImgW = 8;
              const cwcImgH = cwcImgW * 9 / 16;
              const cwcImgX = (10 - cwcImgW) / 2;
              slide.addImage({ data: imageBase64, x: cwcImgX, y: 1, w: cwcImgW, h: cwcImgH });
              slide.addText(contentObjects, { x: cwcImgX, y: 1.1 + cwcImgH, w: cwcImgW, h: 1, align: "center", fontSize: 14 });
              break;
            case "picture_with_caption":
              const pwcImgW = 9;
              const pwcImgH = pwcImgW * 9 / 16;
              const pwcImgX = (10 - pwcImgW) / 2;
              slide.addImage({ data: imageBase64, x: pwcImgX, y: 0.15, w: pwcImgW, h: pwcImgH });
              slide.addText(title, { x: 0, y: 0.25 + pwcImgH, w: "100%", h: 0.5, align: "center", fontSize: 20, bold: true });
              if (content.length > 0) {
                slide.addText(content.join("\n"), { x: 0, y: 0.75 + pwcImgH, w: "100%", h: 0.5, align: "center", fontSize: 14 });
              }
              break;
            case "two_content":
            case "comparison":
              slide.addText(title, { x: 0.5, y: 0.2, w: "90%", h: 0.75, fontSize: 32, bold: true });
              const midPoint = Math.ceil(contentObjects.length / 2);
              const leftContent = contentObjects.slice(0, midPoint);
              const rightContent = contentObjects.slice(midPoint);
              slide.addText(leftContent, { x: 0.5, y: 1.1, w: 4.5, h: 4.25, bullet: true, fontSize: 18 });
              const tcImgW = 4.5;
              const tcImgH = tcImgW * 9 / 16;
              const tcImgY = 1.1;
              slide.addImage({ data: imageBase64, x: 5.2, y: tcImgY, w: tcImgW, h: tcImgH });
              if (rightContent.length > 0) {
                slide.addText(rightContent, { x: 5.2, y: tcImgY + tcImgH + 0.2, w: 4.5, h: 4.25 - tcImgH - 0.2, bullet: true, fontSize: 18 });
              }
              break;
            default:
              slide.addText(title, { x: 0.5, y: 0.2, w: "90%", h: 0.75, fontSize: 32, bold: true });
              slide.addText(contentObjects, { x: 0.5, y: 1.1, w: 4.5, h: 4.25, bullet: true, fontSize: 18 });
              const defImgW = 4.5;
              const defImgH = defImgW * 9 / 16;
              slide.addImage({ data: imageBase64, x: 5.2, y: 1.1, w: defImgW, h: defImgH });
              break;
          }
        } else {
          switch (slideSpec.layout) {
            case "title":
              slide.masterName = "TITLE_SLIDE";
              slide.addText(title, { placeholder: "ctrTitle" });
              if (content.length > 0) slide.addText(content.join("\n"), { placeholder: "subTitle" });
              break;
            case "title_and_content":
              slide.masterName = "MASTER_SLIDE";
              slide.addText(title, { placeholder: "title" });
              slide.addText(contentObjects, { placeholder: "body", bullet: true });
              break;
            case "section_header":
              slide.masterName = "SECTION_HEAD";
              slide.addText(title, { placeholder: "title" });
              if (content.length > 0) slide.addText(content.join("\n"), { placeholder: "body" });
              break;
            case "two_content":
            case "comparison":
              slide.masterName = "TWO_CONTENT";
              slide.addText(title, { placeholder: "title" });
              const midPoint = Math.ceil(contentObjects.length / 2);
              slide.addText(contentObjects.slice(0, midPoint), { placeholder: "body" });
              slide.addText(contentObjects.slice(midPoint), { placeholder: "body2" });
              break;
            default:
              slide.addText(title, { x: 0.5, y: 0.2, w: "90%", h: 0.75, fontSize: 32, bold: true });
              slide.addText(contentObjects, { x: 0.5, y: 1.5, w: "90%", h: 5.5, bullet: true });
          }
        }
      }
      addLog({ source: "system", message: "Finalizing presentation... Please wait for download.", status: "running" });
      await pptx.writeFile({ fileName: `${projectName}.pptx` });
      addLog({ source: "system", message: "PowerPoint presentation generated successfully!", status: "success" });
      setChatHistory((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: "Your PowerPoint presentation has been generated and downloaded." }]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      addLog({ source: "system", message: `Failed to generate PowerPoint: ${errorMessage}`, status: "error" });
      setChatHistory((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: `An error occurred while generating the presentation: ${errorMessage}` }]);
    }
  }, [addLog, addDetailedLog, powerPointSpec, projectName, incrementRequests, incrementResponses]);
  const handleRegenerateFile = useCallback3(async (filePath) => {
    addLog({ source: "system", message: `Beginning regeneration for ${filePath}...`, status: "info" });
    setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, status: "regenerating" } : f));
    setAppPhase("generating-code");
    try {
      const filePlan = projectPlan.find((p) => p.path === filePath);
      if (!filePlan) throw new Error(`Could not find file plan for: ${filePath}`);
      let success, content, failureReason;
      const chapterIndex = projectPlan.findIndex((p) => p.path === filePath);
      if (chapterIndex === -1) throw new Error("Could not find chapter in project plan.");
      let prevSummary = "This is the first chapter.";
      if (chapterIndex > 0) {
        const prevChapterPath = projectPlan[chapterIndex - 1].path;
        const prevChapterContent = files.find((f) => f.path === prevChapterPath)?.content;
        if (!prevChapterContent) throw new Error(`Could not find content for previous chapter: ${prevChapterPath}`);
        addLog({ source: "summarizer", message: `Summarizing previous chapter (${prevChapterPath}) for context...`, status: "running" });
        prevSummary = await summarizeText(prevChapterContent, addDetailedLog, incrementRequests, incrementResponses);
      }
      let nextSummary = "This is the final chapter.";
      if (chapterIndex < projectPlan.length - 1) {
        const nextChapterPath = projectPlan[chapterIndex + 1].path;
        const nextChapterContent = files.find((f) => f.path === nextChapterPath)?.content;
        if (!nextChapterContent) throw new Error(`Could not find content for next chapter: ${nextChapterPath}`);
        addLog({ source: "summarizer", message: `Summarizing next chapter (${nextChapterPath}) for context...`, status: "running" });
        nextSummary = await summarizeText(nextChapterContent, addDetailedLog, incrementRequests, incrementResponses);
      }
      if (contentType === "novel") {
        const fullPrompt = { premise: originalPrompt, spec: novelSpec };
        ({ success, content, failureReason } = await regenerateChapter(
          fullPrompt,
          filePlan,
          prevSummary,
          nextSummary,
          addLog,
          addDetailedLog,
          (newContent) => setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, content: newContent } : f)),
          incrementRequests,
          incrementResponses
        ));
      } else if (contentType === "tutorial_book") {
        const fullPrompt = { premise: originalPrompt, spec: tutorialBookSpec };
        ({ success, content, failureReason } = await regenerateTutorialChapter(
          fullPrompt,
          filePlan,
          prevSummary,
          nextSummary,
          addLog,
          addDetailedLog,
          (newContent) => setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, content: newContent } : f)),
          incrementRequests,
          incrementResponses
        ));
      } else {
        ({ success, content, failureReason } = await generateAndRefineContent(
          originalPrompt,
          filePlan,
          wordCount,
          keywords,
          audience,
          tone,
          addLog,
          addDetailedLog,
          (newContent) => setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, content: newContent } : f)),
          incrementRequests,
          incrementResponses
        ));
      }
      if (success && content) {
        addLog({ source: "system", message: `Successfully regenerated ${filePath}.`, status: "success" });
        let finalContent = content;
        try {
          addLog({ source: "humanizer", message: `Humanizing regenerated content for ${filePath}...`, status: "running" });
          let wcTarget = wordCount;
          if (contentType === "novel") wcTarget = novelSpec.wordsPerChapter;
          if (contentType === "tutorial_book") wcTarget = tutorialBookSpec.wordsPerChapter;
          finalContent = await humanizeContent(content, wcTarget, addDetailedLog, incrementRequests, incrementResponses);
          addLog({ source: "humanizer", message: `Content for ${filePath} humanized.`, status: "success" });
          const finalWordCount = countWords2(finalContent);
          const targetText = isNaN(parseInt(wcTarget)) ? wcTarget : `~${wcTarget}`;
          addLog({ source: "word-counter", message: `Current word count: ${finalWordCount}. Target: ${targetText}.`, status: "info" });
        } catch (e) {
          addLog({ source: "humanizer", message: `Could not humanize content for ${filePath}. Using original version. Error: ${e.message}`, status: "error" });
        }
        setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, status: "generated", content: finalContent } : f));
      } else {
        addLog({ source: "system", message: `Failed to regenerate ${filePath}: ${failureReason}`, status: "error" });
        setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, status: "failed" } : f));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Critical error during regeneration of ${filePath}: ${errorMessage}`, status: "error" });
      setFiles((prev) => prev.map((f) => f.path === filePath ? { ...f, status: "failed" } : f));
    } finally {
      setAppPhase("ready");
    }
  }, [projectPlan, files, originalPrompt, novelSpec, tutorialBookSpec, contentType, wordCount, keywords, audience, tone, addLog, addDetailedLog, incrementRequests, incrementResponses]);
  const handleSendMessage = useCallback3(async (message, attachedFileContent, payload) => {
    if (!message.trim() && !attachedFileContent) return;
    const numAttachedFiles = attachedFileContent ? (attachedFileContent.match(/\/\/ FILE:/g) || []).length : 0;
    const attachmentText = numAttachedFiles > 0 ? `

[${numAttachedFiles} file(s) attached]` : "";
    const userMessage = { id: Date.now().toString(), role: "user", content: message + attachmentText };
    setChatHistory((prev) => [...prev, userMessage]);
    setApiStats({ requests: 0, responses: 0 });
    if (isPausedForRequest) {
      setQueuedRequest(message);
      setIsPausedForRequest(false);
      return;
    }
    if (appPhase === "awaiting-clarification") {
      await resumeGeneration(message);
      return;
    }
    if (isNewProject) {
      setLastFailureContext(null);
      setAgentLogs([]);
      setDetailedLogs([]);
    }
    try {
      if (isNewProject) {
        const combinedMessageForPlanning = attachedFileContent ? `${message}

--- Attached File Context ---
${attachedFileContent}` : message;
        addLog({ source: "system", message: "Generating project name...", status: "running" });
        const newProjectName = await generateProjectName(combinedMessageForPlanning, addDetailedLog, incrementRequests, incrementResponses);
        setProjectName(newProjectName);
        addLog({ source: "system", message: `Project name set to: "${newProjectName}"`, status: "info" });
        if (mode === "coder") {
          await handleCoderModeGeneration(message, attachedFileContent);
        } else {
          setAppPhase("generating-code");
          if (contentType !== "powerpoint_presentation") {
            setPanelVisibility((prev) => ({ ...prev, editor: true }));
          }
          if (isMobile) setMobileActiveView("agentLogs");
          if (contentType === "novel") {
            await handleNovelGeneration(message, attachedFileContent);
          } else if (contentType === "tutorial_book") {
            await handleTutorialBookGeneration(message, attachedFileContent);
          } else if (contentType === "powerpoint_presentation") {
            await handlePowerPointGeneration(message, attachedFileContent);
          } else {
            await handleSimpleContentGeneration(message, attachedFileContent, payload);
          }
          setAppPhase("ready");
        }
      } else {
        setAppPhase("planning-epics");
        addLog({ source: "project-cto", message: "Analyzing follow-up request to evolve the project...", status: "running" });
        if (!selectedFile) {
          setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: "Please select a file to edit first." }]);
          setAppPhase("ready");
          return;
        }
        addLog({ source: "editor", message: `Analyzing edit request for ${selectedFile}...`, status: "running" });
        const currentFile = files.find((f) => f.path === selectedFile);
        if (!currentFile) {
          setAppPhase("ready");
          return;
        }
        const newDescription = await createFollowUpPrompt(message, selectedFile, currentFile.content, chatHistory, originalPrompt, projectPlan, addDetailedLog, incrementRequests, incrementResponses, attachedFileContent);
        addLog({ source: "editor", message: `New instructions created for agent.`, status: "success" });
        const filePlanToProcess = { ...projectPlan.find((p) => p.path === selectedFile), description: newDescription };
        setAppPhase("generating-code");
        if (mode === "coder") {
          const generatedCodeRecord = files.reduce((acc, file) => {
            if (file.status === "generated") acc[file.path] = file.content;
            return acc;
          }, {});
          const { status, failureHistory } = await processFileGeneration(originalPrompt, filePlanToProcess, generatedCodeRecord);
          if (status === "success") {
            setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: `Successfully updated ${selectedFile}.`, showSendToCanvas: files.length > 0 }]);
          } else {
            setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: `Failed to update ${selectedFile}. Errors: ${failureHistory.join("\n")}` }]);
          }
        } else {
          const { success, content, failureReason } = await generateAndRefineContent(
            originalPrompt,
            filePlanToProcess,
            wordCount,
            keywords,
            audience,
            tone,
            addLog,
            addDetailedLog,
            (content2) => setFiles((prev) => prev.map((f) => f.path === selectedFile ? { ...f, content: content2 } : f)),
            incrementRequests,
            incrementResponses
          );
          if (success && content) {
            let finalContent = content;
            try {
              addLog({ source: "humanizer", message: `Humanizing edited content for ${selectedFile}...`, status: "running" });
              let wcTarget = wordCount;
              if (contentType === "novel") wcTarget = novelSpec.wordsPerChapter;
              if (contentType === "tutorial_book") wcTarget = tutorialBookSpec.wordsPerChapter;
              finalContent = await humanizeContent(content, wcTarget, addDetailedLog, incrementRequests, incrementResponses);
              addLog({ source: "humanizer", message: `Content for ${selectedFile} humanized.`, status: "success" });
            } catch (e) {
              addLog({ source: "humanizer", message: `Could not humanize content for ${selectedFile}. Using original version. Error: ${e.message}`, status: "error" });
            }
            setFiles((prev) => prev.map((f) => f.path === selectedFile ? { ...f, content: finalContent } : f));
            setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: `Successfully updated ${selectedFile}.`, showSendToCanvas: files.length > 0 }]);
          } else {
            setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: `Failed to update ${selectedFile}. Reason: ${failureReason}` }]);
          }
        }
        setAppPhase("ready");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Critical error: ${errorMessage}`, status: "error" });
      setChatHistory((prev) => [...prev, { id: Date.now().toString() + "a", role: "assistant", content: `A critical error occurred: ${errorMessage}` }]);
      setAppPhase(files.length > 0 ? "ready" : "idle");
    }
  }, [isNewProject, addLog, addDetailedLog, selectedLanguage, processFileGeneration, files, selectedFile, originalPrompt, projectPlan, chatHistory, mode, contentType, wordCount, keywords, audience, tone, novelSpec, tutorialBookSpec, powerPointSpec, handleCoderModeGeneration, handleSimpleContentGeneration, handleNovelGeneration, handleTutorialBookGeneration, handlePowerPointGeneration, incrementRequests, incrementResponses, isMobile, planNextTask, appPhase, resumeGeneration, isPausedForRequest, setQueuedRequest, setIsPausedForRequest]);
  const updateSummarizedHistory = async (history) => {
    addLog({ source: "summarizer", message: "Silent history summarizer running in background...", status: "running" });
    try {
      let historyText = history.map((m) => `${m.role}: ${m.content}`).join("\n\n");
      const HISTORY_CHAR_LIMIT = 25e3;
      if (historyText.length > HISTORY_CHAR_LIMIT) {
        addLog({ source: "summarizer", message: `History > ${HISTORY_CHAR_LIMIT} chars. Truncating for summary.`, status: "info" });
        historyText = historyText.slice(-HISTORY_CHAR_LIMIT);
      }
      const summary = await summarizeChatHistory(historyText, addDetailedLog, incrementRequests, incrementResponses);
      const summaryMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `[System Summary of Conversation]
${summary}`
      };
      setSummarizedAudioHistory([summaryMessage]);
      addLog({ source: "summarizer", message: "Background history summary updated.", status: "success" });
    } catch (e) {
      addLog({ source: "summarizer", message: `Background summarization failed: ${e.message}`, status: "error" });
      setSummarizedAudioHistory(null);
    }
  };
  const handleAudioSendMessage = async (message) => {
    const userMessage = { id: crypto.randomUUID(), role: "user", content: message };
    const currentUIHistory = audioChatHistory;
    let fileContext = "";
    if (attachedFile) {
      const CHARACTER_LIMIT2 = 32500;
      const historyTextLength = (summarizedAudioHistory || currentUIHistory).map((m) => m.content).join("").length;
      const messageLength = message.length;
      const overhead = 500;
      const availableChars = CHARACTER_LIMIT2 - historyTextLength - messageLength - overhead;
      if (availableChars > 0) {
        const truncatedContent = attachedFile.content.length > availableChars ? attachedFile.content.substring(0, availableChars) : attachedFile.content;
        fileContext = `

[CONTEXT FROM FILE: ${attachedFile.name}]
${truncatedContent}`;
      }
      setAttachedFile(null);
    }
    userMessage.content += fileContext;
    const historyForPrompt = summarizedAudioHistory ? [...summarizedAudioHistory, userMessage] : [...currentUIHistory, userMessage];
    setAudioChatHistory([...currentUIHistory, userMessage]);
    setAudioLogStartIndex(agentLogs.length);
    setIsAudioLoading(true);
    if (isMobile) setMobileActiveView("agentLogs");
    const fullPromptHistory = historyForPrompt.map((m) => `${m.role}: ${m.content}`).join("\n\n");
    try {
      const responseText = await processAudioQueryWithAgents(
        fullPromptHistory,
        addLog,
        addDetailedLog,
        incrementRequests,
        incrementResponses,
        !!fileContext
        // Force fallback if a file was attached and its context was added
      );
      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: responseText
      };
      const newFullUIHistory = [...currentUIHistory, userMessage, assistantMessage];
      setAudioChatHistory(newFullUIHistory);
      updateSummarizedHistory(newFullUIHistory);
    } catch (error) {
      const errorMessageStr = error instanceof Error ? error.message : "An unknown error occurred";
      const errorMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `Sorry, I encountered an error: ${errorMessageStr}`,
        isFailure: true
      };
      setAudioChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsAudioLoading(false);
    }
  };
  const handleCanvasSendMessage = useCallback3(async (message) => {
    if (!message.trim()) return;
    const userMessage = { id: Date.now().toString(), role: "user", content: message };
    const newHistory = [...canvasChatHistory, userMessage];
    setCanvasChatHistory(newHistory);
    addLog({ source: "system", message: "Canvas AI is thinking...", status: "running" });
    setIsCanvasLoading(true);
    try {
      const responseJson = await chatWithCanvasContent(
        message,
        canvasContent,
        newHistory,
        addDetailedLog,
        incrementRequests,
        incrementResponses
      );
      const responseData = JSON.parse(responseJson);
      if (responseData.type === "chat") {
        const assistantMessage = {
          id: Date.now().toString() + "a",
          role: "assistant",
          content: responseData.message
        };
        setCanvasChatHistory((prev) => [...prev, assistantMessage]);
        addLog({ source: "system", message: "AI responded to your query.", status: "success" });
      } else if (responseData.type === "update") {
        setDiffData({
          original: canvasContent,
          proposed: responseData.content,
          onAccept: () => {
            setCanvasContent(responseData.content);
            const assistantMessage = {
              id: Date.now().toString() + "a",
              role: "assistant",
              content: "I've applied the changes to the canvas as you requested."
            };
            setCanvasChatHistory((prev) => [...prev, assistantMessage]);
            addLog({ source: "system", message: "AI update accepted and applied to canvas.", status: "success" });
            setIsDiffModalOpen(false);
            setDiffData(null);
          }
        });
        setIsDiffModalOpen(true);
        addLog({ source: "system", message: "AI proposed an update to the canvas.", status: "info" });
      } else {
        throw new Error("Invalid response type from AI.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Canvas AI error: ${errorMessage}`, status: "error" });
      const assistantMessage = {
        id: Date.now().toString() + "a",
        role: "assistant",
        content: `An error occurred: ${errorMessage}`,
        isFailure: true
      };
      setCanvasChatHistory((prev) => [...prev, assistantMessage]);
    } finally {
      setIsCanvasLoading(false);
    }
  }, [canvasContent, canvasChatHistory, addLog, addDetailedLog, incrementRequests, incrementResponses]);
  const handleCanvasSelectionRequest = useCallback3(async (prompt, selection) => {
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: `[AI Request on selection]: ${prompt}`
    };
    const newHistory = [...canvasChatHistory, userMessage];
    setCanvasChatHistory(newHistory);
    addLog({ source: "system", message: "Canvas AI is editing selection...", status: "running" });
    setIsCanvasLoading(true);
    try {
      const modifiedText = await modifySelectedCanvasContent(
        prompt,
        selection.text,
        canvasContent,
        newHistory,
        addDetailedLog,
        incrementRequests,
        incrementResponses
      );
      const newContent = canvasContent.substring(0, selection.start) + modifiedText + canvasContent.substring(selection.end);
      setDiffData({
        original: canvasContent,
        proposed: newContent,
        onAccept: () => {
          setCanvasContent(newContent);
          addLog({ source: "system", message: "Canvas selection update accepted and applied.", status: "success" });
          const assistantMessage = {
            id: Date.now().toString() + "a",
            role: "assistant",
            content: "I've updated the selected text as you requested."
          };
          setCanvasChatHistory((prev) => [...prev, assistantMessage]);
          setIsDiffModalOpen(false);
          setDiffData(null);
        }
      });
      setIsDiffModalOpen(true);
      addLog({ source: "system", message: "AI proposed an update for the selected text.", status: "info" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Canvas AI selection error: ${errorMessage}`, status: "error" });
      const assistantMessage = {
        id: Date.now().toString() + "a",
        role: "assistant",
        content: `An error occurred while editing the selection: ${errorMessage}`,
        isFailure: true
      };
      setCanvasChatHistory((prev) => [...prev, assistantMessage]);
    } finally {
      setIsCanvasLoading(false);
    }
  }, [canvasContent, canvasChatHistory, addLog, addDetailedLog, incrementRequests, incrementResponses]);
  const handleGetAIQuickActions = useCallback3(async (selectedText) => {
    addLog({ source: "system", message: "Fetching AI quick actions...", status: "running" });
    try {
      const actions = await getAIQuickActions(
        selectedText,
        addDetailedLog,
        incrementRequests,
        incrementResponses
      );
      addLog({ source: "system", message: `Found ${actions.length} quick actions.`, status: "success" });
      return actions;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Failed to get AI quick actions: ${errorMessage}`, status: "error" });
      return ["Summarize", "Fix Grammar & Spelling", "Explain This"];
    }
  }, [addLog, addDetailedLog, incrementRequests, incrementResponses]);
  const handleImageGeneration = useCallback3(async (prompt, aspectRatio) => {
    setGeneratedImages([]);
    setAgentLogs([]);
    setIsImageLoading(true);
    addLog({ source: "system", message: `Starting image generation for: "${prompt}"`, status: "info" });
    setApiStats({ requests: 0, responses: 0 });
    try {
      addLog({ source: "stylist-agent", message: "Enhancing style...", status: "running" });
      const stylistPromise = stylizeImagePrompt(prompt, addDetailedLog, incrementRequests, incrementResponses);
      addLog({ source: "lighting-agent", message: "Adding lighting...", status: "running" });
      const lightingPromise = addLightingToImagePrompt(prompt, addDetailedLog, incrementRequests, incrementResponses);
      addLog({ source: "focus-agent", message: "Adding camera details...", status: "running" });
      const focusPromise = addFocusToImagePrompt(prompt, addDetailedLog, incrementRequests, incrementResponses);
      addLog({ source: "details-agent", message: "Adding fine details and corrections...", status: "running" });
      const detailsPromise = addDetailsToImagePrompt(prompt, addDetailedLog, incrementRequests, incrementResponses);
      const [styleResult, lightingResult, focusResult, detailsResult] = await Promise.all([stylistPromise, lightingPromise, focusPromise, detailsPromise]);
      addLog({ source: "stylist-agent", message: "Style enhanced.", status: "success" });
      addLog({ source: "lighting-agent", message: "Lighting added.", status: "success" });
      addLog({ source: "focus-agent", message: "Camera details added.", status: "success" });
      addLog({ source: "details-agent", message: "Fine details added.", status: "success" });
      addLog({ source: "finalizer-agent", message: "Creating final prompt...", status: "running" });
      const finalPrompt = await finalizeImagePrompt(prompt, styleResult, lightingResult, focusResult, detailsResult, addDetailedLog, incrementRequests, incrementResponses);
      addLog({ source: "finalizer-agent", message: "Final prompt created.", status: "success" });
      setImagePrompt(finalPrompt);
      const images = await generateImages(finalPrompt, aspectRatio, 4, addDetailedLog, incrementRequests, incrementResponses);
      setGeneratedImages(images);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      addLog({ source: "system", message: `Image generation failed: ${errorMessage}`, status: "error" });
    } finally {
      setIsImageLoading(false);
    }
  }, [addLog, addDetailedLog, incrementRequests, incrementResponses, setImagePrompt]);
  const handleSurpriseMe = useCallback3(async () => {
    setAgentLogs([]);
    setApiStats({ requests: 0, responses: 0 });
    addLog({ source: "system", message: "Generating a surprise prompt...", status: "running" });
    try {
      const randomPrompt = await generateRandomImagePrompt(addDetailedLog, incrementRequests, incrementResponses);
      setImagePrompt(randomPrompt);
      addLog({ source: "system", message: `Surprise prompt generated. Starting image generation...`, status: "info" });
      await handleImageGeneration(randomPrompt, "1:1");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      const fullMessage = `Surprise Me failed: ${errorMessage}`;
      addLog({ source: "system", message: fullMessage, status: "error" });
      setAgentLogs((prev) => [...prev, { source: "system", message: fullMessage, status: "error" }]);
      setIsImageLoading(false);
    }
  }, [addLog, addDetailedLog, incrementRequests, incrementResponses, handleImageGeneration, setImagePrompt]);
  const handleFileContentChange = useCallback3((path, content) => {
    setFiles((prevFiles) => prevFiles.map((file) => file.path === path ? { ...file, content } : file));
  }, []);
  const handleDownloadZip = useCallback3(() => {
    if (files.length === 0) return;
    if (mode === "content" && contentType !== "powerpoint_presentation") {
      setIsExportModalOpen(true);
      return;
    }
    if (contentType === "powerpoint_presentation" || mode === "image") {
      alert("This mode does not use the zip download. It downloads files directly after generation.");
      return;
    }
    const zip = new JSZip();
    files.forEach((file) => {
      zip.file(file.path, file.content);
    });
    zip.generateAsync({ type: "blob" }).then(function(content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${projectName.replace(/\s+/g, "-") || "ai-generated-app"}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }, [files, projectName, mode, contentType]);
  const handleConfirmExport = useCallback3(async (format) => {
    if (files.length === 0) return;
    setIsExporting(true);
    addLog({ source: "system", message: `Exporting project as ${format.toUpperCase()}...`, status: "running" });
    try {
      const zip = new JSZip();
      const sortedFiles = [...files].filter((f) => f.path.endsWith(".md")).sort((a, b) => a.path.localeCompare(b.path, void 0, { numeric: true, sensitivity: "base" }));
      if (format === "md") {
        sortedFiles.forEach((file) => zip.file(file.path, file.content));
      } else if (format === "txt") {
        const stripMarkdown = (text) => text.replace(/#/g, "");
        sortedFiles.forEach((file) => {
          const txtPath = file.path.replace(/\.md$/, ".txt");
          const txtContent = stripMarkdown(file.content);
          zip.file(txtPath, txtContent);
        });
      } else if (format === "pdf") {
        addLog({ source: "system", message: "Preparing PDF... This may take a moment.", status: "running" });
        await new Promise(async (resolve, reject) => {
          const renderContainer = document.createElement("div");
          const style = document.createElement("style");
          const cleanup = () => {
            if (document.body.contains(renderContainer)) document.body.removeChild(renderContainer);
            if (document.head.contains(style)) document.head.removeChild(style);
          };
          try {
            renderContainer.style.position = "absolute";
            renderContainer.style.left = "-9999px";
            renderContainer.style.width = "210mm";
            renderContainer.style.padding = "20mm";
            renderContainer.style.backgroundColor = "white";
            renderContainer.style.color = "black";
            style.innerHTML = `
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
                            .pdf-render { font-family: 'Roboto', sans-serif; }
                            .pdf-render h1, .pdf-render h2, .pdf-render h3 { page-break-after: avoid; }
                            .pdf-render p, .pdf-render ul, .pdf-render ol { page-break-inside: avoid; }
                            .pdf-render pre { background-color: #f4f4f4; padding: 1em; border-radius: 4px; page-break-inside: avoid; white-space: pre-wrap; word-wrap: break-word; }
                        `;
            document.head.appendChild(style);
            document.body.appendChild(renderContainer);
            renderContainer.className = "pdf-render";
            const combinedMarkdown = sortedFiles.map((file) => `# ${file.path.replace(".md", "").replace(/_/g, " ")}

${file.content}`).join('\n\n<div style="page-break-after: always;"></div>\n\n');
            renderContainer.innerHTML = marked.parse(combinedMarkdown);
            const pdf = new jspdf.jsPDF({
              orientation: "p",
              unit: "mm",
              format: "a4"
            });
            const canvas = await html2canvas(renderContainer, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = imgProps.height * pdfWidth / imgProps.width;
            let heightLeft = pdfHeight;
            let position = 0;
            pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
            while (heightLeft >= 0) {
              position = heightLeft - pdfHeight;
              pdf.addPage();
              pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
              heightLeft -= pdf.internal.pageSize.getHeight();
            }
            pdf.save(`${projectName}.pdf`);
            resolve();
          } catch (pdfError) {
            reject(pdfError);
          } finally {
            cleanup();
          }
        });
      }
      if (format === "md" || format === "txt") {
        const blob = await zip.generateAsync({ type: "blob" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${projectName.replace(/\s+/g, "-")}-${format}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Export failed:", error);
      addLog({ source: "system", message: `Export failed: ${error instanceof Error ? error.message : "Unknown error"}`, status: "error" });
    } finally {
      setIsExporting(false);
      setIsExportModalOpen(false);
    }
  }, [files, projectName, addLog]);
  const handleNewSession = useCallback3(() => {
    if (window.confirm("Are you sure you want to start a new session? This will clear the current state.")) {
      window.location.reload();
    }
  }, []);
  const togglePanelVisibility = useCallback3((panel) => {
    setPanelVisibility((prev) => ({ ...prev, [panel]: !prev[panel] }));
  }, []);
  const handleSetMode = useCallback3((newMode) => {
    if (isLoading || !settings) return;
    const modeStatus = settings.tier1[`${newMode}Mode`];
    if (modeStatus === "locked") {
      return;
    }
    setMode(newMode);
    if (newMode === "coder" || newMode === "content") {
      setPanelVisibility({ assistant: true, editor: files.length > 0, agentLogs: true });
    }
    setAgentLogs([]);
  }, [isLoading, files.length, settings]);
  const toggleLivePreview = useCallback3(() => {
    if (isPreviewEnabled) {
      setIsLivePreviewActive((p) => !p);
    }
  }, [isPreviewEnabled]);
  const handlePauseGeneration = useCallback3(() => {
    if (isLoading && !isPausedForRequest) {
      setIsPausedForRequest(true);
      addLog({ source: "system", message: "Generation paused by user. Please provide your request in the chat.", status: "info" });
    }
  }, [isLoading, isPausedForRequest, addLog]);
  const handleLoadSession = useCallback3((sessionData) => {
    if (window.confirm(`Are you sure you want to load the project "${sessionData.projectName}"? Any unsaved changes in the current session will be lost.`)) {
      setSessionId(sessionData.id);
      setProjectName(sessionData.projectName);
      setMode(sessionData.mode);
      setAppPhase(sessionData.appPhase);
      setOriginalPrompt(sessionData.originalPrompt);
      setChatHistory(sessionData.chatHistory);
      setAudioChatHistory(sessionData.audioChatHistory || []);
      setAiVoice(sessionData.aiVoice || "");
      setProjectEpics(sessionData.projectEpics);
      setProjectPlan(sessionData.projectPlan);
      setProjectHistory(sessionData.projectHistory);
      setFiles(sessionData.files);
      setAgentLogs(sessionData.agentLogs);
      setDetailedLogs(sessionData.detailedLogs);
      setSelectedLanguage(sessionData.selectedLanguage || "html");
      setContentType(sessionData.contentType || "blog_post");
      setWordCount(sessionData.wordCount || "no limit");
      setKeywords(sessionData.keywords || "");
      setAudience(sessionData.audience || "");
      setTone(sessionData.tone || "Optional");
      setNovelSpec(sessionData.novelSpec || initialNovelSpec);
      setTutorialBookSpec(sessionData.tutorialBookSpec || initialTutorialBookSpec);
      setPowerPointSpec(sessionData.powerPointSpec || initialPowerPointSpec);
      setSelectedFile(sessionData.selectedFile);
      setApprovalMode(sessionData.approvalMode || "auto");
      setTestingPreference(sessionData.testingPreference || "run_tests");
      setGeneratedImages(sessionData.generatedImages || []);
      setIsHistoryModalOpen(false);
      setPanelVisibility((prev) => ({ ...prev, editor: sessionData.files.length > 0 }));
    }
  }, []);
  const handleMouseDown = useCallback3((e, type, index) => {
    e.preventDefault();
    setIsDragging(type);
    if (type === "horizontal") {
      setDraggedIndex(index);
      initialSizesRef.current = [...horizontalSizes];
    } else {
      initialSizesRef.current = [verticalSize, 100 - verticalSize];
    }
    initialPosRef.current = { x: e.clientX, y: e.clientY };
  }, [horizontalSizes, verticalSize]);
  const handleMouseMove = useCallback3((e) => {
    if (!isDragging || !mainPanelsRef.current) return;
    e.preventDefault();
    if (isDragging === "horizontal") {
      const newSizes = [...initialSizesRef.current];
      const delta = (e.clientX - initialPosRef.current.x) / mainPanelsRef.current.offsetWidth * 100;
      const leftPanelIndex = draggedIndex;
      const rightPanelIndex = draggedIndex + 1;
      newSizes[leftPanelIndex] = Math.max(MIN_PANEL_PERCENT, initialSizesRef.current[leftPanelIndex] + delta);
      newSizes[rightPanelIndex] = Math.max(MIN_PANEL_PERCENT, initialSizesRef.current[rightPanelIndex] - delta);
      const total = newSizes[leftPanelIndex] + newSizes[rightPanelIndex];
      const initialTotal = initialSizesRef.current[leftPanelIndex] + initialSizesRef.current[rightPanelIndex];
      newSizes[leftPanelIndex] = newSizes[leftPanelIndex] / total * initialTotal;
      newSizes[rightPanelIndex] = newSizes[rightPanelIndex] / total * initialTotal;
      setHorizontalSizes(newSizes);
    } else {
      const delta = (e.clientY - initialPosRef.current.y) / mainPanelsRef.current.offsetHeight * 100;
      const newSize = Math.max(MIN_PANEL_PERCENT, Math.min(100 - MIN_PANEL_PERCENT, initialSizesRef.current[0] + delta));
      setVerticalSize(newSize);
    }
  }, [isDragging, draggedIndex]);
  const handleMouseUp = useCallback3(() => {
    setIsDragging(null);
    setDraggedIndex(null);
  }, []);
  const handleSendToCanvas = useCallback3(() => {
    const contentForCanvas = files.map((file) => `// FILE: ${file.path}

${file.content}`).join("\n\n---\n\n");
    setCanvasContent(contentForCanvas);
    setMode("canvas");
    setChatHistory((prev) => [...prev, {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "I've sent the project files to the canvas. You can now ask me to make changes or edit the text directly."
    }]);
  }, [files]);
  if (!settings) {
    return /* @__PURE__ */ jsxs24("div", { className: "bg-gray-900 text-gray-200 h-screen flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx26(LoaderIcon, { className: "w-10 h-10" }),
      /* @__PURE__ */ jsx26("p", { className: "mt-4", children: "Loading settings..." })
    ] });
  }
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      ref: appRef,
      className: `bg-gray-900 text-gray-200 h-screen flex flex-col font-sans overflow-hidden ${isDragging ? "cursor-ew-resize" : ""}`,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
      children: [
        /* @__PURE__ */ jsx26(
          Header,
          {
            projectName,
            setProjectName,
            panelVisibility,
            onTogglePanel: togglePanelVisibility,
            isDetailedLogsVisible,
            setIsDetailedLogsVisible,
            isLoading,
            onDownload: handleDownloadZip,
            isProjectReady,
            mode,
            setMode: handleSetMode,
            isExporting,
            elapsedTime,
            apiStats,
            onNewSession: handleNewSession,
            onOpenAbout: () => setIsAboutModalOpen(true),
            onOpenTutorial: () => setIsTutorialModalOpen(true),
            onOpenFeedback: () => setIsFeedbackModalOpen(true),
            onOpenHistory: () => setIsHistoryModalOpen(true),
            isPreviewEnabled,
            isLivePreviewActive,
            onToggleLivePreview: toggleLivePreview,
            isPausedForRequest,
            onPauseGeneration: handlePauseGeneration,
            settings
          }
        ),
        ["canvas", "audio", "image"].includes(mode) ? /* @__PURE__ */ jsxs24("main", { className: "flex-grow min-h-0", children: [
          mode === "canvas" && /* @__PURE__ */ jsx26(
            CanvasMode,
            {
              chatHistory: canvasChatHistory,
              onSendMessage: handleCanvasSendMessage,
              isLoading: isCanvasLoading,
              canvasContent,
              onCanvasContentChange: setCanvasContent,
              onAISelectionRequest: handleCanvasSelectionRequest,
              onGetAIQuickActions: handleGetAIQuickActions,
              settings
            }
          ),
          mode === "audio" && /* @__PURE__ */ jsx26(
            AudioMode,
            {
              chatHistory: audioChatHistory,
              onSendMessage: handleAudioSendMessage,
              isThinking: isThinkingForAudio,
              thinkingLogs,
              elapsedTime,
              attachedFile,
              setAttachedFile
            }
          ),
          mode === "image" && /* @__PURE__ */ jsx26(
            ImageMode,
            {
              onGenerate: handleImageGeneration,
              onSurpriseMe: handleSurpriseMe,
              prompt: imagePrompt,
              setPrompt: setImagePrompt,
              generatedImages,
              isLoading,
              agentLogs,
              settings
            }
          )
        ] }) : isMobile ? /* @__PURE__ */ jsxs24("main", { className: "flex-grow min-h-0 pb-16", children: [
          mobileActiveView === "assistant" && panelVisibility.assistant && /* @__PURE__ */ jsx26(
            AssistantPanel,
            {
              chatHistory,
              onSendMessage: handleSendMessage,
              isLoading,
              selectedLanguage,
              setSelectedLanguage,
              isNewProject,
              mode,
              contentType,
              setContentType,
              wordCount,
              setWordCount,
              novelSpec,
              setNovelSpec,
              tutorialBookSpec,
              setTutorialBookSpec,
              powerPointSpec,
              setPowerPointSpec,
              onAttemptFix: handleAttemptFix,
              onSkipFix: handleSkipFix,
              appPhase,
              onSendToCanvas: handleSendToCanvas,
              keywords,
              setKeywords,
              audience,
              setAudience,
              tone,
              setTone,
              approvalMode,
              setApprovalMode,
              testingPreference,
              setTestingPreference,
              isPausedForRequest,
              settings
            }
          ),
          mobileActiveView === "editor" && panelVisibility.editor && /* @__PURE__ */ jsx26(
            EditorPanel,
            {
              files,
              selectedFile,
              onSelectFile: setSelectedFile,
              onFileContentChange: handleFileContentChange,
              onRegenerateFile: handleRegenerateFile,
              isContentMode: mode === "content",
              isLoading,
              onFileDoubleClick: (path) => {
                setPreviewFile(files.find((f) => f.path === path) || null);
                setIsPreviewModalOpen(true);
              },
              isPreviewEnabled
            }
          ),
          mobileActiveView === "agentLogs" && panelVisibility.agentLogs && /* @__PURE__ */ jsx26(AgentLogsPanel, { agentLogs })
        ] }) : areMainPanelsHidden ? /* @__PURE__ */ jsx26("main", { className: "flex-grow min-h-0 flex items-center justify-center text-gray-500", children: "All panels are hidden. Use the header controls to show a panel." }) : /* @__PURE__ */ jsxs24("main", { ref: mainPanelsRef, className: `flex flex-col flex-grow min-h-0 ${isDragging ? "cursor-ns-resize" : ""}`, children: [
          /* @__PURE__ */ jsx26("div", { className: "flex-grow flex min-h-0", style: { height: `${verticalSize}%` }, children: appPhase === "reviewing-plan" ? /* @__PURE__ */ jsx26(
            PlanReviewPanel,
            {
              title: "Review Feature Plan",
              plan: projectPlan,
              onPlanChange: setProjectPlan,
              onApprove: handleFeaturePlanApproval,
              isLoading
            }
          ) : /* @__PURE__ */ jsxs24("div", { className: "flex flex-grow min-h-0", children: [
            panelVisibility.assistant && /* @__PURE__ */ jsx26("div", { className: "flex-shrink-0", style: { width: `${horizontalSizes[0]}%` }, children: /* @__PURE__ */ jsx26(
              AssistantPanel,
              {
                chatHistory,
                onSendMessage: handleSendMessage,
                isLoading,
                selectedLanguage,
                setSelectedLanguage,
                isNewProject,
                mode,
                contentType,
                setContentType,
                wordCount,
                setWordCount,
                novelSpec,
                setNovelSpec,
                tutorialBookSpec,
                setTutorialBookSpec,
                powerPointSpec,
                setPowerPointSpec,
                onAttemptFix: handleAttemptFix,
                onSkipFix: handleSkipFix,
                appPhase,
                onSendToCanvas: handleSendToCanvas,
                keywords,
                setKeywords,
                audience,
                setAudience,
                tone,
                setTone,
                approvalMode,
                setApprovalMode,
                testingPreference,
                setTestingPreference,
                isPausedForRequest,
                settings
              }
            ) }),
            panelVisibility.assistant && (panelVisibility.editor || panelVisibility.agentLogs) && /* @__PURE__ */ jsx26(Resizer, { orientation: "horizontal", onMouseDown: (e) => handleMouseDown(e, "horizontal", 0) }),
            panelVisibility.editor && /* @__PURE__ */ jsx26("div", { className: "flex-grow", style: { width: `${horizontalSizes[1]}%` }, children: /* @__PURE__ */ jsx26(
              EditorPanel,
              {
                files,
                selectedFile,
                onSelectFile: setSelectedFile,
                onFileContentChange: handleFileContentChange,
                onRegenerateFile: handleRegenerateFile,
                isContentMode: mode === "content",
                isLoading,
                onFileDoubleClick: (path) => {
                  setPreviewFile(files.find((f) => f.path === path) || null);
                  setIsPreviewModalOpen(true);
                },
                isPreviewEnabled
              }
            ) }),
            panelVisibility.editor && panelVisibility.agentLogs && /* @__PURE__ */ jsx26(Resizer, { orientation: "horizontal", onMouseDown: (e) => handleMouseDown(e, "horizontal", 1) }),
            panelVisibility.agentLogs && /* @__PURE__ */ jsx26("div", { className: "flex-shrink-0", style: { width: `${horizontalSizes[2]}%` }, children: /* @__PURE__ */ jsx26(AgentLogsPanel, { agentLogs }) })
          ] }) }),
          isDetailedLogsVisible && /* @__PURE__ */ jsxs24(Fragment7, { children: [
            /* @__PURE__ */ jsx26(Resizer, { orientation: "vertical", onMouseDown: (e) => handleMouseDown(e, "vertical") }),
            /* @__PURE__ */ jsx26("div", { className: "flex-shrink-0", style: { height: `${100 - verticalSize}%` }, children: /* @__PURE__ */ jsx26(DetailedLogsPanel, { logs: detailedLogs, onClose: () => setIsDetailedLogsVisible(false), onClear: () => setDetailedLogs([]) }) })
          ] })
        ] }),
        isMobile && /* @__PURE__ */ jsx26(
          MobileFooter,
          {
            activeView: mobileActiveView,
            setActiveView: setMobileActiveView,
            panelVisibility
          }
        ),
        /* @__PURE__ */ jsx26(
          MarkdownPreviewModal,
          {
            isOpen: isPreviewModalOpen,
            onClose: () => setIsPreviewModalOpen(false),
            file: previewFile
          }
        ),
        /* @__PURE__ */ jsx26(
          ExportModal,
          {
            isOpen: isExportModalOpen,
            onClose: () => setIsExportModalOpen(false),
            onConfirm: handleConfirmExport,
            isProcessing: isExporting
          }
        ),
        /* @__PURE__ */ jsx26(
          DiffModal,
          {
            isOpen: isDiffModalOpen,
            originalText: diffData?.original || "",
            proposedText: diffData?.proposed || "",
            onAccept: () => diffData?.onAccept(),
            onReject: () => {
              setIsDiffModalOpen(false);
              setDiffData(null);
            }
          }
        ),
        /* @__PURE__ */ jsx26(AboutModal, { isOpen: isAboutModalOpen, onClose: () => setIsAboutModalOpen(false) }),
        /* @__PURE__ */ jsx26(TutorialModal, { isOpen: isTutorialModalOpen, onClose: () => setIsTutorialModalOpen(false) }),
        /* @__PURE__ */ jsx26(FeedbackModal, { isOpen: isFeedbackModalOpen, onClose: () => setIsFeedbackModalOpen(false) }),
        /* @__PURE__ */ jsx26(HistoryModal, { isOpen: isHistoryModalOpen, onClose: () => setIsHistoryModalOpen(false), onLoadSession: handleLoadSession }),
        isLivePreviewActive && /* @__PURE__ */ jsx26("div", { className: "fixed inset-0 bg-black/80 z-40 p-8 flex items-center justify-center", children: /* @__PURE__ */ jsxs24("div", { className: "w-full h-full bg-gray-900 rounded-lg shadow-2xl border-2 border-indigo-500 flex flex-col", children: [
          /* @__PURE__ */ jsxs24("header", { className: "flex-shrink-0 p-2 bg-gray-800 border-b border-gray-700 flex justify-between items-center", children: [
            /* @__PURE__ */ jsx26("h3", { className: "text-lg font-semibold text-white", children: "Live Preview" }),
            /* @__PURE__ */ jsx26("button", { onClick: toggleLivePreview, className: "px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm", children: "Close" })
          ] }),
          /* @__PURE__ */ jsx26("div", { className: "flex-grow min-h-0", children: /* @__PURE__ */ jsx26(LivePreviewPanel, { files }) })
        ] }) })
      ]
    }
  );
};
var App_default = App;

// index.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx27(React19.StrictMode, { children: /* @__PURE__ */ jsx27(App_default, {}) })
);
