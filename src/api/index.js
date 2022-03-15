export const register = async (username, password) => {
  let response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const data = await response.json();
  console.log(data, "register");
  return data;
};

export const login = async (username, password) => {
  let response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const data = await response.json();
  console.log(data, "login");
  return data;
};

export const fetchPosts = async () => {
  let response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
  );
  let data = await response.json();
  return data;
};


export const postNewPost = async (title, description, location, price, willDeliver) => {
  let response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        },
      }),
    }
  );
}