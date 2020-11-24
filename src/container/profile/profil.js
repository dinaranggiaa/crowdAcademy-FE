import React, { Component } from "react";
import "./profil.css";
import {Button, Modal} from 'react-bootstrap'

export default class Profil extends Component {
  constructor(){
    super()
    this.state={
        show:false
    }
}
modalUp(){
    this.setState({show:!this.state.show})
}
  render() {
    return (
      <div class="page-content page-container" id="page-content">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-10 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-blue user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25"> 
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> 
                      </div>
                      <h6 class="f-w-600">Name</h6>
                      <p>State/status</p>
                      <div>
                          <Button onClick={()=>{this.modalUp()}}>Edit Profile</Button>
                          <Modal show={this.state.show} onHide={()=>{this.modalUp()}}>
                              <Modal.Header closeButton>
                                  Form Update Profile Data
                              </Modal.Header>
                              <Modal.Body>
                                  Input form in this part
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button onClick={()=>{this.modalUp()}}>
                                      Close
                                  </Button>
                              </Modal.Footer> 
                          </Modal>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Address</p>
                          <h6 class="text-muted f-w-400">Somewhere</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Birth</p>
                          <h6 class="text-muted f-w-400">Sometimes</h6>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">surel@mail.com</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">088555666777</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Biography</h6>
                      <div class="row">
                        <div class="col-rg-8">
                          <p class="text-muted f-w-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}