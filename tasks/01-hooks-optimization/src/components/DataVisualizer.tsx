import React, { memo } from 'react';
import type { DataPoint } from '../types';

interface Props {
  data: DataPoint[];
  view: 'chart' | 'table';
}

// Студент должен оптимизировать этот компонент
export const DataVisualizer = memo(({ data, view }: Props) => {
  // TODO: Реализовать визуализацию данных
  return (
    <div>
      {view === 'table' ? (
        <div>
          {/* TODO: Реализовать табличное представление */}
        </div>
      ) : (
        <div>
          {/* TODO: Реализовать графическое представление */}
        </div>
      )}
    </div>
  );
});


//=================================

// import React, { memo } from 'react';

// export const DataVisualizer = memo(({ data, view }) => {
//   return (
//     <div>
//       {view === 'table' ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Название</th>
//               <th>Цена</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div>
//           {/* Графическое представление данных */}
//         </div>
//       )}
//     </div>
//   );
// });