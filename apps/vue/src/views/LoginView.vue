<script lang="ts">
import { defineComponent } from 'vue';
import authService from '../services/AuthService';
import { useRouter } from 'vue-router';

const router = useRouter();

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const res = await authService.login({ email: this.email, password: this.password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        await router.push('/users');
      } else {
        window.alert('Something went wrong!');
      }
    },
  },
});
</script>

<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>
