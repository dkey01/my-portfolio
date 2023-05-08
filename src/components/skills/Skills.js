import {useState, useEffect} from 'react';

import classes from './Skills.module.css';
import useHttp from '../../hooks/use-http';
import SkillsItem from './SkillsItem';
import Card from '../../UI/Card';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const {isLoading, error, sendRequest: fetchSkills} = useHttp();

    useEffect(() => {
        const applyData = (appliedSkills) => {
          const receivedData = [];
          for(const key in appliedSkills){
            receivedData.push({
              id: key,
              detail: appliedSkills[key].detail,
              skill: appliedSkills[key].skill
            })
          }
          setSkills(receivedData)
        }
        fetchSkills({
          URL: 'https://react-https-cb35d-default-rtdb.firebaseio.com/skills.json'
        }, applyData)
      }, [fetchSkills])

      let content;
    
      if (error !== null) {
        content = (
          <section className={classes.error}>
            <p>{error}</p>
          </section>
        );
  
      } else if (isLoading) {
        content = (
          <section className={classes.loading}>
            <p>Loading skills....</p>
          </section>
        );
  
      } else if (skills.length > 0){
        const skillList = skills.map((mySkill) => {
          return (
            <SkillsItem
              id={mySkill.id}
              key={mySkill.id}
              viewSkills={mySkill.skill}
              details={mySkill.detail}
            />
          );
        });
      
        content = (
          <section className={classes.skills}>
            <Card>
                <h2>Skills</h2> 
                <ul>{skillList}</ul>
            </Card>
          </section>
        );
      }

    return <>{content}</>
}

export default Skills;