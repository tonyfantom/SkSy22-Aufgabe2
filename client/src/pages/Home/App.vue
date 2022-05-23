<template>
  <div class="d-flex flex-column align-items-center mt-5">
			<h1>To-Do-Liste</h1>
			<div class="col-sm-6 d-flex justify-content-end mb-3">
				<a href="addToDo.html">
					<button type="button" class="btn btn-primary">
						Neues To-Do
					</button>
				</a>
			</div>
			<to-do-list ref='todoList'>
      </to-do-list>
			<a href="impressum.html">Impressum</a>
      
		</div>
</template>

<script>
import ToDoList from './../../components/ToDoList.vue'

export default {
  name: 'HomePage',
  components: {
    ToDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
