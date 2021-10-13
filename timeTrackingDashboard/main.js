window.addEventListener("load", ()=>{
  const url="https://raw.githubusercontent.com/soransh-singh/Container/main/time-tracking-dashboard/data.json"
  const previous = document.querySelectorAll(".previous")
  const current = document.querySelectorAll(".current")

  async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }

  const buttons = document.querySelectorAll(".button")
  console.table(buttons)
  buttons.forEach(async (button) => {
    let obj = await getData()
    button.addEventListener("click", ()=>{
      buttons.forEach(item => {
        item.classList.remove("active-button")
      })
      button.classList.add("active-button")

      const period = button["dataset"]["period"]
      previous.forEach((prev)=>{
        const activity = obj.find(({title}) => {
          return title === prev["dataset"]["activity"]
        })
        prev.textContent = activity["timeframes"][period]["previous"]
      })

      current.forEach((cur)=>{
        const activity = obj.find(({title}) => {
          return title === cur["dataset"]["activity"]
        })
        cur.textContent = activity["timeframes"][period]["current"]
      })

    })

  })

})
