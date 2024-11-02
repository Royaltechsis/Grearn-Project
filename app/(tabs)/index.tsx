import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { ScrollView, View, Text, Image, Pressable , } from 'react-native';
import { Link, useRouter} from 'expo-router';
import { styles } from '../styles'; // Make sure the path is correct
import TabComponent from '@/components/tabComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async() => {
    await AsyncStorage.removeItem('isLoggedIn');
    router.replace('/screens/login')
  }
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            {/* Placeholder image */}
            <Image 
              source={{ uri: 'https://via.placeholder.com/100' }} 
              style={styles.profileImage} 
              accessible={true} 
              accessibilityLabel="Profile picture"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.black}>Good Morning,</Text>
            <Text style={styles.black}>Oseni Oluwabunmi</Text>
          </View>
        </View>
        {/* Notification Icon */}
        <View>
          <EvilIcons name="bell" color={'black'} size={25} />
        </View>
      </View>

      {/* Assets & Investment Section */}
      <View style={[styles.innerContainer, styles.primaryBackground]}>
        <View>
          <Text style={styles.white}>Grearn</Text>
          <Text style={styles.grey}>Total assets</Text>
          <View style={[styles.row, ]}>
            <Text style={styles.white}># 0.0</Text>
            <AntDesign name="eye" color={'white'} size={25} />
          </View>
        </View>
        <View>
          <Text style={styles.white}>Investment Package</Text>
          <Text style={styles.black}>Maize</Text>
        </View>
      </View>

      {/* Actions (Withdraw) Section */}
      <View style={styles.container}>
  <View style={[styles.row, styles.whiteBackground, styles.elevated, styles.innerContainer]}>
    <Link href='../screens/transactions'>
    <View style={styles.fimageContainer}>
      <Image source={require('../../assets/images/History.png')} style={styles.frameImage} />
      <Text style={styles.black}>History</Text>
    </View>
    </Link>
    <Link href='../screens/fund'>
    <View style={styles.fimageContainer}>
      <Image source={require('../../assets/images/addmoney.png')} style={styles.frameImage} />
      <Text style={styles.black}>Add Money</Text>
    </View>
    </Link>
    <Link href='../screens/LoginScreen'>
    <View style={styles.fimageContainer}>
      <Image source={require('../../assets/images/withdraw.png')} style={styles.frameImage} />
      <Text style={styles.black}>Withdraw</Text>
    </View>
    </Link>
  </View>
</View>




<View style={styles.container}>
  <View style={styles.columnContainer}>
    <Text style={styles.black}>Live Stocks</Text>

    {/* ScrollView for horizontal sliding */}
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer} // Hides the scroll indicator for a cleaner look
    >
      <Image
        source={require('../../assets/images/cows.png')}
        style={styles.stockImage}
        accessible={true}
        accessibilityLabel="Image of cows"
      />
      <Image
        source={require('../../assets/images/chicken.png')}
        style={styles.stockImage}
        accessible={true}
        accessibilityLabel="Image of sheep"
      />
      <Image
        source={require('../../assets/images/lamb.png')}
        style={styles.stockImage}
        accessible={true}
        accessibilityLabel="Image of goats"
      />
      {/* Add more images if needed */}
    </ScrollView>
  </View>
</View>

    <View>
      <TabComponent />
    </View>


    </ScrollView>
  );
}
