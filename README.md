## DEMO

```
yarn install
yarn start
```
1. click on the Button/icon on the page on top right - you will see a sidebar/modal with a close button
2. click on the close button or the black overlay to close the sidebar/modal.

## NOTE: 
1. After making changes in the **Create React APP** to show case SDK config changes, always do a browser ***empty cache and hard reload***
, this hot reloading fix is WIP.

2. There is no polling mechanism as of now, the Client APP has to re-load to get new notifications. [WIP]


## Usage Guide when integrating `EmbedSDK` from scratch in a client dApp
For using the `EmbedSDK` in your app, you can 

USING AS AN NPM PACKAGE
------------------------
First

    yarn add @epnsproject/frontend-sdk-staging

then, In `App.js` of your App entry point


    import { EmbedSDK } from "@epnsproject/frontend-sdk-staging";


add in HTML/JSX the below HTML tag -


    <button id="sdk-trigger-id">trigger button</button>

or any component with the ID ***sdk-trigger-id*** 

***Make sure the ID you give to the "button" is same as that of the targetID you pass to the init() below*** 

After the wallet connect happens in your app flow trigger the below code snippet.

**Note:** You have to have the wallet connected with an account to execute the below code because internally the SDK calls the EPNS `get_feeds()` API which needs the account address. You will see notifications if you have opted-in to a channel using [EPNS](https://staging-app.epns.io/)

```
  useEffect(() => {
    if (account) { // 'your connected wallet address'
      EmbedSDK.init({
        headerText: 'Hello DeFi', // optional
        targetID: 'sdk-trigger-id', // mandatory
        appName: 'consumerApp', // mandatory
        user: account, // mandatory
        viewOptions: {
            type: 'sidebar', // optional [default: 'sidebar', 'modal']
            showUnreadIndicator: true, // optional
            unreadIndicatorColor: '#cc1919',
            unreadIndicatorPosition: 'bottom-right',
        },
        theme: 'light',
      });
    }
  }, []);
```