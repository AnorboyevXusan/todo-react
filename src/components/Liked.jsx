/* eslint-disable react/prop-types */


export default function Liked({basket}) {
  return (
      <div>
          <h2>liked todos</h2>
          {basket.map((item) => {
              const { id, title } = item;
              return (
                  <div key={id}>
                      <h2>{ title}</h2>
                  </div>
              )
          })}
    </div>
  )
}
