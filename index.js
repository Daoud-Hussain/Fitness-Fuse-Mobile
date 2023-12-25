/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './Home';
import Trainers from './Trainers';
import TrainersDetails from './TrainersDetails';
import Workout from './Workout';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Workout);

