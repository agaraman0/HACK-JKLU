document.getElementById("id1").addEventListener("click", myFunction);

function myFunction(e) {

    e.preventDefault();

    itemsDoc = document.getElementById("items");
    itemsDoc.removeChild(document.getElementsByTagName[0]);
    // alert("In Function");
    const data = [{
            courseName: "Test1",
            source: "Udemy",
            star: "3.4",
            price: "350",
            enrolledStudent: 12
        },
        {
            courseName: "Test2",
            source: "Coursera",
            star: "4",
            price: "30",
            enrolledStudent: 102
        }
    ]

    for (let i = 0; i < data.length; i++) {
        cName = document.createElement("h4");
        source = document.createElement("p");
        star = document.createElement("p");
        price = document.createElement("p");
        enStd = document.createElement("p");

        cName.innerHTML = data[i].courseName;
        source.innerText = data[i].source;
        star.innerText = "⭐" + data[i].star;
        price.innerText = "$" + data[i].price;
        enStd.innerText = "👨‍🎓" + data[i].enrolledStudent;

        div = document.createElement("div");
        div.appendChild(cName);
        div.appendChild(source);
        div.appendChild(price);
        div.appendChild(star);
        div.appendChild(enStd);
        itemsDoc.appendChild(div);
    }

}