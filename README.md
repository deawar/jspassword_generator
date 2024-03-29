# JavaScript Password Generator 
[![GitHub issues](https://img.shields.io/github/issues/deawar/jspassword_generator?style=plastic)](https://github.com/deawar/jspassword_generator/issues) [![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/deawar/jspassword_generator?style=plastic)](https://github.com/deawar/jspassword_generator/pull/)

An application that generates a random password based on user-selected criteria. This app runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

Link to the working application: [jspassword_generator](https://deawar.github.io/jspassword_generator/)

## User Story

```
AS an employee with access to sensitive data
I want to randomly generate a password that meets certain criteria
So that I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 256 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is written to the page.
WHEN the I click the COPY TO CLIPBOARD button
THEN the password is copied to the my clipboard.
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/jspasswordgen.gif)




