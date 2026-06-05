class Ajax {
  async get(url, callback) {
    try {
      const response = await fetch(url);
      await this._handleResponse(response, callback);
    } catch (error) {
      console.error("Ошибка запроса:", error);
      callback(null, 0);
    }
  }

  async post(url, data, callback) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await this._handleResponse(response, callback);
    } catch (error) {
      console.error("Ошибка запроса:", error);
      callback(null, 0);
    }
  }

  async patch(url, data, callback) {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await this._handleResponse(response, callback);
    } catch (error) {
      console.error("Ошибка запроса:", error);
      callback(null, 0);
    }
  }

  async delete(url, callback) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      await this._handleResponse(response, callback);
    } catch (error) {
      console.error("Ошибка запроса:", error);
      callback(null, 0);
    }
  }

  async _handleResponse(response, callback) {
    try {
      const contentType = response.headers.get("content-type");
      let data = null;

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else if (response.status !== 204) {
        data = await response.text();
      }

      callback(data, response.status);
    } catch (e) {
      console.error("Ошибка парсинга ответа:", e);
      callback(null, response.status);
    }
  }
}

export const ajax = new Ajax();
