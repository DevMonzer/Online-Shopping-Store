import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   "pk_test_51L7ZcaFyXPd5jDY5Ktzb6ER5M496bYz6UZ84g3vQJnb3DZ28jzBfswoZ0CujakKWUoyRk0my6TfeQrAIiloI5bUy00mD4swwe9"
// );

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY
);
