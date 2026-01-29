
// Add missing React import for React.ReactNode type definition
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
}

export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  year?: string;
  category: string;
  image: string;
}
