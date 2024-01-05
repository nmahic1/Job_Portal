export const loadCategories = async () => {
  console.log("Fetching all categorees");
  const result = await fetch(
    process.env.REACT_APP_BACKEND_LINK + "/category/load",
    {
      method: "GET",
      "Content-Type": "application/json",
    }
  );
  let data = result.json();
  return data;
};
