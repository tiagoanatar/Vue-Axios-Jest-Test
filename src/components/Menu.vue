<template>

  <div class='nav-bar'>
    <div class='logo'>COMPANY NAME</div>
    <div class='items'>
      <router-link to="/"><Icon><HomeOutline /></Icon> Home</router-link>
      <router-link to="/employees"><Icon><PersonOutline /></Icon> Employees List</router-link>
      <router-link to="/tests">Test</router-link>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeOutline, PersonOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'

export default defineComponent({
  name: 'Menu',
  components: {
    Icon,
    HomeOutline,
    PersonOutline,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar {
    background-color: #333;
    width: 100%;
    display: flex;
  }
  .nav-bar .logo {
    color: blanchedalmond;
    font-size: 150%;
    padding: 30px;
    flex: 0 1 auto;
  }
  .items {
    flex: 1 1 auto;
    flex-direction: row;
    display: flex;
  }
  .items a {
    padding-left: 20px;
    padding-right: 20px;
    color: blanchedalmond;
    background-color: #444;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-left: 1px solid #000;
  }
  .items a:hover {
    background-color: #555;
  }
</style>
