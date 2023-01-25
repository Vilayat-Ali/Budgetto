import SQLite from 'react-native-sqlite-storage';

export const db = {
  // sections
  section: {
    // GET all sections
    getSections: async () => {
      const data = await SQLite.openDatabase({name: 'budgetto'});
      return data;
    },
  },
};
