export type AppRoute = "login" | "demo" | "contact";

const ROUTE_PARAMS: Record<AppRoute, string> = {
  login: "",
  demo: "?demo=true",
  contact: "?booking=true",
};

export function openApp(type: AppRoute = "login") {
  const base = process.env.NEXT_PUBLIC_KUBEE_APP_URL + "/login";
  window.open(`${base}${ROUTE_PARAMS[type]}`, "_blank");
}

export function openRegister() {
  const base = process.env.NEXT_PUBLIC_KUBEE_APP_URL + "/register";
  window.open(base, "_blank");
}

