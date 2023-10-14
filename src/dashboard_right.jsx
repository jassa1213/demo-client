import React from "react";

const DashboardRight = () => {
  return (
    <>
      <div className="sidebar_right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          style={{ position: "relative", top: "35px", left: "8px" }}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
        <h3>Dhanwant Singh</h3>
        <p>Welcome to seller dashboard!</p>
        <div className="sidebar_right_category">
          <h4>Featured Category</h4>
          <ul>
            <li>Gadgets</li>
            <li>Fashion</li>
            <li>Education</li>
            <li>Beauty</li>
            <li>Fitness</li>
            <li>Sneakers</li>
          </ul>
        </div>
        <div className="sidebar_right_news">
          <h4>Seller News</h4>
          <ul>
            <img
              width={"85px"}
              height={"60px"}
              src="https://res.cloudinary.com/notesprofile/image/upload/v1695755112/Screenshot_1445-03-12_at_00.34.36_olzbnk.png"
              alt=""
            />{" "}
            <li>
              Cash on Delivery is
              <br />
              Now Available!
            </li>



            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kAg15SefpcqFGaNrc2PaqYrdqoxyPB5Fq7AF6RYvcAI8w_PJnw4kUl9O27vPHX_ZL8M&usqp=CAU"
              width={"85px"}
              height={"60px"}
              alt=""
            />{" "}
            <li>
              Always Check Your <br /> Store Performance!
            </li>
            <img
              width={"85px"}
              height={"60px"}
              src="https://res.cloudinary.com/notesprofile/image/upload/v1695754566/bitcoin_y1fl6i.jpg"
              alt=""
            />{" "}
            <li>
              Shop Nest is Now <br /> Accepting Bitcoin!
            </li>
            <img
              width={"85px"}
              height={"60px"}
              src="https://res.cloudinary.com/notesprofile/image/upload/v1695755558/Screenshot_1445-03-12_at_00.42.20_huuo5t.png"
              alt=""
            />{" "}
            <li>
              Keep Your Store Safe <br /> With 2 Factor Auth!{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardRight;
