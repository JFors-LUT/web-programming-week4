//import "./styles.css";

const textShow = document.getElementById("input-show");
const submitButton = document.getElementById("submit-data");
const showTable = document.getElementById>("show-table");


submitButton.addEventListener("click", async function(){
  q = textShow.value;
  textShow.value = "";
  console.log("getting data...")
  getShowData(q);
  console.log("Got data")
})

async function getShowData(showName){
  const url = "https://api.tvmaze.com/search/shows?q="+showName;
  const showPromise = await fetch(url)
  const showJSON = await showPromise.json()

  showJSON.forEach(element => {

    let divData = document.createElement("div");
    divData.className = "show-data";

    let divInfo = document.createElement("div");
    divInfo.className = "show-info";

    let head1 = document.createElement("h1");
    head1.innerText = element.show.name;

    let summary = document.createElement("p");
    summary.innerText = element.show.summary.replace(/<p>|<\/p>/ig, "");

    
    if (element.show.image != null){
      let image = document.createElement("img")
      image.src = element.show.image.medium;
      divData.append(image);
    }
    divInfo.appendChild(head1);
    divInfo.appendChild(summary);
    
    divData.append(divInfo);
    document.body.appendChild(divData);


  });

}