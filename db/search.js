const client = require("../client");

const searchBasic = async (searchString) => {
  try {
    const { rows } = await client.query(`
      select * from books
      where title like '%${searchString}%'
      or author like '%${searchString}%'
      or publisher like '%${searchString}%';
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  searchBasic,
}