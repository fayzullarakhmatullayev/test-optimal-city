<template>
  <li class="list__item">
    <h2>{{ item.name }}</h2>
    <p>{{ item.value }}</p>
    <button @click="emit('editHandler')" class="list__item--edit">
      <img src="@/assets/edit.svg" alt="edit" />
    </button>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    reuired: true
  }
})

const emit = defineEmits(['editHandler'])
</script>
