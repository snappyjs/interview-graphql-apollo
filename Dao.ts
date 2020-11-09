const users = [
  {
    id: 1,
    email: "tommy.dronkers@volvocars.com",
  },
  {
    id: 2,
    email: "abdi@volvocars.com",
  },
  {
    id: 3,
    email: "test@mail.com",
  },
];

const getUsers = async () => {
  return users;
};

interface User {
  id: number;
  email: string;
}

interface Dao {
  getUsers(): User;
  addUser(): User;
  removeUser(id: number): boolean;
  editUser(id: number, user: User): User;
}

// Following the best practices when it comes to graphql - create the following query / mutations.
// 1. Query a list of all users
// 2. Add a new user to the list of users
// 3. Remove a user from the list of users by id
// 4. Edit a user by id
