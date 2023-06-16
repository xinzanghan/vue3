<template>
  <div class="home">
    <!-- 首页头部 -->
    {{ category }}
    <HomeHeader></HomeHeader>
    <!-- 轮播 -->
    <HomeSwiper></HomeSwiper>
    <!-- 课程 -->
    <HomeList></HomeList>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import HomeHeader from './home-header.vue';
import HomeSwiper from './home-swiper.vue';
import HomeList from './home-list.vue';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';

export default defineComponent({
  components:{
    HomeHeader,
    HomeSwiper,
    HomeList
  },
  setup(){
    let store=useStore<IGlobalState>()
    // store.state.home.currentCategory
    let category=computed(()=>{
      return store.state.home.currentCategory
    })
    return {
      category
    }
  }
    
})
</script>
