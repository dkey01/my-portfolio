import classes from "./ChurchPad.module.css";

const ChurchPad = () => {
  const churchPad = <h3>ChurchPad, Columbia, MD, United States</h3>;
  const churchPadDate = <h3>2024 - Present</h3>;

  const churchPadExperience = (
    <ul>
      <li>
        Part of a 15-person team that developed a comprehensive church
        management platform aimed at streamlining administrative tasks and
        enhancing the user experience for both church staff and members.
      </li>
      <li>
        Designed and implemented 5 critical features using JavaScript and React,
        including real-time event scheduling and a personalized member
        dashboard. These features increased community engagement by 30% and
        event participation by 20%.
      </li>
      <li>
        Optimized the platform’s interface, leveraging React’s state management
        and virtual DOM features to achieve a 46% reduction in page load times.
        This also led to a 20% decrease in member drop-offs during onboarding
      </li>
      <li>
        Collaborated with 4 front-end developers to create 34 reusable React
        components, which improved UI/UX design consistency by 35%.
      </li>
      <li>
        Refactored the JavaScript-based codebase for the payment system,
        enhancing its scalability and reducing transaction processing times by
        25%.
      </li>
    </ul>
  );
  return (
    <>
      <div className={classes["churchPad-detail"]}>
        {churchPad}
        {churchPadDate}
      </div>
      {churchPadExperience}
    </>
  );
};

export default ChurchPad;
