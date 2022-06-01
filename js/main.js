document.querySelector('#flipMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()
  console.log(data);

  const container = document.querySelector(".image-container")
  container.classList.toggle('flipping')

  const sideName = document.querySelector(".sideName")
  sideName.classList.toggle('fade')
  
  const newImg = document.createElement("img")
  newImg.src = data.image
  newImg.alt = data.imageAlt

  setTimeout(() => {
    newImg.decode()
        .then(() => {
          sideName.textContent = data.name;
          sideName.classList.toggle('fade')
          
          const img = document.querySelector(".sideImage")
          img.parentNode.removeChild(img)

          newImg.classList.add("sideImage")          
          container.appendChild(newImg)
          container.classList.toggle('flipping'); 
        })
  }, "500")
}