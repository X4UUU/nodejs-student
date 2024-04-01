import ejs from "ejs";
import { readFile } from "fs/promises";
import { resolve } from "path";
const __dirname = import.meta.dirname;
let user;
// user = {
//     name: "April Gray",
//     img: "https://randomuser.me/api/portraits/women/69.jpg"
// };

// if (user) {
//     console.log(`
//     <img src="${user.img}"><span>${user.name}</span>
//     <button>登出</button>
//     `);
// } else {
//     console.log("<button>登入</button><button>註冊</button>");
// }
const template = await readFile(resolve(__dirname, "template01.html")).then(result=>result.toString());

const result = ejs.render(
    template,
    { user}
);
console.log(result);