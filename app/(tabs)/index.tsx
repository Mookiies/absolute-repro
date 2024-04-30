import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ gap: 100, flexDirection: 'column', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'flex-end' }}>
        {/* Edit justifyContent: 'center' and observe the issue (flex-start and it works)*/}
        {/* Set flexDirection: to row and it works */}
        <View style={{ position: 'absolute', borderWidth: 4, borderColor: 'deeppink', width: 50, height: 50 }} />
        <View style={{ borderWidth: 4, borderColor: 'red', width: 100, height: 100 }} />
        {/* Move the absolutely positioned view here and it works*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
