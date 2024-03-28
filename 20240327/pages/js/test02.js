const cols = document.querySelectorAll(".col");
        // 抓下來為類陣列，只能用forEach
        cols.forEach(col => {
            col.addEventListener("click", function () {
                this.classList.toggle("active");
            })
        })