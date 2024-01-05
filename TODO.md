## things not tested
validation. I added validation for the coordinates in the userDto but the validate function isnt even being called anywhere to enforce these. There's also no test in place for them.

## things working on
lets add an endpoint to add an address. This endpoint should
1. take in an address and convert it to its latitude and longitude, and when successfully doing so, persist them to the database under user
2. in the case that the address is not unique it returns the different possible interpretations
3. in the case that the address is not found return an error message





its not clear to me when the validation is actually running. We can, for example, create a user object with invalid values for coordinates or email address in the users.service.spec test