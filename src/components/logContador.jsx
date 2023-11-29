import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Button, Container, Icon, Table } from 'semantic-ui-react'

import { Context } from '../context/Context'

const LogContador = () => {
    const { logs } = useContext(Context)
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
                    <Table.Body>
                        {logs.map((log) => <Logdiv log={log} key={log.id} />)}
                    </Table.Body>
                </Table>
            </div>
        </Container>
    )
}
export default LogContador

const Logdiv = ({ log }) => {
    const { deleteLog } = useContext(Context)

    return <Table.Row>
        <Table.Cell>{log.when.toLocaleString('es-AR')}</Table.Cell>
        <Table.Cell data-testid="LogRow">{log.type}</Table.Cell>
        <Table.Cell textAlign="center">
            <Button data-testid={`button_deleteLog_${log.id}`} color="red" onClick={() => deleteLog(log)} icon >
                <Icon name="erase" />
            </Button>
        </Table.Cell>
    </Table.Row>
}

Logdiv.propTypes = {
    log: PropTypes.object,
}
