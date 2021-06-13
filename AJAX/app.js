// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then (res => {
//     console.log(res.data.ticker.price)
// })
// .catch(err => {
//     console.log("Error!", err)
// })

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }
    catch (e) {
        return "No jokes are available right now. Dad is sleeping."
    }
}

button.addEventListener('click', addNewJoke);