const btn = document.querySelector("button");

const container = document.querySelector("#container");



function resetCanvas(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const text = document.getElementById("numPx").value;

    if(!isNaN(text) && text>0 && text<100){
    
        for (i=0; i<text ; i++) {
            const line = document.createElement("div");
            line.setAttribute("class", "line");
            container.appendChild(line)
            for (j=0; j<text ; j++) {
                const div = document.createElement("div");
                div.setAttribute("class", "box");
                div.style.backgroundColor = "black";
                div.style.opacity = 1;
                line.appendChild(div);
            }
        }
        function color(box){
            let startOpacity = box.style.opacity;
            let newOpacity = startOpacity -0.1;
            box.style.opacity = newOpacity;
        }
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.addEventListener("mouseover",() => {
                color(box);
            })
        })
    }
    else {
        alert("Enter a number between 0 and 100 only!");
    }
}

btn.addEventListener("click", () => resetCanvas())




