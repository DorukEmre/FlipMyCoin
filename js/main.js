document.querySelector('#flipMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()
  const img = document.querySelector("#sideImage")

  console.log(data);
  img.classList.toggle('fade')
  setTimeout(() => {
    document.querySelector("#sideName").textContent = data.name
    img.src = data.image
    img.alt = data.imageAlt 
    img.decode()
      .then(() => {
        img.classList.toggle('fade')
      })
  }, "300")
}