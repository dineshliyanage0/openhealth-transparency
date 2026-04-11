// Shared Types exported here
export type Device = {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'offline';
  hospitalId: string;
  updatedAt: string;
};
