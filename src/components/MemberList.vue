<script setup>
defineProps({ members: Array })
const emit = defineEmits(['delete-member', 'toggle-status'])
</script>

<template>
  <div class="card" v-for="member in members" :key="member.id">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <strong>{{ member.name }}</strong> - {{ member.role }}
        <br>
        <small>{{ member.email }} | Joined: {{ member.joinDate }} |
          <span :style="{color: member.status==='active'?'green':'gray'}">{{ member.status }}</span>
        </small>
      </div>
      <div style="display:flex; gap:0.5rem;">
        <button class="secondary" @click="emit('toggle-status', member.id)">
          {{ member.status === 'active'? 'Deactivate' : 'Activate' }}
        </button>
        <button class="danger" @click="emit('delete-member', member.id)">Delete</button>
      </div>
    </div>
  </div>
  <p v-if="members.length===0">No members yet. Add one above.</p>
</template>