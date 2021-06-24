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
                                <h3 class="card-title">Results</h3>
    
                                <div class="card-tools">
                                    <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
    
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Student name</th>
                                            <th>Class Name</th>
                                            <th>Score</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>John wanjema</td>
                                            <td>computer science</td>
                                            <td><span class="tag tag-success">78</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>John wanjema</td>
                                            <td>computer science</td>
                                            <td><span class="tag tag-warning">68</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>John wanjema</td>
                                            <td>computer science</td>
                                            <td><span class="tag tag-primary">89</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>John wanjema</td>
                                            <td>computer science</td>
                                            <td><span class="tag tag-danger">54</span></td>
                                            <td>Sep 17th 19</td>
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
        console.log('Component mounted.')
    }
}
</script>
