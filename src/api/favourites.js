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
