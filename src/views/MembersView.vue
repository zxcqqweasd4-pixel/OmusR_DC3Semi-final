<script setup>
import MemberForm from '../components/MemberForm.vue'
import MemberList from '../components/MemberList.vue'
import { useMembers } from '../composables/useMembers.js'

// Using Composable - this is our shared state
const { members, addMember, deleteMember, toggleStatus } = useMembers()
</script>

<template>
  <div>
    <h1>Members Page</h1>
   
    <MemberForm @add-member="addMember" />

    
    <MemberList
      :members="members"
      @delete-member="deleteMember"
      @toggle-status="toggleStatus"
    />
  </div>
</template>