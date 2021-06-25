<template>
    <div class="content-wrapper" style="min-height: 344px;">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Classes</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li class="breadcrumb-item active">Classes</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <!-- <h3 class="card-title">DataTable with default features</h3> -->
                                <div class="card-tools">
                                    <button class="btn btn-success" @click="openModal">
                                        Add Class
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                    <div class="row">
                                        <!-- <div class="col-sm-12 col-md-6">
                                            <div class="dt-buttons btn-group flex-wrap">
                                                <button class="btn btn-secondary buttons-copy buttons-html5" tabindex="0" aria-controls="example1" type="button"><span>Copy</span></button>
                                                <button class="btn btn-secondary buttons-csv buttons-html5" tabindex="0" aria-controls="example1" type="button"><span>CSV</span></button>
                                                <button class="btn btn-secondary buttons-excel buttons-html5" tabindex="0" aria-controls="example1" type="button"><span>Excel</span></button>
                                                <button class="btn btn-secondary buttons-pdf buttons-html5" tabindex="0" aria-controls="example1" type="button"><span>PDF</span></button>
                                                <button class="btn btn-secondary buttons-print" tabindex="0" aria-controls="example1" type="button"><span>Print</span></button>
                                                <div class="btn-group">
                                                    <button class="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" tabindex="0" aria-controls="example1" type="button" aria-haspopup="true" aria-expanded="false">
                                                        <span>Column visibility</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="col-sm-12 col-md-6">
                                            <div id="example1_filter" class="dataTables_filter">
                                                <label>Search:<input v-model="filter" type="search" class="form-control form-control-md" placeholder="" aria-controls="example1" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <b-table responsive striped hover show-empty :items="users" :fields="fields" :filter="filter" :filterIncludedFields="filterOn" @filtered="onFiltered" :per-page="perPage" :current-page="currentPage">
                                                <template v-slot:cell(#)="row">
                                                    <p>{{row.index + 1}}</p>
                                                </template>

                                                <template v-slot:cell(actions)="row">
                                                    <b-button class="btn btn-sm" variant="primary" @click="editmodal(row.item)"> Edit</b-button>
                                                    <b-button class="btn btn-sm" variant="danger" @click="deleteClass(row.item.id)">Delete</b-button>
                                                </template>
                                            </b-table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-10">
                                            <!-- <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div> -->
                                        </div>
                                        <div class="col-sm-12 col-md-2">
                                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                                                <!-- <pagination -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                    <!-- /.row -->
                    <!-- Button trigger modal -->
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 v-show="!editmode" class="modal-title" id="exampleModalLabel">Add new Student</h5>
                                    <h5 v-show="editmode" class="modal-title" id="exampleModalLabel">Update Student</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="editmode ? updateClass() : createClass()">
                                        <div class="form-group">
                                            <input v-model="form.name" type="text" name="name" placeholder="First Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" />
                                            <has-error :form="form" field="name"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.lastName" type="text" name="name" placeholder="Last Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" />
                                            <has-error :form="form" field="name"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.email" type="email" name="email" placeholder="Email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" />
                                            <has-error :form="form" field="email"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <select v-model="form.type" name="type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }">
                                                <option value>Select Class</option>
                                                <option value="Admin">Class 1</option>
                                                <option value="User">Class 5</option>
                                            </select>
                                            <has-error :form="form" field="type"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password" type="password" name="password" placeholder="Password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" />
                                            <has-error :form="form" field="password"></has-error>
                                        </div>
                                        <div class="modal-footer">
                                            <button v-show="editmode" type="submit" class="btn btn-success">Update Student</button>
                                            <button v-show="!editmode" type="submit" class="btn btn-primary">Create Student</button>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editmode: false,
            users: [],
            form: new Form({
                id: "",
                name: "",
                email: "",
                type: "",
                bio: "",
                password: "",
                remember: false
            }),
            currentPage: 1,
            perPage: 5,
            fields: ['#','className','created_by','status','created_at','actions'],
            filter: null,
            filterOn: [],
            totalRows:1,
        };
    },

    methods: {
        getResults(page = 1) {
            axios.get('api/user?page=' + page)
                .then(response => {
                    this.users = response.data;
                });
        },
        openModal() {
            this.editmode = false;
            this.form.reset();
            $("#exampleModal").modal("show");
        },
        createClass() {
            this.$Progress.start();
            this.form
                .post("/api/user")
                .then(() => {
                    toast.fire({
                        type: "success",
                        title: "Class Created successfully"
                    });
                    Fire.$emit("After");
                    $("#exampleModal").modal("hide");
                })
                .catch(() => {});
            this.$Progress.finish();
        },

        updateClass() {
            this.$Progress.start();
            this.form
                .put("/api/user/" + this.form.id)
                .then(() => {
                    $("#exampleModal").modal("hide");
                    Swal.fire("Updated", "Class has been updated.", "success");
                    this.$Progress.finish();
                    Fire.$emit("After");
                })
                .catch(() => {
                    this.$Progress.fail();
                });
        },
        editmodal(user) {
            this.editmode = true;
            this.form.reset();
            $("#exampleModal").modal("show");
            this.form.fill(user);
        },
        deleteClass(id) {
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
                            Swal.fire("Deleted!", "Class has been deleted.", "success");
                            Fire.$emit("After");
                        })
                        .catch(() => {
                            Swal.fire("Huston we have a problem", "fail");
                        });
                }
            });
        },
        loadClasses() {
          axios.get('/api/user').then(({ data }) => {
                this.users = data.data;
                this.totalRows = this.users.length;
            }).catch((error) => {
                console.log(error);
            });
        },
         onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1
        },
    },
    mounted() {
        // this.loadClasses();
        Fire.$on("After", () => {
            this.loadClasses();
        });

    }
};
</script>
