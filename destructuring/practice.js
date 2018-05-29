const response = {
    name: 'peter',
    id: 'id1',
    cost: null
}

const dataParser = ({name = '', id = '', cost = 0}) => {
    return {name, id, cost}
}

const dataParser = ({name = '', id = '', cost = 0}) => ({name, id, cost})