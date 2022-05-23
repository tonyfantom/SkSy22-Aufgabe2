<template>
	<div class="card col-sm-6 p-3">
		<div class="form-floating mb-3">
			<input
				type="text"
				class="form-control"
				id="titel"
				placeholder="Titel des To-Dos"
				v-model="todo.title" />
			<label for="titel">Titel</label>
		</div>
		<div
			class="col-12 d-flex flex-row justify-content-around align-items-center">
			<div class="form-floating mb-3 col-4">
				<input
					type="date"
					class="form-control"
					id="date"
					placeholder="Bis wann soll das To-Do bearbeitet werden?"
					v-model="date" />
				<label for="date">Datum</label>
			</div>
			<div class="form-floating mb-3 col-4">
				<input
					type="number"
					class="form-control"
					id="percentage"
					placeholder="Wie viel des To-Dos ist bereits geschafft?"
					v-model="todo.percentage" />
				<label for="percentage">Prozent</label>
			</div>
			<div class="form-floating mb-3">
				<button class="btn btn-primary" @click="submit">Speichern</button>
			</div>
		</div>
	</div>
</template>

<script>
import Server from "../Server.js"

export default {
  name: 'AddToDo',
  data() {
      return {
        todo: [{"title": ""}, {"date": ""},{"percentage":""}],
		date: ""
      }
  },
  methods: {
    async submit() {
      const data = {"title": this.todo.title, "date": this.date, "percentage": this.todo.percentage};
      await Server.addToDo(data);
      window.location.href = "/"
    }
  }
}
</script>


<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
