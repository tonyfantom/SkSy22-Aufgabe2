<template>
  <div class="d-flex flex-column align-items-center mt-5">
			<h1>Neues To-Do erstellen</h1>
			<add-to-do ref='addToDo'></add-to-do>
			<a href="impressum.html">Impressum</a>
		</div>
	
</template>

<script>
import AddToDo from './../../components/AddToDo.vue'

export default {
  name: 'NewToDoPage',
  components: {
	AddToDo
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
