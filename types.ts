// Added missing React import to resolve namespace issues
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  name: string;
  path: string;
}