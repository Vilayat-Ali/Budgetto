// lib
import {useState, Dispatch, useCallback, SetStateAction} from 'react';

const useToggle = (initialState: Boolean = false) => {
  // states
  const [componentState, setComponentState]: [
    Boolean,
    Dispatch<SetStateAction<Boolean>>,
  ] = useState<Boolean>(initialState);

  // toggle
  const Toggle = useCallback(
    () => setComponentState(!componentState),
    [componentState],
  );

  // return
  return [componentState, Toggle] as const;
};

export default useToggle;
