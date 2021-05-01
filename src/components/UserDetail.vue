/* eslint-disable */
<template>
<div class="container">
    <b-container>
        <b-row>
            <b-col cols="3"><img :src="user.avatar" alt=""></b-col>
            <b-col cols="6">
                <h2> {{ this.user.first_name }} {{ this.user.last_name }}</h2>
                <p> {{ this.user.email }}</p>
            </b-col>
            <b-col cols="3"></b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'UserList',
    data(){
        return{
            user:[],
            total_pages:'',
        }
    },
    methods:{
        getTotalPages: function () {
            var self = this
            axios.get('https://reqres.in/api/users/' + this.$route.params.id )
            .then(function (response) {
                console.log(response)
                self.user = response.data.data
            })
            .catch(function (error) {
                console.log(error)
            })
    
        },
        },
 
    mounted(){
        this.getTotalPages()
    }
}
</script>
<style scoped>

</style>