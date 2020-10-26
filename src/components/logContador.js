import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Button, Container, Icon, Table } from 'semantic-ui-react'

import { Context } from '../context/Context'

const LogContador = () => {
    const { deleteLog, logs } = useContext(Context)
    return (
        <Container>
            <div>
                <h3>
                    Log de acciones
                </h3>
            </div>
            <div>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Cuándo</Table.HeaderCell>
                            <Table.HeaderCell>Acción</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {logs.map((log) => <Logdiv log={log} key={log.id} deleteLog={deleteLog} />)}
                </Table>
            </div>
        </Container>
    )
}
export default LogContador

const Logdiv = ({ deleteLog, log }) =>
    <Table.Row>
        <Table.Cell>{log.when.toLocaleString('es-AR')}</Table.Cell>
        <Table.Cell>{log.type}</Table.Cell>
        <Table.Cell textAlign="center">
            <Button data-testid={`button_deleteLog_${log.id}`} color="red" onClick={() => deleteLog(log)} icon >
                <Icon name="erase" />
            </Button>
        </Table.Cell>
    </Table.Row>


Logdiv.propTypes = {
    deleteLog: PropTypes.node,
    log: PropTypes.node,
}
