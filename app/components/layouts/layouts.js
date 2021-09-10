import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import TopBar from '../mini/topBar';



const Layouts = ({ children }) => {
    return ( 
       <View>
            <TopBar/>
            <View style={tailwind('flex')}>
                {children}
            </View>
       </View>
     );
}
 
export default Layouts;