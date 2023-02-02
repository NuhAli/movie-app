export enum ImageActionKind {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

interface ImageAction {
  type: ImageActionKind;
  payload: {
    setter: React.Dispatch<React.SetStateAction<string>>;
    image: string;
  };
}

interface StateType {
  width: number;
  height: number;
  image: string;
}

export const initialState = {
  width: 164,
  height: 110,
  image: "",
};

export const reducer = (state: StateType, action: ImageAction) => {
  switch (action.type) {
    case "SMALL":
      state.width = 164;
      state.height = 110;
      state.image = action.payload.image;
      action.payload.setter(state.image);
      return state;
    case "MEDIUM":
      state.width = 220;
      state.height = 140;
      state.image = action.payload.image;
      action.payload.setter(state.image);
      return state;
    case "LARGE":
      state.width = 280;
      state.height = 174;
      state.image = action.payload.image;
      action.payload.setter(state.image);
      return state;
    default:
      return { width: state.width, height: state.height, image: state.image };
  }
};
