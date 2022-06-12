const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000)
});

await myPromise
    .then((result) => result + 'Passandro pelo then').then((result) => result + 'e agora acabou!')
    .catch((err)=>console.log(err.message))