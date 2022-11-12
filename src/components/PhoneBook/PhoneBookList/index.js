import './style.css';

function PhoneBookList (props){
   const {listContacts, onDelete} = props;
  

   return (
      <ul className="phoneBookListContactsWrapper">
         {listContacts.map(el => {
            return (
               <li key={el.id} className="phoneBookListContactsItem">
                  <div className='phoneBookListContactsItemWrapper'>
                     <div className="phoneBookListContactsName">{el.name}</div>
                     <div className="phoneBookListContactsPhone">{el.number}</div>
                  </div>
                  <div className='phoneBookListContactsItemNav'>
                     <button className='phoneBookListContactsItemNavDelete' onClick={()=>{
                        onDelete(el.id);
                     }}>Удалить</button>
                  </div>
               </li>
            )
         })}
      </ul>
   );
}

export default PhoneBookList;