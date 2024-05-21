<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserService, { GetUsersResponseBodySchema } from '../services/UserService';
import UserCard from '../components/UserCard.vue';

const users = ref<GetUsersResponseBodySchema | null>(null);

onMounted(() => {
  UserService.getUsers()
    .then(response => {
      users.value = response.data;
    })
    .catch(error => {
      console.log(error);
    });
});
</script>

<template>
  <h1>Users</h1>
  <div class="users">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
