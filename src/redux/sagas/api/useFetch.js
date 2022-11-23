import { select, call, put } from "redux-saga/effects";
import { setUser } from "../../actions/actionCreatore";
import { auth } from "./authApi";

export function* fetchDataWithAuth(url, method, body = null) {
  try {
    let response = null;
    let counter = 0;

    if (body) {
      body = JSON.stringify(body);
    }
    console.log(body);

    while (counter < 3) {
      response = yield call(executeRequest, url, {
        method,
        credentials: "include",
        body,
      });

      if (response.ok) {
        break;
      }

      if (response.status === 401) {
        yield call(refreshToken);
        continue;
      }

      counter++;
    }

    return response.json();
  } catch (err) {
    console.log(err);
  }
}

function* executeRequest(url, options) {
  try {
    console.log(options);
    const token = yield select((store) => store?.user?.token);
    return yield fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

function* refreshToken() {
  try {
    const token = yield auth();
    yield put(setUser(token));
  } catch (err) {
    console.log(err);
  }
}
