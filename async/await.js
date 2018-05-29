(async function(){
    const genPromist =  (para) => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                console.log('para: ', para)
                resolve(para * para)
            }, 1000)
        })
    }

    const res1 = await genPromist(2)
    const res2 = await genPromist(res1)
    const res3 = await genPromist(res2)
})()