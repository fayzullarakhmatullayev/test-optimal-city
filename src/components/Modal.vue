<template>
  <div class="modal">
    <form class="modal__form" @submit.prevent.enter="emit('submitHandler', payload)">
      <h2 class="modal__form--title">Edit</h2>
      <input class="modal__form--input" :value="item.name" type="text" name="name" disabled />
      <input
        :value="item.value"
        @input="changeInputHandler"
        class="modal__form--input"
        type="text"
        name="value"
      />
      <div class="modal__form--buttons">
        <button type="button" class="btn btn-danger" @click="emit('closeModal')">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    <div @click="emit('closeModal')" class="modal__overlay"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['closeModal', 'submitHandler'])

const payload = ref({})

const changeInputHandler = (event) => {
  const value = event.target.value
  payload.value = {
    name: props.item.name,
    value
  }
}
</script>
