// Function to create a programming language object
function createProgrammingObject(title, img, description, tag, link) {
  return { title, img, description, tag };
}

// Example objects
const programmingObjects = [
  createProgrammingObject(
    "JavaScript Basics",
    "src/images/arrow_right.png",
    "Learn the basics of JavaScript, the language of the web.",
    "js"
  ),
  createProgrammingObject(
    "C++ Fundamentals",
    "src/images/arrow_right.png",
    "Master the fundamentals of C++ programming.",
    "c++"
  ),
  createProgrammingObject(
    "Python for Beginners",
    "src/images/arrow_right.png",
    "An introduction to Python programming for beginners.",
    "python"
  ),
  createProgrammingObject(
    "Minecraft Shop",
    "src/images/blockEstate.jpg",
    "A shoping site for minecraft blueprints made with c# mvc .NET core.",
    "C#"
  )
];

// Function to create and append divs with object information
function displayProgrammingObjects(objects) {
  const container = document.createElement('div');
  container.className = 'programming-container';

  objects.forEach(obj => {
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

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(tag);

    container.appendChild(card);
  });

  document.body.appendChild(container);
}

// Call the function to display the objects
displayProgrammingObjects(programmingObjects);