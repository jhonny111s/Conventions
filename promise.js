function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            reject(new Error('changos'))
        }

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    })
}

suma('a', 2).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})