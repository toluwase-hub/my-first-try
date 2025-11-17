async function fetchUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error('Failed to fetch users');
            
        }
        const users = await response.json();
        const userList = document.getElementById("userList")

        users.forEach(user => {
            const li = document.createElement("li")
            li.innerHTML = `<strong> ${user.name} </strong>
            <span><strong class= "dev">Email</strong>(${user.email}) </span>
            <span><strong class= "dev">Street</strong>${user.address.street}</span>
            <span><strong class= "dev">City</strong>${user.address.city}</span>
            <span><strong class= "dev">Zipcode</strong>${user.address.zipcode}</span>`
            userList.appendChild(li)    
            li.classList.add("tolu")
        });
    } catch (error){
        console.log("error")
    }
}
fetchUsers();