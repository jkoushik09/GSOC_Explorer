/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Example color for buttons and highlights
        yellow_bg: '#EEBA2C', // Background color
        text: '#FFFFFF', // Text color
        card: '#2F2F2F', // Card background color
        login_bg:'#1A1B1F',
        gray_bg:'#262626',
        lgray_bg:'#DCDCDC',
        lblack_bg:'#161616',
        oit_green_bg:'#2F4247',
        oit_green:'#A0EEEE',
        oit_red_bg:'#4A151E',
        oit_red:'#EB8B83',
        oit_blue_bg:'#223845',
        oit_blue:'#4CBAE5'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example font,
        // logo: ['Tiny5', 'sans-serif']
        logo:['Raleway', 'sans-serif'],
        outfit:[ 'Outfit', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        '4xl': '0px 0px 15px 12px rgba(238,186,44,0.8);'
      },
      scale:{
        '125':'1.05'
      },
      borderRadius: {
        large:'60px'
      }
    },
  },
  plugins: [],
}

