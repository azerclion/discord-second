const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
  if (message.content === "야") {
    await message.channel.send("왜");
  }
});

client.login(
  "MTA3OTk0MjQzNTY2NjQxMTUyMQ.GeZacJ.NPlhNYTH0RAS4lIsM0NTUQEW-goFfsrUjCrhdM"
);
