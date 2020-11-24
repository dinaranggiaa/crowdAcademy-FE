import React from "react";
const ModifyPost = (props) => {
    return (
    <div className="box-form1">
      <div className="box-row">
        <div className="box-column">  
          <form>
            <h3>Ubah Artikel</h3>

            <div className="form-group">
              <div class="row">
                <div class="col-2">
                <label class="pt-2">Judul Artikel</label>
                </div>
                <div class="col-7">
                  <input 
                    type="text" 
                    onChange={props.savePostTitleToState}
                    defaultValue={props.title}
                    className="form-control" 
                    placeholder="Judul Artikel"
                    text
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Detail Artikel</label>
              <textarea  
              onChange={props.savePostTitleToState}
              defaultValue={props.content}
              className="form-control" 
              placeholder="Detail Artikel"
              required
              rows="8"
              cols="50"/>
            </div>

            <button type="submit" 
            className="btn btn-primary btn-block w-25"
            onClick ={props.updatePost}>
                Unggah Artikel</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModifyPost;
