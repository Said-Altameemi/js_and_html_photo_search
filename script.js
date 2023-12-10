const accesskey = "0GTIm-qomJdQiW_hSRTlt36YuO2_q4zxcPogI8vA3JI";
const forElement = document.querySelector("form");
const inputEl = document.getElementById("search-input");
// const searchResults = document.querySelector(".search-results");
const showMore = document.getAnimations("show-more-button");

const inputTag = document.getElementById("search-input");

const div = `<div onclick="console.log(this)" class="search-result">
<img src="baby.jpg" alt="Diving in the sea" />
<a
  href="https://unsplash.com/photos/a-baby-wrapped-in-a-blanket-sleeping-on-a-bed-tg8TBV7Xh-c"
  target="_blank"
>
  Diving in the sea</a
>
</div>`;

const searchResultsDiv = document.getElementById("searchResults");
// console.log(searchResults);
// searchResults.innerHTML = searchResults.innerHTML + div;´

const savedSearchResultsInnerHtml = searchResultsDiv.innerHTML;

let inputData = "";
let page = 1;

function test(gotOninput) {
  // console.log(inputTag.value);
  //
  //
  //
  const newArr = [];

  // if (inputTag.value === "") {
  //   savedSearchResults;
  // }

  if (inputTag.value !== "") {
    const newDiv = div.replace("baby.jpg", "batmanPhoto.jpg");

    console.log(newDiv);
    searchResults.innerHTML = newDiv;
  } else if (inputTag.value === "") {
    searchResults.innerHTML = savedSearchResultsInnerHtml;
  }

  //console.log(savedSearchResluts);
  // console.log(inputTag.value);

  for (let i = 0; i < arrOfObjs.length; i++) {
    //
    if (arrOfObjs[i].imageDiscription.includes(inputTag.value)) {
      newArr.push(arrOfObjs[i]);
    }
  }

  // console.log(newArr);

  console.log(newArr);
}

//function test(gotOninput) {
//console.log();

//   const showMe = arrOfObjs.filter((pass) => {
//     return pass.imageDiscription === "child runnig and laghuing haider";
//   });

//   console.log(showMe);
// }

//----second way
// function test(gotOninput) {
//   console.log();

//   const showMe = arrOfObjs.filter((pass) => {
//     return pass.imageDiscription === "a"
//   });

//   console.log(showMe);

// }

const obj1 = {
  imageLink:
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGR8ZW58MHx8MHx8fDA%3D",
  imageDiscription: `child runnig and laghuing haider`,
};

const obj2 = {
  imageLink:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  imageDiscription: "a man stading while smiling and wearing galsess",
};

const obj3 = {
  imageLink:
    "https://images.unsplash.com/photo-1531214159280-079b95d26139?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
  imageDiscription: "a charachter from toy story 1 sitting and looking sad",
};

const obj4 = {
  imageLink:
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D",
  imageDiscription: "green land wiht a tree",
};

const obj5 = {
  imageLink:
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww",
  imageDiscription: "batman looking hero and facing the screen",
};

const obj6 = {
  imageLink:
    "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww",
  imageDiscription: "spiderman with a black spiderman suite and chacket",
};

const arrOfObjs = [obj1, obj2, obj3, obj4, obj5, obj6];

// console.log(forElement.value);

function searchImages() {
  //   inputData = inputEl.value;
  //   const url =
  //     `https//api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

  //   const response = await fetch(url);
  //   const data = await response.json()

  //   const results = data.results

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {});
}
