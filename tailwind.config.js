/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // google font Start
      fontFamily: {
        'pop': ['Poppins'],
        'pod': ['Podkova'],
        'Frank': ['Frank Ruhl Libre'],              
      },
      // google font End  
      // colors Start
      colors: {
        hdBg: '#FAE3B6',
        hbColor: '#FDBB57',
        btnColor: '#050505',
        bdrColor: '#FFD687',
        sellColor: '#CFA485',
        starColor: '#FFAF37',
        textColor: '#C4C4C4',
        },
      
     // colors End 
    //  container Start
    maxWidth: {
      'hdContainer': '1320px',
    },
    //  container End

   

    },
  },
  plugins: [],
}

