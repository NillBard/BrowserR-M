export const fetchAllCharacters = async (query) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${query}`
    );
    const { info, results } = await response.json();

    return { info, results };
  } catch (error) {
    throw console.log(error);
  }
};

export const fetchOneCharacter = async (id) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = await response.json();

    return character;
  } catch (error) {
    throw new Error(error);
  }
};

export async function fetchSeen(first) {
  try {
    const response = await fetch(first);
    const data = await response.json();
    return data.name;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchToAdd({ character, user }) {
  try {
    const response = await fetchWithAuth(
      "https://localhost:5000/api/favourites/remove",
      user,
      "POST",
      character
    );

    const data = await response.json();
    return data;
  } catch (error) {}
}

export async function fetchToRemove({ character, user }) {
  try {
    const response = await fetchWithAuth(
      "https://localhost:5000/api/favourites/remove",
      user,
      "DELETE",
      character
    );

    const data = await response.json();
    return data;
  } catch (error) {}
}

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

export async function fetchWithAuth(url, token, method, body) {
  try {
    let response = await originalFetch(url, token, method, body);
    if (response.status === 401) {
      const refreshToken = await auth();
      const newToken = await refreshToken.json();
      const newResponse = await originalFetch(url, newToken, method, body);
      response = newResponse;
    }
    return response;
  } catch (error) {}
}

export async function originalFetch(url, token, method = "GET", body = null) {
  const response = await fetch(url, {
    method,
    headers: {
      credentials: "include",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return response;
}
