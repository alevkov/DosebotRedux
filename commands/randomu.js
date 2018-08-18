// Sad doris message
exports.run = (client, message, args) => {
  console.log(
    `**********Executing randomUser on ${message.guild.name}**********`
  );

  let users = message.guild.members;
  let usersWithRank = [];

  users.forEach(user => {
    console.log(user.displayName);
    let roles = user.roles;
    roles.forEach(role => {
      console.log(
        `Role name: ${role.name} Permissions: ${role.calculatedPosition}`
      );
      if (role.calculatedPosition > 0) {
        usersWithRank.push(user.displayName);
      }
    });

    console.log(usersWithRank);
  });
};