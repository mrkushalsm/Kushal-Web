import "./Card.css";
import "./Modal.css"
import Modal from "../components/Modal";
import React from "react";

interface Props {
    tile_head: string;
    tile_info: string;
    tile_price: number;
    tile_image: string;
    tile_full_info: string;
    onAddToCart: () => void;
}

const Card = (props: Props) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <div className="tile">
                <h3 className="tile_head" onClick={handleOpen}>{props.tile_head}</h3>
                <img src={props.tile_image} alt={props.tile_head} onClick={handleOpen}/>
                <p className="tile_info" onClick={handleOpen}>{props.tile_info}</p>
                <p className="tile_price" onClick={handleOpen}> Price: ${props.tile_price}</p>
                <button className="add_to_cart" onClick={props.onAddToCart}>
                    Add to Cart 🛒
                </button>
            </div>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>{props.tile_head}</h1>
                    <br/>
                    <img src={props.tile_image} alt={props.tile_head}/>
                    <p className="tile_full_info">{props.tile_full_info}</p>
                </>
            </Modal>
        </>
    );
};

export default Card;
