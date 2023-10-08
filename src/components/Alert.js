import React from 'react'

function Alert(props) {
  return (
    props.alert &&
    <div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        {props.alert}
    </div>
    </div>
  )
}

export default Alert
