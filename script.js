const container = document.getElementById("container");
const pagination = document.querySelector('.pagination');

async function getPage(page = 1) {
    container.innerHTML = '';
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    data.data.forEach(user => {
        container.innerHTML += `
            <div class="user-card card" style="width: 18rem;">
                <img src="${user.avatar}" class="card-img-top p-0" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">${user.email}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;
    });
    
    if(page!=0)
    {
        pagination.innerHTML = '';
        for (let i = 1; i <= data.total_pages; i++) {
            pagination.innerHTML += `
                <li class="page-item"><a class="page-link" onclick="getPage(${i})">${i}</a></li>
            `;
        }
    }
}
getPage();
