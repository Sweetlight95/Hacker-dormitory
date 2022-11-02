import React, { useState } from 'react';
import {STUDENTS} from "../studentsList"

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search(props) {
	const {setResidentList, residentList} = props
	const [entry, setEntry] = useState({studentName:"", joiningDate:""})

	const handleInput = (e) => {
		setEntry({...entry, [e.target.name]: e.target.value})
	}

	const handleAdd = () => { 
	
		const [student] = STUDENTS.filter( studentObject => studentObject.name.toLocaleLowerCase() === entry.studentName.toLocaleLowerCase())


		if(student?.name){
			console.log(new Date(student.validityDate).toString() , new Date(entry.joiningDate).toString());
			if(checkValidity(entry.joiningDate, student.validityDate)){
				setResidentList([...residentList, student])
						if(new Date(student.validityDate).toString() === new Date(entry.joiningDate).toString()){
							props.chg(` `,false,student.name)	
						}else{
							props.chg(`Sorry, ${student.name}'s validity has expired !`,true,student.name)
						}
			}
		}else{
			props.chg(`Sorry, ${student.name} is not a verified student!`,true)	
			}

	}

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" name="studentName" data-testid="studentName" type="text" onChange={handleInput} className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" name="joiningDate" data-testid="joiningDate" type="date" onChange={handleInput} className="mr-30 mt-10"/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={handleAdd}>Add</button>
		</div>
	);
}

export default Search;
