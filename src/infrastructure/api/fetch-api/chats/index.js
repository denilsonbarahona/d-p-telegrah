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

export default {
  getChats,
};
