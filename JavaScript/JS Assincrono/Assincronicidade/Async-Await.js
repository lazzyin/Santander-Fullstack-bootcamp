/*async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 2000)
    });

const resolved = await myPromise
        .then((result) => result + 'Passandro pelo then').then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message))

    return resolved
}=====NORMAL*/

/*async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 2000)
    });
    try{
    result= await myPromise
        .then((result) => result + 'Passandro pelo then').then((result) => result + 'e agora acabou!')
    }catch((err){
         result=err.message
    }
    return result
}====Com Try...Catch
 */