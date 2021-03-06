import React, { useEffect, useState, useCallback } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrUpdateCard = (card) => {
    // 예전의 상태인 cards를 받아서 복사해와서, card안에있는 해당하는 키를 업데이트해준다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
    setShowAddEdit(false);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
    setShowEdit(false);
  };

  const showAddEditor = () => {
    setShowAddEdit(true);
  };
  const closeAddEditor = (e) => {
    e.preventDefault();
    setShowAddEdit(false);
  };

  const showEditor = (id) => {
    setShowEdit(id);
  };
  const closeEditor = (e) => {
    setShowEdit(false);
  };

  return (
    <section className={styles.maker}>
      <img src="./images/pokeballbg.png" alt="bg" className={styles.bg_img} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          showEdit={showEdit}
          closeEditor={closeEditor}
          showAddEdit={showAddEdit}
          closeAddEditor={closeAddEditor}
        />
        <Preview cards={cards} showEditor={showEditor} />
      </div>
      <button className={styles.addBtn} onClick={showAddEditor}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          className={styles.addIcon}
        >
          <g>
            <path
              d="M17.556,3.47c-0.002-0.001-0.004,0-0.007-0.001c-1.164-0.316-2.358-0.476-3.549-0.476c-5.514,0-10,2.916-10,6.5v5.774
		c-3.99,3.458-3.999,3.641-3.999,3.907c0,0.275,0.116,0.519,0.326,0.685c0.642,0.51,2.052,0.209,4.3-0.321
		c1.09-0.258,2.219-0.525,2.881-0.535c1.209-0.043,2.639,0.512,3.993,1.028c1.317,0.5,2.568,0.976,3.697,0.976
		c0.117,0,0.234-0.005,0.349-0.016c1.646-0.155,4.616-3.372,5.241-4.068l2.87-0.957c0.204-0.068,0.342-0.259,0.342-0.474v-6
		C23.999,7.017,21.29,4.484,17.556,3.47z M4.999,9.492c0-2.981,4.122-5.5,9-5.5c1.067,0,2.135,0.14,3.18,0.413
		c0.111,0.094,0.215,0.195,0.32,0.295c0.097,0.091,0.198,0.178,0.29,0.274c0.109,0.114,0.206,0.236,0.308,0.356
		c0.087,0.102,0.179,0.201,0.26,0.308c0.094,0.124,0.177,0.255,0.263,0.384c0.075,0.112,0.156,0.22,0.226,0.336
		c0.08,0.134,0.148,0.275,0.22,0.413c0.062,0.119,0.13,0.234,0.187,0.356c0.067,0.145,0.12,0.297,0.178,0.446
		c0.048,0.122,0.102,0.242,0.144,0.367c0.054,0.161,0.092,0.327,0.136,0.492c0.032,0.119,0.071,0.236,0.097,0.357
		c0.042,0.191,0.067,0.387,0.095,0.582c0.014,0.1,0.037,0.197,0.048,0.297c0.032,0.297,0.049,0.599,0.049,0.903v5.384
		c-0.117-0.009-0.231-0.014-0.354-0.028c-0.162-0.019-0.324-0.037-0.495-0.065c-0.222-0.036-0.452-0.079-0.685-0.127
		c-0.173-0.035-0.343-0.067-0.522-0.108c-0.246-0.056-0.499-0.119-0.752-0.183c-0.182-0.046-0.361-0.088-0.545-0.136
		c-0.132-0.035-0.265-0.071-0.398-0.107c-0.278-0.075-0.557-0.149-0.834-0.225c-1.853-0.505-3.603-0.983-4.916-0.983
		c-0.235,0-0.487,0.009-0.747,0.023c-0.039,0.002-0.08,0.005-0.119,0.008c-0.218,0.013-0.441,0.03-0.669,0.051
		c-0.066,0.006-0.132,0.013-0.198,0.02c-0.21,0.021-0.42,0.045-0.633,0.073c-0.068,0.009-0.136,0.017-0.204,0.027
		c-0.223,0.03-0.444,0.064-0.664,0.1c-0.051,0.008-0.103,0.016-0.154,0.025c-0.779,0.132-1.519,0.294-2.112,0.47V9.492z"
            />
            <path
              d="M8.457,12.491l6,0.5c0.014,0.002,0.028,0.002,0.042,0.002c0.258,0,0.477-0.197,0.497-0.459
		c0.022-0.276-0.182-0.518-0.457-0.54l-4.825-0.402l2.409-2.107c0.198-0.172,0.498-0.161,0.683,0.023l0.338,0.338
		c0.195,0.195,0.512,0.195,0.707,0c0.195-0.195,0.195-0.512,0-0.707L13.514,8.8c-0.558-0.556-1.457-0.586-2.048-0.068L8.17,11.616
		c-0.151,0.133-0.209,0.343-0.146,0.533C8.087,12.34,8.257,12.474,8.457,12.491z"
            />
          </g>
        </svg>
        <span className={styles.addText}>Add New Trainer!</span>
      </button>
    </section>
  );
};

export default Maker;
