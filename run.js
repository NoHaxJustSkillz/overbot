            const Discord = require("discord.js");
            const Client = new Discord.Client();
            const prefix = "!";

            Client.on('ready', () => {
                console.log('OverBot is now online.');
                Client.user.setGame('Type !help for commands.')
            })

            Client.on('message', (message) => {
                if (!message.content.startsWith(prefix)) return;

                if (message.content.startsWith(prefix + "hello")) {
                     message.channel.send("Hello " + message.author + "!")
                 }
                if (message.content.startsWith(prefix + "help")) {
                   
                    message.channel.send("Check the DM's " + message.author + ".");
                    message.author.send("Hello and welcome to the !help centre, this is the official bot for **Overblox**, Commands: !help = Get's help. !hello = Being polite to the bot by saying hi. **More coming soon!** ");
                } 
            })

          Client.login("NDQ0OTM5MDY0ODE5NDQ5ODY4.DdjNqw.fTAei1AXt8-yzFq_DKkLlUrWifk");
