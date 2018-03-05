import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
constructor(props,context){
    super(props,context);
    this.state = {
        course : {title:""}        
    };
    
} 
 
courseRow(course,index){
    return <li key={index}>{course.title}</li>
}

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <ul>
                {this.props.courses.map(this.courseRow)}
                </ul>                
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return{
        courses : state.courses
    }
}

function mapDispachToProps(dispatch){
    return {
        actions : bindActionCreators(courseActions,dispatch)
    };
}


export default connect(mapStateToProps,mapDispachToProps)(CoursePage);
