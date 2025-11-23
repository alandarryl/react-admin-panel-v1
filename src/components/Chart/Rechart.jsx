import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// 1. Les données du graphique
const data = [
  { name: 'Jan', ventes: 4000, depenses: 2400 },
  { name: 'Fév', ventes: 3000, depenses: 1398 },
  { name: 'Mar', ventes: 2000, depenses: 9800 },
  { name: 'Avr', ventes: 2780, depenses: 3908 },
];

function RechartsExample() {
  return (
    // ResponsiveContainer assure que le graphique s'adapte à la taille du parent
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* Lignes de référence horizontales/verticales */}
        <CartesianGrid strokeDasharray="3 3" /> 
        
        {/* Axe horizontal (utilise la clé 'name' de nos données) */}
        <XAxis dataKey="name" /> 
        
        {/* Axe vertical */}
        <YAxis /> 
        
        {/* Affichage des valeurs au survol */}
        <Tooltip /> 
        
        {/* Légende du graphique */}
        <Legend /> 
        
        {/* La première série de barres */}
        <Bar dataKey="ventes" fill="#8884d8" />
        
        {/* La deuxième série de barres */}
        <Bar dataKey="depenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RechartsExample;