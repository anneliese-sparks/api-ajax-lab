fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {

for (let kid of data.data.children) {
   const titles = kid.data.title;
   const images = kid.data.thumbnail;
   const urls = kid.data.url;

   const div = document.createElement("div");
   document.body.appendChild(div);

   
   const title = document.createElement("h1");
   title.innerText = titles;
   div.appendChild(title);
    
    const image = document.createElement("img");
    image.classList.add("img");
    image.src = images;
    div.appendChild(image);

    const url = document.createElement("a");
    url.setAttribute("href", urls);
    url.innerHTML = urls;
    div.appendChild(url);
    url.text = "source";
}
});