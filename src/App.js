import React from 'react'

import World from './features/world'

const App = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <div>
      <World />
    </div>
  )
}

export default App
