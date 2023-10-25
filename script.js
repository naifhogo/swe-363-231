const posts = [
  {
    src: "Screenshot-2020-06-19-at-15.50.13.webp",
    date: new Date("2023-10-10:00:00.000Z"),
    title: "Valorant:",
    brief: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games",
    link: "#",
    tags: ["Games", "Raring", "FPS"],
  },
  {
    src: "e00ebe0f-2a60-4fe4-b5a4-5f34c2dbeab0.jpg",
    date: new Date("2023-10-10:00:00.000Z"),
    title: "Red Dead Redemption 2:",
    brief: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games",
    link: "#",
    tags: ["Games", "Raring", "FPS"],
  },
];

const parentContainer = document.querySelector("#posts");

const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("index", "reviews");
  return div;
};

const createImg = (post) => {
  const img = document.createElement("img");
  img.src = post.src;
  img.alt = "Sample Image";
  return img;
};

const createTitle = (post) => {
  const title = document.createElement("h2");
  title.textContent = post.title;
  return title;
};

const createBrief = (post) => {
  const brief = document.createElement("p");
  brief.textContent = post.brief;
  return brief;
};

const createTags = (post) => {
  const tags = document.createElement("ul");
  const tagItems = post.tags.map((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    return li;
  });
  tags.append(...tagItems);
  return tags;
};

const createPost = (post) => {
  const div = createDiv();
  div.append(createImg(post), createTitle(post), createBrief(post), createTags(post));
  return div;
};

const appendChild = (parent, child) => {
  parent.appendChild(child);
};

posts.map(createPost).forEach((post) => appendChild(parentContainer, post));