import React, { Component } from 'react'
import PizzaDetails from './PizzaDetails'
import { connect } from 'react-redux'


class PizzaDetailsContainer extends Component {
  render() {
    if (!this.props.pizza) return null
    return <PizzaDetails pizza={this.props.pizza} />
  }
}



const mapStateToProps = (state) => {
  if (state.selectedPizza !== null) {
    return {
      pizza: state.pizzas.find(pizza => pizza.id === state.selectedPizza)
    }
  }
  return {}
}

export default connect(mapStateToProps)(PizzaDetailsContainer)