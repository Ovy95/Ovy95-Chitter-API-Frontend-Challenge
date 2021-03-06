async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
async function getapi(url) {
  // Storing response 
const response = await fetch(url)
// Storing data in form of JSON 
var data = await response.json()

show(data)
}
const check_users ='https://chitter-backend-api-v2.herokuapp.com/users'



// 0: {id: 1, handle: "edward"}
function newUser() {

  let username = document.getElementById("myInputUsername").value
  let password = document.getElementById("myInputPassword").value

  // alert("'"+username +"'" + " This name is already taken please choose another Hint Add numbers and underscores");
  let object = {"user": {"handle":username, "password":password}};
  console.log(object)

  postData('https://chitter-backend-api-v2.herokuapp.com/users', object)
  .then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
  });
  // 193: {id: 290, handle: "TestingJack"}
}



 






