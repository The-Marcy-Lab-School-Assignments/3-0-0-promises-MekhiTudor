const crypto = require("crypto");
/** FEEDBACK: This was a challenging problem but you solved it! Great job! */
const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomFill(new Uint8Array(3), (err, buffer) => {
      if (err) return reject(err);
      resolve([...buffer]);
    });
  });

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((value) => {
      colors.push(numsToRGBColor(value));
      return getRandomBytes();
    })
    .then((value) => {
      colors.push(numsToRGBColor(value));
      return getRandomBytes();
    })
    .then((value) => {
      colors.push(numsToRGBColor(value));
      return getRandomBytes();
    })
    .then((value) => {
      colors.push(numsToRGBColor(value));
      return colors;
    })

    .catch((err) => {
      console.error(err);
    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
