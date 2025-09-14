<template>
  <h2>{{ tagline }}</h2>
  <form @submit.prevent="formsubmit" class="nutrition-form">
    <label>Meals:</label>
    <input type="text" placeholder="e.g. Breakfast" v-model="mealsnew"/>
    <Label>Calories:</Label>
    <input type="number" placeholder="Calories" v-model="calories"/>
    <button>Submit</button>
  </form>
</template>

<script>
export default{
  name:"NutritionForm",
  props:['tagline'],
  data()
  {
    return{
      mealsnew:"",
      calories:""
    }
  },
  methods: 
  {
    formsubmit(){
      this.$emit("addingmeals",{
        meals:this.mealsnew,
        calories:this.calories
      }),
    this.mealsnew="";
    this.calories="";
    },
   
  }
}
</script>

<style>
.nutrition-form{
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  gap:10px;
  }
</style>