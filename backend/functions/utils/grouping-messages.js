const {getTimeFormat} = require("./time-ago");
const group = new Set();
/**
 * @param {*} messagesList messages list
 * @return {object} grouped messages
 */
function setGroupMessage(messagesList) {
  return messagesList.map((message) => {
    const {time: {_seconds: seconds}} = message;
    const time = getTimeFormat(seconds*1000);
    group.add(time);
    message.time = time;
    return message;
  });
}

/**
 * @param {*} messagesList messages list
 * @return {object} grouped messages
 */
function groupingMessages(messagesList) {
  const grouped = [];
  group.clear();
  const Messages = setGroupMessage(messagesList);
  for (const item of group) {
    grouped.push({tag: item,
      messages: Messages.filter((message)=> message.time === item)});
  }
  return grouped;
}


module.exports = groupingMessages;
