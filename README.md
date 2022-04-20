[WIP]
## DEMO

```
yarn install
yarn start
```

## Usage Guide when doing from scratch in an APP
For using the `EmbedSDK` in your app, you can 

USING AS AN NPM PACKAGE
------------------------


`yarn add @dasubh/embedsdk`

then

`import EmbedSDK from "@dasubh/embedsdk";`

in `App.js`

2. Add in HTML/JSX the below HTML tag-

```<button id="sdk-trigger-id">trigger button</button>```

or any component with the ID ***sdk-trigger-id*** or any ***ID*** but it has to be the same as that passed to the
***targetID*** passed to the `init()` (see below)

3. After the wallet connect happens in your app flow trigger this

```
  useEffect(() => {
      EmbedSDK.init({
        headerText: 'Hello DeFi', // optional
        targetID: 'sdk-trigger-id', // mandatory
        appName: 'consumerApp', // mandatory
        user: 'your connected wallet address', // mandatory
        viewOptions: {
            type: 'sidebar', // optional [default: 'sidebar', 'modal']
            showUnreadIndicator: true, // optional
            unreadIndicatorColor: '#cc1919',
            unreadIndicatorPosition: 'bottom-right',
        },
        theme: 'light',
      });
  }, []);
```

--

**OR**

--

USING "script" file
-------------------

1. `<script type="text/javascript" src="./embedsdk.umd.js" defer="defer"></script>`

2. Add in HTML/JSX the below HTML tag-

```<button id="sdk-trigger-id">trigger button</button>```

or any component with the ID ***sdk-trigger-id*** or any ***ID*** but it has to be the same as that passed to the
***targetID*** passed to the `init()` (see below)

3. After the wallet connect happens in your app flow trigger this

```
  useEffect(() => {
      window.EmbedSDK.init({
        headerText: 'Hello DeFi', // optional
        targetID: 'sdk-trigger-id', // mandatory
        appName: 'consumerApp', // mandatory
        user: 'your connected wallet address', // mandatory
        viewOptions: {
            type: 'sidebar', // optional [default: 'sidebar', 'modal']
            showUnreadIndicator: true, // optional
		    unreadIndicatorColor: '#cc1919',
			unreadIndicatorPosition: 'bottom-right',
        },
        theme: 'light',
      });
  }, []);
```

## NOTE: 
after making changes in the **Create React APP** to show case SDK config changes, always do a browser ***empty cache and hard reload***

this hot reloading fix is WIP.
