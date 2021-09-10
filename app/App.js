import 'react-native-gesture-handler';
import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import Listen from './components/pages/listen';
import NowPlayingContextProvider from './context/NowPlayingContext';
import { NativeRouter, Route} from "react-router-native";
import Layouts from './components/layouts/layouts';


export default function App(){
  return(
    <NowPlayingContextProvider>
        <NativeRouter>
        <StatusBar style="light"/>
          <Route exact path="/" component={Listen}/>
        </NativeRouter>
    </NowPlayingContextProvider>
  )
}

// export default function App() {

//     ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP);

//     const routeNameRef = React.useRef();
//     const navigationRef = React.useRef();
//     const [active, setActive] = React.useState("Listen");
//   return (
//     <NowPlayingContextProvider>
//         <UltimateWrapper active={active}>
//           <NavigationContainer
//             ref={navigationRef}
//             onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
//             onStateChange={() => {
//               const previousRouteName = routeNameRef.current;
//               const currentRouteName = navigationRef.current.getCurrentRoute().name

//               if (previousRouteName !== currentRouteName) {
//                 // The line below uses the expo-firebase-analytics tracker
//                 // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
//                 // Change this line to use another Mobile analytics SDK
//                 // Analytics.setCurrentScreen(currentRouteName, currentRouteName);
//                 //alert(`The route changed to ${currentRouteName}`);
//                 //setActive(currentRouteName)
//               }
//               setActive(currentRouteName)
//               routeNameRef.current = currentRouteName;
//             }}
//           >
//               <Stack.Navigator
//                 screenOptions={{
//                   gestureEnabled:true,
//                   gestureDirection:'horizontal',
//                   headerTitle: () => <TopBar/>,
                  
//                   headerStyle:{
//                     backgroundColor:colors.bg.darker,
//                     borderBottomColor:"transparent",
//                   },
//                   headerTintColor:"#fff"
//                 }}
//               >
//                   <Stack.Screen name="Listen" component={Listen} />
//                   <Stack.Screen name="PlayLists" component={PlayLists}/>
//                   <Stack.Screen name="Favourites" component={Favourites}/>
//                   <Stack.Screen name="Search" component={Search}/>
//               </Stack.Navigator>
//           </NavigationContainer>
//           </UltimateWrapper>
//     </NowPlayingContextProvider>
//   );
// }

// function Home() {
//   return <Text style={styles.header}>Home</Text>;
// }

// function About() {
//   return <Text style={styles.header}>About</Text>;
// }

// function Topic({ match }) {
//   return <Text style={styles.topic}>{match.params.topicId}</Text>;
// }

// function Topics({ match }) {
//   return (
//     <View>
//       <Text style={styles.header}>Topics</Text>
//       <View>
//         <Link
//           to={`${match.url}/rendering`}
//           style={styles.subNavItem}
//           underlayColor="#f0f4f7"
//         >
//           <Text>Rendering with React</Text>
//         </Link>
//         <Link
//           to={`${match.url}/components`}
//           style={styles.subNavItem}
//           underlayColor="#f0f4f7"
//         >
//           <Text>Components</Text>
//         </Link>
//         <Link
//           to={`${match.url}/props-v-state`}
//           style={styles.subNavItem}
//           underlayColor="#f0f4f7"
//         >
//           <Text>Props v. State</Text>
//         </Link>
//       </View>

//       <Route path={`${match.url}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.url}
//         render={() => <Text style={styles.topic}>Please select a topic.</Text>}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NativeRouter>
//       <View style={styles.container}>
//         <View style={styles.nav}>
//           <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//             <Text>Home</Text>
//           </Link>
//           <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
//             <Text>About</Text>
//           </Link>
//           <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
//             <Text>Topics</Text>
//           </Link>
//         </View>

//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </View>
//     </NativeRouter>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     padding: 10
//   },
//   header: {
//     fontSize: 20
//   },
//   nav: {
//     flexDirection: "row",
//     justifyContent: "space-around"
//   },
//   navItem: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10
//   },
//   subNavItem: {
//     padding: 5
//   },
//   topic: {
//     textAlign: "center",
//     fontSize: 15
//   }
// });