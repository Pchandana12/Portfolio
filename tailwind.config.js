/** Colors point at CSS variables (see src/index.css) so light/dark themes just work. */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", surf: "var(--surf)", ink: "var(--ink)", mute: "var(--mute)", acc: "var(--acc)", btn: "var(--btn)", line: "var(--line)" },
      fontFamily: { display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"], body: ['"DM Sans"', "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
