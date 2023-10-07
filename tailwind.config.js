/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#0DCAF0',
        // 'themeColor': '#0d6efd',
        'sideBarBg': '#111418',
        'profileBorder': '#343A40',
        'headingText': '#212529',
        // 'headingTextShadow': '#dee3e4 ',
        'headingTextShadow': '#F2F4F4 ',
        'contactHead': '#252B33',
        'paragraph': '#575353',
        'resumeBtn': '#6C757D',
      },
      backgroundImage: {
        'bannerBg': "url('images/myBanner.jpg')",
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'btnShadow': '0px 5px 10px 0px rgba(0, 0, 0, 0.40)',
        'iconShadow': '0px 2px 5px 0px rgba(0, 0, 0, 0.25)',
        'resumeShadow': '0px 0px 4px 0px rgba(0, 0, 0, 0.15);',
      },
      maxWidth: {
        'customContainer': '1170px',
      },
      borderRadius: {
        'customRadius': '30px',
      },
      spacing: {
        '70': '70px',
        '40': '40px',
      }
    },
  },
  plugins: [],
}