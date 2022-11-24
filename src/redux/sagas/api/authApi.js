export async function fetchLogin(form) {
  try {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const { messeage } = await response.json();
      throw new Error(messeage || "Something was wrong");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchRegistration(form) {
  try {
    const response = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const { messeage } = await response.json();
      throw new Error(messeage || "Something was wrong");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function auth() {
  try {
    const response = await fetch("http://localhost:5000/api/users/auth", {
      method: "GET",
      credentials: "include",
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
