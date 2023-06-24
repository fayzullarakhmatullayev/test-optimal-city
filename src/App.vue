<template>
  <ul class="list">
    <ListItem
      v-for="(item, index) in items"
      :key="item.name"
      :item="item"
      @edit-handler="editHandler(index)"
    />
  </ul>
  <Teleport to="body">
    <Modal
      v-if="isModalOpen"
      :item="item"
      @close-modal="closeModalHandler"
      @submit-handler="submitHanlder"
    />
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import getItems from '@/db.js'
import ListItem from '@/components/ListItem.vue'
import Modal from '@/components/Modal.vue'

const items = ref(getItems())
const item = ref({})
const isModalOpen = ref(false)

const editHandler = (index) => {
  item.value = items.value[index]
  isModalOpen.value = true
}

const closeModalHandler = () => {
  isModalOpen.value = false
  item.value = {}
}

const submitHanlder = (item) => {
  const index = items.value.findIndex((i) => i.name === item.name)

  items.value[index].value = item.value
  closeModalHandler()
}
</script>
