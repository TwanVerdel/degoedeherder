<template>
    <main class="page">
        <main-article :title="title" :imageSrc="image" :text="text"/>
    </main>
</template>

<script>
import BlogData from "@/datalayers/blog.js";

import MainArticle from "@/components/MainArticle.vue";

export default {
    components: {
        MainArticle
    },
    data() {
        var blogID = this.$route.query.id;
        if(blogID === "" || blogID == null){
            this.$router.push('/blogs')
        }

        return {
            blogID
        };
    },
    computed: {
        title(){
            return this.blogContent.pastorBlogs[0].title;
        },
        image(){
            return this.blogContent.pastorBlogs[0].thumbnail.url;
        },
        text(){
            return this.blogContent.pastorBlogs[0].blogText.html;
        }
    },

    async asyncData(ctx) {
        const blogContent = await BlogData(ctx);

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