import React from 'react';

const Salary = (props) => {
    const salary = "$3200";

    // const salaryHandler = (event) => {
    //     props.onClickMe(salary);
    // }

    return (
        <div>
            <button onClick={(event) => { props.onClickMe(salary) }} > Show Salary </button>
        </div>
    )
}

export default Salary;