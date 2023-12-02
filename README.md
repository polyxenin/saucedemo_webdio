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
 | **Login** | allows user to log in with valid credentials                         | Verifies that user with valid credentials can login | Pass |
 |           | displays an error message for locked user                            | Verifies that locked user sees the appropriate error message | Pass |
 |           | displays an error message for user with invalid credentials          | Verifies that user with invalid credentials sees the appropriate error message | Pass |
 |           | displays an error message for user with empty username               | Verifies that user sees the appropriate error message if no username entered in the form | Pass |
 |           | displays an error message for user with empty password               | Verifies that user sees the appropriate error message if no password entered in the form| Pass |
 |           | displays an error message for user with empty username and password  | Verifies that user sees the appropriate error message if neither username nor password are entered in the form | Pass |
 | **Inventory**  | sort products by price (low to high)                            | Verifies that products are sorted successfully from low to high price  | Pass |
 |                | sort products by price (high to low)                            | Verifies that products are sorted successfully from high to low price | Pass |
 |                | sort products by name (a to z)                                  | Verifies that products are correctly sorted by name ascending for standard_user |  Pass |
 |                | sort products by name (z to a)                                  | Verifies that products are correctly sorted by name descending for standard_user | Pass |
 |                | sort products by name (z to a) for problem_user                 | Verifies that products are correctly sorted by name descending for user problem_user | Fail |
 |                | product images are displayed correctly for standard_user        | Verifies that standard_user sees the correct product images | Pass |
 |                | product images are displayed correctly for problem_user         | Verifies that problem_user sees the correct product images | Fail |
 |                | add the first product to cart                                   | Verifies that when the first product is added to cart, the product quantity is equal to 1 | Pass |         
 |                | remove the first product from cart                              | Verifies that when the first product is removed from cart, the product quantity is equal to 0 | Pass |
 |                | go to cart when clicking cart icon                              | Verifies that when cart button is clicked, the user is navigated to cart page | Pass |
 | **Burger**     | burger menu opens when the burger icon is clicked               | Verifies that when the burger button is clicked, the menu opens |  Pass |  
 |                | burger menu closes when the x icon is clicked                   | Verifies that when the close menu button is clicked, the menu closes | Pass |

Page objects are placed under _test/pageobjects_ directory.  <br />
Test data files are under _resources/data_ directory. <br />
Report results are under _results_ directory. <br />
