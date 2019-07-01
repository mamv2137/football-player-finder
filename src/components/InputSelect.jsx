import React from 'react'

import { connect } from 'react-redux'

import { getPositions } from '../selectors/tableSelector'

const Select = props => {

  // const options = () => { 
  //   const { data } = props
  //   let positions = []

  //   if (data.length > 0) {
  //     positions = [...new Set(data.map(player => player.position))]
                  
  //   }

  //   return ['asd', 'asd'].
  // }

  return (
    <div className="field has-text-centered">
      <div className="select">
        <select className="is-narrow" name={props.name} onChange={e => props.onChange(e.target.name, e.target.value)} >
          <option value="">Select Position</option>
          {props.options.map((position, idx) => (
            <option key={idx} value={position}>{position}</option>
          ))}
        </select>
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    options: getPositions(state)
  }
}

export default connect(mapStateToProps)(Select);