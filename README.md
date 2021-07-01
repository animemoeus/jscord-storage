# jscord-storage

Upload file to the Discord server

---

### Installation

```
yarn add jscord-storage
```

### Example

```javascript
const jscordStorage = require("jscord-storage");

filename = "ynm.jpg";
url = "https://github.com/animemoeus/pyscord-storage/raw/master/sample.jpg";

jscordStorage
  .upload(ynm, url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Result

```
{
  status: 200,
  data: {
    id: '860170376935637052',
    filename: 'ynm.jpg',
    size: 130407,
    url: 'https://cdn.discordapp.com/attachments/858938620425404426/860170376935637052/ynm.jpg',
    proxy_url: 'https://media.discordapp.net/attachments/858938620425404426/860170376935637052/ynm.jpg',
    width: 537,
    height: 954,
    content_type: 'image/jpeg'
  }
}
```

### About

- Max upload size limit is 8MB. [Click here for detail](https://support.discord.com/hc/en-us/community/posts/360031101592-Increase-max-file-size-for-free-accounts).
- url vs proxy_url. [Click here for detail](https://www.reddit.com/r/discordapp/comments/e8lgj2/mediadiscordappnet_cdndiscordappcom/).
- proxy_url. [Click here for detail](https://www.reddit.com/r/discordapp/comments/f1ixly/.discord_adding_lower_width_and_height_to_linked/)
- Attachments URL. [Click here for detail](https://support.discord.com/hc/en-us/community/posts/360061593771-Privacy-for-CDN-attachements).

### Example Implementation

- https://api.animemoe.us/waifu/
- https://waifu.animemoe.us/
