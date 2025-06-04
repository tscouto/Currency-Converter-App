import { StyleSheet, Image, Text, View } from 'react-native';
import { Button } from '../components/button';
import { useEffect, useState } from 'react';
import { getBTC, getXAU } from '../services/awesomeapi';

export default function Screen() {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const gold = await getXAU();
    setLoading(false);
    setCurrentValue(gold);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ouro.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      {loading && <Text style={styles.h2}>Carregando...</Text>}
      {!loading && (
        <>
          <Text style={styles.h2}>O valor do ouro está:</Text>
          <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>

          <Button label="Atualizar" onPress={updateCurrency} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b1c2d',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  h2: {
    color: '#CCCCCC',
    fontSize: 24,
    marginTop: 30,
  },
  currencyText: {
    color: '#FFFFFF',
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});
