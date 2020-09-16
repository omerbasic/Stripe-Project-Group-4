

window.onload=init


function init() {
console.log(findGetParameter('session_id'))


var receivedURL = findGetParameter('session_id')

fetch('/api/verifysession', {method: 'POST', body: receivedURL})
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.error(err)
        })

}
 

//The step now is to do true/false and then save it to a JSON file

//the success does not show on the client side
//two server exists 3000, 4000 server


function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;

 }




 