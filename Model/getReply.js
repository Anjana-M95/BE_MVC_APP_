const makeDb = require("../Connect/dataBase");
async function allUserReply(id, drid) {
  const dB = makeDb();
  try {
    const result = [];
    const feedbackIdList = "SELECT id FROM FEEDBACKFORM where doctor_id=?";
    const replyList =
      "SELECT replyfeedback.id,replyfeedback.name,replyfeedback.reply,replyfeedback.user_id FROM FEEDBACKFORM inner join replyfeedback on feedbackform.id=replyfeedback.user_id where feedbackform.doctor_id=? AND feedbackform.id=? Order by replyfeedback.id DESC LIMIT 5";
    const feedbackLists = await dB.query(feedbackIdList, [drid]);
    console.log(feedbackLists, "feedbackLists");

    feedbackLists.map(async (item, index) => {
      var replyModel = await dB.query(replyList, [drid, item.id]);
      item.reply = replyModel;
      result[index] = item;
    });
    console.log(result, "result");
    return result;
  } catch (err) {
    console.log(err, "err");
    return false;
  } finally {
    await dB.close();
  }
}
module.exports = { allUserReply };
