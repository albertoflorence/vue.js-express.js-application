<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel :title="title">
          <form autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn class="cyan" 
              dark
              @click="entry">
              {{title}}
            </v-btn>
          </form>
        </panel>        
      </v-flex> 
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async entry () {
      try {
        const action = this.action
        const response = await AuthenticationService[action]({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  },
  props: [
    'title',
    'action'
  ]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>