
//const { result } = require("cypress/types/lodash");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    let result =""; 
    //param name is password why 
    var password = req.query.password; 
    context.log(password)


    if (password == "letmein"){
        result = "Access granted."
    }
    else{
        result = "Access denied."
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
}