const fs = require('fs');

// Read the file
fs.readFile('space.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  console.log("Original Content:");
  console.log(data); // Display the original content

  // Remove extra spaces
  const modifiedData = data.replace(/\s+/g, ' ').trim();

  console.log("\nModified Content (Extra spaces removed):");
  console.log(modifiedData); // Display the modified content

  // Write the modified content back to the same file
  fs.writeFile('space.txt', modifiedData, (err) => {
    if (err) throw err;
    console.log("\nFile successfully updated.");
  });
});
