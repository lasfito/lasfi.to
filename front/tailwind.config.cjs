/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primario: "var(--primario)",
        hermano: "var(--hermano)",
        "primario-dark": "var(--primario-dark)",
        acento: "var(--acento)",
        "texto-str": "var(--texto-str)",
        "texto-sft": "var(--texto-sft)",
        "ola-color": "var(--ola-color)",
        "fondo-jr": "var(--fondo-jr)",
        fondo: "var(--fondo)",
        hover: "var(--hover)",
        boton: "var(--boton)",
      },
      backgroundImage: {
        /* ola: "url('/src/assets/img/oladay.png')", */
        ola: "var(--ola)",
        puntos:
          "radial-gradient(rgba(120, 121, 151, 0.87) 1.5px, transparent 1.5px), radial-gradient(rgba(120, 121, 151, 0.87) 1.5px, var(--fondo) 1.5px)",
      },
      keyframes: {
        ola: {
          "0%": {
            backgroundPositionX: 0,
          },
          "100%": {
            backgroundPositionX: "1360px",
          },
        },
        cereal: {
          "0%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(3%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "75%": {
            transform: "translateY(-3%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        ola: "ola 10s linear infinite",
        "ola-jr": "ola 10s linear infinite reverse",
        "ola-slow": "ola 20s linear infinite",
        cereal: "cereal linear 3s infinite",
      },
      backgroundSize: {
        "0-4": "0% 4px",
        "100-4": "100% 4px",
      },
      backgroundPosition: {
        "0-100": "0% 100%",
      },
      /* todo: fix customProperties: {
        "--primario": " hsl(207, 68%, 50%);",
      }, */

      typography: ({theme}) => ({
        pink: {
          css: {
            "--tw-prose-body": "var(--texto-sft)",
            "--tw-prose-headings": "var(--texto-str)",
            "--tw-prose-lead": theme("colors.primario"),
            "--tw-prose-links": theme("colors.primario"),
            "--tw-prose-bold": theme("colors.primario"),
            "--tw-prose-counters": theme("colors.primario"),
            "--tw-prose-bullets": theme("colors.primario"),
            "--tw-prose-hr": theme("colors.primario"),
            "--tw-prose-quotes": theme("colors.primario"),
            "--tw-prose-quote-borders": theme("colors.primario"),
            "--tw-prose-captions": theme("colors.primario"),
            "--tw-prose-code": theme("colors.primario"),
            "--tw-prose-pre-code": theme("colors.primario"),
            "--tw-prose-pre-bg": theme("colors.primario"),
            "--tw-prose-th-borders": theme("colors.primario"),
            "--tw-prose-td-borders": theme("colors.primario"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    function addBaseLayer({addBase}) {
      addBase({
        ":root": {
          "--primario": "hsl(207, 68%, 50%)",
          "--primario-dark": "hsl(207, 68%, 40%)",
          "--hermano": "hsl(207, 51%, 68%)",
          "--acento": "hsl(359, 89%, 64%)",
          "--fondo": " hsl(0, 0%, 100%)",
          "--fondo-jr": " hsl(0, 0%, 97%)",
          "--texto-str": " hsl(0, 0%, 10%)",
          "--texto-sft": " hsl(0, 0%, 25%)",
          "--code": " #222222",
          "--ola": " url('/src/assets/img/oladay.png')",
          "--scrollbar": " hsl(205, 21%, 17%)",
          "--ola-color": " var(--hermano)",
          "--sombras": " rgba(0, 0, 0, 0.4)",
          "--boton": " hsl(359, 59%, 64%)",
          "--hover": " var(--texto-str)",
          "--trans": " 1s",
          "--check1": " var(--hermano)",
          "--check2": " var(--fondojr)",
        },
        html: {
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'",
          scrollPaddingTop: "5.5rem",
          scrollBehavior: "smooth",
        },

        "body.oscuro": {
          "--primario": " hsl(207, 68%, 40%)",
          "--primario-dark": " hsl(207, 68%, 40%)",
          "--hermano": " hsl(207, 51%, 58%)",
          "--acento": " hsl(359, 59%, 64%)",
          "--fondo": " hsl(205, 31%, 12%)",
          "--fondoOpuesto": " hsl(0, 0%, 95%)",
          "--fondo-jr": " hsl(205, 21%, 17%)",
          "--texto-str": " hsl(0, 0%, 95%)",
          "--texto-sft": " hsl(0, 0%, 85%)",
          "--code": " #5a5b72",
          "--scrollbar": " var(--hermano)",
          "--ola": " url('/src/assets/img/olanight.png')",
          "--sombras": " rgba(0, 0, 0, 0.678)",
          "--ola-color": " #cbd5f6",
          "--hover": " var(--hermano)",
          "--check1": " var(--ola-color)",
          "--check2": " var(--hermano)",
        },
        "body.modal": {
          overflowY: "hidden",
        },
        "body.oscuro img": {
          filter: "brightness(0.85) contrast(1.1)",
        },
      });
    },

    function addComponentsLayer({addComponents}) {
      addComponents({
        kbd: {
          fontSize: " 0.9em",
          padding: " 0.0625rem 0.5rem",
          borderRadius: " 0.125rem",
          border: " 1px solid var(--primario)",
          boxShadow: " 1px 1px 0 var(--primario), 2px 2px 0 var(--primario)",
          margin: " 0 0.25rem",
          color: " var(--primario)",
          fontFamily: " monospace",
          cursor: " pointer",
        },
      });
    },

    function addUtilitiesLayer({addUtilities}) {
      addUtilities(
        {
          ".snake": {
            "@apply bg-gradient-to-r  from-primario to-primario bg-0-4 bg-0-100 bg-no-repeat no-underline transition-all duration-300 ease-in-out hover:bg-100-4 focus:bg-100-4":
              "",
          },
          ".fancy": {
            "@apply relative z-10 cursor-pointer overflow-hidden font-bold text-pink-500":
              "",
          },
          ".fancy::after": {
            content: '""',
            backgroundColor: "rgba(236, 64, 122, 0.25)",
            position: "absolute",
            left: "12px",
            bottom: "-6px",
            width: "calc(100% - 8px)",
            height: "calc(100% - 8px)",
            zIndex: 1,
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0, 2.05)",
          },

          ".fancy:hover:after": {
            left: "0",
            bottom: "-2px",
            width: "100%",
            height: "100%",
          },

          ".glassmorph": {
            background: "rgba(0, 0, 0, 0.05)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(15px)",
          },
          ".glassmorph-dark": {
            background: "rgba(0, 0, 0, 0.45)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(15px)",
          },
          ".app-form-control": {
            width: "100%",
            padding: "10px 0",
            background: "none",
            border: "none",
            borderBottom: "1px solid var(--hermano)",
            color: "var(--texto-sft)",
            fontSize: "14px",
            textTransform: "uppercase",
            outline: "none",
            transition: "border-color 0.2s",
          },

          ".app-form-control::placeholder": {
            color: "#666",
          },
          ".app-form-control:focus": {
            borderBottomColor: "var(--acento)",
          },
          ".fondo-pts": {
            backgroundSize: "100px 100px",
            backgroundPosition: "0 0, 40px 40px",
            "@apply bg-puntos": "",
          },
        },
        []
      );
    },
  ],
};
