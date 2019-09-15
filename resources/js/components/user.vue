<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">User Table</h3>

            <div class="card-tools">
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
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
                  <th>Usernam</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span class="tag tag-success">Approved</span>
                  </td>
                  <td>
                    <a href>
                      Edit
                      <i class="fa fa-edit"></i>
                    </a>/
                    <a href>
                      Edit
                      <i class="fa fa-trash"></i>
                    </a>
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
            <h5 class="modal-title" id="exampleModalLabel">Add new user</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createuser" >
                <div class="form-group">
        <input v-model="form.name" type="text" name="name" placeholder="name"
            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
        <has-error :form="form" field="name"></has-error>
        </div>

        <div class="form-group">
        <input v-model="form.email" type="email" name="email" placeholder="Email"
            class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
        <has-error :form="form" field="email"></has-error>
        </div>

        <div class="form-group">
        <textarea v-model="form.bio" type="text" name="bio" placeholder="Bio"
            class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
        <has-error :form="form" field="bio"></has-error>
        </div>

         <div class="form-group">
            <select v-model="form.type" name="type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }">
            <option value="">Select Role</option>
            <option value="Adim">Admin</option>
            <option value="User">User</option>
            <option value="Author">Author</option>
            </select>
            <has-error :form="form" field="type"></has-error>
        </div>

        <div class="form-group">
        <input v-model="form.password" type="password" name="password" placeholder="password"
            class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
        <has-error :form="form" field="password"></has-error>
        </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create user</button>
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

export default {
  data() {
    return {
      // Create a new form instance
      form: new Form({
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
    createuser() {
        console.log("Component mounted.");
      // Submit the form via a POST request
      this.form.post("api/user");
    }
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
