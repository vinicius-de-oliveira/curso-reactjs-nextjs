import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function index() {
  return (
    <React.Fragment>
      <div className="menu-container">
        <header className="header">
          <NavLink to="/useState" activeClassName="selected">
            UseState
          </NavLink>
          <NavLink to="/useEffect" activeClassName="selected">
            UseEffect
          </NavLink>
          <NavLink to="/useCallback" activeClassName="selected">
            UseCallback
          </NavLink>
          <NavLink to="/useMemo" activeClassName="selected">
            UseMemo
          </NavLink>
          <NavLink to="/useRef" activeClassName="selected">
            UseRef
          </NavLink>
          <NavLink to="/useContext" activeClassName="selected">
            UseContext
          </NavLink>
          <NavLink to="/useContext2" activeClassName="selected">
            UseContext2
          </NavLink>
          <NavLink to="/useReducer" activeClassName="selected">
            UseReducer
          </NavLink>
          <NavLink to="/ContextReducer" activeClassName="selected">
            ContextReducer
          </NavLink>
          <NavLink to="/useMyHook" activeClassName="selected">
            useMyHook
          </NavLink>
          <NavLink to="/multipleHooks" activeClassName="selected">
            MultipleHooks
          </NavLink>
          <NavLink to="/useFetch" activeClassName="selected">
            useFetch
          </NavLink>
          <NavLink to="/useAsync" activeClassName="selected">
            useAsync
          </NavLink>
          <NavLink to="/UseLayoutEffect" activeClassName="selected">
            UseLayoutEffect
          </NavLink>
          <NavLink to="/UseImperativeHandle" activeClassName="selected">
            UseImperativeHandle
          </NavLink>
        </header>
      </div>
    </React.Fragment>
  );
}

export default index;
