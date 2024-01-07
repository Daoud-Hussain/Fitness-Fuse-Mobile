/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './Home';
import Trainers from './Trainers';
import TrainersDetails from './TrainersDetails';
import Workout from './Workout';
import AgeScreen from './Age';
import GenderScreen from './Gender';
import ReviewScreen from './Review';
import BasicScreen from './Basic';
import AdvanceScreen from './Advance';

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => AdvanceScreen);

