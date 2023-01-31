const url_base = 'https://pokeapi.co/api/v2/pokemon';

export default {
  getPokemon: async (url = url_base) => {
    try {
      const response = await fetch (url);
      const data = await response.json();
      return data;
    } catch (error) {throw error}
  }
};
