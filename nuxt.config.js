export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // router: {
    //     base: '/custom-rigs-preview/'
    // },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {        
        htmlAttrs: {
            lang: 'nl'
        },
        title: 'Custom Rigs',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Een eigen samengestelde desktop PC, game PC of server? Kies voor Custom Rigs' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
        ]
    },

    styleResources: {
        scss: [ 
            '@/assets/style/variables.scss',
            '@/assets/style/mixins.scss',
            '@/assets/style/typography.scss',
            '@/assets/style/global.scss',
            '@/assets/style/functions.scss',
            '@/assets/style/button.scss',
            '@/assets/style/animations.scss',
        ]
    },

    css: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/svg',
        'nuxt-compress',
    ],

    axios: {
        baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
    },

    publicRuntimeConfig: {
        recaptcha: {
            siteKey: process.env.RECAPTCHA_SITE_KEY,
            version: 3,
        },

        axios: {
            browserBaseURL: process.env.API_URL
        }
    },

    "nuxt-compress": {
        gzip: {
            cache: true
        },
        brotli: {
            threshold: 10240
        }
    },
    
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},  
};


