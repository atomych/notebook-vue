import { writeData } from "../../firebase/database";

export default {
  state: {
    uid: null,
    email: null,
    notes: [],
    currentNote: null,
  },
  actions: {
    changeUserNotes({ state }) {
      writeData(`notes/${state.uid}`, state.notes);
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.uid = userInfo.uid;
      state.email = userInfo.email;
    },
    setUserNotes(state, data) {
      state.notes = data;
    },
    addNote(state) {
      const note = {
        title: "",
        text: "",
      };
      state.notes = [...state.notes, note];
    },
    removeNote(state, index) {
      state.notes = state.notes.filter((el, idx) => idx != index);
    },
    setCurrentNote(state, index) {
      if (index != null) state.currentNote = state.notes[index];
      else state.currentNote = null;
    },
    changeNote(state, params) {
      state.currentNote.title = params.title;
      state.currentNote.text = params.text;
    },
  },
  getters: {
    userId(state) {
      return state.uid;
    },
    userEmail(state) {
      return state.email;
    },
    userNotes(state) {
      return state.notes;
    },
    userCurrentNote(state) {
      return state.currentNote;
    },
    userCurrentNoteIndex(state) {
      return state.notes.indexOf(state.currentNote);
    },
  },
};
