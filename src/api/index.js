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

export const deletePost = async (token, postId) => {
  let response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json()
  return data;
}

export const fetchMe = async (token) => {
  let response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json()
  return data; 
}

export const fetchSinglePost = async (postId) => {
  let response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`
  );
  let data = await response.json()
  return data;
}