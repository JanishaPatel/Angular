// var express = require("express");
// const app = express();
// var fileupload = require("express-fileupload");
// const mongoose = require("mongoose");
// const cors = require("cors");

// app.use(
//   fileupload({
//     useTempFiles: true,
//   })
// );

// var cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "dcy0rf88c",
//   api_key: "855668629758533",
//   api_secret: "IdZntmMm-iUp_fIKJDDtjxbFB3g",
// });

// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/upload", function (req, res, next) {
//   console.log(req);
//   const photo = req.files.photo;
//   console.log(photo);
//   cloudinary.uploader.upload(photo.tempFilePath, function (err, result) {
//     // console.log("Error:", err);
//     // console.log("Result:", result);
//     res.send({
//       success: true,
//       result,
//     });
//   });
// });

// const DB =
//   "mongodb+srv://Janisha:janisha21@cluster0.0igormx.mongodb.net/angular_with_node?retryWrites=true&w=majority";

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Connection Successfull");
//   })
//   .catch((err) => {
//     console.log("Connection failed");
//   });

// const port = 4000;

// app.listen(port, () => {
//   console.log(`App running on port ${port}....`);
// });

const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const app = express();

app.use(express.json());
app.use(cors());

const FileModel = require("./fileUploadModel");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Janisha:janisha21@cluster0.0igormx.mongodb.net/angular_with_node?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => console.log(error));

// Configuration
cloudinary.config({
  cloud_name: "dcy0rf88c",
  api_key: "855668629758533",
  api_secret: "IdZntmMm-iUp_fIKJDDtjxbFB3g",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
  },
});

const upload = multer({ storage: storage });

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { folder: "uploads" },
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // const result = await uploadFile(req)

    const url = req.file.path;

    await FileModel.create({ url });

    res.json({ success: true, url });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.get("/preview", async (req, res) => {
  const images = await FileModel.find();
  // const result = images.map((image) => {
  //   return {
  //     url_id: image._id,
  //   };
  // });
  res.json({ images });
  // res.json({ result })
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
