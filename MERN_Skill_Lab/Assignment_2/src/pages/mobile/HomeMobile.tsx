// const Home = () => {
//   return (
//     <>
//       <b />
//       <main>
//         <h2>
//           Welcome to Food Paradise, where the vibrant flavors of India come
//           alive! From traditional street food to modern fusion dishes, we bring
//           you an unforgettable culinary experience. Each bite is a journey
//           through India's rich culture, crafted with passion and authentic
//           ingredients.
//         </h2>
//         <b />
//         <b />
//         <b />
//         <h2>
//           Join us as we celebrate India's diverse food heritage with every dish.
//           Whether you're indulging in classic comfort foods or exploring bold
//           new flavors, Food Paradise is your destination for mouthwatering
//           moments and delightful dining.
//         </h2>
//       </main>
//     </>
//   );
// };

// export default Home;

import "./AppMobile.css"

const HomeMobile = () => {
    return (
        <>
            <b/>
            <main>
                <div
                    style={{
                        boxShadow: "0 20px 6px rgba(0, 0, 0, 0.1)",
                        height: "12em",
                        width: "60%",
                    }}
                >
                    <img
                        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                        style={{
                            height: "12.5em",
                            width: "26.3em",
                            paddingTop: "1em",
                            paddingLeft: "0.5%",
                        }}
                    />
                </div>
                <h2
                    style={{
                        display: "flex",
                        textWrap: "wrap",
                        padding: "1em",
                        color: "rgb(185, 159, 125)",
                    }}
                >
                    Welcome to Food Paradise, where the vibrant flavors of India come
                    alive! From traditional street food to modern fusion dishes, we bring
                    you an unforgettable culinary experience. Each bite is a journey
                    through India's rich culture, crafted with passion and authentic
                    ingredients.
                </h2>
                <b/>
                <b/>
                <b/>
                <img
                    src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    style={{
                        height: "12.5em",
                        width: "26.3em",
                        left: "49.4%",
                        top: "65%",
                    }}
                ></img>
                <h2
                    style={{
                        display: "flex",
                        textWrap: "wrap",
                        padding: "1em",
                        color: "rgb(185, 159, 125)",
                    }}
                >
                    Join us as we celebrate India's diverse food heritage with every dish.
                    Whether you're indulging in classic comfort foods or exploring bold
                    new flavors, Food Paradise is your destination for mouthwatering
                    moments and delightful dining.
                </h2>
            </main>
        </>
    );
};

export default HomeMobile;