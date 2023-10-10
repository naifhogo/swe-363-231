posts = 
[
   /* {
        src:"100-best-games-hp-b.webp",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"a pic of some highly rated games",
        brief:"This blog will discuse some of the games that i like to play.",
        link:"#",
        tags:["Games","Raring","FPS"]
    },*/
    {
        src:"Screenshot-2020-06-19-at-15.50.13.webp",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"valorant:",
        brief:"Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games",
        link:"#",
        tags:["Games","Raring","FPS"]
    },
    {
        src:"e00ebe0f-2a60-4fe4-b5a4-5f34c2dbeab0.jpg",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"Red dead Redemption 2:",
        brief:"Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games",
        link:"#",
        tags:["Games","Raring","FPS"]
    },
    
    
]
//let img = document.createElement("img")
//img.src = "100-best-games-hp-b.webp"
//img.alt = "Sample Image"
//div.appendChild(img)

let parentContainer = document.querySelector("#posts");


posts.forEach(function(post) {
  
  let div = document.createElement("div");
  div.classList.add("index");
  div.classList.add("reviews");

  
  let img = document.createElement("img");
  img.src = post.src;
  img.alt = "Sample Image";
  div.appendChild(img);

  
  let title = document.createElement("h2");
  title.textContent = post.title;
  div.appendChild(title);

 
  let brief = document.createElement("p");
  brief.textContent = post.brief;
  div.appendChild(brief);

 
  let tags = document.createElement("ul");
  post.tags.forEach(function(tag) {
    let li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });
  div.appendChild(tags);

 
  parentContainer.appendChild(div);
});