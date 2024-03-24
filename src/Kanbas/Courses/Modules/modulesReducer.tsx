import { createSlice } from "@reduxjs/toolkit";

type ModuleState = {
  modules: any[],
  module: any,
}

const initialState: ModuleState = {
  modules: [],
  module: { name: "New Module 123", description: "New Description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      console.log('added module', action.payload);
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      console.log('deleted module', action.payload);
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      console.log('updated module', action.payload);
      state.modules = state.modules.map((module: any) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      console.log('set module', action.payload);
      state.module = action.payload;
    },
  },
});


export const {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} = modulesSlice.actions;

export default modulesSlice.reducer;
