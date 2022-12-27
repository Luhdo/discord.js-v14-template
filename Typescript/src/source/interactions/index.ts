import { buttons, menus, modals } from "../..";

// ! button registerer #f00
import btn from "./buttons/btn";
const BUTTONS = [btn];
BUTTONS.forEach((btn) => {
  buttons.set(btn.data.name, btn);
});

// ! menu registerer #f00
import select from "./menus/select";
const MENUS = [select];
MENUS.forEach((menu) => {
  menus.set(menu.data.name, menu);
});

// ! modal registerer #f00
import mdl from "./modals/mdl";
const MODALS = [mdl];
MODALS.forEach((m) => {
  modals.set(m.data.name, m);
});

export default { buttons, menus, modals };
