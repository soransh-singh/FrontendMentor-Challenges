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

  console.log(amountErr);
  console.log(peopleErr);

  const reset = document.querySelector(".reset")

  let varAmount = 0
  let varNumOfPeople = 1
  let varTipPercentage = 0

  tipAmountRender.textContent = `$00.00`
  perPersonRender.textContent = `$00.00`

  function calc() {
    const tipTotal = (varAmount*varTipPercentage)/100
    tipAmountRender.textContent = `$${tipTotal.toFixed(2)}`
    if(varNumOfPeople !==0){
      const perPerson = (varAmount + tipTotal)/varNumOfPeople
      perPersonRender.textContent = `$${perPerson.toFixed(2)}`
    }else{
      perPersonRender.textContent = `$00.00`
    }
  }
  // const total = Math.round(varAmount*varTipPercentage)/100
  //`${Math.round(total)}.${Math.}`

  amount.addEventListener("input", ()=>{
    amountErr.textContent = ""
    varAmount = Number(amount.value)
    if(varAmount > 0){
      calc()
    }else if(varAmount === 0){
      amountErr.textContent = "Can't be Zero"
    }else{
      amountErr.textContent = "Can't be negative"
    }
  })

  percBtns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
      varTipPercentage = Number(btn.dataset["percentage"])
      calc()
    })
  })

  customPerc.addEventListener("input", ()=>{
    varTipPercentage = Number(customPerc.value)
    calc()
  })

  numOfPeople.addEventListener("input", ()=>{
    peopleErr.textContent = ""
    varNumOfPeople = Number(numOfPeople.value)
    calc()
    if(varNumOfPeople > 0){
      calc()
    }else if(varNumOfPeople === 0){
      peopleErr.textContent = "Can't be Zero"
    }else{
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
