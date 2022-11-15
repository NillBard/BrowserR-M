export const fetchAllCharacters = async (query) => {
  try {
    console.log(query);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${query}`
    );
    const { info, results } = await response.json();
    const favourite = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];

    const characters = results.map((character) => ({
      ...character,
      isFavourite: !!favourite.find((el) => el.id === character.id),
    }));

    return { info, characters };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchOneCharacter = async (id) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    const favourite = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];

    const character = {
      ...data,
      isFavourite: !!favourite.find((el) => el.id === data.id),
    };

    return { character };
  } catch (error) {
    throw new Error(error);
  }
};
