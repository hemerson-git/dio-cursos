interface IUser {
  id: string;
  email: string;
  role?: "manager" | "coordinator" | "super";
}

function redirect(user: IUser) {
  if (user.role) {
    //redirect to admin page
    console.log("it's Admin");
    return;
  }

  // redirect to user page
  console.log("isn't Admin");
}

const newUser: IUser = {
  id: "1234",
  email: "admin@example.com",
  role: "coordinator",
};

redirect(newUser);
