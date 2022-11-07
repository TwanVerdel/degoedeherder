import sitemapData from "./datalayers/sitemap.js";

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
        title: 'De Goede Herder Parochie Emmen',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Een vindplaats voor het katholieke/christelijk geloof. Welkom op de website van de Goede Herder Parochie Emmen' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
        ]
    },

    styleResources: {
        scss: [
            '@/assets/style/global-inject.scss',
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
        '@nuxtjs/sitemap'
    ],

    axios: {
        baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
    },

    sitemap: async function() {
        let data = await sitemapData();

        return {
            hostname: 'https://degoedeherderparochie.nl',
            gzip: true,
            routes: [
                ...data.newsMessages.map(page => `/nieuws/${page.slug}`),
                ...data.pastorBlogs.map(page => `/blogs/${page.slug}`)
            ]
        }
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
    build: {
        babel: {
            presets({ isServer }) {
                const targets = isServer ? { node: 'current' } : { ie: 11 }
                return [
                    [require.resolve("@babel/preset-env"), { targets }]
                ]
            },
            plugins: [
                "@babel/syntax-dynamic-import",
                "@babel/transform-runtime",
                "@babel/transform-async-to-generator"
            ]
        }
    },

    plugins: ['~/plugins/GraphCMS.js'],

    generate: {
        interval: 200, // Hygraph/GraphCMS has a rate limit of 5 requests per second, 1000 ms / 5 = 200ms
    }
};


