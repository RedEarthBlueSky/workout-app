import React, { useReducer } from 'react'

interface Props {
  reducer: Function
  actions: Object
  defaultValue: boolean
  children: React.FC,
  key: string,
  state: Object,
  dispatch: Object
}

const CreateDataContext = (reducer, actions, defaultValue) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    const boundActions: Object = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}

export default CreateDataContext
