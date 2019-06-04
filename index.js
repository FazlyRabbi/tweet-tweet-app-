const addIitem = document.getElementById("addIitem");

const getDataBtn = document.getElementById("getDataBtn");

const fillterTweet = document.getElementById("fillterTweet");

const itemWrapper = document.getElementById("itemWrapper");

const showMassge = document.getElementById("showMassge");

// data Store
let productData = [];

//add data function
function getData(item) {
  if (item.length > 0) {
    massage();
    item.forEach(e => {
      const li = document.createElement("li");

      li.className = "list-group-item my-2 tweet";
      li.id = `product-${e.id}`;
      li.innerHTML = `<strong>${
        e.text
      }</strong><button class="btn btn-danger btn-sm " id = "deletBtn"style="float:right;">Delet</button>`;

      itemWrapper.appendChild(li);
    });
  } else {
    massage("please add some tweet");
  }
}

getData(productData);

//add data btn
getDataBtn.addEventListener("click", e => {
  e.preventDefault();

  let id;

  if (productData.length === 0) {
    id = 0;
  } else {
    id = productData[productData.length - 1].id + 1;
  }

  let text = addIitem.value;

  if (addIitem.value === "") {
    alert("please write some text in the input field");
  } else {
    data = {
      id,
      text
    };

    productData.push(data);
  }

  itemWrapper.innerHTML = "";

  addIitem.value = "";

  getData(productData);
});

//remove item

itemWrapper.addEventListener("click", e => {
  if (e.target.id === "deletBtn") {
    //remove frome ui

    const li = e.target.parentElement;

    e.target.parentElement.parentElement.removeChild(li);

    //remove forme data

    const result = productData.filter(e => {
      return li.id !== li.id;
    });

    productData = result;
  }
});

fillterTweet.addEventListener("keyup", e => {
  const text = e.target.value;
  let tweetCont = 0;

  document.querySelectorAll("#itemWrapper .tweet").forEach(e => {
    const tweetText = e.firstChild.innerText;

    if (tweetText.indexOf(text) === -1) {
      e.style.display = "none";
    } else {
      e.style.display = "block";

      ++tweetCont;
    }

    if (tweetCont > 0) {
      massage();
    } else {
      massage("no item in this critaria");
    }
  });
});

// show massage

function massage(text = "") {
  showMassge.innerHTML = text;
}
