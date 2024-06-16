const container = document.querySelector("#container");

for (i=0; i<16 ; i++) {
    const line = document.createElement("div");
    line.setAttribute("class", `line${i}`);
    container.appendChild(line)
    for (j=0; j<16 ; j++) {
        const div = document.createElement("div");
        div.setAttribute("class", `div${j}`);
        div.style.backgroundColor = "black";
        div.textContent = "&nbsp";
        line.appendChild(div);
    }
}

