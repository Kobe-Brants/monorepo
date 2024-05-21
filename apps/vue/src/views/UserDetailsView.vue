<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserService, { GetUserResponseBodySchema } from '../services/UserService';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref<GetUserResponseBodySchema | null>(null);

onMounted(() => {
  UserService.getUser(route.params.id as string)
    .then(response => {
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
