export async function login(form) {
  try {
    const response = await fetch("https://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const { data } = await response.json();
    return data;
  } catch (error) {}
}

export async function registration(form) {
  try {
    const response = await fetch("https://localhost:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const { data } = await response.json();
    return data;
  } catch (error) {}
}

export async function auth() {
  try {
    const response = await fetch("https://localhost:5000/api/users/auth", {
      headers: {
        credentials: "include",
      },
    });

    const { data } = await response.json();
    return data;
  } catch (error) {}
}
