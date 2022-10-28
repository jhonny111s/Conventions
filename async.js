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

async function asyncCall() {
    console.log('calling');
    const result = await suma('1', 2);
    console.log(result);
    // expected output: "resolved"
}

asyncCall();