<template>
  <div class="todolist">
    <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      todos: [
        { text: 'Buy Peaches' },
        { text: 'Eat Oranges' },
        { text: 'Dance' }
      ]
    }
  }
}
</script>

<style scoped>
</style>