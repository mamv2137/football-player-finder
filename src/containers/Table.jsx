import React, { Component } from 'react'

import Loader from '../components/Loader'
import Error from '../components/Error'

import { connect } from 'react-redux'

import { getFilteredData } from '../selectors/tableSelector'

import * as playersActions from '../actions/playersActions'

export class Table extends Component {
  componentDidMount() {    
    this.props.getPlayers()
  }

  rows = () => {
    return this.props.players.map(el => (
      <tr key={el.jerseyNumber}>
        <td>{el.name}</td>
        <td>{el.position}</td>
        <td>{el.nationality}</td>
        <td>{el.age}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-full">
          {
            this.props.loader
            ? <Loader /> 
            : this.props.error.length > 0
            ? <Error message={this.props.error} />
            : (
              <table className="table is-bordered is-fullwidth">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {this.rows()}
                </tbody>
              </table>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.players,
    players: getFilteredData(state)
  }
}

export default connect(mapStateToProps, playersActions)(Table);
