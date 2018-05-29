let x = {id: 'id1'}
const y =  {id: 'id1'}
const z = {...y}
const _x = x

x.id = 1
// good

y.id = 2
// good

z.id = 3
// ??

_x.id = 4

// ??
// x = y
// x = _x
// z = y