/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 ᴀᴅᴜʟ- xᴇʀ.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
xena-md  


------------------------------------------------------------------------------------------------------------------------------------------------------*/


const { getJson, getBuffer, System, isPrivate, sleep } = require("../lib/");

System({
    pattern: "help",
    fromMe: isPrivate,
    desc: "xᴇɴᴀ-ᴍᴅ support",
    type: "support"
}, async (message) => {
    const name = 'xᴇɴᴀ-ᴍᴅ', title = "xᴇɴᴀ ꜱᴜᴩᴩᴏʀᴛ 🪄", number = '919074403240', body = "xᴇɴᴀ-ᴍᴅ";
    const image = "https://i.imgur.com/heUuKgR.jpeg", sourceUrl = 'https://github.com/Unnifx/xena-md';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by Jarvis-md;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});

System({
    pattern: "allplugin",
    fromMe: isPrivate,
    desc: "To get all plugin of jarvis-md",
    type: "support"
}, async (message) => {
    const allPluginsData = await getJson('https://api-loki-ser-1o2h.onrender.com/api/jarvis/allplugin');
    const externalPluginsData = await getJson('https://api-loki-ser-1o2h.onrender.com/api/jarvis/plugin');
    const image = await getBuffer("https://graph.org/file/30ab5e1e228a9636ce7f5.jpg");
    const formatPluginData = (pluginData) => {
        return Object.entries(pluginData).map(([key, value]) => `*${key}:* ${value.url}`).join('\n\n');
    };
    const noneditplugin = { text: formatPluginData(allPluginsData), contextInfo: { externalAdReply: { title: "External plugins no need to edit", body: "Ready to use", thumbnail: image, mediaType: 1, mediaUrl: 'https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main', sourceUrl: "https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main", showAdAttribution: true } } };
    const plugin = { text: formatPluginData(externalPluginsData), contextInfo: { externalAdReply: { title: "External plugins need to edit", body: "Ready to use", thumbnail: image, mediaType: 1, mediaUrl: 'https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main', sourceUrl: "https://github.com/IRON-M4N/Jarvis-MD-Plugins/tree/main", showAdAttribution: true } } };
    await message.client.sendMessage(message.jid, plugin, { quoted: message });
    await sleep(500);
    await message.client.sendMessage(message.jid, noneditplugin, { quoted: message });
});
