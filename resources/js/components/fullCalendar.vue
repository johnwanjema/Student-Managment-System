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
                        <full-calendar ref="fullCalendar" :options="calendarOptions" />
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
        'full-calendar': FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',
                allDaySlot: false,
                height: 1000,
                events: [
                    // { title: 'event 1', date: '2021-06-28' },
                    // { title: 'event 2', date: '2019-04-02' }
                ],
                headerToolbar: { right: 'dayGridMonth,dayGridWeek,dayGridDay', center: 'title',left: 'prev, next, today', },
            },
        }
    },
    created() {
       

    },
    methods: {
        toggleWeekends: function() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
        },
        updateEvents() {
             console.log('mounted.')
            this.calendarOptions.events = [
                { title: 'event 1', date: '2021-06-28' },
                { title: 'event 2', date: '2021-06-29' }
            ]
        }
    }
}
</script>
