import { app } from "./init";
import { getDatabase, get, set, ref } from "firebase/database";

const database = getDatabase(app);

export function writeData(path, data) {
  return set(ref(database, path), data);
}

export function getData(path) {
  return get(ref(database, path));
}
