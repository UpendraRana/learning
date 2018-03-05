import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursePage from './components/course/CoursePage';

export default(
<Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/course" component={CoursePage} />        
    <Route path="/about" component={AboutPage} />    
</Route>
);