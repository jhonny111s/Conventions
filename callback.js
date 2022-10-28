function suma(a, b, cb) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return cb(new Error('changos'))
    }

    setTimeout(() => {
        cb(null, a + b);
    }, 1000);

}

function devuelveSuma(error, result) {
    console.log(error, result)
}

suma('a', 2, devuelveSuma)