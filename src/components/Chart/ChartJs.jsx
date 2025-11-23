import React from 'react';
import { Pie } from 'react-chartjs-2';

// 1. Importez les éléments nécessaires de Chart.js pour l'enregistrement (très important !)
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des éléments (requis par Chart.js v3+)
ChartJS.register(ArcElement, Tooltip, Legend); 

// 2. Les données et la configuration
const data = {
  labels: ['Utilisateurs', 'Commandes', 'Revenus'],
  datasets: [
    {
      label: '# de Votes',
      data: [12, 19, 3], // Les valeurs
      backgroundColor: [ // Les couleurs des segments
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderColor: [ // Les bordures des segments
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function ChartjsExample() {
  // 3. Le composant Pie est exporté par react-chartjs-2
  return <div style={{maxWidth: '400px'}}><Pie data={data} /></div>;
}

export default ChartjsExample;