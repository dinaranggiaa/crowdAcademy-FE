import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class upProfil extends Component{
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    modalUp(){
        this.setState({show:!this.state.show})
    }
    render(){
        return(
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
        );
    }
}