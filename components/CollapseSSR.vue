<template>
    <div ref="drawer"
         class="drawer"
         :style="open ? `max-height: ${height}px` : ''">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "CollapseSSR",
    data() {
        return {
            height: 100,
        };
    },
    props: {
        open: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        setHeight() {
            this.height = this.$refs.drawer ? this.$refs.drawer.scrollHeight : this.height;
        },
    },
    mounted() {
        this.setHeight();
    },
}
</script>

<style lang="scss" scoped>
    .drawer {
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.3s;
    }
</style>

