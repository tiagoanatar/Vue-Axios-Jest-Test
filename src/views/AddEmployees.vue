<template>
  <h1>Add Employees</h1>

  {{item}}

  <!-- data binding -->
  <n-space vertical>
    <n-input v-model:value="item" type="text" placeholder="Basic Input" />
  </n-space>  

  <div class="submit-form">

    <div v-if="!submitted">

      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="employees.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Role</label>
        <input
          class="form-control"
          id="role"
          required
          v-model="employees.role"
          name="role"
        />
      </div>

      <div class="form-group">
        <label for="description">Age</label>
        <input
          class="form-control"
          id="age"
          type="date"
          required
          v-model="employees.age"
          name="age"
        />
      </div>

      <div class="form-group">
        <label for="description">Image</label>
        <input
          class="form-control"
          id="image"
          required
          v-model="employees.image"
          name="image"
        />
      </div>

      <div class="form-group">
        <label for="description">Review</label>
        <input
          class="form-control"
          id="review"
          required
          v-model="employees.review"
          name="review"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NSpace, NInput } from 'naive-ui'
// API calls
import TutorialService from "../services/ApiRequest"
// types
import { Item, ResponseData, ReviewArray } from "../types/ApiTypes"

export default defineComponent({
  name: 'AddEmployees',
  components: {
    NSpace,
    NInput
  },
  data(){
    return {
      employees: {
        id: 0 as number,
        name: "" as string,
        role: "" as string,
        age: "" as string,
        image: "https://randomuser.me/api/portraits/men/71.jpg" as string,
        review: "" as string,
        assignedReviews: [] as Array<Item>,
        employeesReviews: [] as Array<ReviewArray>
      } as Item,
      submitted: false,
    }
  },
  methods: {
    saveTutorial() {
      let data = {
        name: this.employees.name,
        role: this.employees.role,
        age: this.employees.age,
        image: this.employees.image,
        review: this.employees.review,
        assignedReviews: this.employees.assignedReviews,
        employeesReviews: this.employees.employeesReviews
    };

    TutorialService.create(data)
        .then((response: ResponseData) => {
          this.employees.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.employees = {} as Item;
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
