// Initial setup
let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '------------\n';
output += 'a + b = ' + (a + b) + "\n";
output += 'a - b = ' + (a - b) + "\n";
output += 'a * b = ' + (a * b) + "\n";
output += 'a / b = ' + (a / b) + "\n";
output += 'a % b = ' + (a % b) + "\n";
output += '(a += b) : ' + ((a += b)) + "\n";
output += '(a -= b) : ' + ((a -= b)) + "\n";
output += '(a *= b) : ' + ((a *= b)) + "\n";
output += '(a %= b) : ' + ((a %= b)) + "\n";
output += '(a == b) : ' + ((a == b)) + "\n";
output += '(a != b) : ' + ((a != b)) + "\n";
output += '(a > b) : ' + ((a > b)) + "\n";
output += '(a < b) : ' + ((a < b)) + "\n";
output += '(!a && !c) : ' + (!a && !c) + "\n";
output += '(!a || !c) : ' + (!a || !c) + "\n";

alert(output);

let first_name = 'Andres';
let last_name = 'Alvear';
let email = 'alve0045@algonquinlive.com';
let output_task2 = 'My name is ' 
output_task2 += first_name;
output_task2 += ' ';
output_task2 += last_name;
output_task2 += '. ';
output_task2 += 'You can contact me at ';
output_task2 += email;

alert(output_task2);
