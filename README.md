# Instructions
***Build a search web page that searches images among other images in a local database (of your creation)***

### Create the user interface using html css and javascript
```
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1>Image Search App</h1>

    <form action="">
      <input
        type="text"
        id="search-input"
        oninput="myFunction(this)"
        type="text"
        placeholder="Search for images"
      />

      <button id="search-button">Search</button>
    </form>
    <div id="searchResults" class="search-results">
      <div onclick="console.log(this)" class="search-result">
        <img src="baby.jpg" alt="Diving in the sea" />
        <a
          href="https://unsplash.com/photos/a-baby-wrapped-in-a-blanket-sleeping-on-a-bed-tg8TBV7Xh-c"
          target="_blank"
        >
          Diving in the sea</a
        >
      </div>

      <div class="search-result">
        <img
          src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGR8ZW58MHx8MHx8fDA%3D"
          alt="Diving in the sea"
        />
        <a
          href="https://unsplash.com/photos/a-baby-wrapped-in-a-blanket-sleeping-on-a-bed-tg8TBV7Xh-c"
          target="_blank"
        >
          Diving in the sea</a
        >
      </div>

      <div class="search-result">
        <img src="baby.jpg" alt="Diving in the sea" />
        <a
          href="https://unsplash.com/photos/a-baby-wrapped-in-a-blanket-sleeping-on-a-bed-tg8TBV7Xh-c"
          target="_blank"
        >
          Diving in the sea</a
        >
      </div>
    </div>

    <button id="show-more-button">show more</button>
  </body>
  <script src="script.js"></script>
  <!-- <script src="script.js"></script> -->
</html>

```

#### Create an array that holds 30 image-info objects
```
//For example
const obj1 = {
 imageLink:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?    
   w=1000&auto=format&fit=crop&q=60&ixlib=rb- 
   4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
 imageDiscription: "a man stading while smiling and wearing galsess",
} 

const arrOfObjs = [obj1, ...other objects];
```

## Other requiremnts
 1. Receive input on typing
 2. Display ```Nothing found``` if searched value do not match
 3. Display 20 divs of images with their titles(which is the default user interface of the page) if search is empty
 4. Display searched images if searched value matches or is contained within any image's discription in your created database


