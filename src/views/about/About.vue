<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="abc">{{ abc }}</div>
    <div>{{ url }}</div>
    <div>
      <button v-on:click="getNews()" v-has:getNews>获取数据</button>
    </div>
    <div>
      <button v-on:click="addNews()" v-has:addNews>新增数据</button>
    </div>
    <div>
      <button v-on:click="delNews()" v-has:delNews>删除数据</button>
    </div>
    <div>
      <button v-on:click="modNews()" v-has:modNews>修改数据</button>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<style lang="scss">
  @import "about";
</style>
