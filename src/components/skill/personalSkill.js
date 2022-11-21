


function PersonalSkill(props){

    return(
    <>
        {/*<div className="skill-details-container">*/}
            <div className="skill-detail">
        <div className="skillProgress-container">
        <span className="skill-name">{props.skillName}</span>
            <div className="skillProgress" style={{width:`${props.percentage}%`}}></div>
        </div>
        </div>
        
        </>
        
    )

}

export default PersonalSkill;