//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago`; //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `USERS`;
let whereClauses = [
  `uid = ${2 + 1}
    OR city = "${city}"`
];
let order = `ASC`;
var result = checkQuery`${command}FROM${table}WHERE${whereClauses}ORDER BY${order}`;
console.log(result);
// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(strings, ...exp) {
  //Your validation code here...
  var str0 = strings[1];
  var str1 = strings[2];
  var str2 = strings[3];
  if (
    (exp[0] === "SELECT *" || (exp[0] === "UPDATE *" && exp[3] === "ASC")) &&
    !(exp[0] === "UPDATE *" && exp[1] === "PASSWORDS")
  ) {
    finalQuery = `${exp[0]} ${str0} ${exp[1]} ${str1} ${exp[2]} ${str2} ${
      exp[3]
    }`;
  } else {
    finalQuery = "error";
  }
  return finalQuery;
}
