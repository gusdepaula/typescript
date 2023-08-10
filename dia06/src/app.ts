class HotelRooms {
  [roomNumber: string]: string;
}

let room = new HotelRooms();

room.A201 = "Gustavo";
room.A202 = "Ana";
room.A17 = "Marcos";

console.log(room);
