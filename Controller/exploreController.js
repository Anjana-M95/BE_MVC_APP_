const exploreModel = require("../Model/exploreModel");

async function exploreHome(req, res) {
  console.log("controller");
  try {
    const value = await exploreModel.explore();
    // console.log(value, "res");
    // if (value) {
    if (true) {
      res.status(200).send({
        value: value,
        // auth: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
async function fetchOneData(req, res) {
  const id = req.query.id;
  console.log("controller", id);
  try {
    const value = await exploreModel.ExploreTableOne(id);
    console.log(value, "res");
    if (value) {
      res.status(200).send({
        success: true,
        value: value,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
}
module.exports = {
  exploreHome,
  fetchOneData,
};
