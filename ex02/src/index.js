function myFunction(a) {
    let myParameter;
    if (a > 0) {
      myParameter = 'The parameter is true!';
    } else {
      myParameter = 'The parameter is false!';
    }
    return myParameter;
  }
  
  console.log(myFunction(5));

  module.exports = myFunction;


