const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('hi');
console.log(window.location.search);
alert (myParam);
