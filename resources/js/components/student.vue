<template>
    <div class="content-wrapper" style="min-height: 344px;">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Students</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                            <li class="breadcrumb-item active">Students</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-6 mt-2">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>10</h3>
                                <p>Exams Done</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-bag"></i>
                            </div>
                            <a href="#" class="small-box-footer">
                            More info
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-4 col-6 mt-2">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>
                                    10/100
                                    <sup style="font-size: 20px;">%</sup>
                                </h3>
                                <p>Questions passed</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-stats-bars"></i>
                            </div>
                            <a href="#" class="small-box-footer">
                            More info
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-4 col-6 mt-2">
                        <!-- small box -->
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h3>90/100</h3>
                                <p>Questions failed</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person-add"></i>
                            </div>
                            <a href="#" class="small-box-footer">
                            More info
                            <i class="fas fa-arrow-circle-right"></i>
                        </a>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Recent Exams</h3>
    
                                <div class="card-tools">
                                    <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />
    
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
                                            <th>Course name</th>
                                            <th>Score</th>
                                            <th>Lecturer</th>
                                            <th>Date Attempted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>B.com</td>
                                            <td>11</td>
                                            <td><span class="tag tag-success">Evans Runye</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Computer Science</td>
                                            <td>11</td>
                                            <td><span class="tag tag-warning">Evans Runye</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Law</td>
                                            <td>11</td>
                                            <td><span class="tag tag-primary">Evans Runye</span></td>
                                            <td>Sep 17th 19</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Medicine</td>
                                            <td>11</td>
                                            <td><span class="tag tag-danger">Evans Runye</span></td>
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
        console.log("Component mounted.");
    }
};
</script>
