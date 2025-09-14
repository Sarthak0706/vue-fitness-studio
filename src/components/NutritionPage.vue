<template>
    <h1>This is the Nutrition Page</h1>
    <NutritionForm tagline="Eat Healthy keeps your body fit" @addingmeals="addingdata"></NutritionForm>
    <li v-for="(items,index) in nutritionList" :key="index" class="foodstyle">
        {{index+1}} - {{ items.meals }} - {{ items.calories }}cal
        <div class="buttons">
            <button  class="edit-button">edit</button>
            <button @click="deleting(index)">delete</button>    
        </div>
    </li>
     
</template>
<script>
import NutritionForm  from "./NutritionForm.vue";
export default{
    name:"NutritionPage",
    components:{
        NutritionForm
    },
    data(){
        return{
            nutritionList:[]
        }
    },
    methods:{
        addingdata(newitem)
        {
            this.nutritionList.push(newitem);
        },
        deleting(index)
        {
            this.nutritionList.splice(index, 1);
        },
        
    }
}
</script>

<style>
.foodstyle
{
    margin-top:30px;
    background-color:#f1cef6;
    width: 100px;
    margin-left: 725px;
}
.buttons
{
    margin-top: 10px;
    
}
.edit-button
{
    margin-right:10px;
}
</style>