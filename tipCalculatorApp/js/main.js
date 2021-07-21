window.addEventListener("load", ()=>{

  const amount = document.querySelector("#amount")

  /* perc : percentage */
  const percBtns = document.querySelectorAll(".percentage-btn")
  const customPerc = document.querySelector(".custom-percentage")

  const numOfPeople = document.querySelector('#no-people')

  const tipAmountRender = document.querySelector(".tip-amount")
  const perPersonRender = document.querySelector(".per-person")

  const amountErr = document.querySelector(".input-amount-err")
  const peopleErr = document.querySelector(".input-people-err")

  const reset = document.querySelector(".reset")

  let varAmount = 0
  let varNumOfPeople = 1
  let varTipPercentage = 0

  tipAmountRender.textContent = `$00.00`
  perPersonRender.textContent = `$00.00`

  function calc() {
    if(varNumOfPeople !==0){
      const tipTotal = ((varAmount*varTipPercentage)/100)/varNumOfPeople
      tipAmountRender.textContent = `$${tipTotal.toFixed(2)}`
      const perPerson = (varAmount + tipTotal)/varNumOfPeople
      perPersonRender.textContent = `$${perPerson.toFixed(2)}`
    }else{
      tipAmountRender.textContent = `$00.00`
      perPersonRender.textContent = `$00.00`
    }
  }
  // const total = Math.round(varAmount*varTipPercentage)/100
  //`${Math.round(total)}.${Math.}`

  amount.addEventListener("input", ()=>{
    amountErr.textContent = ""
    amount.classList.remove("input-err")
    varAmount = Number(amount.value)
    if(varAmount > 0){
      calc()
    }else if(varAmount === 0){
      amount.classList.add("input-err")
      amountErr.textContent = "Can't be Zero"
    }else{
      amount.classList.add("input-err")
      amountErr.textContent = "Can't be negative"
    }
  })

  percBtns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
      percBtns.forEach((rbtn) => {
        rbtn.classList.remove("percentage-btn--active")
      });
      varTipPercentage = Number(btn.dataset["percentage"])
      btn.classList.add("percentage-btn--active")
      calc()
    })
  })

  customPerc.addEventListener("input", ()=>{
    percBtns.forEach((rbtn) => {
      rbtn.classList.remove("percentage-btn--active")
    });
    varTipPercentage = Number(customPerc.value)
    calc()
  })

  numOfPeople.addEventListener("input", ()=>{
    peopleErr.textContent = ""
    numOfPeople.classList.remove("input-err")
    varNumOfPeople = Number(numOfPeople.value)
    calc()
    if(varNumOfPeople > 0){
      calc()
    }else if(varNumOfPeople === 0){
      numOfPeople.classList.add("input-err")
      peopleErr.textContent = "Can't be Zero"
    }else{
      numOfPeople.classList.add("input-err")
      peopleErr.textContent = "Can't be negative"
    }
  })

  reset.addEventListener("click", ()=>{
    varAmount = 0
    varNumOfPeople = 1
    varTipPercentage = 0

    tipAmountRender.textContent = `$00.00`
    perPersonRender.textContent = `$00.00`

    amount.value =""
    customPerc.value =""
    numOfPeople.value ="1"
  })


})
