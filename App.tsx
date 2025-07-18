import React from 'react';
import { Text, View, Button } from 'react-native';
import './locales/i18n.ts'; // import the i18n config
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 24 }}>{t('welcome')}</Text>
      <Text>{t('greet', { name: 'Ayandip' })}</Text>

      <Button title="Switch to German" onPress={() => changeLanguage('bn')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
    </View>
  );
}
