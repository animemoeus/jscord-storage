# jscord-storage

Free unlimited file storage 😁👍
---

## Server Status

- [Click Here](https://stats.uptimerobot.com/GKy6liBGw7/788953682)

---

## Installation

```bash
yarn add jscord-storage
```

---

## Example

```javascript
import { uploadFromFile, uploadFromURL } from 'jscord-storage';

const testUploadFromURL = async () => {
  const response = await uploadFromURL(
    'test.jpg',
    'https://cdn.discordapp.com/attachments/858938620425404426/1076560199218892902/waifu-animemoeus.jpg'
  );

  console.log(response);
};

const testUploadFromFile = async () => {
  const response = await uploadFromFile('./test.js');

  console.log(response);
};

testUploadFromURL();
testUploadFromFile();

```

---

## API

- [Upload From URL](https://discord-storage.animemoe.us/api/api/upload-from-url/)
- [Upload From File](https://discord-storage.animemoe.us/api/api/upload-from-file/)

---

## About

- Max upload size limit is [25MB](https://twitter.com/discord/status/1645522780337885184) 🥳
- `url` vs `proxy_url`. [Click here for detail](https://www.reddit.com/r/discordapp/comments/e8lgj2/mediadiscordappnet_cdndiscordappcom/).
- `proxy_url`. [Click here for detail](https://www.reddit.com/r/discordapp/comments/f1ixly/.discord_adding_lower_width_and_height_to_linked/).
- Attachments URL. [Click here for detail](https://support.discord.com/hc/en-us/community/posts/360061593771-Privacy-for-CDN-attachements).

## Increase Upload Limit

- I don't know if this will work, but I think if the server gets a boost, we can increase the upload limit up to 50 MB or 100MB.
- [https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ-](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ-)
- Discord Server [https://discord.gg/kZuWeKzgkq](https://discord.gg/kZuWeKzgkq)

## Example Implementation

- [https://api.animemoe.us/waifu/](https://api.animemoe.us/waifu/)
- [https://waifu.animemoe.us/](https://waifu.animemoe.us/)
