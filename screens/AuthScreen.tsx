import React, { useState } from 'react';
import { 
				View, 
				ScrollView, 
				Text,
				TextInput,
				Button
} from 'react-native';
import { supabase } from '../lib/initSupabase';

function AuthScreen(): JSX.Element {
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()

 async function handleLogin() {
	const { data, error } = await supabase.auth.signUp({email, password})
	if (error) console.log(error)
	if (data) console.log(data)
 }
 return (
		<ScrollView>
      <Text>Authentication Screen</Text>
			<TextInput placeholder='email' onChangeText={text => setEmail(text)}/>
			<TextInput placeholder='password' onChangeText={text => setPassword(text)}/>
			<Button title="Login" onPress={handleLogin}/>
    </ScrollView>
  );
}

export default AuthScreen;
