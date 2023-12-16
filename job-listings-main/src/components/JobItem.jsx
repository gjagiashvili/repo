const JobItem = (props) => {
  const arr = [props.role, props.level, ...props.languages];
  const ifContains = props.searchJob.every((value) => arr.includes(value));

  return ifContains ? (
    <div className={props.featured ? "border-left container" : "container"}>
      <div className="logo-box">
        <img src={props.logo !== null ? props.logo : "/images/company-placeholder.svg"} alt="" />
      </div>
      <div className="information-box">
        <div className="info-title">
          <div className="info-header">
            <h3>{props.company}</h3>
            {props.new ? (
              <div className="new">
                <p>new</p>
              </div>
            ) : (
              ""
            )}
            {props.featured ? (
              <div className="featured">
                <p>featured</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <h2>{props.position}</h2>
          <div className="info-footer">
            <p>{props.postedAt}</p>
            <span>&#46;</span>
            <p>{props.contract}</p>
            <span>&#46;</span>
            <p>{props.location}</p>
          </div>
        </div>
        <div className="inf-tags">
          {arr.map((item, index) => {
            return (
              <button
                key={index}
                className="tag-button"
                onClick={() => props.clickHandler(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="notDisplayed"></div>
  );
};

export default JobItem;
