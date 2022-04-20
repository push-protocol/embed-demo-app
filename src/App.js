import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import EmbedSDK from "@dasubh/embedsdk";
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
        headerText: 'EPNS Notifications',
        targetID: 'sdk-trigger-id',
        appName: 'consumerApp',
        user: '0xD8634C39BBFd4033c0d3289C4515275102423681',
        viewOptions: {
          // type: 'modal',
          showUnreadIndicator: true,
			    unreadIndicatorColor: '#cc1919',
			    unreadIndicatorPosition: 'top-right',
        },
        theme: 'light',
      });
    }
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
