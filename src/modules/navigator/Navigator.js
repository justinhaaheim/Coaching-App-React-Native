import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import SettingsViewContainer from '../settings/SettingsViewContainer';
import ArenaViewContainer from '../arena/ArenaViewContainer';
import PlannerViewContainer from '../planner/PlannerViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Arena: {screen: ArenaViewContainer},
  Planner: {screen: PlannerViewContainer},
  Settings: {screen: SettingsViewContainer},
}, {
  animationEnabled: true,
  tabBarOptions: {

    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
//  title: 'EmpowerApp',
  header: {
//    titleStyle: {color: 'white'},
    style: {
//      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ColorViewContainer}
});

export default AppNavigator;