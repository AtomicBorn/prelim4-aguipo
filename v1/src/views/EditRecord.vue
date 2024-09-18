<template>
  <div class="wrapper">
    <Sidebar/>
    <div class="main-panel"> 
      <div class="p-5 w-75">
        <h1>Edit Record</h1>
        <p>
          <!-- <span>Update Age using the below link:</span><br/>
          <span>https://api.jlipreso.com/miit/public/api/user/updateRecord/{id}/{age}</span> -->
        </p>
        <div class="card">
          <div class="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <td style="width: 50px;">ID</td>
                  <td><input v-model="userId" class="form-control" type="text" required placeholder=""></td>
                  <td style="width: 50px;">Age</td>
                  <td><input v-model="newAge" class="form-control" type="number" required placeholder=""></td>
                  <td><button class="btn  btn-primary" @click="editAge(userId)">Update Age</button></td>
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
  name: 'EditRecord',
  components: { Sidebar },
  data() {
      return {
        user: {} as any,
        userId: '', 
        newAge: '',
      }
  },
  methods: {
    async editAge(userId: any) {
      if (this.userId && this.newAge)  {
        Swal.fire({
          title: "Do you want to save the changes?",
          showCancelButton: true,
          confirmButtonText: "Save",
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success").then(() => {
              this.userId = '';
              this.newAge = '';
            })  
            await axios.get("https://api.jlipreso.com/miit/public/api/user/updateRecord/" + userId + "/" + this.newAge).then(async () => {
              this.user();
            });
            }
          });
        }
      }
    }
  }
</script>
