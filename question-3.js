// Question #3
// let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
      for (let check of userPassword) {
        console.log(check);

        if (check > 10) {
            console.log(check)
            return "Strong";
               
        } else if (check > 6 && check <= 10) {
            return "Medium";

        } else {
            return "Weak";
        }
    }
} 
let userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword)); // "Strong"  

// let userPassword = "TechUp"
// console.log(checkPasswordStrength(userPassword)); // "Medium"

// let userPassword = "abcde"
// console.log(checkPasswordStrength(userPassword)); // "Weak"

