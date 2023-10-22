require("dotenv").config();
const fetch = require("node-fetch");

class Util {
  driver;

  static handleLogin(json) {
    this.driver.executeScript(function () {
      localStorage.setItem(); // todo set login
    });
  }

  static login(driver) {
    this.driver = driver;
    (async () => {
      try {
        const response = await fetch("rest_api_login_endpoint");
        const json = await response.json();
        console.log(json);

        handleLogin(json);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }
}

module.exports = { Util };
