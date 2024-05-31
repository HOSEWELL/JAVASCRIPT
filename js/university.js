{
function searchUniversities() {
    const country = document.getElementById("countryInput").value;
    const uni = `http://universities.hipolabs.com/search?country=${country}`;
  fetch(uni)
      .then(response => response.json())
      .then(data => {
        const universities = data.map(university => ({
          name: university.name,
          province: university["state-province"],
          website: university.web_pages[0]
        }));
        displayUniversities(universities);
      })

  }
  
  function displayUniversities(universities) {
    const universityList = document.getElementById("universityList");
    universityList.innerHTML = '';
  
    universities.forEach(university => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h2><b>${university.name}<b></h2>
      <br>
        <span> Province: ${university.province} <span>
        <br>
        <span> Website: <a href="${university.website}" target="_blank">${university.website}</a> <span>`;
      
        universityList.appendChild(listItem);
    });
  }

}