import http from "http";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const { pathname } = new URL(url, "http://localhost");
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>index</title>
        <style>
            .row {
                display: flex;
                width: 180px;
                background-color: lightblue;
    
                &:nth-child(odd) {
                    background-color: brown;
                }
    
                .col {
                    width: 60px;
                    height: 30px;
                    display: grid;
                    place-items: center;
                    user-select: none;
                    cursor: pointer;
    
                    &.active {
                        background-color: #12e20b;
                    }
                }
            }
        </style>
    </head>
    
    <body>
        <div class="row">
            <div class="col">1-1</div>
            <div class="col">1-2</div>
            <div class="col">1-3</div>
        </div>
        <div class="row">
            <div class="col">2-1</div>
            <div class="col">2-2</div>
            <div class="col">2-3</div>
        </div>
        <div class="row">
            <div class="col">3-1</div>
            <div class="col">3-2</div>
            <div class="col">3-3</div>
        </div>
        <div class="row">
            <div class="col">4-1</div>
            <div class="col">4-2</div>
            <div class="col">4-3</div>
        </div>
        <script>
            const cols = document.querySelectorAll(".col");
            // 抓下來為類陣列，只能用forEach
            cols.forEach(col => {
                col.addEventListener("click", function () {
                    this.classList.toggle("active");
                })
            })
        </script>
    </body>
    
    </html>`);
});

server.listen(9000, () => {
  console.log("sever is running at http://localhost:9000");
});
