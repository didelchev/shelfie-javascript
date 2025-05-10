export const request = () => {
    const url = 'http://localhost:5000'
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}
