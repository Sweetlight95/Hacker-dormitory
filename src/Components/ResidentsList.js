import React, { useEffect, useState } from 'react';
import Error from './Error';

function ResidentsList(props) {
	const {residentList} = props;
	console.log(residentList)
	const names = [...residentList.map(x => x.name)]
	const [displayList, setDisplayList] = useState([])
	console.log(names.filter(x => x === props.checkName));
	useEffect(()=>{
		if(names.filter(x => x === props.checkName).length < 2 && displayList.length){
			setDisplayList([...displayList,props.checkName])
		} 
	},[residentList])
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
{/* {names.filter(x => )} */}
				{displayList.map(( resident, index) => 
				<li key={index} className="slide-up-fade-in">
					 { resident} 
					  </li>
				)
				}

			</ul>
		</div>
	);
}

export default ResidentsList;
