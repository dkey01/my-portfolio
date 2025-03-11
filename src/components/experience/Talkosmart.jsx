import classes from "./ICE.module.css";

const Talosmart = () => {
  const talosmart = <h3>Talosmart Technologies, Lagos, Nigeria</h3>;
  const talosmartDate = <h3>2022 - 2024</h3>;
  const talosmartExperience = (
    <ul>
      <li>
        Part of a 5-person team that developed a comprehensive logistics
        management platform to enhance operational efficiency and user
        experience for both businesses and customers.
      </li>
      <li>
        Collaboratively worked with a team of 5 front-end engineers to design
        and develop 25 reusable React components, improving UI consistency by
        35% and expediting development timelines for future feature rollouts.
      </li>
      <li>
        Implemented 5 innovative features using JavaScript and React, including
        real-time delivery tracking with Google Maps integration and a
        customized user dashboard. These enhancements led to a 30% increase in
        user engagement and a 20% improvement in customer retention.
      </li>
      <li>
        Engineered a responsive and efficient user interface using React's
        optimization techniques, achieving a 40% improvement in load times and a
        15% reduction in bounce rates.
      </li>
      <li>
        Mentored a team of 6 members, focusing on best practices in JavaScript,
        React, and code quality standards. This effort led to a 40% increase in
        team productivity and a 50% reduction in code errors.
      </li>
      <li>
        Implemented scalable refactoring strategies within the logistics payment
        platform, increasing system maintainability and productivity by 25%.
      </li>
      <li>
        Integrated TikZ/PGF and LaTeX for creating scalable and customizable
        route diagrams, package flow visualizations, and report templates. This
        provided visually enriched outputs, enhancing stakeholder
        decision-making and client satisfaction.
      </li>
    </ul>
  );
  return (
    <>
      <div className={classes["ice-detail"]}>
        {talosmart}
        {talosmartDate}
      </div>
      {talosmartExperience}
    </>
  );
};

export default Talosmart;
