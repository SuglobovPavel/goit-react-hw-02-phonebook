import {Component} from 'react';
import { nanoid } from 'nanoid'
import PhoneBookAddContacts from 'components/PhoneBook/PhoneBookAddContacts';
import PhoneBookList from 'components/PhoneBook/PhoneBookList';
import PhoneBookFormSearch from 'components/PhoneBook/PhoneBookFormSearch';

class PhoneBook extends Component {
   state = {
      contacts: [],
      searchQuery: '',
   }

   AddNewContact = (newContact) => {
      const {name, number} = newContact;
      const contactId = nanoid();

      this.setState( (prevState) => {
         return {
            contacts: [...prevState.contacts, 
               {
                  id: contactId,
                  name,
                  number,
               }
            ]
         }
      });
   }

   deleteContact = (id) => {
      this.setState( (prevState) => {
         const {contacts} = this.state;

         const arrayAfterDelet = contacts.filter( el => el.id !== id);

         return {
            contacts: [...arrayAfterDelet]
         }
      });
   }

   onChangeInputSearch = (e) =>{
      console.log(e.currentTarget.value);
      this.setState({searchQuery: e.currentTarget.value});
   }

   render() {
      const {AddNewContact} = this;
      const {contacts, searchQuery} = this.state;

      const normalizeQuerySearch = String(searchQuery).toLowerCase(); 
      const contactsAfterSearch = contacts.filter(el=>{
         return String(el.number).toLowerCase().includes(normalizeQuerySearch) || el.name.toLowerCase().includes(normalizeQuerySearch); 
      });

      return (

         <>
            <PhoneBookAddContacts onSubmit={AddNewContact}/>
            <PhoneBookFormSearch queryString={searchQuery} onChangeInputSearch={this.onChangeInputSearch}/>
            <PhoneBookList listContacts={contactsAfterSearch} onDelete={this.deleteContact}/>
         </>
      );
   }
}

export default PhoneBook; 