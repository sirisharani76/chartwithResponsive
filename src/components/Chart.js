import React from 'react';
import 'animate.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
                  ResponsiveContainer, BarChart, Bar } from 'recharts';
                  var pdata = [
                                    {
                                      name: 'Python',
                                      student: 13,
                                      fees: 10
                                    },
                                    {
                                      name: 'Javascript',
                                      student: 15,
                                      fees: 12
                                    },
                                    {
                                      name: 'PHP',
                                      student: 5,
                                      fees: 10
                                    },
                                    {
                                      name: 'Java',
                                      student: 10,
                                      fees: 5
                                    },
                                    {
                                      name: 'C#',
                                      student: 9,
                                      fees: 4
                                    },
                                    {
                                      name: 'C++',
                                      student: 10,
                                      fees: 8
                                    },
                                  ];
                                
function Chart() {
                  return (
<div class="border rounded-3 p-3 shadow animate__animated animate__heartBeat">
<ResponsiveContainer width="100%" aspect={3} >
<AreaChart data={pdata} width={1000} height={300} 
   margin={{ top: 5, right:20, left: 20, bottom: 10 }} >
   { <CartesianGrid strokeDasharray="3 3" /> }
   <XAxis dataKey="name" interval={'preserveStartEnd'} />
   <YAxis />
   <Tooltip contentStyle={{ backgroundColor: 'powderblue' }} />
    {/* <Legend /> */}
   <Area type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
   <Area type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
 </AreaChart>
</ResponsiveContainer>
                  </div>
                                    
                  );
}

export default Chart;