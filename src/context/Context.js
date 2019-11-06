import React, { createContext } from 'react'
import { Log } from '../domain/log'
export const Context = createContext()

export class Provider extends React.Component {
    state = {
        logs: [],
        count: 0
    }
    decrement = () => {
        this.setState({
            logs: this.state.logs.concat(new Log('DECREMENT')),
            count: this.state.count - 1
        })
    }
    increment = () => {
        this.setState({
            logs: this.state.logs.concat(new Log('INCREMENT')),
            count: this.state.count + 1
        })
    }
    deleteLog = (logToDelete) => {
        const newLogs = this.state.logs.filter((log) => logToDelete.id !== log.id)
        this.setState({
            logs: newLogs
        })
    }
    render() {
        const value = {
            count: this.state.count,
            logs: this.state.logs,
            decrement: this.decrement,
            increment: this.increment,
            deleteLog: this.deleteLog
        }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

// EJEMPLO DE COMO HACERLO CON HOOKS
// import React, { createContext,useState } from 'react'
// export const Provider = ({ children }) => {
//     const [count, setCount] = useState(0)
//     const [logs, setLogs] = useState([])
//     const value = {
//         count,
//         logs,
//         decrement: () => {
//             const newLogs = [...logs]
//             newLogs.push(new Log('DECREMENT'))
//             setLogs(newLogs)
//             setCount(count - 1)
//         },
//         increment: () => {
//             const newLogs = [...logs]
//             newLogs.push(new Log('INCREMENT'))
//             setLogs(newLogs)
//             setCount(count + 1)
//         },
//         deleteLog: (logToDelete) => {
//             const newLogs = logs.filter((log) => logToDelete.id !== log.id)
//             setLogs(newLogs)
//         }
//     }
//     return (
//         <Context.Provider value={value}>
//             {children}
//         </Context.Provider>
//     )
// }