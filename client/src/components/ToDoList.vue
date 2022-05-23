<template>
	<div class="card col-sm-8">
		<table class="table">
			<thead>
			<tr>
				<th scope="col">ToDo</th>
                <th scope="col">Deadline</th>
                <th scope="col">Fortschritt</th>
            </tr>
        </thead>
        <tbody>
			<tr
				v-for="(todo,index) in todosList"
				:key="index"
			>
				<td>{{todo.title}}</td>
				<td>{{formatDate(todo.date)}}</td>
                <td>{{todo.percentage}}</td>
                <td><a :href="'editToDo.html?id='+todo._id"><button class="btn btn-primary" >Editieren</button></a></td>
                <td><button @click="deleteToDo(todo._id)" class="btn btn-primary">Löschen</button></td>    
            </tr>
        </tbody>
		</table>
	</div>
</template>

<script>
import Server from "../Server.js"

export default {
  name: 'ToDoList',
  data() {
		return {
			todos: []
		}
  },
  created() {
	this.getToDo();
  },
  computed: {
	todosList() {
		return JSON.parse(JSON.stringify(this.todos));
	}
  },
  methods: {
	formatDate(dateString) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
	},
	deleteToDo(id) {
		const data = JSON.stringify({"id": id});
		var config = {
			headers: { 'Content-Type': 'application/json'},
			data : data
		};
		Server.deleteToDo(config);
		this.getToDo();
	},
	async getToDo() {
		try {
			this.todos = await Server.getToDo();
		} catch(err) {
			console.log(err);
		}
	}
  }
}
</script>

<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
