const messages = [
  "Laura",
  "Diego",
  "Oscar",
  "Carolina",
  "cherry",
  "Fernando",
  "Juan",
  "Carlos",
];

const randomMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMessage }
