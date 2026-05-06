
import { MarketingRequestDto } from "../types/support";

class CommonService {
    private static BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
    private static USER_REQUEST_BASE_URL = `${CommonService.BASE_URL}/api/v1/userrequests`;


    async createRequest(type: 'app' | 'mkt', payload: MarketingRequestDto) {
        const url = `${CommonService.USER_REQUEST_BASE_URL}/${type}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData?.message || 'Failed to send request');
        }

        return await response.json();
    }
}

export const commonService = new CommonService();