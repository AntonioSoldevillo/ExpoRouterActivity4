import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Switch } from 'react-native';
import { Link } from 'expo-router'; 

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState('Light');
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  const toggleSwitch = (setting) => {
    switch (setting) {
      case 'notifications':
        setNotifications(!notifications);
        break;
      case 'autoPlay':
        setAutoPlay(!autoPlay);
        break;
      case 'dataSaver':
        setDataSaver(!dataSaver);
        break;
      case 'theme':
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Preferred Language</Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.optionText}>{selectedLanguage}</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>App Theme</Text>
        <View style={styles.toggleContainer}>
          <Switch
            value={theme === 'Dark'}
            onValueChange={() => toggleSwitch('theme')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={theme === 'Dark' ? '#db0000' : '#f4f3f4'}
          />
        </View>
      </View>

    
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Push Notifications</Text>
        <View style={styles.toggleContainer}>
          <Switch
            value={notifications}
            onValueChange={() => toggleSwitch('notifications')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notifications ? '#db0000' : '#f4f3f4'}
          />
        </View>
      </View>

      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Auto Play</Text>
        <View style={styles.toggleContainer}>
          <Switch
            value={autoPlay}
            onValueChange={() => toggleSwitch('autoPlay')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={autoPlay ? '#db0000' : '#f4f3f4'}
          />
        </View>
      </View>

   
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Data Saver</Text>
        <View style={styles.toggleContainer}>
          <Switch
            value={dataSaver}
            onValueChange={() => toggleSwitch('dataSaver')}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={dataSaver ? '#db0000' : '#f4f3f4'}
          />
        </View>
      </View>

     
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select Language</Text>
            <TouchableOpacity onPress={() => handleLanguageSelect('English')}>
              <Text style={styles.modalOption}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('Spanish')}>
              <Text style={styles.modalOption}>Spanish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('French')}>
              <Text style={styles.modalOption}>French</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('German')}>
              <Text style={styles.modalOption}>German</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    
      <Link href="/" style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#141414', 
    padding: 10, 
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  settingItem: {
    marginBottom: 15, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 18,
    color: '#ffffff',
    width: '50%', 
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#db0000', 
    borderRadius: 5,
    width: '30%', 
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#db0000',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#db0000', 
    borderRadius: 5,
    alignItems: 'center',
    textAlign:'center',
    width: '100%',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Settings;
