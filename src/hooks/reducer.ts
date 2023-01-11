export type StateType = {
  number: number;
  array: string[];
};
export enum ActionEnum {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  ADDTOARRAY = 'ADDTOARRAY',
  REMOVEFROMARRAY = 'REMOVEFROMARRAY',
}

export type IncreaseActionType = {
  type: ActionEnum.INCREASE;
};
export type DecreaseActionType = {
  type: ActionEnum.DECREASE;
};
export type AddToArray = {
  type: ActionEnum.ADDTOARRAY;
  payload: string;
};
export type RemoveFromArray = {
  type: ActionEnum.REMOVEFROMARRAY;
  payload: number;
};

export const myReducer = (
  state: StateType,
  action: IncreaseActionType | DecreaseActionType | AddToArray | RemoveFromArray
) => {
  let newState: StateType;
  switch (action.type) {
    case 'INCREASE':
      newState = { ...state, number: state.number + 1 };
      break;
    case 'DECREASE':
      newState = { ...state, number: state.number - 1 };
      break;
    case 'ADDTOARRAY':
      newState = { ...state, array: [...state.array, action.payload] };
      break;
    case 'REMOVEFROMARRAY': {
      const newArray = [...state.array];
      newArray.splice(action.payload, 1);
      newState = {
        ...state,
        array: newArray,
      };
      break;
    }
    default:
      newState = state;
  }
  return newState;
};
