<template>
	<v-toolbar fixed class="cyan" dark>
		<v-toolbar-title class="mr-4">
			<router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }"> 
        TabTracker 
      </router-link>
		</v-toolbar-title>
		<v-toolbar-items> 
			<v-btn
        flat dark
        :to="{name: 'songs'}">
        Browse
      </v-btn>
		</v-toolbar-items>
    <songs-search class="search" />
		<v-spacer></v-spacer>		
		<v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn" 
        flat dark
        :to="{name: 'login'}">
        Login
      </v-btn>
			<v-btn
        v-if="!$store.state.isUserLoggedIn"  
  			flat dark
  			:to="{name: 'register'}">
				Sign Up
			</v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"  
        flat dark
        @click="logout()">
        Log Out
      </v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
import SongsSearch from '@/components/Songs/SongsSearch'
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  },
  components: {
    SongsSearch
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #AD3;
}
.search {
  margin-left: 100px;
}
</style>