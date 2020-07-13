export default {
  mode: "universal",
  // router: {
  //   mode: 'hash'
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: "Book",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }, {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/line-awesome.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      }
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/style/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
   ** Axios
   */

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': 'http://localhost:3000',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  env: {
    url: 'https://app.medmandu.life'
  },

  router: {
    base: '/dist/'
  }
  
};
