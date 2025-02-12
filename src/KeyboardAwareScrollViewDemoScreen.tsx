import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import {KeyboardAwareSectionList} from 'react-native-keyboard-aware-scroll-view';
import {ListItemSeparator} from './ListItemSeparator';

const data1 = [
  {
    title: 'First Section',
    data: Array.from({length: 3}, (_, i) => `Item ${i}`),
  },
];

const data2 = [
  {
    title: 'First section',
    data: Array.from({length: 8}, (_, i) => `Item ${i}`),
  },
  {
    title: 'Second section',
    data: Array.from({length: 15}, (_, i) => `Item ${i}`),
  },
];

export const KeyboardAwareScrollViewDemoScreen = () => {
  const [data, setData] = React.useState(data1);

  const toggleData = (dataFlag: string) => {
    if (dataFlag === 'data1') {
      setData([...data1]);
    } else {
      setData([...data2]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="KeyboardAware Demo"
        style={styles.input}
        placeholderTextColor="gray"
      />
      <View style={styles.buttonContainer}>
        <Button title="Data Short" onPress={() => toggleData('data1')} />
        <Button title="Data Long" onPress={() => toggleData('data2')} />
      </View>
      <KeyboardAwareSectionList
        sections={data}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => {
          return title ? (
            <View
              accessible
              accessibilityRole="header"
              style={styles.sectionHeader}>
              <Text>{title}</Text>
            </View>
          ) : null;
        }}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  input: {
    height: 70,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  listItem: {
    height: 60,
    width: '100%',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  sectionHeader: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
