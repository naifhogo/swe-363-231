const fs = require('fs');
const path = require('path');
const { copyFile } = require('fs/promises');

function filterFilesByExtension(files, extensions) {
  return files.filter(file => extensions.includes(path.extname(file)));
}

async function copyFilteredFiles(sourceDir, targetDir, extensions) {
  try {
    const files = await fs.promises.readdir(sourceDir);
    const filteredFiles = filterFilesByExtension(files, extensions);

    for (const file of filteredFiles) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      await copyFile(sourcePath, targetPath);
      console.log(`Copied ${file} to ${targetDir}`);
    }

    console.log('File copying completed!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}



const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];
const fileExtensions = ['.txt', '.jpg']; 

copyFilteredFiles(sourceDirectory, targetDirectory, fileExtensions);