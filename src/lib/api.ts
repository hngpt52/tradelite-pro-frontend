// This file configures the connection to the backend API
// Update the NEXT_PUBLIC_API_URL in .env.local with your Render backend URL

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const fetchFromAPI = async (endpoint: string, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An error occurred while connecting to the server',
    }));
    throw new Error(error.message || 'An error occurred');
  }

  return response.json();
};

export const simulationAPI = {
  createSimulation: async (data: any) => {
    return fetchFromAPI('/api/simulations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  getSimulations: async () => {
    return fetchFromAPI('/api/simulations');
  },
  
  getSimulationById: async (id: string) => {
    return fetchFromAPI(`/api/simulations/${id}`);
  },
};

export const aiAPI = {
  getEducationalFeedback: async (data: any) => {
    return fetchFromAPI('/api/ai/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  analyzeSentiment: async (text: string) => {
    return fetchFromAPI('/api/ai/sentiment', {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
  },
  
  detectAnomalies: async (data: any) => {
    return fetchFromAPI('/api/ai/anomalies', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

export const authAPI = {
  login: async (email: string, password: string) => {
    return fetchFromAPI('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  register: async (email: string, password: string, name: string) => {
    return fetchFromAPI('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  },
  
  resetPassword: async (email: string) => {
    return fetchFromAPI('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};
