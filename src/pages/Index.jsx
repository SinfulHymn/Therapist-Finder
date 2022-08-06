import { Link } from "react-router-dom";

export default function Index({ therapists }) {
  //add search for therapists
  //
  // console.log(therapists)
  const loaded = () => {
    return (
      <div className=" main mx-auto flex-grow-1">
        <div className="container mx-0 my-2 my-sm-4 ">
          <div className="ther-grid">
        {therapists.map((therapists, i) => {
          return (
              <Link className="thercard bd-highlight text-decoration-none " key={i}  to={`/therapists/${therapists._id}`}>
                <div className="card h-100" >
                  <h3 className="card-header">{therapists.name}</h3>
                  <div className="card-body">
                    <h5 className="card-title">Specialties</h5>
                    <h6 className="card-subtitle text-muted">
                      {therapists.tags.join(", ")}
                    </h6>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="d-block user-select-none"
                    maxwidth="100%"
                    maxheight="100%"
                    aria-label="Placeholder: Image cap"
                    focusable="false"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 318 180"
                    style={{ fontSize: "1.125rem", textAnchor: "middle" }}
                  >
                    <image
                      href={therapists.portrait}
                      width="100%"
                      height="100%"
                      fill="#868e96"
                      alt={therapists.name}
                    />
                    {/* <rect width="100%" height="100%" fill="#868e96"></rect> */}
                    {/* <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
      Image cap
    </text> */}
                  </svg>
                  <div className="card-body">
                    <p className="card-text">{therapists.address}</p>
                  </div>
                </div>
              </Link>
          );
        })}
        </div>
                
        </div>
      </div>

    );
  };
  const loading = () => (<div className="flex-grow-1 align-items-center  d-flex justify-content-center container m-auto p-5">
  <h1>loading... </h1>
</div>);
  return <>{therapists ? loaded() : loading()}</>;
}
