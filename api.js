fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network Error");
    }
    return response.json();
  })

  // Selecting html Element

  .then((data) => {
    const userList = document.getElementById("userList");

    data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
  <strong class = "name">${user.name}</strong>
  <span class="email"> <strong>Email 📧:</strong> ${user.email}</span>
  <span class="city"> <strong>Address 🏙️:</strong> ${user.address.city}</span>
  <span>Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</span>
  <span><strong>Zip:</strong>:  ${user.address.zipcode}</span>
  <span class="phone"><strong>Phone📞:</strong>${user.phone}</span>
  <span class="company"><strong>Company🏢:</strong>${user.company.name}</span>
`;
      listItem.classList.add("table");
      userList.appendChild(listItem);
    });
  })

  .catch((error) => {
    console.log("There is an Error");
  });
