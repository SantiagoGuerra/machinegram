import React from 'react'
import {saveImage } from '../firebase.database'
const Float = () => (
  <div className="fixed-action-btn">
    <div>
      <label htmlFor="file">
      <a className="btn-floating btn-large waves-effect waves-light purple"><i className="material-icons">file_upload</i></a>
      </label>
      <input type="file" id="file" name="file" multiple accept='image/*' style={{display: 'none'}} onChange={handlerInputFileOnClick}/>
    </div>
  </div>

)

const handlerInputFileOnClick = e => {
  let file = e.target.files[0]

  saveImage(file)
}
export default Float