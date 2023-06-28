import { Link } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

function HomeScreen(): JSX.Element {
 
 return (
		<ScrollView>
      <Text>Home Screen</Text>
			<Link to='Authentication'> Auth Page </Link>
			<Link to='UserProfile'> User Page </Link>
    </ScrollView>
  );
}

export default HomeScreen;
