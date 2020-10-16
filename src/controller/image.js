const getImage = async (image) => {
  let url;
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OLa1GdalJj8y8IrlW1N6JC8GzUk7q2UM&s=${image}`, { mode: 'cors' });
    url = await response.json();
    url = url.data.images.original.url;
  } catch (error) {
    url = error.message;
  }
  return url;
};

export default getImage;
