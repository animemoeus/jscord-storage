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

const filename = "result.zip";
// const file = '/path/to/your/file'
const file = "https://file-examples-com.github.io/uploads/2017/02/zip_5MB.zip";

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
  "id": "919806297623396372",
  "filename": "file.zip",
  "size": 5452018,
  "url": "https://cdn.discordapp.com/attachments/858938620425404426/919806297623396372/file.zip",
  "proxy_url": "https://media.discordapp.net/attachments/858938620425404426/919806297623396372/file.zip",
  "content_type": "application/zip"
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

- I don't know if this will work, but I think if the server gets a boost, we can increase the upload limit up to 50 MB or 100MB.
- [https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ-](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ-)
- Discord Server [https://discord.gg/kZuWeKzgkq](https://discord.gg/kZuWeKzgkq)

### Example Implementation

- https://api.animemoe.us/waifu/
- https://waifu.animemoe.us/
- https://github.com/animemoeus/tiktod
