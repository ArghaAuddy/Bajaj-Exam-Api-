const { buildConcatString } = require("../utils/helpers");

exports.processData = (req, res) => {
  try {
    const data = req.body.data || [];

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specials = [];
    let sum = 0;

    data.forEach(item => {
      if (/^\d+$/.test(item)) {
        let num = parseInt(item, 10);
        if (num % 2 === 0) evenNumbers.push(item);
        else oddNumbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specials.push(item);
      }
    });

    // concat string
    const concatString = buildConcatString(alphabets);

    res.status(200).json({
      is_success: true,
      user_id: "Argha_Auddy_02112003",
      email: "arghaauddy3@gmail.com",
      roll_number: "22BCE5126",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specials,
      sum: sum.toString(),
      concat_string: concatString
    });

  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
};
