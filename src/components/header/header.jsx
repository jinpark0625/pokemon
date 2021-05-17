import React, { memo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Header = memo(({ onLogout }) => {
  const [login, setLogin] = useState(false);
  const [maker, setMaker] = useState(false);
  const [game, setGame] = useState(false);
  const [pokedex, setPokedex] = useState(false);

  const history = useHistory();
  const historyState = history?.location?.pathname;

  useEffect(() => {
    switch (historyState) {
      case "/":
        setLogin(true);
        setMaker(false);
        setGame(false);
        setPokedex(false);
        break;
      case "/maker":
        setLogin(false);
        setMaker(true);
        setGame(false);
        setPokedex(false);
        break;
      case "/pokedex":
        setLogin(false);
        setMaker(false);
        setGame(false);
        setPokedex(true);
        break;
      case "/game":
        setLogin(false);
        setMaker(false);
        setGame(true);
        setPokedex(false);
        break;
      default:
        break;
    }
    return history.listen((location) => {
      switch (location?.pathname) {
        case "/":
          setLogin(true);
          setMaker(false);
          setGame(false);
          setPokedex(false);
          break;
        case "/maker":
          setLogin(false);
          setMaker(true);
          setGame(false);
          setPokedex(false);
          break;
        case "/pokedex":
          setLogin(false);
          setMaker(false);
          setGame(false);
          setPokedex(true);
          break;
        case "/game":
          setLogin(false);
          setMaker(false);
          setGame(true);
          setPokedex(false);
          break;
        default:
          break;
      }
    });
  }, [history, historyState]);

  return (
    <header className={styles.header}>
      {!login && (
        <ul className={styles.header_wrap}>
          <li className={styles.list}>
            <NavLink to="/maker" className={styles.list_link}>
              <svg
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                className={`${styles.icon} ${
                  maker ? styles.active : styles.inActive
                }`}
              >
                <g>
                  <path d="M40.3,47.6c1.1-4.4,5-7.6,9.7-7.6c4.7,0,8.6,3.2,9.7,7.6C78.2,47.9,94.5,49,95,51.1c0-0.4,0-0.7,0-1.1C95,25.1,74.9,5,50,5   S5,25.1,5,50c0,0.4,0,0.7,0,1.1C5.5,49.1,21.8,47.9,40.3,47.6z" />
                  <path d="M50,60c-4.6,0-8.5-3.2-9.7-7.4c-17.2,0.3-32.5,1.3-35,3.1C8.2,77.8,27.1,95,50,95c22.9,0,41.8-17.1,44.6-39.3   c-2.5-1.8-17.7-2.8-35-3.1C58.5,56.9,54.6,60,50,60z" />
                </g>
              </svg>
              <span
                className={`${styles.list_text} ${
                  maker ? styles.active : styles.inActive
                }`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="/pokedex" className={styles.list_link}>
              <svg
                id="Layer_1"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                className={`${styles.icon} ${
                  pokedex ? styles.active : styles.inActive
                }`}
              >
                <path d="M19.5,0h-15C4.2236328,0,4,0.2236328,4,0.5v23C4,23.7763672,4.2236328,24,4.5,24h15  c0.2763672,0,0.5-0.2236328,0.5-0.5v-23C20,0.2236328,19.7763672,0,19.5,0z M19,7v1h-1v12h1v1h-1v2h-1V5h-2.2573242  c-0.6674805,0-1.2954102,0.2597656-1.7680664,0.7324219l-1.2421875,1.2421875C11.0708008,7.6357422,10.1918945,8,9.2573242,8H5V7  h4.2573242c0.6674805,0,1.2954102-0.2597656,1.7680664-0.7324219l1.2421875-1.2421875  C12.9291992,4.3642578,13.8081055,4,14.7426758,4H19v1h-1v2H19z M6,15.5v-2c0-0.2021484,0.121582-0.3847656,0.3085938-0.4619141  c0.1875-0.0751953,0.4018555-0.0351563,0.5449219,0.1083984l1,1c0.1953125,0.1953125,0.1953125,0.5117188,0,0.7070313l-1,1  C6.7578125,15.9492188,6.6298828,16,6.5,16c-0.0644531,0-0.1293945-0.0126953-0.1914063-0.0380859  C6.121582,15.8847656,6,15.7021484,6,15.5z M9,21.5C9,21.2236328,9.2236328,21,9.5,21h5c0.2763672,0,0.5,0.2236328,0.5,0.5  S14.7763672,22,14.5,22h-5C9.2236328,22,9,21.7763672,9,21.5z M16,2.5C16,2.776123,15.776123,3,15.5,3S15,2.776123,15,2.5  C15,2.2238159,15.223877,2,15.5,2S16,2.2238159,16,2.5z M14,2.5C14,2.776123,13.776123,3,13.5,3S13,2.776123,13,2.5  C13,2.2238159,13.223877,2,13.5,2S14,2.2238159,14,2.5z M12,2.5C12,2.776123,11.776123,3,11.5,3S11,2.776123,11,2.5  C11,2.2238159,11.223877,2,11.5,2S12,2.2238159,12,2.5z M10,4c0,1.1025391-0.8969727,2-2,2S6,5.1025391,6,4s0.8969727-2,2-2  S10,2.8974609,10,4z" />
              </svg>
              <span
                className={`${styles.list_text} ${
                  pokedex ? styles.active : styles.inActive
                }`}
              >
                Pokedex
              </span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="/game" className={styles.list_link}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 477.518 477.518"
                width="36"
                className={`${styles.icon} ${
                  game ? styles.active : styles.inActive
                }`}
              >
                <path
                  d="M436.161,165.291c-38.291-78.37-79.318-83.845-117.516-65.166c-11.446,5.598-21.283,12.768-28.5,22.115H187.38
	c-7.208-9.347-17.046-16.517-28.492-22.115C120.69,81.446,79.664,86.921,41.373,165.291C3.05,243.645-18.007,365.237,20.19,383.915
	c23.481,11.472,63.875-18.681,100.418-61.776c10.48,19.3,30.926,32.402,54.431,32.402c30.166,0,55.278-21.584,60.77-50.148h5.9
	c5.491,28.564,30.604,50.148,60.77,50.148c23.396,0,43.755-12.984,54.279-32.135c38.942,44.139,78.89,72.1,100.556,61.509
	C495.541,365.237,474.451,243.645,436.161,165.291z M132.775,236.974c0,0.699-0.217,1.336-0.397,1.975
	c-0.731,2.612-2.752,4.556-5.404,5.21c-0.569,0.124-1.113,0.342-1.727,0.342h-5.467h-19.293c-4.16,0-7.528-3.375-7.528-7.527
	v-15.197H77.749c-4.16,0-7.526-3.375-7.526-7.527v-24.76c0-4.152,3.367-7.528,7.526-7.528H92.96v-15.225
	c0-4.152,3.368-7.528,7.528-7.528h19.293h5.467c4.16,0,7.527,3.376,7.527,7.528v15.225h15.211c4.16,0,7.528,3.376,7.528,7.528v24.76
	c0,4.152-3.368,7.527-7.528,7.527h-15.211V236.974z M175.039,329.971c-20.615,0-37.327-16.712-37.327-37.327
	c0-20.615,16.712-37.328,37.327-37.328c20.615,0,37.327,16.712,37.327,37.328C212.367,313.259,195.654,329.971,175.039,329.971z
	 M302.479,329.971c-20.616,0-37.328-16.712-37.328-37.327c0-20.615,16.712-37.328,37.328-37.328
	c20.615,0,37.328,16.712,37.328,37.328C339.806,313.259,323.094,329.971,302.479,329.971z M337.153,216.195
	c-7.907,0-14.308-6.425-14.308-14.34c0-7.885,6.401-14.31,14.308-14.31c7.917,0,14.317,6.425,14.317,14.31
	C351.47,209.771,345.069,216.195,337.153,216.195z M371.89,244.657c-1.626,0.637-3.367,1.058-5.217,1.058
	c-0.296,0-0.545-0.156-0.841-0.172c-6.671-0.404-11.882-5.333-12.994-11.788c-0.132-0.793-0.475-1.524-0.475-2.363
	c0-7.901,6.393-14.324,14.31-14.324c1.85,0,3.591,0.419,5.217,1.058c5.311,2.083,9.091,7.216,9.091,13.266
	C380.981,237.439,377.201,242.556,371.89,244.657z M371.89,185.618c-1.626,0.639-3.367,1.057-5.217,1.057
	c-7.917,0-14.31-6.423-14.31-14.324c0-7.901,6.393-14.324,14.31-14.324c1.85,0,3.591,0.42,5.217,1.058
	c5.311,2.085,9.091,7.217,9.091,13.266C380.981,178.401,377.201,183.519,371.89,185.618z M396.191,216.195
	c-7.917,0-14.309-6.425-14.309-14.34c0-7.885,6.393-14.31,14.309-14.31c7.915,0,14.308,6.425,14.308,14.31
	C410.499,209.771,404.107,216.195,396.191,216.195z"
                />
              </svg>
              <span
                className={`${styles.list_text} ${
                  game ? styles.active : styles.inActive
                }`}
              >
                Game
              </span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <button className={styles.list_link} onClick={onLogout}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="36"
                className={`${styles.icon}`}
              >
                <path
                  d="M21.234,16.404c-1.032-1.527-4.91-3.329-8.469-3.935c-0.02-0.004-0.429-0.071-1.059-0.155
   c0.358-0.072,0.705-0.137,1.084-0.222c4.517-1.005,9.166-3.069,8.7-5.223c-0.005-0.023-0.017-0.048-0.023-0.071
   c-0.002-0.007,0-0.015-0.001-0.022c-1.273-4.695-6.136-7.589-11.068-6.592C5.212,1.236,1.664,6.23,2.649,11.091
   c0.003,0.012,0.011,0.021,0.015,0.033c0.004,0.025,0.001,0.05,0.006,0.075c0.101,0.468,0.381,0.851,0.83,1.139
   c0.047,0.03,0.109,0.051,0.16,0.078c-0.629,0.237-1.062,0.587-1.171,1.09c-0.011,0.049-0.005,0.099-0.01,0.149
   c-0.005,0.023-0.016,0.043-0.017,0.067c-0.27,4.98,3.656,9.562,8.753,10.212c0.411,0.053,0.819,0.078,1.224,0.078
   c3.932,0,7.529-2.413,9.008-6.177c0.011-0.029,0.01-0.058,0.015-0.087c0.02-0.056,0.049-0.109,0.062-0.167
   C21.605,17.205,21.507,16.809,21.234,16.404z M14.557,4.656c0.162-0.316,0.423-0.534,0.734-0.612
   c0.085-0.021,0.171-0.032,0.257-0.032c0.584,0,1.145,0.482,1.321,1.181c0.202,0.803-0.178,1.592-0.847,1.76
   c-0.669,0.167-1.376-0.348-1.578-1.15C14.344,5.403,14.384,4.995,14.557,4.656z M3.649,10.989c0-0.016,0.006-0.031,0.004-0.047
   C3.642,10.829,3.678,10.7,3.746,10.56c0.021-0.04,0.043-0.081,0.071-0.123c0.014-0.022,0.029-0.045,0.045-0.068
   c0.221-0.312,0.613-0.686,1.205-1.09C5.081,9.269,5.094,9.26,5.108,9.25c0.135-0.091,0.283-0.185,0.439-0.279
   c0.023-0.013,0.044-0.026,0.067-0.04C6.387,8.473,7.299,8.05,8.303,7.678c0.03-0.011,0.063-0.022,0.093-0.033
   C8.873,7.471,9.37,7.308,9.882,7.159c0.049-0.014,0.102-0.027,0.152-0.041c0.49-0.139,0.992-0.266,1.504-0.379
   c0.03-0.007,0.058-0.014,0.088-0.021c0.679-0.147,1.356-0.272,1.95-0.364c0.004,0.011,0.013,0.02,0.017,0.031
   c0.087,0.221,0.2,0.421,0.334,0.603c0.023,0.032,0.046,0.064,0.071,0.095c0.142,0.177,0.304,0.329,0.481,0.458
   c0.013,0.009,0.021,0.023,0.034,0.032c0.004,0.003,0.007,0.008,0.012,0.011c0.024,0.017,0.051,0.026,0.076,0.042
   c0.07,0.045,0.143,0.083,0.216,0.12c0.058,0.029,0.115,0.06,0.174,0.084c0.079,0.031,0.16,0.052,0.241,0.074
   c0.062,0.017,0.123,0.037,0.186,0.048c0.118,0.021,0.238,0.034,0.358,0.034c0.006,0,0.012-0.002,0.018-0.002
   c0.16-0.002,0.321-0.019,0.481-0.059c0.013-0.003,0.023-0.012,0.035-0.015c0.171-0.047,0.328-0.117,0.476-0.203
   c0.048-0.028,0.093-0.059,0.139-0.091c0.122-0.084,0.233-0.179,0.335-0.286c0.028-0.029,0.058-0.054,0.084-0.084
   c0.125-0.146,0.231-0.307,0.318-0.482c0.012-0.023,0.019-0.048,0.03-0.072c0.076-0.166,0.131-0.341,0.17-0.524
   c0.004-0.018,0.013-0.033,0.017-0.052c1.749,0.11,2.503,0.543,2.619,0.934c0.003,0.011,0.011,0.018,0.015,0.028
   c0.193,0.906-2.732,2.878-7.941,4.037c-5.887,1.312-7.874,0.8-8.533,0.378C3.821,11.354,3.693,11.188,3.649,10.989z M11.342,22.942
   c-3.954-0.505-7.12-3.631-7.766-7.345c1.608,1.351,4.727,2.556,7.835,3.229c0.662,0.143,1.343,0.266,2.03,0.367
   c0.155,0.91,0.775,1.643,1.611,1.853c0.165,0.042,0.331,0.062,0.496,0.062c0.947,0,1.841-0.657,2.207-1.654
   c0.719-0.041,1.345-0.151,1.88-0.313C17.829,21.841,14.644,23.361,11.342,22.942z"
                />
              </svg>
              <span className={styles.list_text}>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
});

export default Header;
