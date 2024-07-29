import React from 'react'
import './adduser.css'
import {Link} from 'react-router-dom'

const AddUser = () => {
  return (
    <div className='addUser'>
      {/* <button type="button" class="btn btn-secondary"><i class="fa-solid fa-chevron-left"></i> Back</button> */}
      <Link to="/" type="button" class="btn btn-secondary"><i class="fa-solid fa-chevron-left"></i> Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' autoComplete='off' placeholder='Enter your name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='email'>E-mail:</label>
          <input type='text' id='email' name='name' autoComplete='off' placeholder='Enter your Email' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' name='address' autoComplete='off' placeholder='Enter your Address' />
        </div>
        <div className='inputGroup'>
          <button type='button' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser