const genPromist =  (para) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

// result of promise.resolve, defultly put in para of nexr promise
genPromist(2)
    .then(genPromist)
    .then(genPromist)

// as same as above
// genPromist(2)
//     .then((result)=> genPromist(result))
//     .then((result)=> genPromist(result))