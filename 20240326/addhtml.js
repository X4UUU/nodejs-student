const fs = require('fs');
const file1 = "index.html"
const content1 = `
<html>
  <head>
    <title>Node.js Generated HTML</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
`;

fs.writeFile(file1, content1, error => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('寫入成功');
});
