import ExperienceCard from "../../components/experienceCard";
import { Stack } from '@mui/material';

function Experience() {
    
    return (
        <div>
            <Stack 
            direction="row" 
            flexWrap="wrap"
            useFlexGap
            spacing={1}>
                {/* ____undergrad _____*/}
                 <ExperienceCard
                name="Capital One"
                location="San Francisco | Washington, D.C"
                year="2019 - Present"
                degree="Senior Software Engineer"
                concentration="Senior Software Engineer"
                />
                {/* grad _____*/}
                <ExperienceCard
                name="Virginia Tech Innovation Campus"
                location="Northern Virginia"
                year="2021 - 2023"
                degree="M.S. Computer Science"
                concentration=" concentration in Human Computer Interaction"
                />
                  {/* internship _____*/}
                <ExperienceCard
                name="Excella Consulting"
                location="Arlington, Virginia"
                year="2018 - 2019"
                degree="Software Engineering Intern"
                concentration="Software Engineering Intern"
                />
                 {/* ____undergrad _____*/}
                <ExperienceCard
                name="Virginia Tech"
                location="Blacksburg, Virginia"
                year="2015 - 2019"
                degree="B.F.A Creative Technologies"
                concentration="minor in art history"
                />
                {/* ____undergrad _____*/}
                <ExperienceCard
                name="Virginia Tech"
                location="Blacksburg, Virginia"
                year="2015 - 2019"
                degree="B.S. Computer Science"
                concentration="Computer Science"
                />
            </Stack>

            
        </div>
    )
}
export default Experience
