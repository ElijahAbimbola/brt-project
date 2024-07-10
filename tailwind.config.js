/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
          'Krub':'Krub',
          'Rubik': 'Rubik',
          'Poppins':'Poppins',
          'League+spartan': 'League+spartan',
      },
        
      fontSize : {
        'xsm':'0.875rem',
        'sm':'1rem',
        'smd': '1.563rem',
        'md': '2.188rem',
        'lg': '3.75rem',
      },

      backgroundSize : {
           
      },

      colors: {
          Navyblue: '#091242',
          Navyblue2: '#111C55',
          Orange: '#F6B426',
          grey : '#041C37',
          yellow : '#FFB629',
          lightgrey: '#091242',
          black : '#1C1F35',
          lightgrey2 : '#E8E8E8',
          blue : '#4E5683',
          grey2 : '#FFFFFF',
          
      }
    },
  },
  plugins: [],
}