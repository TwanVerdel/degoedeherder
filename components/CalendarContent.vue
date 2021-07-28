<template>
    <section class="calendar-content">
        <div class="text-container">
            <h2>
                Evenementen en activiteiten.
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ultricies efficitur lacus. Etiam tincidunt magna diam, porta
                dignissim sapien suscipit quis. Vestibulum pharetra finibus
                dolor, at malesuada mauris varius nec.
            </p>
            <button class="btn">
                Weekendvieringen
            </button>
        </div>
        <div class="calendar-container">
            <h2>Agenda</h2>

            <div class="calendar" 
                 ref="calendar"
                 :style="showAllEvents ? `max-height: ${getCalendarHeight()}px;`: ''"
                 :class="{ 'show-all' : showAllEvents }">
                <div class="upcomming">
                    <div class="day-container">
                        <span class="day">Vandaag</span>
                        <ul class="event-list">
                            <li class="event">
                                <span class="name">Paasviering</span>
                                <span class="date">21 dec 12:00 - 10:00 </span>
                            </li>
                            <li class="event">
                                <span class="name">Paasviering</span>
                                <span class="date"
                                    >10 jan 12:00 - 12 jan 10:00
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="day-container">
                        <span class="day">Morgen</span>
                        <ul class="event-list">
                            <li class="event">
                                <span class="name">Paasviering</span>
                                <span class="date">21 dec 12:00 - 10:00 </span>
                            </li>
                            <li class="event">
                                <span class="name">Paasviering</span>
                                <span class="date"
                                    >10 jan 12:00 - 12 jan 10:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <span class="year">2022</span>
                <ul class="event-list">
                    <li class="event">
                        <span class="name">Paasviering</span>
                        <span class="date">21 dec 2021</span>
                    </li>
                    <li class="event">
                        <span class="name">Paasviering</span>
                        <span class="date">21 dec 2021</span>
                    </li>
                </ul>
                <span class="year">2023</span>
                <ul class="event-list">
                    <li class="event">
                        <span class="name">Paasviering</span>
                        <span class="date">21 dec 2021</span>
                    </li>
                    <li class="event">
                        <span class="name">Paasviering</span>
                        <span class="date">21 dec 2021</span>
                    </li>
                </ul>
            </div>

            <button class="show-more" 
                    @click="showAllEvents = !showAllEvents" 
                    v-text="showAllEvents ? 'Inklappen' : 'Alles Tonen'" />
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                showAllEvents: false
            }
        },
        methods: {
            getCalendarHeight() {
                return this?.$refs?.calendar?.scrollHeight;
            }
        }
    };
</script>

<style lang="scss" scoped>
.calendar-content {
    position: relative;
    display: flex;
    min-height: vw(808px);
    margin-top: vw(112px);

    @media($tablet-portrait) {
        flex-direction: column;
        margin-top: vw(72px);
    }

    .text-container {
        @include Left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: sticky;
        top: vw(112px);
        width: 50vw;
        height: vw(808px);

        @media($tablet-portrait) {
            @include Outer;
            position: static;
            width: 100%;
            height: vw(520px);
            top: 0;
        }

        h2 {
            max-width: vw(360px);
        }

        p {
            max-width: vw(584px);
            margin-top: vw(24px);
        }

        .btn {
            margin-top: vw(24px);
        }
    }

    .calendar-container {
        width: 50vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        background: $tertiary;
        padding: vw(88px) 0;

        @media($tablet-portrait) {
            width: 100%;
        }

        @media($phone) {
            @include Outer(56px);
        }

        h2 {
            font-size: vw(28px);
            color: $white;
            padding-bottom: vw(32px);
        }

        .calendar {
            position: relative;
            display: flex;
            flex-direction: column;
            width: vw(360px);
            
            padding: 0 vw(80px);
            box-sizing: content-box;
            overflow: hidden;
            transition: max-height 0.6s;
            max-height: vw(560px);

            @media($phone) {
                width: 100%;
                max-height: vw(360px);
                padding: 0;
            }

            &::after {
                content: "";
                bottom: 0;
                left: 0;
                width: 100%;
                height: vw(64px);
                position: absolute;
                transition: opacity 0.6s;

                background: linear-gradient(
                    180deg,
                    rgba($tertiary, 0) 0%,
                    rgba($tertiary, 1) 100%
                );
            }

            .upcomming {
                display: grid;
                grid-auto-flow: row;
                grid-auto-rows: max-content;
                gap: vw(16px);
                margin-bottom: vw(48px);

                .day-container {
                    display: flex;
                    flex-direction: column;
                    .day {
                        font-family: Roboto Slab;
                        line-height: 150%;
                        font-weight: 500;
                        color: $white;
                        margin-bottom: vw(8px);
                    }
                }
            }

            .year {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: vw(420);
                margin-left: vw(-60px);
                margin-top: vw(16px);
                margin-bottom: vw(12px);

                color: $white;
                font-family: Roboto Slab;

                @media($phone) {
                    width: 100%;
                    margin-left: 0;
                }

                &::after {
                    content: "";
                    display: block;
                    height: vw(2px);
                    min-width: vw(360px);
                    background: $white;
                    margin-left: vw(16px);
                    opacity: 0.4;

                    @media($phone) {
                        min-width: vw(200px);
                        width: 100%;
                    }
                }
            }

            .event-list {
                display: grid;
                grid-auto-flow: row;
                grid-auto-rows: max-content;
                gap: vw(16px);

                .event {
                    display: grid;
                    grid-auto-flow: row;
                    grid-auto-rows: max-content;
                    gap: vw(4px);
                    padding: vw(8px) vw(12px);
                    background: $white;

                    .name {
                        font-size: vw(16px);
                        line-height: 150%;
                        font-weight: bold;
                        font-family: Roboto Slab;
                    }

                    .date {
                        font-size: vw(12px);
                        font-weight: bold;
                        opacity: 0.8;
                    }
                }
            }
        }

        .calendar.show-all {
            &::after {
                opacity: 0;
                pointer-events: none;
            }
        }

        .show-more {
            margin-top: vw(16px);
            background: transparent;
            color: $white;
            font-size: vw(12px);
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s;
            opacity: 0.8;

            @media($tablet-portrait) {
                font-size: vw(14px);
            }

            &:hover {
                opacity: 0.6;
            }
        }
    }
}




</style>