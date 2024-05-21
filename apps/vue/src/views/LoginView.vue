<script lang="ts">
import { defineComponent } from 'vue';
import authService from '../services/AuthService';
import router from '../router';

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
    };
  },
  beforeMount() {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/users');
    }
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
  <div class="login-container">
    <input class="login-input" type="email" v-model="email" placeholder="Email" />
    <input class="login-input" type="password" v-model="password" placeholder="Password" />
    <button class="login-button" @click="login">Login</button>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.login-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
