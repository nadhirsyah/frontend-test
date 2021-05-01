/* eslint-disable */
<template>
    <div class="container">
            <Header
                title="User List"
            />
        <v-app class="overflow">
        <v-data-table :headers="headers"
        :items="users"
        :items-per-page="6"
        :height="400"
        class="elevation-1">
            <template v-slot:[`item.id`]="{ value }">
                <v-btn :to="{ name: 'User', params: { id: value } }" text>
                    See Detail
                 </v-btn >
    </template>
    </v-data-table>    
</v-app>
  </div>
</template>

<script>
import axios from "axios"
import Header from './Header'
export default {
    name: 'UserList',
    components: {
        Header
    },
    data(){
        return{
            users:[],
            currentSort:'email',
            currentSortDir:'asc',
            headers: [
                {
                    text: 'First Name',
                    align: 'start',
                    value: 'first_name',
                },
                { text: 'Last Name', value: 'last_name' },
                { text: 'Email', value: 'email' },
                { text: "", value: "id" }
            ],
            total_pages:'',
        }
    },
    methods:{
        getTotalPages: function () {
            const urls = []
            var self = this
            const url = 'https://reqres.in/api/users'
            axios.get(url)
            .then(function (response) {
                sessionStorage.setItem("total_pages", response.data.total_pages);
                self.total_pages = response.data.total_pages
            })
            .catch(function (error) {
                console.log(error)
            })
            for (let i = 1; i <= sessionStorage.getItem("total_pages"); i++) {
                urls.push("https://reqres.in/api/users?page=" + i)
            }
            const getAllData = (urls) => {
                return Promise.all(urls.map(fetchData));
            };
            const fetchData = url => {
                return axios.get(url).then(res => { 
                    return {
                        data: res.data.data
                    };
                })
            .catch(err => {
                console.log(err);
            });
            };
            
            getAllData(urls).then(res => {
                let users = [];

                for (let rs in res) {
                    users = [...users, ...res[rs].data];
                }
                self.users = users
            })
            .catch(e => {
                console.log(e);
            });
        },
        //  goToEvents: function (view) {
        //      this.$router.push("{name: 'User' , params:{ id: " + { view.id } +"}}")
        // }
        },
 
    mounted(){
        this.getTotalPages()
    }
}
</script>
<style scoped>
</style>