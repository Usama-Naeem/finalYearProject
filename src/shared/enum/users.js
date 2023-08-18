export const userStatuses = {
  CONFIRMED: "Confirmed",
  UNCONFIRMED: "Unconfirmed",
  SUSPENDED: "Suspended",
  INVITED: "Invited",
};

export const userRoles = {
  EVENT_ORGANIZER: "Event Organizer",
  CLIENT: "Client",
};

export const roleOptions = [
  { label: userRoles.EVENT_ORGANIZER, value: "organizer" },
  { label: userRoles.CLIENT, value: "client" },
];

export const groupType = {
  ORGANIZER: "organizer",
  CLIENT: "client",
};

export const menuTypes = {
  BUFFET: "Buffet",
  CARTE: "À la carte",
  BEVERAGE: "Beverage",
  DESSERT: "Dessert",
};

export const menuOptions = [
  { label: menuTypes.BUFFET, value: "buffet" },
  { label: menuTypes.CARTE, value: "Àlacarte" },
  { label: menuTypes.BEVERAGE, value: "beverage" },
  { label: menuTypes.DESSERT, value: "dessert" },
];
