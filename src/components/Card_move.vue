<template>
    <swiper :options="option" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide v-for="item in arr" :key="item">{{item}}</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'card_move',
    props: ['arr', option, callback],
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, () => {
            this.$emit('someSwiperEvent');
        })
    }
}
</script>

<style>

</style>
