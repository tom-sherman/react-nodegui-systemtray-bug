import React from 'react';
import {
  Text,
  Window,
  hot,
  View,
  SystemTrayIcon,
  Menu,
} from '@nodegui/react-nodegui';
import { QIcon, QAction } from '@nodegui/nodegui';
import path from 'path';
const icon = require('../assets/nodegui.jpg');

const minSize = { width: 500, height: 520 };

const trayIcon = new QIcon(path.resolve(__dirname, icon.default));
const action = new QAction();
action.setText('Hello');
action.addEventListener('triggered', () => {
  console.log('hello');
});

function App() {
  return (
    <Window windowTitle="Hello 👋🏽" minSize={minSize} styleSheet={styleSheet}>
      <SystemTrayIcon tooltip="hello!" visible icon={trayIcon}>
        <Menu actions={[action, action]} />
      </SystemTrayIcon>

      <View style={containerStyle}>
        <Text id="welcome-text">Welcome to NodeGui 🐕</Text>
        <Text id="step-1">1. Play around</Text>
        <Text id="step-2">2. Debug</Text>
      </View>
    </Window>
  );
}

const containerStyle = `
  flex: 1;
`;

const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
