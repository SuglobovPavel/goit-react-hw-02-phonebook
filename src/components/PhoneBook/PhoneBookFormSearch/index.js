import {Component} from 'react';
import './style.css';

class PhoneBookFormSearch extends Component {
   

   render(){
      return (
         <div className='PhoneBookFormSearchWrapper'>
            <div className='PhoneBookFormSearchWrapperTitle'>Поиск по имени/номеру телефона</div>
            <form className='PhoneBookFormSearch'>
               <input value={this.props.queryString} onChange={this.props.onChangeInputSearch}/>
            </form>
         </div>
      )
   }
}

export default PhoneBookFormSearch;