<template>
  <div class="wrapper">
    <Sidebar/>
    <div class="main-panel">
      <div class="p-5 w-75"> 
        <h1>All Records</h1>
        <p>
          <!-- <span>Get Records using the below API link:</span><br/>
          <span>https://api.jlipreso.com/miit/public/api/user/getAll</span> -->
        </p>
        <div class="card">
          <div class="card-body">
            <button class="btn btn-primary" @click="getAllRecord()">Get All Users</button>
            <table class="table table-striped mt-5">
              <thead>
                <tr>
                  <th class="bg-dark text-white">Number</th>
                  <th class="bg-dark text-white">First name</th>
                  <th class="bg-dark text-white">Last name</th>
                  <th class="bg-dark text-white">Age</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in user" :key="i">
                  <td>{{ (i + 1) }}</td>
                  <td>{{ user?.fname }}</td>
                  <td>{{ user?.lname }}</td>
                  <td>{{ user?.age }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import axios from 'axios';
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'GetRecord',
  components: { Sidebar },
    data() {
      return {
        user: {} as any
      }
  },
  methods: {
    async getAllRecord() {
      await axios.get("https://api.jlipreso.com/miit/public/api/user/getAll").then(async (response) => {
        this.user = response.data;
      });
      }
    }
  }

</script>
 