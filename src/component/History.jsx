import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transction from './Transction';
function History() {
  const { transaction } = useContext(GlobalContext);
  console.log(transaction);
  
    return (
        <>
          <h3>History</h3>
      <ul id="list" class="list">
        {transaction.map(transaction =>( <Transction key= {transaction.id} transaction={transaction}/>))
        }
        
      </ul>
        </>
    );
}

export default History;