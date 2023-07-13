const fs = require("fs");
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Blog does not exist" });
    }

    console.log("Files in the folder:", JSON.parse(data));
    res.status(200).json(JSON.parse(data));
  });
}
