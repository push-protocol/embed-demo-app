## DEMO

```
yarn install
yarn start
```

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

or any component with the ID ***sdk-trigger-id*** or any ***ID*** but it has to be the same as that passed to the
***targetID*** passed to the `init()` (see below)

After the wallet connect happens in your app flow trigger this. 
**Note:** you have to have wallet connected and the account value to execute the below code because internally the SDK calls the EPNS get_feeds which needs the account address.

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