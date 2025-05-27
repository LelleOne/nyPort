// Function to create a programming language object
function createProgrammingObject(title, img, description, tag, link) {
  return { title, img, description, tag, link };
}

// Example objects
const programmingObjects = [
  createProgrammingObject(
    "Country Guessing Game",
    "src/images/world-map-continents-oceans.webp",
    "Learn the basics of JavaScript, by creating a gamer where you guess the country",
    "js",
    "otherProjects/Country-Guessing-Game-main/index.html"
  ),
  createProgrammingObject(
    "C++ OpenGL project",
    "src/images/openGL.png",
    "Learning how to create i simple OpenGL aplication",
    "c++",
    "https://github.com/LelleOne/OpenGL"
  ),
  createProgrammingObject(
    "Old Portfolio",
    "src/images/oldPort.png",
    "An introduction to Python programming for beginners.",
    "web",
    "otherProjects/OldPort/index.html"
  ),
  createProgrammingObject(
    "Minecraft Shop",
    "src/images/blockEstate.jpg",
    "A shoping site for minecraft blueprints made with c# mvc .NET core.",
    "C#",
    "https://infomedia.orebro.se/xlihag29/BlockShop/"
  ),
  createProgrammingObject(
    "Autumn Project",
    "src/images/autmn.png",
    "A project made with a friend where i use the knowledge from first port and helping others",
    "web",
    "otherProjects/AutmnProject/index.html"
  )
];

// Function to create and append divs with object information
function displayProgrammingObjects(objects) {
  const container = document.createElement('div');
  container.className = 'programming-container';

  objects.forEach(obj => {

    const link = document.createElement('a');
    link.href = obj.link;
    link.target = "_blank"; 
    link.className = "link"

    const card = document.createElement('div');
    card.className = 'programming-card';

    const title = document.createElement('h2');
    title.textContent = obj.title;

    const img = document.createElement('img');
    img.src = obj.img;
    img.alt = `${obj.title} image`;

    const description = document.createElement('p');
    description.textContent = obj.description;

    const tag = document.createElement('span');
    tag.textContent = obj.tag;
    tag.className = 'tag';

    title.className = 'title';
    img.className = 'image';
    description.className = 'description';
    tag.className = 'tag';

    link.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(tag);

    container.appendChild(link);
  });

  document.body.appendChild(container);
}

// Call the function to display the objects
displayProgrammingObjects(programmingObjects);