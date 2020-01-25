const path = require("path");
const fs = require("fs");

// path to directory
const directoryPath = path.join(__dirname, "filesToRead/");

const ReadFilesFromDirectoryAndRename = (directory, newFileName) => {
  // Read directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log("unable to find folder!");
    }
    // Iterate through each file in directory
    files.map(file => {
      console.log(file);
      // File extension name
      let fileExtension = path.extname(file);
      // Rename each file
      fs.rename(
        directory + file,
        directory +
          newFileName +
          // Add file extension from the old file name and add it to the new file name
          fileExtension,
        (err, newFileName) => {
          if (err) {
            console.log(err);
          }
          console.log(newFileName);
        }
      );
    });
  });
};

ReadFilesFromDirectoryAndRename(directoryPath, "hej");
