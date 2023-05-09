import Dexie from "dexie";

const db = new Dexie("myNotes");
db.version(1).stores({
  notes: "++id, content, created, isActive, isNew",
});

export default db;
