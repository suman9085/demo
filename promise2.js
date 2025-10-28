// let response = fetch(`https://fakestoreapi.com/products`)
//     console.log(response)
const res = fetch(`https://fakestoreapi.com/products`);
res
  .then((response) => response.json())
  .then((data) => {
    document.writeln("<table border='1' width='100%'>")
    document.writeln(`<tr>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
      <th>Image</th>
      </tr>`)
    for (i = 1; i < data.length; ++i) {
      document.writeln(`<tr>`)
     document.writeln(`<td> ${data[i].title}</td>`)
     document.writeln(`<td> ${data[i].price}</td>`)
     document.writeln(`<td> ${data[i].category}</td>`)
     document.writeln(`<td>
      <img src="${data[i].image}" alt="" width="100px" height="100px"></td>`)
      document.writeln(`</tr>`)
    }
    document.writeln("</table>")
  });
