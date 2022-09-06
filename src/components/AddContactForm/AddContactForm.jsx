// import {Input, Span} from './AddContactForm.styled';
import { Component } from 'react';
import css from './AddContactForm.module.css';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

class AddContactForm extends Component {
  state = {
    name: '',
    telephone: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', telephone: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div>
          <div className={css.div}>
            <input
              value={this.state.name}
              className={css.input}
              onChange={this.handleChange}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder=" "
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={css.label} htmlFor="name">
              Name
            </label>
          </div>
          <div className={css.div}>
            <input
              value={this.state.telephone}
              className={css.input}
              onChange={this.handleChange}
              type="tel"
              id="telephone"
              name="telephone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder=" "
              required
            />
            <label htmlFor="telephone" className={css.label}>
              Number
            </label>
          </div>
        </div>

        <button className={css.button} type="submit">
          <FaPlus className={css.icon} size={40} />
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddContactForm;
