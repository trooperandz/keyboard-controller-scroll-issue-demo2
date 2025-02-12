import * as React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

export const ListItemSeparator: React.FC<Props> = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    marginHorizontal: 10,
  },
});
