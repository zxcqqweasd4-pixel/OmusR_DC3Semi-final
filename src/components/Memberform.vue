<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add-member'])

const form = ref({ name: '', email: '', role: 'Member' })

const submit = () => {
  if (!form.value.name ||!form.value.email) {
    alert('Name and Email are required')
    return
  }
  emit('add-member', {...form.value })
  form.value = { name: '', email: '', role: 'Member' }
}
</script>

<template>
  <div class="card">
    <h3>Add New Member</h3>
    <form @submit.prevent="submit" style="display:flex; gap:0.5rem; flex-wrap:wrap;">
      <input v-model="form.name" placeholder="Full Name" />
      <input v-model="form.email" type="email" placeholder="Email" />
      <select v-model="form.role">
        <option>Member</option>
        <option>Officer</option>
        <option>President</option>
        <option>Volunteer</option>
      </select>
      <button type="submit">Add</button>
    </form>
  </div>
</template>