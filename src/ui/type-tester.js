import React from 'react'
import ReactDOM from 'react-dom'

/**
 * The type tester should:
 * - Adjust size
 * - Select weight or style
 * - Input and update text
 */

/**
 * Type tester
 */

class TypeTester extends React.Component {
  render() {
    return (
      <p>Type tester</p>
    )
  }
}

ReactDOM.render(
  <TypeTester />,
  document.getElementById('content')
);

export default TypeTester
