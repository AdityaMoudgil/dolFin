import Card from "./Card";
import "../../Styles/card.css";

const CardHolder = (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <div className="mt-4 mx-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{props.title}</h4>
        {props.showButton && (
          <button onClick={props.updateData} className="btn update_btn mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0,0,256,256"
              // style="fill:#000000;"
            >
              <g
                fill="#fe633d"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-2.9686,0 -5.69718,1.08344 -7.79297,2.875c-0.28605,0.22772 -0.42503,0.59339 -0.36245,0.95363c0.06258,0.36023 0.31676,0.6576 0.66286,0.77549c0.3461,0.1179 0.72895,0.03753 0.99842,-0.20959c1.74821,-1.49444 4.01074,-2.39453 6.49414,-2.39453c5.19656,0 9.45099,3.93793 9.95117,9h-2.95117l4,6l4,-6h-3.05078c-0.51129,-6.14834 -5.67138,-11 -11.94922,-11zM4,10l-4,6h3.05078c0.51129,6.14834 5.67138,11 11.94922,11c2.9686,0 5.69718,-1.08344 7.79297,-2.875c0.28605,-0.22772 0.42504,-0.59339 0.36245,-0.95363c-0.06258,-0.36023 -0.31676,-0.6576 -0.66286,-0.7755c-0.3461,-0.1179 -0.72895,-0.03753 -0.99842,0.20959c-1.74821,1.49444 -4.01074,2.39453 -6.49414,2.39453c-5.19656,0 -9.45099,-3.93793 -9.95117,-9h2.95117z"></path>
                </g>
              </g>
            </svg>
          </button>
        )}
      </div>
      <div className="card-container">
        {props.data.map((data) => {
          return (
            <div key={data.id} className="card-item">
              <Card
                title={data.title}
                price={data.price}
                change={data.change}
                pChange={data.pChange}
                imgUrl={data.img}
                ticker={data.widget_ticker}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardHolder;
