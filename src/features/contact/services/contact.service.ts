import { apiClient } from '@/shared/lib';
import type { ApiResponse } from '@/shared/types';

export interface ContactResponse {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  createdAt: string;
}

export interface ContactSubmitData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

class ContactService {
  async submitContactForm(data: ContactSubmitData): Promise<ApiResponse<ContactResponse>> {
    return apiClient.post<ContactResponse>('/contact', data);
  }

  async subscribeToNewsletter(data: {
    email: string;
    name?: string;
    interests?: string[];
  }): Promise<ApiResponse<{ subscribed: boolean }>> {
    return apiClient.post<{ subscribed: boolean }>('/newsletter/subscribe', data);
  }
}

export const contactService = new ContactService();
