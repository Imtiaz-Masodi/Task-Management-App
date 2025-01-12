const ApiResponse = require("../pojo/ApiResponse");
const userSchema = require("../schemas/userSchema");

function validateUserSchema(req, res, next) {
  const { name, email, password } = req.body;
  const validationResult = userSchema.validate({ name, email, password });
  if (validationResult.error) {
    res.send(new ApiResponse(false, validationResult.error.details[0].message));
    return;
  }

  next();
}

function validateUserSchemaForSignIn(req, res, next) {
  const { email, password } = req.body;
  const userSchemaForSignin = userSchema.fork("name", (field) => field.optional());
  const validationResult = userSchemaForSignin.validate({ email, password });
  if (validationResult.error) {
    res.send(new ApiResponse(false, validationResult.error.details[0].message));
    return;
  }

  next();
}

module.exports = {
  validateUserSchema,
  validateUserSchemaForSignIn,
};