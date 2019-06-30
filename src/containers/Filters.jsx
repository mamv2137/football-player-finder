import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as filterActions from '../actions/filterActions.js'
import * as playersActions from '../actions/playersActions.js'

import { getFiltersFromState } from '../selectors/tableSelector'

import Select from '../components/InputSelect'
import Input from '../components/Input'

class Filters extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column ">
          <div className="field is-horizontal">
            <div className="field-body">
              <Input type="text" name="name" placeholder="Player Name" regex="[A-Za-z]" messageError="Only Letters" onChange={this.props.setFields} />
              <Select name="position" onChange={this.props.setFields} />
              <Input type="number" name="age" placeholder="Age" regex="1[89]|[23][0-9]|40" messageError="Range age between 18-40" onChange={this.props.setFields} />
              <button className="button is-link" onClick={e => this.props.setApplyFilter()}>Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.filters)
  return {
    fields: getFiltersFromState(state.filters),
    // name: FilterSelector.getNameField(state.filters),
    // position: FilterSelector.getPositionField(state.filters),
    // age: FilterSelector.getAgeField(state.filters),
  }
}

const mapDispatchToProps  = dispatch => ({
  setFields(name, value) {
    dispatch(filterActions.getFields(name, value))
  },
  setApplyFilter() {
    dispatch(playersActions.applyFilter());
  },
})

export default connect(mapStateToProps,  mapDispatchToProps)(Filters);