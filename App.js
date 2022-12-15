import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {

  const [fontsCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  if (!fontsCarregada) {

    return <View></View>
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

