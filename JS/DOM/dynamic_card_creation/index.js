import { data, sum } from "./data.js";

// console.log(data);
// console.log(sum);

function card(title, description) {
  return `
      <section class="card" style="width: 18rem">
        <img
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
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

function parentElement() {
  const children = [];

  //   for (let i = 0; i < 4; i++) {
  //     children.push(card());
  //   }

  for (const i of data) {
    children.push(card(i.title, i.description));
  }

  //   console.log(children.join(""));

  return `<main class="container m-auto row gap-3">${children.join("")}</main>`;
}

document.body.innerHTML = parentElement();
