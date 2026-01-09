import { Gig, Goal, Transaction } from './types';

export const INITIAL_USER_STATE = {
  balance: 145.50,
  savings: 1200.00,
  streakDays: 14,
  unlockedFeatures: ['DASHBOARD', 'SPENDING', 'GOALS'],
  name: 'Alex'
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', merchant: 'Whole Foods Market', amount: 12.50, date: 'Today', category: 'Food', isSustainable: true, isRegret: false },
  { id: '2', merchant: 'Steam Games', amount: 45.00, date: 'Yesterday', category: 'Entertainment', isSustainable: false, isRegret: true },
  { id: '3', merchant: 'Local Thrift Shop', amount: 22.00, date: 'Yesterday', category: 'Clothing', isSustainable: true, isRegret: false },
  { id: '4', merchant: 'Fast Fashion Co.', amount: 15.99, date: '2 days ago', category: 'Clothing', isSustainable: false, isRegret: false },
  { id: '5', merchant: 'City Bus', amount: 2.50, date: '3 days ago', category: 'Transport', isSustainable: true, isRegret: false },
];

export const MOCK_GIGS: Gig[] = [
  { id: '1', title: 'Wash the Car', bounty: 15.00, isCompleted: false, dueDate: 'Today' },
  { id: '2', title: 'Walk the Dog', bounty: 5.00, isCompleted: true, dueDate: 'Daily' },
  { id: '3', title: 'Clean Garage', bounty: 25.00, isCompleted: false, dueDate: 'Sunday' },
  { id: '4', title: 'Empty Dishwasher', bounty: 3.00, isCompleted: false, dueDate: 'Today' },
];

export const MOCK_GOALS: Goal[] = [
  { id: '1', title: 'New Phone', currentAmount: 600, targetAmount: 1000, image: 'https://picsum.photos/200/200?random=1', isInvested: true },
  { id: '2', title: 'Concert Tickets', currentAmount: 120, targetAmount: 300, image: 'https://picsum.photos/200/200?random=2', isInvested: false },
  { id: '3', title: 'College Fund', currentAmount: 2500, targetAmount: 50000, image: 'https://picsum.photos/200/200?random=3', isInvested: true },
];

export const COLORS = {
  oliveDark: '#556B2F',
  oliveDrab: '#6B8E23',
  gold: '#DAA520',
  slate: '#2F4F4F',
  beige: '#F5F5DC',
  ivory: '#FFFFF0',
};
