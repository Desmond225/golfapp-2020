import React from 'react';

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: '',
            teeColors: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    onStartRound() {
        alert('starting round!');
    }

    handleChange = (event) => {
        this.setState({
            courses: event.target.value,
            teeColor: event.target.value
        })
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
        value={tee.tee_color}
    >
        {tee.tee_color}
    </option>
);
    return (
        <div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Front Course</label>
            <select 
                name="frontCourse" 
                className="custom-search-select"
                onChange={this.handleChange}
            >

                {courseOptions}
           </select>
        </div>
        {/* <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Back Course</label>
            <select 
                name="customSearch" 
                className="custom-search-select"
                onChange={this.handleChange} 
            >
                <option>No back course</option>
                {courseOptions}
           </select>
        </div> */}
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Tee Color</label>
            <select 
                name="teeColor" 
                className="custom-search-select"
                onChange={this.handleChange} 
            >
                {teeColorOptions}
           </select>
        </div>
            <button onClick={this.onStartRound}>Start round</button>
        </div>
    )
    }
}

export default Entry