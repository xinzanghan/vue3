<template>
  <nav>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="orders-o">课程目录</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </nav>
</template>

<style lang="scss"></style>
