export default {
  state: {
    uid: null,
    email: null,
    notes: [{ title: "Title", text: "Text" }],
    currentNote: null,
  },
  actions: {
    fetchUserNotes() {},
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.uid = userInfo.uid;
      state.email = userInfo.email;
    },
    addNote(state, note) {
      state.notes.push(note);
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
  },
};
