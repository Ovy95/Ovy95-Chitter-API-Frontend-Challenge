describe("Chitter", function () {

  describe('Api checker method ', function() {

    it ("Expect Console log message toequal Sucess ",function() {
       let api_url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
      expect(api_checker(api_url)).toEqual(console.log("Success"));
    })
    it ("Expect Console warn message toequal Something went wrong.",function() {
      let back_urlLink = 'https'
     expect(api_checker(back_urlLink)).toEqual(console.warn("Something went wrong."));
   })
    
})

})