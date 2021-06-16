const fetchUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (response.ok) {
    return response.json();
  }

  throw new Error('Failed to fetch user');
};

const getUsersBlogs = user => {
  try {
    return Promise.all(user.map(el => fetchUser(el).then(response => response.blog)));
  } catch (err) {
    alert(err.message);
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linkList => console.log(linkList));
