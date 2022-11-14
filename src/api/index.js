export const fetchAllCharacters = async (query) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${query}`
    );
    const { info, results } = await response.json();
    return { info, results };
  } catch (error) {
    throw new Error(error);
  }
};
