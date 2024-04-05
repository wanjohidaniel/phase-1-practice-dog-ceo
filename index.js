document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          document.body.appendChild(img);
        });
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          document.body.appendChild(img);
        });
      });
  
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        const ul = document.createElement("ul");
        breedList.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          ul.appendChild(li);
        });
        document.body.appendChild(ul);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // ... (previous code for fetching images and breeds)
  
    // Change font color on click
    const breedListItems = document.querySelectorAll("ul li");
    breedListItems.forEach(item => {
      item.addEventListener("click", function() {
        item.style.color = "blue"; // Change the color to your preferred choice
      });
    });
  
    const filterDropdown = document.createElement("select");
    const letters = ["a", "b", "c", "d"];
    letters.forEach(letter => {
      const option = document.createElement("option");
      option.value = letter;
      option.textContent = letter.toUpperCase();
      filterDropdown.appendChild(option);
    });
    filterDropdown.addEventListener("change", function() {
      const selectedLetter = filterDropdown.value;
      breedListItems.forEach(item => {
        if (item.textContent.startsWith(selectedLetter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
    document.body.insertBefore(filterDropdown, document.querySelector("ul"));
  });