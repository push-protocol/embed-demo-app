import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { EmbedSDK } from "@epnsproject/frontend-sdk-staging";
import EPNSBellIcon from './components/BellIcon';
import ConnectButton from './components/connect';

const demoStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

function App() {

  const { active, account } = useWeb3React();

  useEffect(() => {
    if (active && account) {
      /* TRIGGER THE CODE if THE USER HAS CONNECTED THEIR WALLET */
        EmbedSDK.init({
          headerText: 'EPNS Notifications heyo',
          targetID: 'sdk-trigger-id',
          appName: 'consumerApp',
          user: account,
          viewOptions: {
            // type: 'modal',
            showUnreadIndicator: true,
            unreadIndicatorColor: '#cc1919',
            unreadIndicatorPosition: 'top-right',
          },
          theme: 'light',
          onOpen: () => {
            console.log("on open callback called");
          },
          onClose: () => {
            console.log("on close callback called");
          }
        });
      }

      return () => {
        EmbedSDK.cleanup();
      };
  }, [active, account]);


  return (
    <div className="App">
      <div style={demoStyles}>
        {/* ONLY SHOW THE BELL ICON if THE USER HAS CONNECTED THEIR WALLET */}
        {active && account ? (
          <div
            id="sdk-trigger-id"
            style={{ display: 'inline-block', cursor: 'pointer', marginRight: 25 }}  
           >
             <EPNSBellIcon />
          </div>
        ) : null}

        <ConnectButton />
      </div>

    </div>
  );
}

export default App;
