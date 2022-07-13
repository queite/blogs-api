const Joi = require('joi');

const schemas = {
  login: Joi.object().keys({
    email: Joi.string().required().messages({ 'string.empty': 'Some required fields are missing' }),
    password: Joi.string().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
  }),
};
// message('Some required fields are missing')

const validateSchema = (schema, dataToValidate) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};

module.exports = {
  validateSchema,
  schemas,
};