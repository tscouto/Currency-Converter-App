import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: 'Dólar americano' }} />
        <Drawer.Screen name="eur" options={{ title: 'Euro' }} />
        <Drawer.Screen name="btcoin" options={{ title: 'btcoin' }} />
        <Drawer.Screen name="gold" options={{ title: 'Ouro' }} />
        <Drawer.Screen name="libra" options={{ title: 'Libra' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
