function validEmail(str) {
  var regex = /^\S+@\S+\.\S+$/;
  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
