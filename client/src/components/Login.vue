<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
          </div>
          <br>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <form>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </form>
          </div>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn class="cyan" 
            dark
            @click="login">
            Login
          </v-btn>
        </div>        
      </v-flex> 
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>