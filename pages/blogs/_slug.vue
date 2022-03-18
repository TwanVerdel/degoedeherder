<template>
    <main class="page">
        <template v-if="blogContent.pastorBlog">
            <main-article :title="title" 
                        :imageSrc="image" 
                        :imageHeight="imageHeight" 
                        :imageWidth="imageWidth" 
                        :text="text" />
        </template>
    </main>
</template>

<script>
import BlogData from "@/datalayers/blog.js";

import MainArticle from "@/components/MainArticle.vue";

export default {
    components: {
        MainArticle
    },
    mounted() {
        if (!this.blogContent.pastorBlog) {
            window.location.replace("/blogs");
        }
    },
    computed: {
        title() {
            return this.blogContent.pastorBlog?.title;
        },
        image() {
            return this.blogContent.pastorBlog?.thumbnail?.url;
        },
        imageWidth() {
            return this.blogContent.pastorBlog?.thumbnail?.width;
        },
        imageHeight() {
            return this.blogContent.pastorBlog?.thumbnail?.height;
        },
        text() {
            return this.blogContent.pastorBlog?.blogText?.html;
        }
    },

    async asyncData(ctx) {
        const { params, redirect } = ctx;

        let blogContent = undefined;

        blogContent = await BlogData(ctx, ctx.params);

        return {
            blogContent
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>