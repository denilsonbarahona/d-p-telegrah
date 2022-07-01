const BASE = process.env.base;

const getMyContacts = async (email, signal) => {
  try {
    const raw = await fetch(`${BASE}users?email=${email}`, { signal });
    if (raw.status === 200) {
      const json = await raw.json();
      return { failing: false, data: json };
    }
    return { failing: true, message: "Error getting contacts" };
  } catch {
    return { failing: true, message: "Error getting contacts" };
  }
};

const createContact = async (contact, signal) => {
  try {
    const raw = await fetch(`${BASE}users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
      signal,
    });
    const json = await raw.json();
    return { failing: false, data: json, status: raw.status };
  } catch {
    return { failing: true, message: "Error creating contact" };
  }
};

export default {
  getMyContacts,
  createContact,
};
