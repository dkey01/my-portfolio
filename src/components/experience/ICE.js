import classes from "./ICE.module.css";

const Ice = () => {
  const ice = <h3>ICE Commercial Power, Lagos, Nigeria(Junior, On-Site)</h3>;
  const iceDate = <h3>2020 - 2022</h3>;
  const iceExperience = (
    <ul>
      <li>
        Created a comprehensive web application for managing farmers and their
        produce, resulting in a 40%increase in productivity and a 50% reduction
        in administrative costs.
      </li>
      <li>
        Built an intuitive web application using JavaScript and React, enabling
        farmers to track crops, manage inventory, and communicate with buyers.
        These features led to a 60% increase in sales and a 30% decrease in
        waste.
      </li>
      <li>
        Conducted user testing with 50 participants, achieving an overall
        satisfaction score of 9/10. Incorporated user feedback to refine
        features and improve usability.
      </li>
      <li>
        Worked collaboratively with a team of 5 developers to ensure project
        delivery within tight deadlines, achieving a 100% on-time delivery rate.
      </li>
      <li>
        Tested, debugged, and shipped tens of thousands of lines of JavaScript
        and React code to ensure a 100% bug-free deployment.
      </li>
      <li>
        Managed over 100 Git repositories, facilitating smooth collaboration
        across teams and ensuring timely project completion.
      </li>
      <li>
        Actively contributed to sprint planning, daily stand-ups, and sprint
        retrospectives, resulting in a 30% increase in overall team
        productivity.
      </li>
      <li>
        Enhanced the application’s performance by optimizing React components
        and implementing best practices, reducing website load times by 25% and
        lowering bounce rates by 10%.
      </li>
    </ul>
  );
  return (
    <>
      <div className={classes["ice-detail"]}>
        {ice}
        {iceDate}
      </div>
      {iceExperience}
    </>
  );
};

export default Ice;
