const SkillsItem = (props) => {
  return (
    <div style={{ display: "flex", gap: "5px", width: "100%" }}>
      <h3 style={{ width: "40%" }}>{props.viewSkills}:</h3>
      <p style={{ width: "60%" }}>{props.details}</p>
    </div>
  );
};

export default SkillsItem;
