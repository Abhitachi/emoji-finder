const table = document.querySelector(".emoji-table");
console.log(table);

const serachResults = (searchQuery = "") => {
  const filtered_emo = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) != -1) {
      return true;
    }
    if (e.aliases.some((e) => e.startsWith(searchQuery))) {
      return true;
    }
    if (e.tags.some((e) => e.startsWith(searchQuery))) {
      return true;
    }
  });

  console.log(filtered_emo);

  const tbody = document.getElementById("search_container");
  tbody.innerHTML = "";
  filtered_emo.forEach((e) => {
    const row = document.createElement("tr");
    const emo = document.createElement("td");
    const emo_name = document.createElement("td");
    const emo_desc = document.createElement("td");

    emo.innerText = e.emoji;
    emo_name.innerText = e.aliases.join(", ");
    emo_desc.innerText = e.description;

    emo_name.innerText = emo_name.innerText.replaceAll("_", " ");

    emo.classList.add("emoji");
    emo_name.classList.add("names");
    emo_desc.classList.add("desc");

    row.appendChild(emo);
    row.appendChild(emo_name);
    row.appendChild(emo_desc);
    tbody.appendChild(row);
    // console.log(tbody);
    // table.appendChild(tbody);
    // console.log(table);
  });
};

const search_emo = (e) => {
  e.preventDefault();
  const value = document.getElementById("text-input").value;
  console.log(value);
  serachResults(value);
  return false;
};

const auto_search = (e) => {
  const value = e.target.value;
  console.log(value);
  serachResults(value);
};

window.onload = () => serachResults();

document.getElementById("form-input").addEventListener("submit", search_emo);
document.getElementById("text-input").addEventListener("keyup", auto_search);
