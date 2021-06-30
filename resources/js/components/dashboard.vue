<template>
    <div class="content-wrapper" style="min-height: 344px;">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard v1</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
    
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-lg-4 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>{{classes}}</h3>
    
                                <p>Classes</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-building"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-4 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>{{students}}</h3>
                                <p>Students </p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-4 col-6">
                        <!-- small box -->
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h3>{{results}}</h3>
    
                                <p>Results</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-records"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <!-- <canvas id="students-chart" width="400" height="200"></canvas> -->
                          <canvas id="payments-chart" width="400" height="100"></canvas>
                    </div>
                </div>
                <!-- /.row -->
                <!-- Main row -->
    
                <!-- /.row (main row) -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import Chart from 'chart.js';
export default {
    data(){
        return{
            classes:0,
            students:0,
            results:0.
        }
    },
    methods:{
        getDashboardData(){
            axios.get('/api/getDashboardStats').then(({ data }) => {
                this.classes = data.data.classes;
                this.students = data.data.students;
            }).catch((error) => {
                console.log(error);
            });
        },
        getStudentsPerMonth(){
             axios.get('/api/studentsPerMonth').then(({ data }) => {
                // console.log(data.data);
                var months = [];
                var total = [];
                for (var i = 0; i < data.data.length; i++) {
                    months.push(data.data[i].month);
                    total.push(data.data[i].total);
                };
                var data = total;
                var labels = months;
                const data1 = {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{ // one line graph
                            label: 'Earnings Per Month',
                            data: data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }, ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25,
                                }
                            }]
                        }
                    }
                }
                this.createChart('payments-chart', data1)
            }).catch((error) => {
                console.log(error);
            })
        },
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    },
    mounted() {
        this.getDashboardData();
        this.getStudentsPerMonth();
    }
}
</script>
