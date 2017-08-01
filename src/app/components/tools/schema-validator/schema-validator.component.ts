import { Component } from '@angular/core';
const Ajv = require('ajv');
const ajv = new Ajv({ format: 'full', allErrors: true, verbose: true });

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
ajv.addSchema(require('../../../schemas/2.0.0.json'), '2.0.0');

@Component({
  selector: 'schema-validator',
  template: require('./schema-validator.template.html'),
  styles: [require('./schema-validator.style.scss')],
})

export class SchemaValidatorComponent {
  private codeJson: string = '';
  private errors: Array<Object> = null;

  setCodeJson(value) {
    this.codeJson = value;

    try {
      ajv.validate('2.0.0', JSON.parse(value));

      this.errors = ajv.errors;
    } catch(e) {
      this.errors = [{
        keyword: '',
        message: 'Code.json is invalid JSON.'
      }];
    }
  }

  hasInput() {
    return this.codeJson.length > 0;
  }

  isValid() {
    return this.errors === null;
  }
}
