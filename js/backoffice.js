function updateFileName() {
  var input = document.getElementById('file');
  var fileName = document.getElementById('file-name');
  fileName.textContent = input.files[0].name;
}
const form = document.getElementById("formProductos");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData)
  let id;
  fetch("http://localhost:3000/api/productos", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      id = data._id;
      console.log(id)
      const formImg = document.getElementById("formImg");
      formImg.addEventListener("submit", (e) => {
        e.preventDefault();
        const formDataImg = new FormData(formImg);
        fetch(`http://localhost:3000/api/productos/img/${id}`, {
          method: "POST",
          body: formDataImg,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log("hubo un error")
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

