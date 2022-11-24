import { useState } from 'react'
import jsonData from '../data/data.json'
import uuid from 'react-uuid'

export const Card = () => {
  const [data] = useState(jsonData)
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  const intervalTime = 3

  const calcHours = (initialHour: number, intervalHour: number) => {
    const arrHours = [initialHour]

    for (let index = 0; index < 4; index++) {
      arrHours.push(initialHour += intervalHour)
      console.log('arrHours', arrHours);
    }

    return arrHours
  }

  const arrHour = calcHours(hours, intervalTime)

  console.log(arrHour)

  // switch (hours) {
  //   case 21:
  //     setHour(00)
  //     break;
  //   case 22:
  //     setHour(01)
  //     break;
  //   case 23:
  //     setHour(02)
  //     break;

  //   default:
  //     hours;
  // }

  return (
    <>
      {
        data.map(item => (
          <div key={uuid()} className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>

              <ul>
                {item.content.map(content => (
                  <li key={uuid()}>- {content}</li>
                ))}
              </ul>

              <div className="stat p-0 bg-base-100 flex justify-end">
                <div className="stat-value text-primary">
                  {arrHour[item.id]}:{minutes}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}