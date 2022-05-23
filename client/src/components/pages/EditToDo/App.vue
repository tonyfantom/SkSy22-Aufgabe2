<template>
  <div class="d-flex flex-column align-items-center mt-5">
			<h1>To-Do bearbeiten {{this.id}}</h1>
			<edit-to-do ref='todoList'></edit-to-do>
			<a href="impressum.html">Impressum</a>
		</div>
</template>

<script>
import EditToDo from './../../components/EditToDo.vue'

export default {
  name: 'EditToDoPage',
  components: {
    EditToDo
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
