const search = () => {
  document.body.innerHTML += `<div class="container-fluid form">
    <form id = 'city' action = '/' method="get">
      <div class="form-row justify-content-center align-items-center mt-3">
        <div class="col-sm-3 my-1">
          <label class="sr-only" for="city">City</label>
          <input id ="inputCity" type="text" class="form-control" minlength="2" placeholder="City" required>
        </div>
        <div class="col-auto my-1">
          <input type="submit" class="btn btn-primary" value ="Submit" >
        </div>
      </div>
    </form>
  </div>`;
};
export default search;
