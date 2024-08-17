import React  from 'react';
import '../../Styles/CardList.css';
import Card from '../Card/Card.component';

// export default class CardList extends Component {
//   render() {
//     const { monsterarray } = this.props;

//     return (
//       <div className="card-list">
//         {monsterarray.map((monster) => {
//           return (
//             <Card monster={monster} key={monster.id}/>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default function cardList(props) {
  const { monsterarray } = props;
  return (
    <div className="card-list">
        {monsterarray.map((monster) => {  
          return (
            <Card monster={monster} key={monster.id}/>
          );
        })}
      </div>
  )
}

