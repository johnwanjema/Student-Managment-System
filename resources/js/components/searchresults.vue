<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card mt-5" style="width: 1000px;">
          <div class="card-header align-center"> Exam Details</div>
          <ul class="list-group list-group-flush"><hr>
            <li class="list-group-item">Class name : B.tech Y1</li>
            <li class="list-group-item">Course name : SCCJ/2018</li>
            <li class="list-group-item">Lecture name: Waiguru</li>
            <li class="list-group-item">Added on : Sep 17th 19</li>
            <li class="list-group-item">Deadline : Sep 17th 19</li>
          </ul>
          <a href="#" class="btn btn-primary">Start Exam</a>
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
