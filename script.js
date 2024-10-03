let products = {
    data : [
        {
            title: "title : Cloud Computing",
            author: "author : Shiksha Kumari",
            subject: "Advanced",
            date: "2024-01-31",
            image: "img/cloudcomputing.jpg" ,
        },
        {
            title: "title : Linux",
            author: "author : Linux Torvalds",
            subject: "IT",
            date: "2024-11-11",
            image: "img/linux.jpg" ,
        },
        {
            title: "title : AWS",
            author: "author : KAVERI S",
            subject: "IT",
            date:  "2023-12-22",
            image: "img/aws.jpg" ,
        },
        {
            title: "title : Computer networks and security",
            author: "author : Vinod Kumar",
            subject: "CSE",
            date:  "2015-03-20",
            image: "img/cns.jpg" ,
        },
        {
            title: "title : SAP",
            author: "author : Preeti",
            subject: "Novel",
            date:  "2011-11-10",
            image: "img/sap.jpg" ,
        },
        {
            title: "title : Artificial Intelligence",
            author: "author : Haritha Verma",
            subject: "ISE",
            date:  "2015-12-20",
            image: "img/Os.jpg" ,
        },
        {
            title: "title : System design",
            author: "author : Amar.W",
            subject: "CSE",
            date:  "2017-12-20",
            image: "img/systemdesign.jpg" ,
        },
        {
            title: "title : Data Structure",
            author: "author : HARIKRISHNA",
            subject: "Basic",
            date: "2018-01-21",
            image: "img/DS.jpg" ,
        },
        {
            title: "title : Harry Potter",
            author: "author : J.K. Rowling",
            subject: "Fantasy",
            date:  "1999-12-20",
            image: "img/hp.jpg" ,
        },
        {
            title: "title : Operating System",
            author: "author : RAMA KRISHNA K",
            subject: "CSE",
            date:  "2022-04-20",
            image: "img/Nt.jpg" ,
        },
        {
            title: "title : Atomic Habbits",
            author: "author : Jiya Sharma",
            subject: "Novel",
            date:  "1995-12-22",
            image: "img/ah.jpg" ,
        },
        {
            title: "title : How to win friends and influence people",
            author: "author : LEHAN FAYAZ",
            subject: "Novel",
            date:  "2002-02-02",
            image: "img/htw.jpeg" ,
        },
        {
            title: "title : Image Processing",
            author: "author : Kayva Sharma",
            subject: "ISE",
            date:  "2021-12-20",
            image: "img/wta.jpg" ,
        },
        {
            title: "title : Physics",
            author: "author : Nisha Verma",
            subject: "Basic",
            date:  "2005-12-20",
            image: "img/Ncert.jpg" ,
        },
        {
            title: "title : UNIX",
            author: "author : Aditiya chopra",
            subject: "IT",
            date: "2022-08-08",
            image: "img/Nt.jpg" ,
        },
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });


  

  window.onload = () => {
    filterProduct("all");
  };


