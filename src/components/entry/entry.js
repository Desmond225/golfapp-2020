import React from 'react';

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: '',
            teeColors: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3005/courses')
        .then(response => response.json())
        .then(courses => {
            console.log('courses ', courses);
            this.setState({courses: courses})
            // this.setState({courses: courses[0].name})
            // this.setState({tracks: courses[0].track})
        })
        .catch(console.log('error fetching courses'));

        fetch('http://localhost:3005/tee-colors')
        .then(response => response.json())
        .then(teeColors => {
            this.setState({teeColors: teeColors})
        })
    }

    render() {
        let arrayOfCourses = Array.from(this.state.courses);
        let arrayOfTeeColors = Array.from(this.state.teeColors);

        let courseOptions = arrayOfCourses.map((course) =>
        <option 
            key={course.id}
            value={course.id}
        >
            {course.name, course.track}
        </option>
    );

    let teeColorOptions = arrayOfTeeColors.map((tee) =>
    <option 
        key={tee.id}
        value={tee.id}
    >
        {tee.tee_color}
    </option>
);
    return (
        <div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Front Course</label>
            <select name="customSearch" className="custom-search-select">
                <option>Select Front Course</option>
                {courseOptions}
           </select>
        </div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Back Course</label>
            <select name="customSearch" className="custom-search-select">
                <option>No back course</option>
                {courseOptions}
           </select>
        </div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Tee Color</label>
            <select name="customSearch" className="custom-search-select">
                {teeColorOptions}
           </select>
        </div>
            {/* <button onClick={this.onSubmitRound}>Submit round</button> */}
        </div>
    )
    }
}

export default Entry