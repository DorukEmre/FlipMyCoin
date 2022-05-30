document.querySelector('#flipMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#sideName").textContent = data.name
  document.querySelector("#sideImage").src = data.image
  document.querySelector("#sideImage").alt = data.imageAlt
}