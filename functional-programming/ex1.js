// Map, Filter, Find, Some, Sort

const arr = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'},
    {id: 5, name: 'name5'},
    {id: 6, name: 'name6'},
]

const isBigEnough = itme => {
    return itme.id >= 3
}

const extractName = item => item.name

const result = arr
                .filter(isBigEnough)
                .map(extractName)

console.log(result)