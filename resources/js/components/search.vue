<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 pt-5">
        <div class="card">
          <h5 class="card-header">Search Class/Coursename</h5>
          <div class="card-body">
           <form action="/results" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search..." />
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
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
