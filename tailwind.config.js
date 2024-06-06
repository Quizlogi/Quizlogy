import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#010851',
        'secondary': '#9A7AF1',
        'tartiary': '#707070',
        'pink': '#EE9AE5'
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
});