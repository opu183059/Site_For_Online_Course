export const saveUser = (user) => {
  const saveUserData = {
    email: user?.email,
    name: user?.name,
    role: user?.role,
  };
  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(saveUserData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
