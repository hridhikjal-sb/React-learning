import { Menuitem } from "./menuitem";
export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered ${itemName} for ${itemPrice}`);
    }

    return (
        <div>
            <h2>Menu</h2>
            <Menuitem price={12} name="Pizza" onOrder={handleOrder} />
            <Menuitem price={8} name="Burger" onOrder={handleOrder} />
            <Menuitem price={5} name="Fries" onOrder={handleOrder} />
        </div>
    );
}