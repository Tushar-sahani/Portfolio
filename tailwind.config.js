/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    after:"box-border",
    
    extend: {
      display: ["group-hover"],
      animation: {
				right: 'slideright .5s ease-in-out',
        fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				slideright: {
					from: {
            opacity: 0,
            transform: 'translateX(-250px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
				},
        fadeIn: {
					from: {
            opacity: 0,
            transform: 'translateX(-100px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
				},
			},
    },
  },
  plugins: [],
};
