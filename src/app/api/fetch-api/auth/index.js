const BASE = process.env.base;

const Login = async (data, signal) => {
  try {
    const raw = await fetch(`${BASE}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal,
    });
    if (raw.status === 200) {
      const json = await raw.json();
      return { failing: false, data: json };
    }
    return { failing: true, message: "Error the user does not exist" };
  } catch {
    return { failing: true, message: "Error searching the user" };
  }
};

export default { Login };
