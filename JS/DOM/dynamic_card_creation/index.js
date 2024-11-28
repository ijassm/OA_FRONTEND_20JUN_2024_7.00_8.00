import { data, sum } from "./data.js";

// console.log(data);
// console.log(sum);

function card(title, description, imageUrl) {
  return `
      <section class="card" style="width: 18rem">
        <img
          src=${imageUrl}
          class="card-img-top"
          alt="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </section>
    `;
}

// function parentElement() {
//   const children = [];

//   for (const i of data) {
//     children.push(card(i.title, i.description));
//   }

//   return `<main class="container m-auto row gap-3">${children.join("")}</main>`;
// }

function model() {
  return `
  <!-- Modal -->
<main class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="url" name="imageUrl" class='w-100 my-2' placeholder="Enter your image url" />
        <input type="text" name="title" class='w-100 my-2' placeholder="Enter your Title" />
        <textarea class="w-100 my-2" name="description" rows="10" placeholder="Enter your Description"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="submit-btn" type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</main>`;
}

function parentElement() {
  const children = data
    .map((i) => card(i.title, i.description, i.imageUrl))
    .join("");
  return `<main class="container m-auto row gap-3">
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
  </button>
${model()}

  ${children}
  </main>`;
}

const doc = document;

doc.body.innerHTML = parentElement();

doc.querySelector("#submit-btn").addEventListener("click", () => {
  const imageUrl = doc.querySelector("input[name='imageUrl']").value;
  const title = doc.querySelector("input[name='title']").value;
  const description = doc.querySelector("textarea[name='description']").value;

  console.log(imageUrl);
  console.log(title);
  console.log(description);

  data.push({
    title,
    description,
    imageUrl,
  });

  doc.body.innerHTML = parentElement();
});

// localStorage.setItem("name", "aravind");
// localStorage.setItem("age", 20);
// console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("name"));
// console.log(localStorage.clear());
