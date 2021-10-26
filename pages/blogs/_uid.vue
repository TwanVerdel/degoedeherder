<template>
    <main class="page">
        <main-article :title="title" :imageSrc="image" :text="text" />
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
        // if(blogID === "" || blogID == null){
        //     this.$router.push('/blogs')
        // }

        return {
            blogID
        };
    },
    computed: {
        title() {
            return this.blogContent.pastorBlog.title;
        },
        image() {
            return this.blogContent.pastorBlog.thumbnail.url;
        },
        text() {
            return this.blogContent.pastorBlog.blogText.html;
        }
    },
    methods: {
        redirect(loc) {
            if (typeof window !== "undefined") {
                window.location.href = loc;
            }
        }
    },

    async asyncData(params) {
        const blogContent = await BlogData(params, params.params);
        console.log(blogContent);

        if (blogContent.pastorBlog === null) {
            console.log("blogcontent is nul");

            this.redirect("/blogs");
            return;
        }

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