In order to get the Navigation working we do the following

React Navigation released a major update to v5 with breaking changes. We will not be using this version and will instead continue to use the current stable v4 release (v4.1.1)

Installation
1. Install React Navigation

npm install react-navigation


2. Install Dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view


3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view

4. Install React Navigation Tabs

npm install react-navigation-tabs

5. Start the app and clear cache with npm start -c

Errors?
If you are still seeing errors and complaints about packages, do the following:

1. rm -r node_modules

2. rm package-lock.json

3. expo upgrade

4. npm start -c

Update Imports
Our imports will now look like this:

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


***********************************************
***********************************************
Pattern title
Expression
^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$
***********************************************
***********************************************
ngrok
secures contact between external device and express api via URL
must have a separate screen

***********************************************
***********************************************

***********************************************
***********************************************
