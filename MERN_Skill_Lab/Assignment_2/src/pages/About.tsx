import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";
import {useMediaQuery} from "react-responsive";
import TableBodyMobile from "../components/mobile/TableBodyMobile.tsx";
import TableHeadMobile from "../components/mobile/TableHeadMobile.tsx";

const About = () => {

    const isMobile = useMediaQuery({maxWidth: 425});

    const review = {
        1: {
            name: "Joe",
            rating: "★★★★",
            date: "March 9th, 2024",
        },
        2: {
            name: "Biden",
            rating: "★★★",
            date: "December 15th, 2021",
        },
        3: {
            name: "Donald",
            rating: "★★★★",
            date: "January 12th, 2025",
        },
        4: {
            name: "Joe",
            rating: "★★",
            date: "April 6th, 2023",
        },
    };

    // @ts-expect-error key not used
    const reviewBody = Object.entries(review).map(([key, value]) => (
        <>
            {isMobile ? <TableBodyMobile
                name={value.name}
                rating={value.rating}
                review={
                    value.rating === "★★★★★"
                        ? "Very Good"
                        : value.rating === "★★★★"
                            ? "Good"
                            : value.rating === "★★★"
                                ? "Average"
                                : value.rating === "★★"
                                    ? "Bad"
                                    : value.rating === "★"
                                        ? "Very Bad"
                                        : "No Review"
                }
                date={value.date}
            /> : <TableBody
                name={value.name}
                rating={value.rating}
                review={
                    value.rating === "★★★★★"
                        ? "Very Good"
                        : value.rating === "★★★★"
                            ? "Good"
                            : value.rating === "★★★"
                                ? "Average"
                                : value.rating === "★★"
                                    ? "Bad"
                                    : value.rating === "★"
                                        ? "Very Bad"
                                        : "No Review"
                }
                date={value.date}
            />}
        </>
    ));

    return (
        <>
            <h2 className="h2">About Us</h2>
            <p>
                Welcome to Food Paradise, where every meal is a celebration of India's
                rich culinary heritage. Founded in the heart of Mumbai in 1985, Food
                Paradise began as a humble street food stall, serving authentic Indian
                flavors with a modern twist. Over the decades, we have grown into one of
                India's most beloved dining destinations, renowned for our commitment to
                quality, authenticity, and innovation.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Our Story</h2>
            <p>
                Food Paradise was the brainchild of our founder, Rajesh Mehta, who
                inherited his passion for food from his family's long history of
                culinary expertise dating back to the royal kitchens of the Marathas.
                Inspired by his grandmother's secret recipes and the vibrant street food
                culture of Mumbai, Rajesh set out on a mission to bring traditional
                Indian flavors to the forefront, but with a contemporary flair. What
                started as a small roadside cart quickly gained popularity for its
                delectable pani puri and pav bhaji, becoming a sensation among locals
                and tourists alike.
            </p>
            <br/>
            <p>
                By 1995, Food Paradise had expanded into a full-fledged restaurant,
                offering an array of regional Indian dishes from the spice-laden curries
                of Rajasthan to the seafood delicacies of Kerala. Today, we operate
                multiple outlets across major Indian cities, each one capturing the
                essence of India's diverse culinary traditions.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Our Philosophy</h2>
            <p>
                At Food Paradise, we believe that food is more than just a meal—it's an
                experience that brings people together. Our chefs craft every dish with
                love, using locally sourced, organic ingredients to create flavors that
                are both bold and authentic. From street food classics to innovative
                fusion dishes, we aim to offer a dining experience that transports you
                to the vibrant streets of India.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Our Commitment</h2>
            <p>
                We take pride in our sustainability efforts, ensuring that we minimize
                our carbon footprint by working with local farmers and suppliers. Our
                eco-friendly packaging, waste reduction practices, and farm-to-table
                approach underline our commitment to preserving the environment while
                delivering the best culinary experience.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Why Choose Food Paradise?</h2>
            <ol>
                <li className="pointers">
                    <b>Authentic Flavors:</b> Our menu showcases the best of Indian
                    cuisine, with recipes passed down through generations.
                </li>
                <li className="pointers">
                    <b>Modern Twist:</b> We blend tradition with innovation, offering
                    dishes that appeal to both purists and adventurers.
                </li>
                <li className="pointers">
                    <b>Culinary Excellence:</b> Our chefs are trained in the finest
                    culinary schools and bring years of experience to your plate.
                </li>
                <li className="pointers">
                    <b>Sustainable Practices:</b> We are committed to supporting local
                    farmers and using eco-friendly practices.
                </li>
            </ol>
            <p>
                Whether you're craving a taste of home or an exciting new culinary
                adventure, Food Paradise promises a dining experience like no other.
                Come and be a part of our journey through the diverse and flavorful
                world of Indian cuisine.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Visit Us Today</h2>
            <p>
                Step into any of our outlets and embark on a culinary journey that
                reflects the true spirit of India.
            </p>
            <br/>
            <br/>
            <h2 className="h2">Reviews</h2>
            <table>
                {isMobile ? <TableHeadMobile
                    name="Customer Name"
                    rating="Rating"
                    review="Review Test"
                    date="Date of Review"
                /> : <TableHead
                    name="Customer Name"
                    rating="Rating"
                    review="Review Test"
                    date="Date of Review"
                />}
                {reviewBody}
            </table>
        </>
    );
};
export default About;
