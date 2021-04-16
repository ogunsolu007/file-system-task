__author__ = "Horleryheancarh";

const http = require("http");
const fs = require("fs");

http
  .request("http://jsonplaceholder.typicode.com/posts", (res) => {
    var posts = "";
    res.on("data", (chunk) => {
      posts += chunk;
    });
    res.on("end", () => {
      console.log(posts);
      fs.writeFile("result/posts.json", posts, (err) => {
        if (err) throw err;
        console.log("File created and saved");
      });
    });
  })
  .on("error", (e) => {
    console.log(e.message);
  })
  .end();
