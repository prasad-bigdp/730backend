const usersDiv = document.getElementById('users');
function fetchData ()
{
    fetch(`http://localhost:5173/users`)
        .then((res) => res.json())
        .then((data) =>displayData(data));
}
fetchData();
function displayData (data)
{
    data.forEach((e,i) =>
    {
        const div = document.createElement('div');
        div.classList.add('card','mx-4','bg-success-subtle','fs-2','text-center','p-3')
        const para = document.createElement('p');
        para.textContent = e.name;
        div.appendChild(para)
        usersDiv.appendChild(div)
    })
}
document.getElementById('btn').addEventListener('click', function ()
{
    const inputData = document.getElementById('inp').value;
    let data = {
        name:inputData
    }
    fetch('http://localhost:5173/users', {
        method: "POST",
        body:JSON.stringify(data)
    })
        .then((res) =>
        {
            console.log(res);
            window.location.reload()
        })
    
})