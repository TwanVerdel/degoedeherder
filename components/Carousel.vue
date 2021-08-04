<template>
    <section class="carousel-container">
        <div class="buttons-container" 
                v-if="amount > 3">
            <div class="left arrow" 
                :class="{ 'disabled' : current <= 1 }"
                @click="previous()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0002 11.0001V13.0001H8.00016L13.5002 18.5001L12.0802 19.9201L4.16016 12.0001L12.0802 4.08008L13.5002 5.50008L8.00016 11.0001H20.0002Z" fill="#F4F4F4"/>
                </svg>
            </div>

            <div class="right arrow" 
                :class="{ 'disabled' : current >= amount - 2 }"
                @click="next()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99984 12.9999L3.99984 10.9999L15.9998 10.9999L10.4998 5.49992L11.9198 4.07992L19.8398 11.9999L11.9198 19.9199L10.4998 18.4999L15.9998 12.9999L3.99984 12.9999Z" fill="#F4F4F4"/>
                </svg>
            </div>
        </div>
        <div class="scroll-wrapper">
            <div class="carousel" ref="carousel">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                amount: null,
                current: 1
            }
        },
        computed: {
            maxIdx() {
                return this.amount - 1
            },
        },
        methods: {
            scrollTo(idx) {
                const carousel = this.$refs.carousel
                const slide = carousel.children[idx]
                const amount = slide.offsetLeft - slide.offsetWidth

                this.current = idx

                carousel.scrollTo({
                    left: amount,
                    behavior: 'smooth'
                });
            },
            getVisibility(i) {
                const idx = this.current

                if(idx == 0) {
                    return i < 3
                } 
                if(idx == this.maxIdx) {
                    return i > this.maxIdx - 3
                } 

                return i == idx || i == idx - 1 || i == idx + 1
            },
            next() {
                if(this.current < this.amount - 2) {
                    this.current++
                }
            },
            previous() {
                if(this.current > 1) {
                    this.current--
                }
            },
            setVisibility() {
                const carousel = this?.$refs?.carousel

                carousel.children.forEach((slide, index) => {
                    if(this.getVisibility(index)) 
                    {
                        slide.classList.add('show')
                    } 
                    else 
                    {
                        slide.classList.remove('show')
                    }
                })
            }
        },
        watch: {
            current : function(val) {
                this.scrollTo(val)

                this.setVisibility()
            }
        },

        mounted() {
            const carousel = this?.$refs?.carousel
            const slides = carousel?.children

            this.amount = slides?.length

            this.setVisibility()
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-container {
        position: relative;
        display: flex;
        width: 100%;

        .buttons-container {
            position: absolute;
            display: flex;  
            justify-content: space-between;

            top: 50%;
            width: 100%;
            z-index: 4;

            padding: 0 vw(64px);
            
            pointer-events: none;

            @media($tablet-portrait) {
                display: none;
            }

            .arrow {
                background: $tertiary;
                height: desktop-vw(56px);
                width: desktop-vw(56px);
                box-sizing: content-box;
                border-radius: desktop-vw(56px);

                display: flex;
                align-items: center;
                justify-content: center;

                z-index: 4;
                box-shadow: 0 desktop-vw(2px) desktop-vw(16px) rgba($black, 0.2);

                cursor: pointer;
                transition: opacity 0.2s;
                pointer-events: all;

                &.disabled {
                    opacity: 0.4;
                    pointer-events: none;
                }

                svg {
                    transition: transform 0.2s;
                    height: vw(24px);
                    width: vw(24px);
                }

                &:hover {
                    &.left {
                        svg {
                            transform: translateX(desktop-vw(-4px))
                        }
                    }

                    &.right {
                        svg {
                            transform: translateX(desktop-vw(4px))
                        }
                    }
                }
            }
        }

        .scroll-wrapper {
            width: 100%;
            box-sizing: content-box;
            overflow: hidden;

            .carousel {
                position: relative;

                left: 0;
                top: vw(16px);
                padding-bottom: vw(56px);
                padding-top: vw(16px);

                display: grid;
                grid-auto-flow: column;
                grid-auto-columns: max-content;
                gap: vw(32px);

                overflow-x: scroll;
                scroll-snap-type: x mandatory;
                
                width: 100%;

                @media($tablet-portrait) {
                    gap: vw(24px);
                }

                &:before {
                    content: '';
                    width: var(--outer);
                    margin-left: vw(-32px);
                    height: 100%;

                    @media($tablet-portrait) {
                        margin-left: vw(-24px);
                    }
                }

                &:after {
                    position: relative;
                    left: vw(-32px);
                    content: '';
                    width: var(--outer);

                    @media($tablet-portrait) {
                        left: vw(-24px);
                    }
                }

                >* {
                    scroll-snap-align: center;
                    width: calc(((100vw  - var(--outer) - var(--outer))  / 3) - #{vw(28px)});
                    opacity: 0;
                    transition: opacity 0.4s;

                    &.show {
                        opacity: 1;
                    }

                    @media($tablet-portrait) {
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>