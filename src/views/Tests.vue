<template>
  <h1>Tests</h1>

  {{item}}

  <!-- v-model data binding -->
  <n-space vertical>
    <n-input v-model:value="item" type='text' placeholder='Basic Input' />
  </n-space>  

  <!-- v-if -- show and hide ellments from the dom -->
  <hr />
  <h4>Hide Show Boxes</h4>
  
  <div v-if='isVisisble' class='box'>If</div>
  <div v-else-if='isVisisble2' class='box2'>Else If</div>
  <div v-else class='box3'>Else</div>
  <n-button @click="changeVisible(isVisisble)">{{isVisisble ? 'Hide' : 'Show'}}</n-button> 

  <!-- v-show -- show and hide with display:none -->
  <div v-show='isVisisble' class='box'></div>
  <n-button @click="changeVisible(isVisisble)">{{isVisisble ? 'Hide' : 'Show'}}</n-button> 

  <!-- v-cloak -- hide application until vue is ready - check also CSS of it -->
  <hr />
  <h4>V-CLOAK</h4>

  <div v-cloak>
    Hidden until everything is loaded
  </div>

  <!-- v-on - Vue has a convenient shorthand for v-on: the @ symbol. For example, @click -->
  <hr />
  <h4>FORM EVENTS</h4>

  <!-- keyup - listem to key evens/pressed - you can use the keyboard codes istead of 'enter' -->
  <n-space vertical>
    <n-input @keyup.enter="alert" type='text' placeholder='Press enter' />
  </n-space>  

  <hr />
  <h4>LOGIN FORM</h4>

  <!-- login form -->
  <form @submit.prevent='handleSubmit'>
    <input type='email' v-model='email' placeholder="email" />
    <input type='password' v-model='password' placeholder="password" />
    <button>Login</button>
  </form>

  <!-- v-for -->
  <hr />
  <h4>TEST LOOP ARRAY</h4>

  <span v-for='listItem in testArray' :key='listItem.id'>{{listItem.name}} | {{listItem.id}}</span>

  <p>Ou</p>

  <span v-for='(listItem, i) in testArray' :key='i'>
    {{listItem.name}} | {{listItem.id}}
     | {{listItem.list.filter((x) => x === 3).length > 0 ? 'on' : 'off'}}
    <br />
  </span>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NSpace, NInput, NButton } from 'naive-ui'

export default defineComponent({
  name: 'Employees',
  components: {
    NSpace,
    NInput,
    NButton,
  },
  data(){
    return {
      item: 'New Name' as string | number,
      buttonState: 'primary' as string,
      isVisisble: true as boolean,
      isVisisble2: true as boolean,
      // login form
      email: '' as string,
      password: '' as string,
      // test array loop
      testArray: [
        {id: 1, name: 'John Doe', list: [1,2,3]}, 
        {id: 2, name: 'Lena Fate', list: [1]}, 
        {id: 3, name: 'Sin Blair', list: [2,4]}
        ] as Array<{ id: number, name: string, list: Array<number> }>
    }
  },
  methods: {
    changeVisible(isVisisble: boolean){
      this.isVisisble = !isVisisble 
    },
    alert(){
      alert("Hello! I am an alert box!!")
    },
    handleSubmit(){
      alert("Login Done")
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
  }
  .box1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
  }
  .box2 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
  }
  [v-cloak] {
    display: none;
  }
</style>
