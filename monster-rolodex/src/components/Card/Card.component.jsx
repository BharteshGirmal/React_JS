import React  from 'react'

// export default class Card extends Component {
//   render() {
//       const {id,  name , email, company, index}= this.props.monster;
//     return (
//       <div className="card" key={id}>
//               <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <img alt={`Monster ${name}`} src={`https://robohash.org/${id}/set=set2&size=180*180`}/>
//                 <br/>
//                 <p className="card-text">
//                   <strong> {email}</strong><br />
//                   <strong>{company.catchPhrase}</strong>
//                 </p>
//               </div>
//       </div>
//     )
//   }
// }


export default function Card (props) {
  const {id,  name , email, company }= props.monster;

  return (
    <div className="card" key={id}>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img alt={`Monster ${name}`} src={`https://robohash.org/${id}/set=set2&size=180*180`}/>
                <br/>
                <p className="card-text">
                  <strong> {email}</strong><br />
                  <strong>{company.catchPhrase}</strong>
                </p>
              </div>
      </div>
  )
}
