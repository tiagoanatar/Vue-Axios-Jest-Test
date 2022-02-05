<template>

    <h1>Home</h1>
    
    <hr />

    <Card v-for="(list, index) in employees.data" :key="index" 
    :name='list.name' :role='list.role' :image='list.image' :review='list.review' />

</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
// UI
import { NGrid } from 'naive-ui'
// components
import Card from '../components/Card.vue'
// API calls
import TutorialService from "../services/ApiRequest"
// types
import { Item, ResponseData } from "../types/ApiTypes"

import axios from "axios";

export default defineComponent({
  name: 'Home',
  components: {
    Card,
    NGrid,
  },
  setup(){

    const employees = reactive({ data: [] as Array<Item>});  

    function retrieveTutorials() {
      TutorialService.getAll()
        .then((response: ResponseData) => {
          employees.data = response.data
          console.log(employees.data)
        })
        .catch((e: Error) => {
          console.log(e)
        });
    }

    async function loadUsers() {
      const { data } = await axios.get("http://localhost:7000/api/menu/items");
      employees.data = data;
    }

    retrieveTutorials()

    return {
      employees,
      retrieveTutorials,
      loadUsers
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
