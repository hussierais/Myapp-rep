import React from 'react';
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import '@ionic/react/css/core.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'purple' }}>
          <IonTitle style={{ color: 'black', textAlign: 'center' }}>
            Welcome to the Bootcamp Hussaina Abdullahi Ra'is
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
        style={{ 
          '--background': 'purple', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', // Full height for vertical centering
          textAlign: 'center', 
          color: 'black' // Ensures text color is black
        }}
      >
        <h1 style={{ color: 'black' }}>Day 1 Assignment</h1>
      </IonContent>
    </IonApp>
  );
};

export default App;
