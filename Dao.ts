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
