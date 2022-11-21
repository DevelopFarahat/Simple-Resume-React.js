import PersonalSkill from "./personalSkill";

function Skills(){
    let skillsArr = [{_id:1,name:"Angular",percentage:90},{_id:2,name:"Javascript",percentage:95},{_id:3,name:"Typescript",percentage:80},
    {_id:4,name:"Java",percentage:70},{_id:5,name:"Node.js",percentage:50},{_id:6,name:"Html",percentage:100},{_id:7,name:"Css",percentage:99}];
    let myFocusArr = [{_id:1,name:"Web Design"},{_id:2,name:"Responsive Web Design"},{_id:3,name:"Single Page Application"}]
    return(
        <>
        <div className="skill-section">
            <h1>Skills</h1>
            <div>
            <div className="my-focus-section">
            <h1>My Focus</h1>
            <ul>
        {myFocusArr.map((myF)=>(
            <li key={myF._id}>{myF.name}</li>
        ))}
            </ul>
            </div>
            <div className="skill-details">
            {skillsArr.map((skill)=>(
                <PersonalSkill key={skill._id} skillName={skill.name} percentage={skill.percentage}/>
            ))}
             
            </div>
        </div>
        </div>
        </>
    )
}

export default Skills;