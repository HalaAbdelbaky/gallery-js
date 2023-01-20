const galleryImg=document.querySelectorAll(".img")
console.log(galleryImg)

galleryImg.forEach(
  (item)=>{
    item.onmousemove=function(){
      galleryImg.forEach(
        (item)=>{
      item.classList.remove("grow");
        }
      )
      item.classList.add("grow");
      item.classList.remove("translating")
    }
    item.onmouseout=function(){
      item.classList.remove("grow");
      item.classList.add("translating")
    }
  }
)


