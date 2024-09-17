const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into rows and filter out empty rows
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    // Remove the header row
    const header = rows.shift();

    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${rows.length}`);

    const fields = {};

    // Loop through each row
    rows.forEach((row) => {
      const student = row.split(',');

      if (student.length === 4) {
        const field = student[3];
        const firstName = student[0];

        // Group students by field
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Print the number of students and their names for each field
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const students = fields[field];
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
