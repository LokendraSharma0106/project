const accessKey = "vy20ld7_G9cgaWQlhZ0IeRhd213ZmO8j8rfZMaiYXTM";

async function searchImages() {
  const query = document.getElementById("searchInput").value;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&per_page=10&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  showImages(data.results);
}

function showImages(images) {
  const imageGrid = document.getElementById("imageGrid");
  imageGrid.innerHTML = ""; 

  const img1 = document.createElement("img");
  img1.setAttribute("src", images[0].urls.regular);
  img1.setAttribute( "class","col");
  imageGrid.appendChild(img1);

  const img2 = document.createElement("img");
  img2.setAttribute("src", images[1].urls.regular);
  img2.setAttribute( "class","col");
  imageGrid.appendChild(img2);

  const img3 = document.createElement("img");
  img3.setAttribute("src", images[2].urls.regular);
  img3.setAttribute( "class","col");
  imageGrid.appendChild(img3);

  const img4 = document.createElement("img");
  img4.setAttribute("src", images[3].urls.regular);
  img4.setAttribute( "class","col");
  imageGrid.appendChild(img4);

  const img5 = document.createElement("img");
  img5.setAttribute("src", images[4].urls.regular);
  img5.setAttribute( "class","col");
  imageGrid.appendChild(img5);

  const img6 = document.createElement("img");
  img6.setAttribute("src", images[5].urls.regular);
  img6.setAttribute( "class","col");
  imageGrid.appendChild(img6);

  const img7 = document.createElement("img");
  img7.setAttribute("src", images[6].urls.regular);
  img7.setAttribute( "class","col");
  imageGrid.appendChild(img7);

  const img8 = document.createElement("img");
  img8.setAttribute("src", images[7].urls.regular);
  img8.setAttribute( "class","col");
  imageGrid.appendChild(img8);

  const img9 = document.createElement("img");
  img9.setAttribute("src", images[8].urls.regular);
  img9.setAttribute( "class","col");
  imageGrid.appendChild(img9);

  const img10 = document.createElement("img");
  img10.setAttribute("src", images[9].urls.regular);
  img10.setAttribute( "class","col");
  imageGrid.appendChild(img10);

  console.log("image displayed")
}