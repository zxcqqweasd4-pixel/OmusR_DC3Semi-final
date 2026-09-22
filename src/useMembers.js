import { ref } from 'vue'

 export function useMembers() {
 	const members = ref([])

 	function addMember(member) {
     	members.value.push(member)
 	}

 	function removeMember(id) {
     	members.value = members.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	members,
     	addMember,
     	removeMember
 	}
 }
