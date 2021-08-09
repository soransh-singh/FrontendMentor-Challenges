window.addEventListener("load", ()=>{
  console.log("window Loaded");

  const links = []


  const form = document.querySelector(".form")
  const inputLink = document.querySelector(".link")
  const renderUrl = document.querySelector(".render-url")


  async function createUrl() {
    console.log("function running");
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`)
    const shortUrl = await data.json()
    render(inputLink.value, shortUrl.result[full_short_link])
    console.log(shortUrl.result);
  }

  function render(longUrl, shortUrl){
    console.log("rendering");
    const newUrl = document.createElement("div")
    newUrl.textContent = `${longUrl} || ${shortUrl}`
    renderUrl.appendChild(newUrl)

  }

  console.log(form);
  form.addEventListener("submit", (event)=>{
    createUrl()
    console.log(inputLink.value);
    event.preventDefault()
  })

})

//https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
