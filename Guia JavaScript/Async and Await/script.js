const promessa = new Promise((resolve, reject) => { return resolve("Funcionou") })


// Async - Await
async function start(){
    try {
        const result = await promessa
        console.log(result)
    } catch(error){
        console.error(error)
    } finally {
        console.log("Finally independente do resultado")
    }
}
start()


// Async - Await com Axios
async function fetchRepo(){
    try {
        const user = await axios.get("https://api.github.com/users/matxd")
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)  
    } catch(error) {
        console.error(error)
    }
}
fetchRepo()