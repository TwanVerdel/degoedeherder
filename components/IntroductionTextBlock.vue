<template>
    <div class="container">
        <div class="header">
            {{title}}
        </div>
        <div class="text">
            {{text}}
        </div>
        <div v-if="hasButton">
            <div class="button">
                {{buttonText}}
                <img src="~assets/icons/arrow-right.svg" alt="arrow">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: 'Differences with the English culture'
        },
        text:{
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl. Maecenas dictum massa volutpat placerat eleifend. Curabitur metus arcu, vehicula ac ipsum id, fermentum lacinia ipsum. '
        },
        hasButton:{
            type: Boolean,
            default: false
        },
        buttonText:{
            type: String,
            default: 'Read more'
        }
    }
};
</script>

<style lang="scss" scoped>
.container{
    height: vw(368px);
    background-color: $secondary;
    padding: vw(48px);

    @media($phone){
            height: 100%;
        }

    @media($tablet-portrait){
            height: 100%;
        }

    .header{
        font-size: vw(28px);
        font-weight: bold;
        margin-bottom: vw(24px);
    }

    .text{
        font-size: vw(18px);
        line-height: 150%;
        margin-bottom: vw(24px);
    }
    .button{
        width: vw(176px);
        height: vw(56px);
        background-color: $primary;
        border-radius: vw(56px);

        display: flex;
        align-items: center;
        justify-content: center;
        
        color: $white;
        font-size: vw(18px);

        img{
            height: vw(16px);
            width: vw(16px);
            margin-left: vw(12px);
        }

    }
}
</style>