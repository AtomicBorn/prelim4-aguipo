<template>
  <div class="wrapper">
    <Sidebar/>
    <div class="main-panel">
      <div class="p-5"> 
        <h1>Delete User</h1>
        <p>
          <!-- <span>Update Age using the below link:</span><br/>
          <span>https://api.jlipreso.com/miit/public/api/user/deleteByID/{id}</span> -->
        </p>
        <div class="card w-50">
          <div class="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <td style="width: 50px;">ID</td>
                  <td><input v-model="userId" class="form-control" type="number" required></td>
                  <td><button class="btn  btn-danger" @click="deleteRecord(userId)">Delete</button></td>
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
import Swal from 'sweetalert2';
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'DeleteRecord',
  components: { Sidebar },
  data() {
      return {
        user: {} as any,
         userId: '',
      }
  },
  methods: {
    async deleteRecord(userId: any) {
      if (!userId) {
        Swal.fire("Error", "User ID is required", "error");
        return;
      }
    Swal.fire({
          title: "Confirmation",
          text: "Delete select id?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: false
    }).then(async (result) => {
      if (result.isConfirmed) {
             Swal.fire("Deleted!", "", "success").then(() => {
              this.userId = '';
            })  
            await axios.get("https://api.jlipreso.com/miit/public/api/user/deleteByID/" + userId ) .then (async () =>{
              this.user();
            });
          }
        });  
      }
    }
  }

</script>
