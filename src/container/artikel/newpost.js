import React, { Component, Select} from "react";
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
import "./newpost.css";

const pilihan = [
  { value: '1', label: 'Pemrograman' },
  { value: '2', label: 'Desain Grafis' }
];
 
export default class CreateNewPost extends Component {
  
  //state untuk tanggal
  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
    
  handleChange(date) {
    this.setState({
    startDate: date
    })
  }
    
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  /*state untuk pilihan kategori
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Pilihan kategori: `, selectedOption);
  }*/

  render() {
    const { selectedOption } = this.state;
  return (
    <div className="box-form1">
      <div className="box-row">
        <div className="box-column">  
          <form onSubmit={this.props.savePost}>
            <h3>Buat Artikel</h3>

            <div className="form-group">
              <div class="row">
                <div class="col-2">
                <label class="pt-2">Kategori</label>
                </div>
                <div class="col-2">
                <Select className="mt-4 col-md-6 col-offset-4"
                  onChange={this.props.savePostKategoriToState}
                  ref={this.props.getKategori}
                  options={pilihan}
                  autoFocus={true}
                />
                  {/* <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Pilih</option>
                    <option value="1">Pemrograman</option>
                    <option value="2">Desain Grafis</option>
                  </select> */}
                </div>
              </div>
            </div>

            <div className="form-group">
              <div class="row">
                <div class="col-2">
                <label class="pt-2">Tanggal Artikel</label>
                </div>
                <div class="col-3">
                  {/* <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleChange }
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                  /> */}
                </div>
              </div>
            </div>

            <div className="form-group">
              <div class="row">
                <div class="col-2">
                <label class="pt-2">Judul Artikel</label>
                </div>
                <div class="col-7">
                  <input 
                    type="text" 
                    onChange={this.props.savePostTitleToState}
                    ref={this.props.getTitle}
                    className="form-control" 
                    placeholder="Judul Artikel"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Detail Artikel</label>
              <textarea  
              onChange={this.props.savePostTitleToState}
              ref={this.props.getContent} 
              className="form-control" 
              placeholder="Detail Artikel"
              required
              rows="8"
              cols="50"/>
            </div>

            <button type="submit" className="btn btn-primary btn-block w-25 ">Unggah Artikel</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
