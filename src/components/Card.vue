<template>

  <n-card :title="name">
    <template #header-extra> {{ role }} </template>
    
    <p><img :src='image' :alt='name' class='card_employees' /></p>

    <template #footer>{{review}}</template>
    <template #action> 
      <!-- v-bind sample - simplified : version - with it you can pass functions and dynamic variables-->
      <n-button @click="changeButtonState('error')" :type="buttonState">Test Button</n-button> 
    </template>
  </n-card>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NCard, NButton } from 'naive-ui'

export default defineComponent({
  name: 'Card',
  components: {
    NCard,
    NButton
  },
  props: {
    role: String,
    name: String,
    image: String,
    review: String,
  },
  data(){
    return {
      item: 'New Name' as string | number,
      buttonState: 'primary' as string
    }
  },
  methods: {
    changeName(item: string | number){
      this.item = item 
    },
    changeButtonState(buttonState: string){
      this.buttonState = buttonState 
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card_employees {
  width:100%;
}
</style>
