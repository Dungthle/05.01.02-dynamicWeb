fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function(response) {
    return response.json()
})
.then(function (data){
      showData(data)
      })

      function showData(jsonData) {
          jsonData.forEach(showSingleDish)
          console.log(jsonData)
      }

function showSingleDish(dish){

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h2").textContent = dish.name;
    clone.querySelector("h3").textContent = dish.shortdescription;
    clone.querySelector("p").textContent = dish.price;


    const imageName = dish.image; // this would be dynamic

    const base = "https://kea-alt-del.dk/t5/site/imgs/";

    const smallImg = base + "small/" + imageName + "-sm.jpg";
    const mediumImg = base + "medium/" + imageName + "-md.jpg";
    const largeImg = base + "large/" + imageName + ".jpg";
    clone.querySelector("img").src = smallImg;

    const parent = document.querySelector("main");
    parent.appendChild(clone)
}
