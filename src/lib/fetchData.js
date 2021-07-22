export const fetchData = async (sanityClient, page) => {
  const params = { page };
  const query = `*[_type == "content" && page == $page]{
            body,
            title,
            _id,
            mainImage {
              asset -> {
                _id,
                url
              }
            }
        }`;
  const retrievedData = await sanityClient.fetch(query, params);

  return retrievedData;
};
