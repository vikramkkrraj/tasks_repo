import fs from 'fs'; 

export const readFileData = () => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File Content:', data);
    });
};

export const appendFileData = () => {
    fs.appendFile('data.txt', '\nThis is Appended data', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('Data appended successfully!');
    });
};
