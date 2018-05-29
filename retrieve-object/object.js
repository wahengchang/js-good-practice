const obj = {
    body: {
        user: {
            id: 'id1'
        }
    }
}

const id = obj && obj.body && obj.body.user && obj.body.user.id
// warning: be carefull when id is boolean

if(!id) return 'this is bad obj'

return 'this is good obj'