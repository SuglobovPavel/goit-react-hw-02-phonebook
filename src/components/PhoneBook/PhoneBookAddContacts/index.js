import { Component } from "react";
import './style.css';

const startState = {
   name: '',
   number: ''
}

class PhoneBookAddContacts extends Component {
   state = {
      ...startState,
   }

   onChangeInput = (e) => {
      const {name, value} = e.currentTarget;

      this.setState({
         [name]: value
      })
   }

   onSubmitForm = (e)=>{
      e.preventDefault();

      this.props.onSubmit(this.state);
      this.onClearForm();
   }

   onClearForm = () => {
      this.setState( prevState => ({...prevState, ...startState}) );
   }

   render(){
      const {onChangeInput, onSubmitForm} = this;
      const {name, number} = this.state;

      return (
         <div className="phoneBookAddWrapper">
            <div className="phoneBookAdd">
               <div className="phoneBookAddTitle">Добавьте контакт в Вашу книгу</div>
               <form onSubmit={onSubmitForm}>
                  <label>
                     <span>Имя контакта</span>
                     <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={onChangeInput}
                        value={name}
                     />
                  </label>
                  <label>
                     <span>Телефон контакта</span>
                     <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={onChangeInput}
                        value={number}
                        />
                  </label>
                  <button>Сохранить</button>
               </form>
            </div>
         </div>
      );
   }
}

export default PhoneBookAddContacts;