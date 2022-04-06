module.exports = [
    {
      type: "confirm",
      message: "Initialize Application?",
      name: "ready",
    },
    {
      type: "input",
      message: "Enter Name.",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Employee ID.",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Email.",
      name: "email",
    },
    {
      type: "list",
      name: "role",
      message: "Select Position.",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      message: "Enter Office Number.",
      name: "room",
    }
  ];