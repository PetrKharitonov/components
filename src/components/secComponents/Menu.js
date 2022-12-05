import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu _container">
      <MenuItem>Первый пункт</MenuItem>
      <MenuItem>Второй пункт</MenuItem>
      <MenuItem>Третий пункт</MenuItem>
      <MenuItem>Четвертый пункт</MenuItem>
      <MenuItem>Пятый пункт</MenuItem>
    </div>
  );
}

export default Menu;
