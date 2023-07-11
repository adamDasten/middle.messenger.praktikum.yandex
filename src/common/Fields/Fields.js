import Input from '../Input';
import FieldsTemplate from './Fields.hbs';
import cls from './Fields.module.scss';

export default ({ forms, name }) =>
  FieldsTemplate({
    forms,
    moduleClass: cls[`${name}-form`],
  });
