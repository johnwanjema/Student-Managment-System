<template>
    <div class="content-wrapper" style="min-height: 344px;">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Users</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <div class="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 mt-2">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Responsive Hover Table</h3>

                                <div class="card-tools">
                                    <form @submit.prevent="editmode">
                                        <div class="input-group input-group-sm" style="width: 200px;">
                                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />

                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Class Name</th>
                                            <th>Score</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Law</td>
                                            <td>75</td>

                                            <td>
                                                <!-- pass user details to form -->
                                                <button class="btn btn-primary"><i class="fas fa-print"></i>Print</button> /
                                                <button class="btn btn-danger"><i class="fas fa-edit"></i> view</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>B.com</td>
                                            <td>85</td>

                                            <td>
                                                <!-- pass user details to form -->
                                                <button class="btn btn-primary"><i class="fas fa-print"></i>Print</button> /
                                                <button class="btn btn-danger"><i class="fas fa-edit"></i> view</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Computer</td>
                                            <td>69</td>

                                            <td>
                                                <!-- pass user details to form -->
                                                <button class="btn btn-primary"><i class="fas fa-print"></i>Print</button> /
                                                <button class="btn btn-danger"><i class="fas fa-edit"></i> view</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Enterprenuership</td>
                                            <td>89</td>

                                            <td>
                                                <!-- pass user details to form -->
                                                <button class="btn btn-primary"><i class="fas fa-print"></i>Print</button> /
                                                <button class="btn btn-danger"><i class="fas fa-edit"></i>view</button>
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
            </div>
        </div>
    </div>
</template>


<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
