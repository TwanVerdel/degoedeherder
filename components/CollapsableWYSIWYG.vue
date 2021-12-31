<template>
    <section
        class="container"
        :class="{
            overflows: overflows,
            show: show,
        }"
    >
        <div
            class="content"
            ref="contentContainer"
            :style="`--grow-height: ${growHeight}px;`"
        >
            <slot />
        </div>
        <button
            v-if="overflows"
            class="show-toggle-button"
            @click="toggleShow()"
        >
            <span class="more"> Meer weergeven </span>
            <span class="less"> Minder weergeven </span>
        </button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            overflows: false,
            show: false,
            growHeight: 0,
        };
    },
    computed: {
        container() {
            return this.$refs.contentContainer;
        },
    },
    methods: {
        toggleShow() {
            this.setGrowHeight();

            this.show = !this.show;

            if (this.show === false) {
                this.scrollToContainer();
            }
        },

        scrollToContainer() {
            setTimeout(() => {
                window.scrollTo({
                    top: this.container.offsetTop - 300,
                    behavior: "smooth",
                });
            }, 200);
        },

        setGrowHeight() {
            this.growHeight = this.container.scrollHeight || 0;
        },

        checkIfOverflows() {
            this.overflows = this.container.scrollHeight > this.container.offsetHeight;
        },
    },
    mounted() {
        this.setGrowHeight();
        this.checkIfOverflows();
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: vw(120px) 0 vw(88px) 0;

    @media ($tablet-portrait) {
        padding: vw(80px) 0 vw(56px) 0;
    }

    .content {
        --grow-height: 0;

        position: relative;
        max-height: vw(240px);
        overflow: hidden;
        width: vw(760px);
        transition: max-height 0.8s;

        @media ($tablet-portrait) {
            width: 100%;
            padding-left: var(--outer);
            padding-right: var(--outer);
        }

        &::v-deep {
            &::before {
                content: "";
                height: vw(120px);
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: linear-gradient(
                    180deg,
                    rgba($white, 0) 0%,
                    $white 100%
                );
                transition: opacity 0.4s;
            }

            * {
                margin-bottom: 0.5em;
                margin-top: 1em;
            }

            img {
                margin-bottom: vw(56px);
                margin-top: vw(56px);
                height: vw(240px);
                width: 100%;
                object-position: center;
                object-fit: contain;
            }

            *:first-child {
                margin-top: 0;
            }

            *:last-child {
                margin-bottom: 0;
            }
        }
    }

    .show-toggle-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: vw(48px);
        width: vw(180px);
        background: transparent;

        transition: transform 0.2s;
        cursor: pointer;
        margin-top: vw(16px);

        &:hover {
            transform: translateY(vw(4px));
        }

        span {
            position: absolute;
            transition: opacity 0.2s;
            font-weight: bold;
        }
    }
}

.container:not(.show) {
    .show-toggle-button {
        span.less {
            opacity: 0;
        }
    }
}

.container.show {
    .content {
        max-height: var(--grow-height);

        &::before {
            opacity: 0;
            pointer-events: none;
        }
    }

    .show-toggle-button {
        span.more {
            opacity: 0;
        }
    }
}

.container:not(.overflows) {
    .content {
        &::before {
            opacity: 0;
            pointer-events: none;
        }
    }
}
</style>