<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserService from '../services/UserService';
import { useRoute } from 'vue-router';

// TODO replace by openapi
interface User {
  name: string;
  created: Date;
}

const route = useRoute();
const user = ref<User | null>(null);

onMounted(() => {
  UserService.getUser(route.params.id as string)
    .then((response) => {
      user.value = response.data;
    })
    .catch((error: Error) => {
      console.error(error);
    });
});
</script>

<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>Created on {{ user.created }}</p>
  </div>
</template>
