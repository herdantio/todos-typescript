<template>
  <div>
    <h1>{{text}}</h1>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {mapState} from "vuex";


@Component({
  computed: {
    ...mapState('todos', {
      text: 'text'
    })
  }
})
export default class TodosPage extends Vue {
  text!: string
}

</script>

<style scoped>

</style>
