const personalDescription = `<button type="button" class="bg-dark text-light border-0 text-decoration-underline" data-bs-toggle="modal"
            data-bs-target="#meModal">
            Sobre mí ▼
          </button>
          <div class="modal fade" id="meModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
          data-bs-theme="dark">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title fs-5 orange" id="exampleModalLabel">Hola!</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-secondary">
                <p>Soy un profesional apasionado por la creación de soluciones web de alta calidad. Con experiencia en una variedad de tecnologías y lenguajes de programación, disfruto crear productos que esten a la altura de las necesidades de mis clientes y usuarios finales. Además, busco experiencia para trabajar con equipos multidisciplinarios y lograr los objetivos del proyecto. ¡Estoy listo para enfrentar nuevos desafíos y llevar tus ideas al siguiente nivel!</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="button-css" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        `;

let collapseParagraph = document.getElementById("collapseParagraph");

collapseParagraph.innerHTML = personalDescription;

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
