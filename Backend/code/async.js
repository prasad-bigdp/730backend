import fs from "fs"
// const x = fs.readFile('prasad.txt', 'utf-8', (err,data) =>
// {
//     try
//     {
//         if (data) {
// 					console.log(data)
// 				}
//     }
//     catch (err)
//     {
//         console.log(err)
//     }
// })
// setTimeout(() =>
// {
//     console.log("start")
//     setTimeout(() =>
//     {
//         console.log("start2")
//         setTimeout(() =>
//         {
//             console.log("Task 1 completed")
//         },2000)
//     },2000)
// }, 2000);
// PROMISES
let p = new Promise((res, rej) => {
	setTimeout(() => {
		res("start")
	}, 1)
})
for (let i = 0; i < 100000; i++)
{
    console.log("hi")
}
let p1 = new Promise((res, rej) => {
	setTimeout(() => {
		res("start2")
	}, 2000)
})
let p2 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Task1 completed")
	}, 2000)
})

p
    .then((res) =>
    {
	console.log(res)
	return p1
    })
	.then((res) => {
		console.log(res)
		return p2
	})
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
    })
    
//async await
async function something ()
{
    const res1 = await p;  
    console.log(res1);
    const res2 = await p1;
    console.log(res2);
    const res3 = await p2;
    console.log(res3);
}
something()


console.log(p)
console.log("Task 2 completed")
