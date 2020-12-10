window.onload = () => {
    const loadImages = fetch("http://www.splashbase.co/api/v1/images/1")
    .then(response).then(response => response.json()).then(console.log(loadImages))
}

console.log("Hello")