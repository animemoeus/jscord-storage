# jscord-storage

Free unlimited file hosting using Discord server

---

### Installation

```
yarn add jscord-storage
```

### Example

```javascript
const jscordStorage = require("jscord-storage");

const filename = "result.jpg";
// const file = '/path/to/your/file'
const file =
  "https://cdn.discordapp.com/attachments/858938620425404426/919795393422823465/sample.jpg";

jscordStorage
  .upload(filename, file)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Result

```json
{
  "id": "919804651547787314",
  "filename": "result.jpg",
  "size": 1939099,
  "url": "https://cdn.discordapp.com/attachments/858938620425404426/919804651547787314/result.jpg",
  "proxy_url": "https://media.discordapp.net/attachments/858938620425404426/919804651547787314/result.jpg",
  "width": 1248,
  "height": 1868,
  "content_type": "image/png"
}
```

### API

- [Upload From URL](https://discord-storage.animemoe.us/upload-from-url/)
- [Upload From File](https://discord-storage.animemoe.us/upload-from-file/)

### About

- Max upload size limit is 8MB. [Click here for detail](https://support.discord.com/hc/en-us/community/posts/360031101592-Increase-max-file-size-for-free-accounts).
- `url` vs `proxy_url`. [Click here for detail](https://www.reddit.com/r/discordapp/comments/e8lgj2/mediadiscordappnet_cdndiscordappcom/).
- `proxy_url`. [Click here for detail](https://www.reddit.com/r/discordapp/comments/f1ixly/.discord_adding_lower_width_and_height_to_linked/).
- Attachments URL. [Click here for detail](https://support.discord.com/hc/en-us/community/posts/360061593771-Privacy-for-CDN-attachements).

### Increase Upload Limit

- I don't know if this will work, but I think if the server gets a boost with Nitro, we can increase the upload limit up to 50 MB or 100MB.
- [https://discord.com/nitro](https://discord.com/nitros)
- Discord Server [https://discord.gg/kZuWeKzgkq](https://discord.gg/kZuWeKzgkq)

### Example Implementation

- https://api.animemoe.us/waifu/
- https://waifu.animemoe.us/
