module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        newsans: ['CircularStd',
                  'sans-serif',
                  'system-ui', 
                  '-apple-system', 
                 ]
      },
      colors: {
        tpink: '#efc7c2',
        tbeige: '#ffe5d4',
        tgreen: '#bfd3c1',
        tdarkgreen: '#68a691',
        tpurple: '#694f5d'
      },
      inset: {
        '100': '100%' 
      }
    },
  },
  variants: {
    fontSize: ['responsive', 'hover']
  },
  plugins: [],
}

// /* HSL */
// $color1: hsla(7%, 19%, 94%, 1);
// $color2: hsla(24%, 17%, 100%, 1);
// $color3: hsla(126%, 9%, 83%, 1);
// $color4: hsla(160%, 37%, 65%, 1);
// $color5: hsla(328%, 25%, 41%, 1);

// /* RGB */
// $color1: rgba(239, 199, 194, 1);
// $color2: rgba(255, 229, 212, 1);
// $color3: rgba(191, 211, 193, 1);
// $color4: rgba(104, 166, 145, 1);
// $color5: rgba(105, 79, 93, 1);

// /* GRADIENT */
// $gradient-top: linear-gradient(0deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-right: linear-gradient(90deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-bottom: linear-gradient(180deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-left: linear-gradient(270deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-top-right: linear-gradient(45deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-bottom-right: linear-gradient(135deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-top-left: linear-gradient(225deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-bottom-left: linear-gradient(315deg, #efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);
// $gradient-radial: radial-gradient(#efc7c2ff, #ffe5d4ff, #bfd3c1ff, #68a691ff, #694f5dff);