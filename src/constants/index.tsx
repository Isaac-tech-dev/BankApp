export interface Transaction {
    id: string;
    name: string;
    bank: string;
    time: string;
    amount: string;
  }
  
  export const transactionData: Transaction[] = [
    {
      id: '1',
      name: 'John Ogaga',
      bank: 'Zenith Bank',
      time: '12:03 AM',
      amount: '+N20,983',
    },
    {
      id: '2',
      name: 'Habib Yogurt',
      bank: 'GTBank',
      time: '12:03 AM',
      amount: '-N20,983',
    },
    {
      id: '3',
      name: 'Habib Milk',
      bank: 'First Bank',
      time: '12:03 AM',
      amount: '-N20,983',
    },
  ];
  