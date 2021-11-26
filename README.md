<div class="container">
  <div class="row">
    <div class="col-sm">
        <img align="left" src="src/assets/img/icon.png" height=80/>
    </div>
    <div class="col">
      <h2 align="justify">
        ArXiv Enhanced
      </h2>
    </div>
  </div>
</div>

A browser extension (Chrome Manifest v3) to add tags, comments and details and save it a notion database (table). In the future other features like highlighting, adding hyperlinks to references and adding notes to pdf will be supported. 

This plugin was developed based on [chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react). For this plugin, notion database id and client (integration) secret key are required (to be updated in `src/pages/Popup/Popup.jsx`). NOTE: At the moment, these are hardcoded/added to `localstorage` which aren't safe. At a later point, I will work on using Notion OAuth.

### Requirements
- Node.js (>= v14)
- React 17
- Chakra UI
- Axios
- Notion Client

### Building & Development
1. `npm install`
2. `npm start`
3. In chrome `chrome://extensions` developer, Load Unpacked -> select `build/` directory

![arxiv_notion](https://user-images.githubusercontent.com/6959308/143616792-af31f96f-d2e7-492e-9043-7373779c64e2.png)
