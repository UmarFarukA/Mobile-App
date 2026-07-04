// import React from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { useAuth } from '../contexts/AuthContext';

// import AuthStack from './AuthStack';
// import AppTabs from './AppTabs';

// export default function RootNavigation() {
//   const { session, loading } = useAuth();

//   if (loading) {
//     return (
//       <View>
//         <ActivityIndicator />
//       </View>
//     );
//   }

//   if (session) {
//     return <AppTabs />;
//   }

//   return <AuthStack />;
// }
