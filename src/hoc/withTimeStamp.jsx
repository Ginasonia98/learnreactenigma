import React from 'react';

// HOC untuk menambahkan timestamp
export const withTimeStamp = (InnerComponent) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render() {
      // Menambahkan waktu saat ini ke props komponen yang dibungkus
      const timestamp = new Date().toLocaleString();
      return <InnerComponent {...this.props} timestamp={timestamp} />;
    }
  };
};

//withTimeStamp adalah HOC yang membungkus komponen yang diberikan (disebut 
// InnerComponent).
// Di dalam render, HOC ini menambahkan timestamp (waktu saat komponen dimuat) 
// ke dalam props komponen yang dibungkus.
// Ketika komponen yang dibungkus dirender, ia akan menerima props tambahan timestamp.