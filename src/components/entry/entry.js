import React from 'react';

const Entry = () => {
    return (
        <div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Course</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Select track</label>
            <select>
                <option value="volvo">front 9</option>
                <option value="saab">back 9</option>
            </select>
        </div>
        <div className="mt3 w-40 center">
            <label className="db fw6 lh-copy f6" htmlFor="round-score">Select tee color</label>
            <select>
                <option value="volvo">White</option>
                <option value="saab">Yellow</option>
            </select>
        </div>
            {/* <button onClick={this.onSubmitRound}>Submit round</button> */}
        </div>
    )
}

export default Entry