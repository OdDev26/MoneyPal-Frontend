import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { addService } from '../../actions/projectActions'


class AddServiceForm extends Component {
  constructor(){
    super()
    this.state={
      serviceName:"",
      errors:{}
    }
    this.onChange=this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
      }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const serviceName= {serviceName:this.state.serviceName}
   this.props.addService(serviceName,this.props.history)
  }
  render() {
    const {errors}= this.state
    return (
       <div className='container'>
       <h1>Add Service Form</h1>
       <form onSubmit={this.onSubmit}>
         <div className='form-group'>
         <input type="text" name='serviceName'  value={this.state.serviceName}  className="form-control form-control-lg"
         placeholder='Service name' onChange={this.onChange}/>
          <div><span style={{"color":"red"}}>{errors.message}</span></div>
         <input type="submit" className='btn btn-danger btn-block mt-4'/>
         </div>
       </form>
       </div>
    )
  }
}

AddServiceForm.propTypes={
  addService: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
  
}
const mapStateToProps= state=>({
  errors: state.errors
})
export default connect(mapStateToProps,{addService}) (AddServiceForm)
