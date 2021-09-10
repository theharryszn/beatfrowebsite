import React, { useContext } from 'react';
import { View } from 'react-native';
import { colors } from '../../res/colors';
import BottomNav from '../mini/bottomNav';
import tailwind from 'tailwind-rn';


const Body = ({ children , navigation}) => {

    return (
        <View style={[{backgroundColor:colors.bg.darker, flex: 1}, tailwind('justify-between w-full overflow-hidden relative')]}>
            <View style={tailwind('py-4')}>
                { children }
            </View>
            <View style={tailwind('absolute bottom-0 w-full')}>
            <BottomNav navigation={navigation}/>
            </View>
        </View>
    );
}
 
export default Body;