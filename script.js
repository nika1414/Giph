(async function () {
  let key = "Mx81mJZjZrtLm05JCd9z8ju6yQdCi1wB";
  let diffCats = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];
  let Category = diffCats[Math.floor(Math.random() * diffCats.length)];
  const jsearch = await fetch(
    "https://api.chucknorris.io/jokes/random?category=" + Category
  );
  const data = await jsearch.json();
  document.getElementById("pTag").textContent += data.value;
  const search = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=" +
      key +
      "&limit=1&q=" +
      Category
  );
  const gifdata = await search.json();
  const gif = (document.getElementById("img").src =
    gifdata.data[0].images.original.url);
})();
