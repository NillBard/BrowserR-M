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
