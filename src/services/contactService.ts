import { apiClient, type ApiResponse } from './apiClient';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  organization?: string;
  interest?: string;
}

export interface ContactResponse {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  interests?: string[];
}

class ContactService {
  async submitContactForm(formData: ContactFormData): Promise<ApiResponse<ContactResponse>> {
    return apiClient.post<ContactResponse>('/contact', formData);
  }

  async subscribeToNewsletter(subscription: NewsletterSubscription): Promise<ApiResponse<{ subscribed: boolean }>> {
    return apiClient.post<{ subscribed: boolean }>('/newsletter/subscribe', subscription);
  }

  async unsubscribeFromNewsletter(email: string): Promise<ApiResponse<{ unsubscribed: boolean }>> {
    return apiClient.post<{ unsubscribed: boolean }>('/newsletter/unsubscribe', { email });
  }

  async getContactMessages(page: number = 1, limit: number = 10) {
    return apiClient.getPaginated<ContactResponse[]>('/admin/contact', page, limit);
  }

  async updateMessageStatus(messageId: string, status: 'read' | 'replied'): Promise<ApiResponse<ContactResponse>> {
    return apiClient.patch<ContactResponse>(`/admin/contact/${messageId}`, { status });
  }

  async deleteContactMessage(messageId: string): Promise<ApiResponse<{ deleted: boolean }>> {
    return apiClient.delete<{ deleted: boolean }>(`/admin/contact/${messageId}`);
  }

  async sendVolunteerInterest(formData: {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    availability: string;
    message?: string;
  }): Promise<ApiResponse<{ received: boolean }>> {
    return apiClient.post<{ received: boolean }>('/volunteer/interest', formData);
  }

  async sendCollaborationRequest(formData: {
    name: string;
    email: string;
    organization: string;
    type: 'academic' | 'corporate' | 'ngo' | 'other';
    message: string;
  }): Promise<ApiResponse<{ received: boolean }>> {
    return apiClient.post<{ received: boolean }>('/collaboration/request', formData);
  }
}

export const contactService = new ContactService();
export default contactService;
