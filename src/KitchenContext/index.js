import React from 'react'

const KitchenContext = React.createContext({
  addBtn: false,
  filter: () => {},
  onaddBtn: () => {},
})

export default KitchenContext
