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
    
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-md-12">
                        <button @click="toggleWeekends">toggle weekends</button>
                        <!-- <FullCalendar :options="calendarOptions" /> -->
                        <FullCalendar ref="fullCalendar" :options="calendarOptions" :allDaySlot="false" :height="100" :header="{
                                left: 'prev, next today',
                                center: 'title',
                                right: 'dayGridMonth,dayGridWeek,timeGridDay'
                            }" />
                    </div>
                </div>
              
            </div>
        </section>
    </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',
                weekends: false, // initial value,
                events: [
                    { title: 'event 1', date: '2021-06-28' },
                    { title: 'event 2', date: '2019-04-02' }
                ]
            }
        }
    },
    mounted() {
        console.log('Component mounted.')
    },
    methods: {
        toggleWeekends: function() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
        }
    }
}
</script>
