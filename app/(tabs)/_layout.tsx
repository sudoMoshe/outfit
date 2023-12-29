import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Ionicons , MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigate = useNavigation();
  

  const pants = useSelector((state: RootState) => state.currentOutfit.pants);
  const shirt = useSelector((state: RootState) => state.currentOutfit.shirts);
  const shoes = useSelector((state: RootState) => state.currentOutfit.shoes);
  const passiveColor ="#ccc";
  const activeColor = "#2f95dc";
  const commonOptions={
    headerLeft:({})=><Pressable onPress={()=> navigate.goBack()}><TabBarIcon name="arrow-back" color={passiveColor}/></Pressable>,
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
            <Tabs.Screen
              name="index"
              options={{
                title: '',
                // tabBarIcon: ({ color }) => <TabBarIcon name="glasses-sharp" color={color} />,
                // This tab will no longer show up in the tab bar.
                href: null,
                // headerRight: () => (
                //   <Link href="/modal" asChild>
                //     <Pressable>
                //       {({ pressed }) => (
                //         <FontAwesome
                //           name="info-circle"
                //           size={25}
                //           color={Colors[colorScheme ?? 'light'].text}
                //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                //         />
                //       )}
                //     </Pressable>
                //   </Link>
                // ),
              }}
            />
            <Tabs.Screen
              name="pants"  
              options={{
                ...commonOptions,
                title: 'pants',
                tabBarIcon: ({ color }) => <TabBarIcon name="glasses-sharp"  color={pants?activeColor:passiveColor} />,
              }}
            />
            <Tabs.Screen
              name="shoes"
              options={{
              ...commonOptions,
              title:"shoes",
              tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shoe-sneaker" size={28} color={shoes?activeColor:passiveColor} />,
              }}
              />
             <Tabs.Screen
                name="shirts"
                options={{
                  ...commonOptions,
                title:"shirts",
                tabBarIcon: ({ color }) => <TabBarIcon name="shirt"  color={shirt?activeColor:passiveColor} />,
                }}
              />

<Tabs.Screen
name="_HomeTab"
options={
{
  // This tab will no longer show up in the tab bar.
  href: null,
}
}
/>              
      
    </Tabs>
  );
}
