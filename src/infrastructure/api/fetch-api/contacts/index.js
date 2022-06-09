const BASE = process.env.base;

const getMyContacts = async (email) => {
  try {
    const raw = await fetch(`${BASE}contacts?email=${email}`);
    const json = await raw.json();
    return { failing: false, data: json };
  } catch {
    return { failing: true, message: "Error getting contacts" };
  }
};

const getContactById = async (id) => {
  try {
    const raw = await fetch(`${BASE}contacts/${id}`);
    const json = await raw.json();
    return { failing: false, ...json };
  } catch {
    return { failing: true, message: "Error getting contact" };
  }
};

export default {
  getMyContacts,
  getContactById,
};
