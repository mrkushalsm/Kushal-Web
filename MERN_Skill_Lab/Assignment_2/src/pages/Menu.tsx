// import React from "react";
import Card from "../components/Card";

const Menu = () => {
    const menu = {
        starters: {
            1: {
                name: "Tomato Soup",
                info: "Tomato soup is a soup with tomatoes as the primary ingredient.",
                full_info: "Tomato soup is a classic, comforting dish made primarily from ripe tomatoes, cooked and " +
                    "pureed into a smooth, rich consistency. The soup often starts with sautéed onions and garlic to " +
                    "enhance its savory flavor. Some recipes include a hint of carrots or celery to add depth and " +
                    "sweetness. Once the vegetables are softened, fresh or canned tomatoes are added, along with broth, " +
                    "herbs like basil or thyme, and a touch of sugar to balance the acidity of the tomatoes.After " +
                    "simmering, the mixture is blended until smooth, creating a velvety texture. Many variations of " +
                    "tomato soup also incorporate cream or milk for a richer, creamier consistency, giving it a " +
                    "luxurious feel. It's commonly seasoned with salt, pepper, and sometimes a dash of red pepper " +
                    "flakes for a bit of heat. Some versions include croutons or a drizzle of olive oil on top for " +
                    "added texture and flavor. Tomato soup is often served as a starter or alongside a grilled " +
                    "cheese sandwich, making it a popular comfort food, especially in colder months. Its bright, " +
                    "tangy taste is both refreshing and warming, appealing to a wide range of palates, from simple " +
                    "homestyle versions to more gourmet, complex variations.",
                price: 5.99,
                image: "/images/starters/tomatosoup.png",
            },
            2: {
                name: "Spring Rolls",
                info: "Spring rolls are rolled appetizers commonly found in Asian cuisine.",
                full_info: "Spring rolls are a popular appetizer or snack, originating in various Asian cuisines, " +
                    "known for their light, crisp texture and fresh, flavorful fillings. Traditionally, spring rolls" +
                    " are made by wrapping a variety of ingredients in a thin dough or rice paper and then either frying or serving them fresh, depending on the style.\n" +
                    "\n" +
                    "Fried spring rolls have a golden, crunchy exterior. The wrappers, made from wheat flour or other" +
                    " thin dough, are filled with a mixture of ingredients like shredded vegetables (carrots, cabbage," +
                    " bean sprouts), vermicelli noodles, mushrooms, and sometimes meat like pork, chicken, or shrimp. Once filled, the rolls are tightly wrapped and deep-fried until crisp, offering a satisfying crunch with each bite. The filling can vary widely based on regional or personal preferences, often seasoned with soy sauce, garlic, ginger, and sesame oil.\n" +
                    "\n" +
                    "Spring rolls are beloved for their versatility, allowing for endless variations in ingredients" +
                    " and preparation methods. They’re typically accompanied by flavorful dipping sauces, which" +
                    " complement the crispiness or freshness of the rolls. Whether fried and crispy or fresh and" +
                    " light, spring rolls are a perfect balance of texture and flavor, making them a popular choice" +
                    " for meals or snacks around the world.",
                price: 4.99,
                image: "/images/starters/springrolls.png",
            },
            3: {
                name: "Garlic Bread",
                info: "Garlic bread consists of bread, topped with garlic and olive oil or butter.",
                full_info: "Garlic bread is a popular and comforting side dish known for its savory, aromatic flavor and " +
                    "crisp texture. It typically consists of bread, often a baguette or Italian loaf, that is sliced" +
                    " and spread with a rich mixture of butter and minced garlic. This mixture may also include a" +
                    " variety of herbs, such as parsley or oregano, and sometimes grated Parmesan or mozzarella" +
                    " cheese for added flavor and richness.\n" +
                    "\n" +
                    "Variations of garlic bread often include additional toppings like cheese, which melts over the" +
                    " bread, creating a gooey, indulgent treat. Some recipes call for a drizzle of olive oil in place" +
                    " of or alongside the butter for a slightly lighter, Mediterranean-inspired version.\n" +
                    "\n" +
                    "Garlic bread is often served alongside dishes like pasta, soups, or salads, complementing the" +
                    " meal with its robust flavor. When baked to perfection, the bread achieves a delightful balance" +
                    " between a crispy crust and a soft, buttery interior, with the garlic and herbs infusing each" +
                    " bite. Whether served as a simple side or a standalone snack, garlic bread is loved for its" +
                    " ability to elevate even the most basic meal into something special.",
                price: 3.99,
                image: "/images/starters/garlicbread.png",
            },
        },
        main_course: {
            1: {
                name: "Grilled Paneer",
                info: "Grilled paneer is a popular Indian dish made from marinated paneer.",
                full_info: "Grilled paneer is a flavorful and hearty dish made by marinating and grilling paneer, a " +
                    "firm, non-melting Indian cheese. Paneer, known for its mild taste and ability to absorb flavors, " +
                    "becomes the perfect base for a variety of spices and seasonings in this dish. Grilled paneer is " +
                    "especially popular in Indian cuisine but has gained global appeal due to its versatility and " +
                    "rich, satisfying texture. \n" +
                    "Grilled paneer is often served as a starter or appetizer at barbecues, alongside vegetables " +
                    "like bell peppers, onions, and tomatoes, which are sometimes grilled together with the paneer" +
                    " on the same skewer. These vegetables absorb the same marinade and add a fresh, juicy crunch" +
                    " to the dish. \n" +
                    "Grilled paneer is highly versatile, as it can be adapted with different marinades, including" +
                    " more Mediterranean-style preparations with olive oil, oregano, and lemon, or spicier variations" +
                    " with peri-peri or tandoori seasonings. It's a great option for vegetarians, offering a" +
                    " satisfying, protein-rich dish that's full of flavor and texture. Whether served at a casual" +
                    " barbecue or as part of an elaborate Indian feast, grilled paneer is loved for its simplicity," +
                    " its ability to carry bold flavors, and its satisfying, hearty bite.",
                price: 10.99,
                image: "/images/main_course/paneertikka.png",
            },
            2: {
                name: "Paneer Butter Masala",
                info: "Paneer Butter Masala is a rich and creamy North Indian curry",
                full_info: "Paneer Butter Masala is a rich and creamy North Indian dish made with soft paneer cubes" +
                    " simmered in a velvety tomato-based gravy. The dish starts with paneer, which is sautéed or" +
                    " lightly fried and then added to a sauce made from pureed tomatoes, onions, ginger, garlic, and" +
                    " a blend of aromatic spices like garam masala, cumin, and turmeric. The sauce is enriched with" +
                    " butter and cream, giving it a luxurious texture and mildly sweet, tangy flavor.\n" +
                    "\n" +
                    "This dish is known for its balanced flavors—slightly spicy but mellowed by the butter and cream," +
                    " making it a favorite in Indian cuisine. Paneer Butter Masala is typically garnished with fresh" +
                    " cilantro and served with naan, roti, or rice, offering a satisfying and indulgent meal. Its" +
                    " creamy texture and flavorful profile make it a popular choice for vegetarians and those who" +
                    " enjoy rich, comforting dishes.",
                price: 12.99,
                image: "/images/main_course/paneerbuttermasala.png",
            },
            3: {
                name: "Mixed Vegetable Curry",
                info: "Mixed vegetable curry is a flavorful and healthy Indian dish.",
                full_info: "Mixed vegetable dishes are a popular and versatile option that showcase a variety of" +
                    " vegetables cooked together in a flavorful combination. These dishes are loved for their colorful" +
                    " presentation, nutritious profile, and the endless ways they can be prepared. Mixed vegetables" +
                    " can be made as a stir-fry, curry, sauté, or even roasted, depending on the cuisine and" +
                    " personal preference.\n" +
                    "\n" +
                    "In Indian cuisine, mixed vegetable curries are common, where seasonal vegetables are cooked in" +
                    " a spiced gravy. This often includes vegetables like carrots, peas, potatoes, bell peppers," +
                    " cauliflower, green beans, and sometimes paneer. The vegetables are usually sautéed in oil" +
                    " with aromatic spices such as cumin, mustard seeds, and turmeric before being simmered in a" +
                    " sauce made from tomatoes, onions, ginger, garlic, and sometimes yogurt or cream for richness." +
                    " Popular spice blends like garam masala, coriander, and chili powder are often added for a robust" +
                    " flavor. This dish can be enjoyed with roti, naan, or rice, making it a wholesome and satisfying" +
                    " meal.",
                price: 9.99,
                image: "/images/main_course/mixedvegetablecurry.png",
            },
        },
        dessert: {
            1: {
                name: "Chocolate Cake",
                info: "Chocolate cake is a rich and moist dessert made with cocoa powder.",
                full_info: "Chocolate cake is a classic and indulgent dessert loved for its rich, moist texture and" +
                    " deep chocolate flavor. Made from a combination of cocoa powder or melted chocolate, flour, sugar" +
                    ", butter or oil, eggs, and baking powder, the batter is typically mixed together and baked until" +
                    " soft and fluffy. The chocolate flavor can be intensified by using high-quality dark chocolate" +
                    " or adding espresso powder to enhance the richness.\n" +
                    "\n" +
                    "Once baked, chocolate cakes are often layered and frosted with a luscious chocolate ganache," +
                    " buttercream, or whipped cream, adding to the decadence. Popular variations include chocolate" +
                    " lava cakes with a gooey center, flourless chocolate cakes for a denser texture, and chocolate" +
                    " fudge cakes for extra sweetness. Chocolate cake is perfect for celebrations, often topped with" +
                    " fresh fruits, nuts, or decorative sprinkles to make it even more special.",
                price: 6.99,
                image: "/images/dessert/dessert.png",
            },
            2: {
                name: "Ice Cream Sundae",
                info: "An ice cream sundae is a classic dessert with toppings like chocolate or caramel.",
                full_info: "An ice cream sundae is a delightful dessert made by layering scoops of ice cream with" +
                    " various toppings and sauces, creating a visually appealing and indulgent treat. The base" +
                    " typically consists of one or more scoops of ice cream in flavors like vanilla, chocolate, or" +
                    " strawberry. Popular toppings include hot fudge, caramel sauce, whipped cream, nuts, sprinkles," +
                    " and a maraschino cherry to crown the creation.\n" +
                    "\n" +
                    "Ice cream sundaes are highly customizable, with endless possibilities for combinations. Some" +
                    " variations include adding fruits like bananas, strawberries, or pineapple, while others" +
                    " incorporate cookies, brownies, or candy pieces for extra texture and sweetness. Sundaes can be" +
                    " served in bowls, tall glasses, or even edible waffle bowls, making them a versatile and fun" +
                    " dessert for all ages.",
                price: 5.99,
                image: "/images/dessert/icecreamsundae.png",
            },
            3: {
                name: "Gulab Jamun",
                info: "Gulab Jamun is a popular Indian dessert made from fried dough balls.",
                full_info: "Gulab Jamun is a beloved Indian dessert consisting of soft, spongy dough balls made" +
                    " from khoya (reduced milk solids) or milk powder, which are deep-fried until golden brown and" +
                    " then soaked in a fragrant sugar syrup. The syrup is typically infused with cardamom, rose water" +
                    ", or saffron, giving the dish its signature aroma and sweetness. The name \"Gulab\" refers to the" +
                    " rose-scented syrup, while \"Jamun\" is a reference to the fruit it resembles in size and shape.\n" +
                    "\n" +
                    "The dough balls absorb the syrup, becoming soft and juicy, with a melt-in-your-mouth texture." +
                    " Gulab Jamun is often served warm and enjoyed during festivals, celebrations, and special" +
                    " occasions. It can be garnished with slivers of almonds or pistachios for an added crunch," +
                    " and is sometimes served with a scoop of ice cream for a contrast of temperatures and textures." +
                    " This indulgent dessert is known for its rich, sweet flavor and satisfying taste.",
                price: 4.99,
                image: "/images/dessert/gulabjamun.png",
            },
        },
    };

    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${item.name} added to the cart!`);
    };

    const starters = Object.entries(menu.starters).map(([key, value]) => (
        <Card
            key={key}
            tile_head={value.name}
            tile_info={value.info}
            tile_full_info={value.full_info}
            tile_price={value.price}
            tile_image={value.image}
            onAddToCart={() => addToCart(value)}
        />
    ));

    const main_course = Object.entries(menu.main_course).map(([key, value]) => (
        <Card
            key={key}
            tile_head={value.name}
            tile_info={value.info}
            tile_full_info={value.full_info}
            tile_price={value.price}
            tile_image={value.image}
            onAddToCart={() => addToCart(value)}
        />
    ));

    const dessert = Object.entries(menu.dessert).map(([key, value]) => (
        <Card
            key={key}
            tile_head={value.name}
            tile_info={value.info}
            tile_full_info={value.full_info}
            tile_price={value.price}
            tile_image={value.image}
            onAddToCart={() => addToCart(value)}
        />
    ));

    return (
        <>
            <h2 className="h2">Menu</h2>
            <br/>
            <h2 className="sub_menu_head">Starters</h2>
            <section className="tiles_container">{starters}</section>
            <h2 className="sub_menu_head">Main Course</h2>
            <section className="tiles_container">{main_course}</section>
            <h2 className="sub_menu_head">Dessert</h2>
            <section className="tiles_container">{dessert}</section>
        </>
    );
};

export default Menu;
