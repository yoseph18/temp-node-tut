const os = require("os");

//info about me
const user = os.userInfo();

console.log(user);
//method system uptime in seconds
console.log(os.uptime());

console.log(os.platform());
