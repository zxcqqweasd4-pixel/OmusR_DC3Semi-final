```vue
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-member'])
const member = ref({ name: '', email: '', role: 'Member' })

function addMember() {
  if (!member.value.name || !member.value.email) {
    alert('Name and Email are required')
    return
  }

  emit('add-member', { ...member.value })
  member.value = { name: '', email: '', role: 'Member' }
}
</script>

<template>
  <div class="card">
    <h3>Add New Member</h3>

    <form @submit.prevent="addMember">
      <input v-model="member.name" placeholder="Full Name">
      <input v-model="member.email" type="email" placeholder="Email">

      <select v-model="member.role">
        <option>Member</option>
        <option>Officer</option>
        <option>President</option>
        <option>Volunteer</option>
      </select>

      <button>Add</button>
    </form>
  </div>
</template>
```
