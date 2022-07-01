const BASE = process.env.base;

const getChats = async (userID, name, signal) => {
  try {
    const raw = await fetch(`${BASE}chats/${userID}/${name}`, { signal });
    if (raw.status === 200) {
      const json = await raw.json();
      return { failing: false, data: json };
    }
    return { failing: true, message: "Error getting chats" };
  } catch {
    return { failing: true, message: "Error getting chats" };
  }
};

const getMessageFromChat = async (chatID, page, signal) => {
  try {
    const raw = await fetch(`${BASE}messages/${chatID}/${page}`, { signal });
    if (raw.status === 200) {
      const json = await raw.json();
      return { failing: false, data: json };
    }
    return { failing: true, message: "Error getting messages" };
  } catch {
    return { failing: true, message: "Error getting messages" };
  }
};

const sendMessage = async (chatID, message, sender, signal) => {
  try {
    const messageObject = {
      message,
      read: false,
      sender,
    };
    const raw = await fetch(`${BASE}messages`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId: chatID, messageObject }),
      signal,
    });
    const json = await raw.json();
    return { failing: false, data: json, status: raw.status };
  } catch {
    return { failing: true, message: "Error creating contact" };
  }
};

const createChat = async (id, message, sender, signal) => {
  try {
    const messageObject = {
      message,
      read: false,
      sender,
    };
    const raw = await fetch(`${BASE}chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, sender, messageObject }),
      signal,
    });
    const json = await raw.json();
    return { failing: false, data: json, status: raw.status };
  } catch {
    return { failing: true, message: "Error creating contact" };
  }
};

export default {
  getChats,
  getMessageFromChat,
  sendMessage,
  createChat,
};
