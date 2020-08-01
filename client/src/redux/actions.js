export function loadEvents() {
  return async (dispatch) => {
    try {
      const init = await (await fetch("/api")).json();
      dispatch(loadingComplete(init));
    } catch (e) {
      console.error(e);
    }
  };
}

export function loadingComplete(payload) {
  return { type: "LOADING_COMPLETE", payload };
}

export function addEvent() {
  return async (dispatch) => {
    try {
      const response = await (
        await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      dispatch(add_complete(response));
    } catch (e) {
      console.error(e);
    }
  };
}

export function add_complete(payload) {
  return { type: "ADD_COMPLETE", payload };
}

export function iWillComeComplete(payload){
  return {type: 'COMING_COMPLETE', payload}
}

export function iWillCome(id) {
  return async (dispatch) => {
    try {
     await fetch(`/api`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
      dispatch(iWillComeComplete(id));
    } catch (e) {
      console.error(e);
    }
  };
}
