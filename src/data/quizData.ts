import type { Question } from "../types/quiz";

export const quizData: Question[] = [
  {
    id: 1,
    question: "What does the 'flex' class do in Tailwind CSS?",
    options: [
      "Sets display to block",
      "Sets display to flex",
      "Aligns items horizontally",
      "Creates a grid layout"
    ],
    correctAnswer: "Sets display to flex"
  },
  {
    id: 2,
    question: "Which Tailwind class is used to center items horizontally in a flex container?",
    options: [
      "items-center",
      "justify-center",
      "content-center",
      "place-center"
    ],
    correctAnswer: "justify-center"
  },
  {
    id: 3,
    question: "Which class adds padding of 1rem?",
    options: ["p-2", "p-4", "m-4", "px-4"],
    correctAnswer: "p-4"
  },
  {
    id: 4,
    question: "How do you apply margin on the x-axis?",
    options: ["m-4", "mx-4", "my-4", "ml-4"],
    correctAnswer: "mx-4"
  },
  {
    id: 5,
    question: "Which class makes text bold?",
    options: ["font-semibold", "font-bold", "text-bold", "text-strong"],
    correctAnswer: "font-bold"
  },
  {
    id: 6,
    question: "Which class sets background color to blue?",
    options: [
      "bg-blue",
      "bg-blue-500",
      "text-blue-500",
      "border-blue"
    ],
    correctAnswer: "bg-blue-500"
  },
  {
    id: 7,
    question: "What does 'hidden' class do?",
    options: [
      "Sets opacity to 0",
      "Removes element from DOM",
      "Sets display to none",
      "Hides overflow"
    ],
    correctAnswer: "Sets display to none"
  },
  {
    id: 8,
    question: "Which class makes an element full width?",
    options: ["w-auto", "w-full", "max-w-full", "width-full"],
    correctAnswer: "w-full"
  },
  {
    id: 9,
    question: "Which class applies border radius?",
    options: ["border", "rounded", "radius", "curve"],
    correctAnswer: "rounded"
  },
  {
    id: 10,
    question: "How do you apply hover styles in Tailwind?",
    options: [
      "hover()",
      "onHover:",
      "hover:",
      ":hover"
    ],
    correctAnswer: "hover:"
  },

  // ----- INTERMEDIATE -----

  {
    id: 11,
    question: "Which class creates a grid layout?",
    options: ["grid", "flex", "table", "block"],
    correctAnswer: "grid"
  },
  {
    id: 12,
    question: "How do you define 3 grid columns?",
    options: ["grid-cols-3", "cols-3", "grid-3", "grid-column-3"],
    correctAnswer: "grid-cols-3"
  },
  {
    id: 13,
    question: "Which class controls gap between grid items?",
    options: ["space-4", "gap-4", "grid-gap-4", "margin-4"],
    correctAnswer: "gap-4"
  },
  {
    id: 14,
    question: "Which class sets font size to large?",
    options: ["font-lg", "text-lg", "size-lg", "text-large"],
    correctAnswer: "text-lg"
  },
  {
    id: 15,
    question: "Which class aligns text center?",
    options: ["text-middle", "text-center", "align-center", "center-text"],
    correctAnswer: "text-center"
  },
  {
    id: 16,
    question: "Which class adds shadow?",
    options: ["shadow", "box-shadow", "drop-shadow", "shadow-md"],
    correctAnswer: "shadow-md"
  },
  {
    id: 17,
    question: "Which class makes position relative?",
    options: ["absolute", "relative", "fixed", "static"],
    correctAnswer: "relative"
  },
  {
    id: 18,
    question: "Which class positions an element absolutely?",
    options: ["absolute", "fixed", "sticky", "relative"],
    correctAnswer: "absolute"
  },
  {
    id: 19,
    question: "Which utility controls z-index?",
    options: ["z-10", "index-10", "layer-10", "depth-10"],
    correctAnswer: "z-10"
  },
  {
    id: 20,
    question: "Which class controls opacity?",
    options: ["opacity-50", "transparent-50", "alpha-50", "fade-50"],
    correctAnswer: "opacity-50"
  },

  // ----- RESPONSIVE & ADVANCED -----

  {
    id: 21,
    question: "Which prefix applies styles for medium screens?",
    options: ["sm:", "md:", "lg:", "xl:"],
    correctAnswer: "md:"
  },
  {
    id: 22,
    question: "Which class hides an element on mobile only?",
    options: [
      "hidden md:block",
      "block md:hidden",
      "sm:hidden",
      "mobile:hidden"
    ],
    correctAnswer: "hidden md:block"
  },
  {
    id: 23,
    question: "Which prefix applies hover only on supported devices?",
    options: ["hover:", "focus:", "group-hover:", "motion-safe:hover:"],
    correctAnswer: "motion-safe:hover:"
  },
  {
    id: 24,
    question: "How do you enable dark mode styles?",
    options: [
      "dark-mode:",
      "dark:",
      "theme-dark:",
      "night:"
    ],
    correctAnswer: "dark:"
  },
  {
    id: 25,
    question: "Which class prevents text selection?",
    options: ["select-none", "no-select", "text-lock", "user-none"],
    correctAnswer: "select-none"
  },
  {
    id: 26,
    question: "Which class truncates overflowing text?",
    options: ["truncate", "overflow-text", "text-cut", "ellipsis"],
    correctAnswer: "truncate"
  },
  {
    id: 27,
    question: "Which class controls overflow?",
    options: ["overflow-hidden", "hide-overflow", "clip", "hidden"],
    correctAnswer: "overflow-hidden"
  },
  {
    id: 28,
    question: "Which class applies transition?",
    options: [
      "transition",
      "animate",
      "motion",
      "ease"
    ],
    correctAnswer: "transition"
  },
  {
    id: 29,
    question: "Which class controls transition duration?",
    options: [
      "duration-300",
      "time-300",
      "transition-300",
      "speed-300"
    ],
    correctAnswer: "duration-300"
  },
  {
    id: 30,
    question: "Which class applies easing?",
    options: ["ease-in-out", "smooth", "linear", "curve"],
    correctAnswer: "ease-in-out"
  },

  // ----- REAL WORLD / INTERVIEW -----

  {
    id: 31,
    question: "Which Tailwind feature removes unused CSS?",
    options: [
      "JIT compiler",
      "Purge",
      "Minify",
      "Tree shaking"
    ],
    correctAnswer: "JIT compiler"
  },
  {
    id: 32,
    question: "What does 'container' class do?",
    options: [
      "Adds padding",
      "Centers content with max-width",
      "Creates grid",
      "Adds margin"
    ],
    correctAnswer: "Centers content with max-width"
  },
  {
    id: 33,
    question: "Which class sets max width?",
    options: ["max-w-md", "w-max", "width-md", "limit-md"],
    correctAnswer: "max-w-md"
  },
  {
    id: 34,
    question: "Which class sets min height to full screen?",
    options: ["h-screen", "min-h-screen", "screen-h", "full-height"],
    correctAnswer: "min-h-screen"
  },
  {
    id: 35,
    question: "Which class makes cursor pointer?",
    options: ["cursor-pointer", "pointer", "cursor-hand", "hand"],
    correctAnswer: "cursor-pointer"
  },
  {
    id: 36,
    question: "Which class disables pointer events?",
    options: [
      "pointer-events-none",
      "disable-pointer",
      "no-click",
      "click-none"
    ],
    correctAnswer: "pointer-events-none"
  },
  {
    id: 37,
    question: "Which class creates a sticky element?",
    options: ["sticky", "fixed", "absolute", "relative"],
    correctAnswer: "sticky"
  },
  {
    id: 38,
    question: "Which class controls line height?",
    options: ["leading-6", "line-6", "lh-6", "spacing-6"],
    correctAnswer: "leading-6"
  },
  {
    id: 39,
    question: "Which class controls letter spacing?",
    options: ["tracking-wide", "letter-wide", "space-wide", "kerning-wide"],
    correctAnswer: "tracking-wide"
  },
  {
    id: 40,
    question: "Which class applies aspect ratio?",
    options: ["aspect-video", "ratio-video", "video-ratio", "aspect-16/9"],
    correctAnswer: "aspect-video"
  },

  // ----- ADVANCED / TAILWIND v4 -----

  {
    id: 41,
    question: "Which approach does Tailwind v4 use?",
    options: [
      "Config-first",
      "CSS-first",
      "JS-first",
      "Plugin-first"
    ],
    correctAnswer: "CSS-first"
  },
  {
    id: 42,
    question: "How do you import Tailwind in v4?",
    options: [
      "@tailwind utilities",
      "@import 'tailwindcss'",
      "require('tailwind')",
      "tailwind()"
    ],
    correctAnswer: "@import 'tailwindcss'"
  },
  {
    id: 43,
    question: "Which plugin is required for Vite in Tailwind v4?",
    options: [
      "@tailwindcss/vite",
      "tailwind-vite",
      "vite-tailwind",
      "tailwind-plugin"
    ],
    correctAnswer: "@tailwindcss/vite"
  },
  {
    id: 44,
    question: "Which class applies ring outline?",
    options: ["ring", "outline", "border-ring", "focus-ring"],
    correctAnswer: "ring"
  },
  {
    id: 45,
    question: "Which class changes ring color?",
    options: ["ring-blue-500", "outline-blue", "border-blue", "ring-color-blue"],
    correctAnswer: "ring-blue-500"
  },
  {
    id: 46,
    question: "Which class enables focus styles?",
    options: ["focus:", "active:", "hover:", "state:"],
    correctAnswer: "focus:"
  },
  {
    id: 47,
    question: "Which class makes element invisible but keeps space?",
    options: ["hidden", "invisible", "opacity-0", "none"],
    correctAnswer: "invisible"
  },
  {
    id: 48,
    question: "Which class sets object-fit to cover?",
    options: ["object-cover", "img-cover", "fit-cover", "cover"],
    correctAnswer: "object-cover"
  },
  {
    id: 49,
    question: "Which class controls whitespace wrapping?",
    options: ["whitespace-nowrap", "text-nowrap", "wrap-none", "no-wrap"],
    correctAnswer: "whitespace-nowrap"
  },
  {
    id: 50,
    question: "Which Tailwind utility helps with accessibility focus?",
    options: [
      "ring",
      "outline-none",
      "border",
      "shadow"
    ],
    correctAnswer: "ring"
  }
];
