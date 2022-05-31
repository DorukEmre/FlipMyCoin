document.querySelector('#flipMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()
  const img = document.querySelector("#sideImage")

  console.log(data);
  img.classList.toggle('fade');
  
  setTimeout(() => {
    img.src = data.image
    img.decode()
        .then(() => {
            document.querySelector("#sideName").textContent = data.name;
            img.alt = data.imageAlt;
            img.classList.toggle('fade'); 
        })
  }, "300")
}