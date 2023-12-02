# Test automation suite for e-commerce Website using WebdriverIO
This repository contains a set of automated tests to validate the functionality of an e-commerce website using WebdriverIO framework. WebdriverIO is configured to use local runner with Mocha framework.
The Timeline Reporter is utilized to generate test reports.
To follow automation testing best practices the Page Object Model is used.
The website under test can be found at https://www.saucedemo.com/.

## Setup
- Ensure you have installed NodeJS v20.10.0: 
  ```sh
  node -v
  ```
- Clone repository: 
   ```sh
  git clone https://github.com/polyxenin/saucedemo_webdio.git
  ```
- Configure dependencies: 
  ```sh
  cd saucedemo_webdio  
  npm install
  ```
- Run tests:
  ```sh
  ./node_modules/.bin/wdio run wdio.conf.js
  ```


 ## Structure
 This repository under_ test/specs folder_ contains the following WebdriverIO tests:
 | Module   | Test name                          | Description | Result|
 | ---      | ---                                | --- | ---|
 | **Login** | allows user to log in with valid credentials                         | vvv | Pass |
 |           | displays an error message for locked user                            | vvv | Pass |
 |           | displays an error message for user with invalid credentials          | vvv | Pass |
 |           | displays an error message for user with empty username               | vvv | Pass |
 |           | displays an error message for user with empty password               | vvv | Pass |
 |           | displays an error message for user with empty username and password  | vvv | Pass |
 | **Inventory**  | sort products by price (low to high)                            | vvv | Pass |
 |                | sort products by price (high to low)                            | vvv | Pass |
 |                | sort products by name (a to z)                                  | vvv | Pass |
 |                | sort products by name (z to a)                                  | vvv | Pass |
 |                | sort products by name (z to a) for problem_user                 | vvv | Fail |
 |                |product images are displayed correctly for standard_user         | vvv | Pass |
 |                | product images are displayed correctly for problem_user         | vvv | Fail |
 |                | add the first product to cart                                   | vvv | Pass |         
 |                | remove the first product from cart                              | vvv | Pass |
 |                | go to cart when clicking cart icon                              | vvv | Pass |
 | **Burger**     | burger menu opens when the burger icon is clicked               | vvv | Pass |   
 |                | burger menu closes when the x icon is clicked                   | vvv | Pass |

Page objects are placed under _test/pageobjects_ directory.  <br />
Test data files are under _resources/data_ directory. <br />
Report results are under _results_ directory. <br />
  
