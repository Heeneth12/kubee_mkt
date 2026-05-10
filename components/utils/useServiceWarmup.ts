import { useEffect } from "react";

const HEALTH_ENDPOINTS = [
  process.env.NEXT_PUBLIC_AUTH_API,
  process.env.NEXT_PUBLIC_INVENTORY_API,
]
  .filter(Boolean)
  .map((url) => `${url}/actuator/health`);

export function useServiceWarmup() {
  useEffect(() => {
    HEALTH_ENDPOINTS.forEach((url) => {
      fetch(url).catch(console.error);
    });
  }, []);
}
