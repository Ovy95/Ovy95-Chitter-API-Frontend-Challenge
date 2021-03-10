function api_checker(api) {
fetch(api).then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}
// api_checker(check_users)

    // This is for checking the useraccounts 
  // const check_users ='https://chitter-backend-api-v2.herokuapp.com/users'

// All tweets 
const all_tweets_url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'

  async function getapi(url) {
      // Storing response 
    const response = await fetch(url)
    // Storing data in form of JSON 
    var data = await response.json()

    show(data)
  }

  getapi(all_tweets_url)
  

  function show(data) { 

    let tab =  
        `<tr> 

          <th>username</th> 
          <th>tweet</th> 
          <th>time</th> 
          <th>likes</th> 
         </tr>`; 
    
    // Loop to access all rows  
    for (let r of data) { 
        tab += `<tr>  

    <td>${r.user.handle} </td> 
    <td>${r.body}</td> 
    <td>${r.created_at}</td>  
    <td> ${r.likes.length}</td>           
</tr>`; 
    } 
    // Setting innerHTML as tab variable 
    document.getElementById("peepsTable").innerHTML = tab; 
  }
  // 0:{body: "beep",created_at: "2021-02-16T19:53:08.040Z" ,id: 287 ,likes: [] ,updated_at: "2021-02-16T19:53:08.040Z" ,user: {id: 34, handle: "kay"}}
// Each tweet
