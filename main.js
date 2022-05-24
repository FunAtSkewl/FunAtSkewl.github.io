document.addEventListener('click',(e)=>{
  let element = e.target
  if (element.tagName == 'BUTTON'){
    console.log(`${element.id}/index.html`)
    location.href = `${element.id}/index.html`
  }
})