require('@ministryofjustice/module-alias/register')

const Ajv = require('ajv')

const {
  expect
} = require('chai')

const schemas = require('~/test/schemas')

const dataObject = require('~/test/specifications/definition/conditional/boolean/definition.conditional.boolean.json')
const jsonSchema = require('~/specifications/definition/conditional/boolean/definition.conditional.boolean.schema.json')

const ajv = new Ajv({schemas})

const validator = ajv.compile(jsonSchema)

xdescribe('~/specifications/definition/conditional/boolean/definition.conditional.boolean.schema.json', () => {
  describe('The data object', () => it('has properties', () => expect(dataObject).not.to.be.empty))

  describe('The json schema', () => it('validates the data object', () => expect(validator(dataObject)).to.be.true))
})
