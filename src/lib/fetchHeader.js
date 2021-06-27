export const fetchHeader = async (sanityClient, page) => {
  const query = `*[_type == "about" && page == $page]{
        header,
        title,
        subheader,
        subtitle,
        _id,
    }`;

  const params = { page };
  const aboutData = await sanityClient.fetch(query, params);

  return aboutData
};
