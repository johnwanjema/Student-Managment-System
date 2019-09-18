<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">User Table</h3>
            <div class="card-tools">
              <button class="btn btn-success" @click="openModal">
                Add user
                <i class="fas fa-user-plus fa-fw"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Created at</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                  <td>{{user.id}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.type | capitalize}}</td>
                  <td>{{user.created_at | mydate}}</td>

                  <td>
                    <!-- pass user details to form -->
                    <button class="btn btn-primary" @click="editmodal(user)">
                      <i class="fa fa-edit"></i>Editt
                    </button>
                    /
                    <button
                      class="btn btn-danger"
                      @click="deleteUsers(user.id)"
                    >
                      <i class="fa fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
    <!-- /.row -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-show="!editmode" class="modal-title" id="exampleModalLabel">Add new user</h5>
            <h5 v-show="editmode" class="modal-title" id="exampleModalLabel">Update user</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editmode ? updateuser() : createuser()">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="name"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-group">
                <textarea
                  v-model="form.bio"
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bio') }"
                ></textarea>
                <has-error :form="form" field="bio"></has-error>
              </div>

              <div class="form-group">
                <select
                  v-model="form.type"
                  name="type"
                  id="type"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bio') }"
                >
                  <option value>Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Author">Author</option>
                </select>
                <has-error :form="form" field="type"></has-error>
              </div>

              <div class="form-group">
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  placeholder="password"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('password') }"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button v-show="editmode" type="submit" class="btn btn-success">Update user</button>
                <button v-show="!editmode" type="submit" class="btn btn-primary">Create user</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vform";

let Fire = new Vue();

Window.Fire = Fire;

export default {
  data() {
    return {
      editmode: false,
      users: {},
      // Create a new form instance
      form: new Form({
        id: "",
        name: "",
        email: "",
        type: "",
        bio: "",
        password: "",
        remember: false
      })
    };
  },

  methods: {
    openModal() {
      this.editmode = false;
      this.form.reset();
      $("#exampleModal").modal("show");
    },
    createuser() {
      this.$Progress.start();

      console.log("Component mounted.");
      // Submit the form via a POST request
      this.form
        .post("api/user")
        .then(() => {
          toast.fire({
            type: "success",
            title: "Signed in successfully"
          });
          Fire.$emit("After");
          $("#exampleModal").modal("hide");
        })
        .catch(() => {});

      this.$Progress.finish();
      //   $("#exampleModal").modal("hide");
    },

    updateuser() {
      this.$Progress.start();
      console.log("everything good");
      this.form
        //fetches id from the return data
        .put("api/user/" + this.form.id)
        .then(() => {
          $("#exampleModal").modal("hide");
          Swal.fire("Updated", "Your infor updated.", "success");
          this.$Progress.finish();
          Fire.$emit("After");
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },
    editmodal(user) {
      console.log("editting");
      this.editmode = true;
      this.form.reset();
      $("#exampleModal").modal("show");
      this.form.fill(user);
    },
    deleteUsers(id) {
      console.log("qwertyu");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        // send request
        if (result.value) {
          this.form
            .delete("api/user/" + id)
            .then(() => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              Fire.$emit("After");
            })
            .catch(() => {
              Swal.fire("Huston we have a problem", "fail");
            });
        }
      });
    },
    loadusers() {
      axios.get("api/user").then(({ data }) => (this.users = data.data));
    }
  },
  mounted() {
    console.log("Component mounted.");
    Fire.$on("After", () => {
      this.loadusers();
    });

    console.log("Component mounted.");
    setInterval(() => this.loadusers(), 3000);
  }
};
</script>
