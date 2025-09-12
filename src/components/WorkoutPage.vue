<template>
  <div v-for="(exList, workout) in workoutgetting" :key="workout">
  <h3>{{ workout }}</h3>
  <ul>
    <li v-for="(ex, index) in exList" :key="index">
      {{ ex.exercise }} - Sets: {{ ex.sets }} - Time: {{ ex.time }} mins
    </li>
  </ul>
</div>

  <div>
    <h1>Workout Page</h1>
    <form>
      <label for="workout">Choose Workout:</label>
      <select id="workout" v-model="selectedWorkout">
        <option disabled value="">-- Select Workout --</option>
        <option value="legs">Legs</option>
        <option value="chest">Chest</option>
        <option value="arms">Arms</option>
        <option value="shoulders">Shoulders</option>
      </select>
      <p>You selected: {{ selectedWorkout }}</p>
    </form>

    <button class="show-form" @click="showform">Show Form</button>
    <form class="beauty" v-if="formsee">
      <div class="form-row">
        <label class="form-label" >Type of Exercise:</label>
        <input type="text" placeholder="Enter exercises"  v-model="addingexercise"/>
      </div>

      <div class="form-row">
        <label class="form-label">No. of sets:</label>
        <input type="text" placeholder="Please enter sets" v-model="noofsets"/>
      </div>
      
      <div class="form-row">
        <label class="form-label">Time Spent:</label>
        <input type="text" placeholder="Time Spent" v-model="timespent" />
      </div>
      <button @click.prevent="submitdata">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "WorkoutPage",
  data() {
    return {
      selectedWorkout: "",
      formsee:false,
      addingexercise:"",
      noofsets:"",
      timespent:""
    };
  },
  computed:{
    workoutgetting()
    {
      return this.$store.getters.showexercise;
    }
  },
  methods:{
    showform()
    {
      this.formsee = !this.formsee;
    },
    submitdata()
    {
      this.$store.dispatch('addexercise',{
        exercise: this.addingexercise,
        sets: this.noofsets,
        time: this.timespent,
        workout: this.selectedWorkout,
      }),
      this.addingexercise = "";
      this.noofsets = "";
      this.timespent = "";
    },

  }
};
</script>

<style>

.form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.form-label {
  width: 150px;
  font-weight: bold;
}

.form-row input {
  padding: 2px;
}

.show-form{
    margin-bottom: 10px;
}
</style>
