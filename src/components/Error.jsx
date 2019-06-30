import React from 'react'

const Error = ({ message }) => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <p className="is-size-4 has-text-weight-bold">
          {message}
        </p>
      </div>
    </div>
  )
}

export default Error;