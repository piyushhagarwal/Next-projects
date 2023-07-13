// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  fs.readdir("blogdata", (err, files) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    }

    console.log("Files in the folder:", files);
    res.status(200).json(files);
  });
}
