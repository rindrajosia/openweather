const modalError = () => {
  document.body.innerHTML = `<div id="myModal" class="alert alert-danger modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" id ="close" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 id="alert-modal-title" class="modal-title"></h4>
      </div>
        <div id="alert-modal-body" class="modal-body">
            <p id = "modalBody" class="text-center"></p>
        </div>
      </div>
    </div>
    </div>`;
};
export default modalError;
