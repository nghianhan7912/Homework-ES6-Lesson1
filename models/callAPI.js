const API =  () => {
    return fetch("/dressingroom/data/Data.json")
    .then((a) => a.json())
    .catch((err) => {
        console.log(err);
    })
}

export default {API} 